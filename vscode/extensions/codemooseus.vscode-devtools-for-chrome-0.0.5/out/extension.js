"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const vscode = __importStar(require("vscode"));
const ws_1 = __importDefault(require("ws"));
const telemetry_1 = __importDefault(require("./telemetry"));
const utils = __importStar(require("./utils"));
const debuggerType = 'devtools-for-chrome';
const defaultUrl = 'about:blank';
let telemetryReporter;
function activate(context) {
    const packageInfo = getPackageInfo(context);
    if (packageInfo && vscode.env.machineId !== 'someValue.machineId') {
        // Use the real telemetry reporter
        telemetryReporter = new telemetry_1.default(packageInfo.name, packageInfo.version, packageInfo.aiKey);
    }
    else {
        // Fallback to a fake telemetry reporter
        telemetryReporter = new DebugTelemetryReporter();
    }
    context.subscriptions.push(telemetryReporter);
    context.subscriptions.push(vscode.commands.registerCommand('devtools-for-chrome.launch', () => __awaiter(this, void 0, void 0, function* () {
        launch(context);
    })));
    context.subscriptions.push(vscode.commands.registerCommand('devtools-for-chrome.attach', () => __awaiter(this, void 0, void 0, function* () {
        attach(context, /* viaConfig= */ false, defaultUrl);
    })));
    vscode.debug.registerDebugConfigurationProvider(debuggerType, {
        provideDebugConfigurations(folder, token) {
            return [{
                    type: debuggerType,
                    name: 'Launch Chrome against localhost',
                    request: 'launch',
                    url: 'http://localhost:8080',
                }];
        },
        resolveDebugConfiguration(folder, config, token) {
            if (config && config.type === debuggerType) {
                const targetUri = utils.getUrlFromConfig(folder, config);
                if (config.request && config.request.localeCompare('attach', 'en', { sensitivity: 'base' }) === 0) {
                    attach(context, /* viaConfig= */ true, targetUri);
                    telemetryReporter.sendTelemetryEvent('launch/command/attach');
                }
                else if (config.request && config.request.localeCompare('launch', 'en', { sensitivity: 'base' }) === 0) {
                    launch(context, targetUri, config.chromePath);
                    telemetryReporter.sendTelemetryEvent('launch/command/launch');
                }
            }
            else {
                vscode.window.showErrorMessage('No supported launch config was found.');
                telemetryReporter.sendTelemetryEvent('launch/error/config_not_found');
            }
            return;
        }
    });
}
exports.activate = activate;
function launch(context, launchUrl, chromePathFromLaunchConfig) {
    return __awaiter(this, void 0, void 0, function* () {
        const viaConfig = !!(launchUrl || chromePathFromLaunchConfig);
        const telemetryProps = { viaConfig: `${viaConfig}` };
        telemetryReporter.sendTelemetryEvent('launch', telemetryProps);
        const { hostname, port } = getSettings();
        const portFree = yield utils.isPortFree(hostname, port);
        if (portFree) {
            const settings = vscode.workspace.getConfiguration('vscode-devtools-for-chrome');
            const pathToChrome = settings.get('chromePath') || chromePathFromLaunchConfig || utils.getPathToChrome();
            if (!pathToChrome || !utils.existsSync(pathToChrome)) {
                vscode.window.showErrorMessage('Chrome was not found. Chrome must be installed for this extension to function. If you have Chrome installed at a custom location you can specify it in the \'chromePath\' setting.');
                telemetryReporter.sendTelemetryEvent('launch/error/chrome_not_found', telemetryProps);
                return;
            }
            utils.launchLocalChrome(pathToChrome, port, defaultUrl);
        }
        const target = JSON.parse(yield utils.getURL(`http://${hostname}:${port}/json/new?${launchUrl}`));
        if (!target || !target.webSocketDebuggerUrl || target.webSocketDebuggerUrl === '') {
            vscode.window.showErrorMessage(`Could not find the launched Chrome tab: (${launchUrl}).`);
            telemetryReporter.sendTelemetryEvent('launch/error/tab_not_found', telemetryProps);
            attach(context, viaConfig, defaultUrl);
        }
        else {
            DevToolsPanel.createOrShow(context, target.webSocketDebuggerUrl);
        }
    });
}
function attach(context, viaConfig, targetUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        const telemetryProps = { viaConfig: `${viaConfig}` };
        telemetryReporter.sendTelemetryEvent('attach', telemetryProps);
        const { hostname, port } = getSettings();
        const responseArray = yield getListOfTargets(hostname, port);
        if (Array.isArray(responseArray)) {
            telemetryReporter.sendTelemetryEvent('attach/list', telemetryProps, { targetCount: responseArray.length });
            const items = [];
            responseArray.forEach(i => {
                i = utils.fixRemoteUrl(hostname, port, i);
                items.push({
                    label: i.title,
                    description: i.url,
                    detail: i.webSocketDebuggerUrl
                });
            });
            let targetWebsocketUrl = '';
            if (typeof targetUrl === 'string' && targetUrl.length > 0 && targetUrl !== defaultUrl) {
                const matches = items.filter(i => targetUrl.localeCompare(i.description, 'en', { sensitivity: 'base' }) === 0);
                if (matches && matches.length > 0) {
                    targetWebsocketUrl = matches[0].detail;
                }
                else {
                    vscode.window.showErrorMessage(`Couldn't attach to ${targetUrl}.`);
                }
            }
            if (targetWebsocketUrl && targetWebsocketUrl.length > 0) {
                DevToolsPanel.createOrShow(context, targetWebsocketUrl);
            }
            else {
                vscode.window.showQuickPick(items).then((selection) => {
                    if (selection) {
                        DevToolsPanel.createOrShow(context, selection.detail);
                    }
                });
            }
        }
        else {
            telemetryReporter.sendTelemetryEvent('attach/error/no_json_array', telemetryProps);
        }
    });
}
function getSettings() {
    const settings = vscode.workspace.getConfiguration('vscode-devtools-for-chrome');
    const hostname = settings.get('hostname') || 'localhost';
    const port = settings.get('port') || 9222;
    return { hostname, port };
}
function getPackageInfo(context) {
    const extensionPackage = require(context.asAbsolutePath('./package.json'));
    if (extensionPackage) {
        return {
            name: extensionPackage.name,
            version: extensionPackage.version,
            aiKey: extensionPackage.aiKey
        };
    }
    return undefined;
}
function getListOfTargets(hostname, port) {
    return __awaiter(this, void 0, void 0, function* () {
        const checkDiscoveryEndpoint = (url) => {
            return utils.getURL(url, { headers: { Host: 'localhost' } });
        };
        const jsonResponse = yield checkDiscoveryEndpoint(`http://${hostname}:${port}/json/list`)
            .catch(() => checkDiscoveryEndpoint(`http://${hostname}:${port}/json`));
        let result;
        try {
            result = JSON.parse(jsonResponse);
        }
        catch (ex) {
            result = undefined;
        }
        return result;
    });
}
class DevToolsPanel {
    constructor(panel, context, targetUrl) {
        this._socket = undefined;
        this._isConnected = false;
        this._messages = [];
        this._disposables = [];
        this._panel = panel;
        this._context = context;
        this._extensionPath = context.extensionPath;
        this._targetUrl = targetUrl;
        this._update();
        // Handle closing
        this._panel.onDidDispose(() => {
            this.dispose();
        }, undefined, this._disposables);
        // Handle view change
        this._panel.onDidChangeViewState(e => {
            if (this._panel.visible) {
                this._update();
            }
        }, undefined, this._disposables);
        // Handle messages from the webview
        this._panel.webview.onDidReceiveMessage(message => {
            this._onMessageFromWebview(message);
        }, undefined, this._disposables);
    }
    static createOrShow(context, targetUrl) {
        const column = vscode.ViewColumn.Beside;
        if (DevToolsPanel.currentPanel) {
            DevToolsPanel.currentPanel._panel.reveal(column);
        }
        else {
            const panel = vscode.window.createWebviewPanel('devtools-for-chrome', 'DevTools', column, {
                enableScripts: true,
                enableCommandUris: true,
                retainContextWhenHidden: true
            });
            DevToolsPanel.currentPanel = new DevToolsPanel(panel, context, targetUrl);
        }
    }
    static revive(panel, context, targetUrl) {
        DevToolsPanel.currentPanel = new DevToolsPanel(panel, context, targetUrl);
    }
    dispose() {
        DevToolsPanel.currentPanel = undefined;
        this._panel.dispose();
        this._disposeSocket();
        while (this._disposables.length) {
            const x = this._disposables.pop();
            if (x) {
                x.dispose();
            }
        }
    }
    _disposeSocket() {
        if (this._socket) {
            // Reset the socket since the devtools have been reloaded
            telemetryReporter.sendTelemetryEvent('websocket/dispose');
            this._socket.onopen = undefined;
            this._socket.onmessage = undefined;
            this._socket.onerror = undefined;
            this._socket.onclose = undefined;
            this._socket.close();
            this._socket = undefined;
        }
    }
    _onMessageFromWebview(message) {
        if (message === 'ready') {
            if (this._socket) {
                telemetryReporter.sendTelemetryEvent('websocket/reconnect');
            }
            this._disposeSocket();
        }
        else if (message.substr(0, 10) === 'telemetry:') {
            return this._sendTelemetryMessage(message.substr(10));
        }
        else if (message.substr(0, 9) === 'getState:') {
            return this._getDevtoolsState();
        }
        else if (message.substr(0, 9) === 'setState:') {
            return this._setDevtoolsState(message.substr(9));
        }
        else if (message.substr(0, 7) === 'getUrl:') {
            return this._getDevtoolsUrl(message.substr(7));
        }
        if (!this._socket) {
            // First message, so connect a real websocket to the target
            this._connectToTarget();
        }
        else if (!this._isConnected) {
            // DevTools are sending a message before the real websocket has finished opening so cache it
            this._messages.push(message);
        }
        else {
            // Websocket ready so send the message directly
            this._socket.send(message);
        }
    }
    _connectToTarget() {
        const url = this._targetUrl;
        // Create the websocket
        this._socket = new ws_1.default(url);
        this._socket.onopen = this._onOpen.bind(this);
        this._socket.onmessage = this._onMessage.bind(this);
        this._socket.onerror = this._onError.bind(this);
        this._socket.onclose = this._onClose.bind(this);
    }
    _onOpen() {
        this._isConnected = true;
        // Tell the devtools that the real websocket was opened
        telemetryReporter.sendTelemetryEvent('websocket/open');
        this._panel.webview.postMessage('open');
        if (this._socket) {
            // Forward any cached messages onto the real websocket
            for (const message of this._messages) {
                this._socket.send(message);
            }
            this._messages = [];
        }
    }
    _onMessage(message) {
        if (this._isConnected) {
            // Forward the message onto the devtools
            this._panel.webview.postMessage(message.data);
        }
    }
    _onError() {
        if (this._isConnected) {
            // Tell the devtools that there was a connection error
            telemetryReporter.sendTelemetryEvent('websocket/error');
            this._panel.webview.postMessage('error');
        }
    }
    _onClose() {
        if (this._isConnected) {
            // Tell the devtools that the real websocket was closed
            telemetryReporter.sendTelemetryEvent('websocket/close');
            this._panel.webview.postMessage('close');
        }
        this._isConnected = false;
    }
    _sendTelemetryMessage(message) {
        const telemetry = JSON.parse(message);
        telemetryReporter.sendTelemetryEvent(telemetry.name, telemetry.properties, telemetry.metrics);
    }
    _getDevtoolsState() {
        const allPrefsKey = 'devtools-preferences';
        const allPrefs = this._context.workspaceState.get(allPrefsKey) ||
            {
                uiTheme: '"dark"',
                screencastEnabled: false
            };
        this._panel.webview.postMessage(`preferences:${JSON.stringify(allPrefs)}`);
    }
    _setDevtoolsState(message) {
        // Parse the preference from the message and store it
        const pref = JSON.parse(message);
        const allPrefsKey = 'devtools-preferences';
        const allPrefs = this._context.workspaceState.get(allPrefsKey) || {};
        allPrefs[pref.name] = pref.value;
        this._context.workspaceState.update(allPrefsKey, allPrefs);
    }
    _getDevtoolsUrl(message) {
        return __awaiter(this, void 0, void 0, function* () {
            // Parse the request from the message and store it
            const request = JSON.parse(message);
            let content = '';
            try {
                content = yield utils.getURL(request.url);
            }
            catch (ex) {
                content = '';
            }
            this._panel.webview.postMessage(`setUrl:${JSON.stringify({ id: request.id, content })}`);
        });
    }
    _update() {
        this._panel.webview.html = this._getHtmlForWebview();
    }
    _getHtmlForWebview() {
        const htmlPath = vscode.Uri.file(path.join(this._extensionPath, 'out', 'host', 'devtools.html'));
        const htmlUri = htmlPath.with({ scheme: 'vscode-resource' });
        const scriptPath = vscode.Uri.file(path.join(this._extensionPath, 'out', 'host', 'messaging.js'));
        const scriptUri = scriptPath.with({ scheme: 'vscode-resource' });
        return `
            <!doctype html>
            <html>
            <head>
                <meta http-equiv="content-type" content="text/html; charset=utf-8">
                <style>
                    html, body, iframe {
                        height: 100%;
                        width: 100%;
                        position: absolute;
                        padding: 0;
                        margin: 0;
                        overflow: hidden;
                    }
                </style>
                <script src="${scriptUri}"></script>
            </head>
            <iframe id="host" style="width: 100%; height: 100%" frameBorder="0" src="${htmlUri}"></iframe>
            </html>
            `;
    }
}
class DebugTelemetryReporter extends telemetry_1.default {
    constructor() {
        super('extensionId', 'extensionVersion', 'key');
    }
    sendTelemetryEvent(name, properties, measurements) {
        console.log(`${name}: ${JSON.stringify(properties)}, ${JSON.stringify(properties)}`);
    }
    dispose() {
        return Promise.resolve();
    }
}
//# sourceMappingURL=extension.js.map