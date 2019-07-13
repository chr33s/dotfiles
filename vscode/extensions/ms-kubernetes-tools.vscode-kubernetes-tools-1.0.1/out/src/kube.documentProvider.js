"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const querystring = require("querystring");
/// a kubernetes content provider provides json content for kubernetes resources
class KubernetesDocumentProvider {
    constructor(kubectl) {
        this.kubectl = kubectl;
    }
    provideTextDocumentContent(uri, token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (uri.authority !== 'loadkubernetescore') {
                vscode.window.showErrorMessage('Unrecognized operation: ' + uri.authority);
                return `Unrecognized operation: ${uri.authority}`;
            }
            const value = querystring.parse(uri.query).value;
            if (!value) {
                vscode.window.showErrorMessage(`Missing required value in uri: ${uri}`);
                return `Missing required value in uri: ${uri}`;
            }
            const shellResult = yield this.kubectl.invokeAsyncWithProgress(" -o json get " + value, `Loading ${value}...`);
            if (shellResult.code !== 0) {
                vscode.window.showErrorMessage('Get command failed: ' + shellResult.stderr);
                return shellResult.stderr;
            }
            else {
                return shellResult.stdout;
            }
        });
    }
}
exports.KubernetesDocumentProvider = KubernetesDocumentProvider;
//# sourceMappingURL=kube.documentProvider.js.map