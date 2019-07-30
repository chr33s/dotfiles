/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([10,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function int(v) {
  return exports.notEmpty(v) ? parseInt(v, 10) : null;
}

exports.int = int;

function bool(v) {
  if (typeof v === 'undefined') return false;
  v = v.toString().toLowerCase();
  return v === '1' || v === 'true' || v === 'yes' || v === 'y';
}

exports.bool = bool;

exports.notEmpty = function (value) {
  return value && value.toString().trim().length > 0;
};

exports.notEmpty.errorMessage = '{0} can\'t be empty';

exports.gtz = function (value) {
  value = int(value);
  return value > 0;
};

exports.gtz.errorMessage = '{0} should be greater than zero';

function inRange(max, min) {
  return value => {
    value = int(value);
    return value >= min && value <= max;
  };
}

exports.inRange = inRange;

exports.clipboardInsert = (value, format = 'text/plain') => {
  const listener = function (e) {
    e.clipboardData.setData(format, value);
    e.preventDefault();
  };

  document.addEventListener('copy', listener);
  document.execCommand('copy');
  document.removeEventListener('copy', listener);
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
let vscode;

function getVscode() {
  vscode = vscode || acquireVsCodeApi();
  return vscode;
}

exports.default = getVscode;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importDefault(__webpack_require__(1));

exports.default = props => react_1.default.createElement("div", {
  className: props.active ? 'loading' : ''
}, react_1.default.createElement("div", {
  className: "fullscreen-container backdrop"
}, react_1.default.createElement("div", {
  className: "spinner"
})));

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importDefault(__webpack_require__(1));

const react_dom_1 = __webpack_require__(7);

const Screen_1 = __importDefault(__webpack_require__(16));

react_dom_1.render(react_1.default.createElement(Screen_1.default, null), document.getElementById('root'));

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importDefault(__webpack_require__(1));

const get_connection_stuff_1 = __webpack_require__(17);

const utils_1 = __webpack_require__(3);

const Loading_1 = __importDefault(__webpack_require__(5));

const Syntax_1 = __importDefault(__webpack_require__(18));

const vscode_1 = __importDefault(__webpack_require__(4));

__webpack_require__(19);

const constants_1 = __webpack_require__(22);

const interface_1 = __webpack_require__(23);

const FileInput_1 = __webpack_require__(28);

const relativeToWorkspace = (file, workspaces = []) => {
  if (!file) return file;
  const workspaceFolder = workspaces.find(w => file.startsWith(w));

  if (workspaceFolder) {
    return file.replace(workspaceFolder, '');
  }

  return file;
};

const requirements = ['Node 6 or newer. 7 or newer is prefered.'];
const availableDialects = {
  MySQL: {
    port: 3306,
    value: 'MySQL',
    text: 'MySQL'
  },
  MSSQL: {
    port: 1433,
    value: 'MSSQL',
    text: 'MSSQL'
  },
  PostgreSQL: {
    port: 5432,
    value: 'PostgreSQL',
    text: 'PostgreSQL'
  },
  'AWS Redshift': {
    port: 5432,
    value: 'AWS Redshift',
    text: 'AWS Redshift'
  },
  OracleDB: {
    port: 1521,
    value: 'OracleDB',
    text: 'OracleDB (Node Native)',
    experimental: true,
    showHelperText: true,
    requirements
  },
  SQLite: {
    value: 'SQLite',
    text: 'SQLite (Node Native)',
    showHelperText: true,
    requirements
  },
  SAPHana: {
    value: 'SAPHana',
    text: 'SAP Hana',
    port: 30000,
    host: '127.0.0.1',
    user: '<enter user>',
    password: '<enter password>',
    showHelperText: true
  }
};
const ConnectionMethod = {
  ServerAndPort: 'Server and Port',
  Socket: 'Socket File',
  ConnectionString: 'Connection String'
};
const connectionMethods = [ConnectionMethod.ServerAndPort, ConnectionMethod.Socket, ConnectionMethod.ConnectionString];

class FieldWrapper extends react_1.default.Component {
  render() {
    const field = this.props.field;
    const info = field.info ? react_1.default.createElement("small", null, "(", field.info, ")") : null;
    const html = this.props.component;
    return react_1.default.createElement("div", {
      className: 'row ' + (this.props.i === 0 ? 'no-margin-first-top' : '')
    }, react_1.default.createElement("div", {
      className: 'col-4 no-margin-left capitalize'
    }, field.label), react_1.default.createElement("div", {
      className: 'col-8 capitalize no-margin-right flex-full'
    }, html, info));
  }

}

const storage = {
  data: {},
  setItem: undefined,
  getItem: undefined,
  removeItem: undefined
};

storage.setItem = (key, value) => storage.data[key] = value;

storage.getItem = key => storage.data[key];

storage.removeItem = key => delete storage.data[key];

class SettingsScreen extends react_1.default.Component {
  constructor(props) {
    super(props);
    this.baseFields = {
      name: {
        label: 'Connection Name',
        validators: [utils_1.notEmpty]
      },
      dialect: {
        label: 'Dialects',
        values: Object.values(availableDialects),
        default: availableDialects.MySQL.value,
        validators: [utils_1.notEmpty],
        postUpdateHook: () => {
          const newState = Object.assign({}, this.state);

          if (this.state.data.dialect === 'SQLite') {
            newState.fields.port.visible = false;
            newState.fields.server.visible = false;
            newState.fields.username.visible = false;
            newState.fields.password.visible = false;
            newState.fields.askForPassword.visible = false;
            newState.fields.connectionTimeout.visible = false;
            newState.fields.database.type = 'file';
            newState.fields.connectionMethod.visible = false;
            newState.fields.connectString.visible = false;
            newState.fields.socketPath.visible = false;
          } else {
            if (this.state.fields.database.type === 'file') {
              newState.data.database = undefined;
            }

            newState.data.port = (availableDialects[this.state.data.dialect] ? availableDialects[this.state.data.dialect].port : null) || availableDialects.MySQL.port;
            newState.fields.port.visible = true;
            newState.fields.server.visible = true;
            newState.fields.username.visible = true;
            newState.fields.password.visible = true;
            newState.fields.askForPassword.visible = true;
            newState.fields.connectionTimeout.visible = true;
            newState.fields.database.type = 'text';

            if (!newState.fields.connectionMethod.visible) {
              newState.data.connectionMethod = ConnectionMethod[0];
              newState.fields.connectionMethod.visible = true;
            }
          }

          if (this.state.data.dialect === 'SAPHana') {
            newState.fields.database.label = 'Schema';
          } else {
            newState.fields.database.label = 'Database';
          }

          this.setState(newState, this.validateFields);
        }
      },
      connectionMethod: {
        label: 'Connection Method',
        values: connectionMethods,
        default: connectionMethods[0],
        postUpdateHook: () => {
          const newState = Object.assign({}, this.state);

          switch (this.state.data.connectionMethod) {
            case ConnectionMethod.ConnectionString:
              newState.fields.server.visible = false;
              newState.fields.port.visible = false;
              newState.fields.database.visible = false;
              newState.fields.username.visible = false;
              newState.fields.password.visible = false;
              newState.fields.askForPassword.visible = false;
              newState.fields.socketPath.visible = false;
              newState.fields.connectString.visible = true;
              break;

            case ConnectionMethod.Socket:
              newState.fields.server.visible = false;
              newState.fields.port.visible = false;
              newState.fields.database.visible = true;
              newState.fields.username.visible = true;
              newState.fields.password.visible = true;
              newState.fields.askForPassword.visible = true;
              newState.fields.socketPath.visible = true;
              newState.fields.connectString.visible = false;
              break;

            case ConnectionMethod.ServerAndPort:
              newState.fields.server.visible = true;
              newState.fields.port.visible = true;
              newState.fields.socketPath.visible = false;
              newState.fields.connectString.visible = false;
              newState.fields.database.visible = true;
              newState.fields.username.visible = true;
              newState.fields.password.visible = true;
              newState.fields.askForPassword.visible = true;
              break;
          }

          this.setState(newState, this.validateFields);
        }
      },
      server: {
        label: 'Server',
        default: '127.0.0.1',
        validators: [utils_1.notEmpty]
      },
      port: {
        label: 'Port',
        type: 'number',
        default: availableDialects.MySQL.port,
        validators: [utils_1.notEmpty, utils_1.inRange(1, 65535)],
        parse: utils_1.int,
        minMax: {
          min: 1,
          max: 65535
        }
      },
      socketPath: {
        visible: false,
        type: 'file',
        label: 'Socket File',
        validators: [utils_1.notEmpty]
      },
      connectString: {
        visible: false,
        type: 'text',
        label: 'Connection String',
        validators: [utils_1.notEmpty]
      },
      database: {
        type: 'text',
        label: 'Database',
        validators: [utils_1.notEmpty]
      },
      username: {
        label: 'Username',
        validators: [utils_1.notEmpty]
      },
      password: {
        label: 'Password',
        placeholder: 'Leave empty to be prompted',
        postUpdateHook: () => {
          const newState = Object.assign({}, this.state);

          if (utils_1.notEmpty(this.state.data.password)) {
            newState.fields.askForPassword.visible = false;
          } else {
            newState.fields.askForPassword.visible = true;
            newState.data.askForPassword = true;
          }

          this.setState(newState, this.validateFields);
        }
      },
      askForPassword: {
        label: 'Ask password?',
        type: 'checkbox',
        info: 'Uncheck if you want to use empty passwords',
        default: true,
        parse: utils_1.bool
      },
      connectionTimeout: {
        label: 'Connection Timeout',
        info: 'in seconds',
        type: 'number',
        default: 30,
        validators: [utils_1.notEmpty, utils_1.gtz],
        parse: utils_1.int,
        minMax: {
          min: 0
        }
      },
      isGlobal: {
        label: 'Save to global settings?',
        info: 'If checked, will save to global settings',
        type: 'checkbox',
        default: false,
        parse: utils_1.bool
      }
    };

    this.messagesHandler = ({
      action,
      payload
    }) => {
      console.log(`Message received: ${action}`, ...[payload]);

      switch (action) {
        case 'editConnection':
          this.setState({
            beforeEditData: payload.conn,
            loading: true,
            data: payload.conn,
            fields: this.baseFields,
            errors: {},
            onSaveError: null,
            saved: null
          }, () => __awaiter(this, void 0, void 0, function* () {
            const conn = payload.conn;
            yield this.updateField({
              value: conn.dialect,
              name: 'dialect'
            });

            if (conn.port) {
              yield this.updateField({
                value: conn.port,
                name: 'port'
              });
            }

            if (conn.socketPath) {
              yield this.updateField({
                value: ConnectionMethod.Socket,
                name: 'connectionMethod'
              });
            } else if (conn.connectString) {
              yield this.updateField({
                value: ConnectionMethod.ConnectionString,
                name: 'connectionMethod'
              });
            } else {
              yield this.updateField({
                value: ConnectionMethod.ServerAndPort,
                name: 'connectionMethod'
              });
            }

            this.componentDidMount();
          }));
          break;

        case 'updateConnectionSuccess':
        case 'createConnectionSuccess':
          const newState = {
            workspaces: [],
            loading: false,
            data: SettingsScreen.loadLocal() || SettingsScreen.generateConnData(this.baseFields),
            fields: this.baseFields,
            errors: {},
            onSaveError: null,
            saved: null
          };
          newState.saved = react_1.default.createElement("div", null, react_1.default.createElement("strong", null, payload.connInfo.name), action !== 'updateConnectionSuccess' ? ' added to your settings!' : ' was updated!', react_1.default.createElement("a", {
            onClick: this.reset,
            className: "btn danger",
            href: encodeURI(`command:${"SQLTools" || false}.deleteConnection?${JSON.stringify(payload.connInfo.id)}`)
          }, "Delete ", payload.connInfo.name), react_1.default.createElement("a", {
            onClick: this.reset,
            className: "btn",
            href: encodeURI(`command:${"SQLTools" || false}.selectConnection?${JSON.stringify(payload.connInfo.id)}`)
          }, "Connect now"));
          newState.data = SettingsScreen.generateConnData(this.state.fields);
          this.setState(newState, this.validateFields);
          document.querySelector('html').scrollTop = 0;
          break;

        case 'updateConnectionError':
        case 'createConnectionError':
          this.setState({
            loading: false,
            onSaveError: ((payload && payload.message ? payload.message : payload) || '').toString()
          });
          break;

        case 'setWorkspaces':
          this.setState({
            workspaces: payload || []
          });

        case 'reset':
          this.reset();

        default:
          break;
      }
    };

    this.reset = () => {
      const data = SettingsScreen.loadLocal() || SettingsScreen.generateConnData(this.baseFields);
      this.setState({
        loading: true,
        beforeEditData: undefined,
        data,
        fields: this.baseFields,
        errors: {},
        onSaveError: null,
        saved: null
      }, () => this.componentDidMount());
    };

    this.handleChange = e => this.updateField(e.target);

    this.updateField = ({
      checked,
      value,
      name
    }) => __awaiter(this, void 0, void 0, function* () {
      value = this.state.fields[name].type === 'checkbox' ? Boolean(checked) : value;
      if (this.state.fields[name].visible === false) return this.validateFields();
      const newData = Object.assign({}, this.state.data, {
        [name]: value
      });
      return new Promise(resolve => {
        this.setState({
          data: newData,
          saved: null,
          onSaveError: null
        }, () => {
          if (!this.state.fields[name].postUpdateHook) {
            this.validateFields();
            return resolve();
          }

          ;
          this.state.fields[name].postUpdateHook();
          this.validateFields();
          return resolve();
        });
      });
    });

    this.handleSubmit = e => {
      this.setState({
        loading: true
      });
      e.preventDefault();

      if (this.state.beforeEditData) {
        return void vscode_1.default().postMessage({
          action: 'updateConnection',
          payload: {
            connInfo: this.getParsedFormData(),
            isGlobal: this.state.data.isGlobal,
            editId: get_connection_stuff_1.getConnectionId(this.state.beforeEditData)
          }
        });
      }

      vscode_1.default().postMessage({
        action: 'createConnection',
        payload: {
          connInfo: this.getParsedFormData(),
          isGlobal: this.state.data.isGlobal
        }
      });
      return false;
    };

    this.focusField = field => {
      try {
        document.getElementById(field).focus();
      } catch (e) {}
    };

    const data = SettingsScreen.loadLocal() || SettingsScreen.generateConnData(this.baseFields);
    this.state = {
      workspaces: [],
      loading: true,
      data,
      fields: this.baseFields,
      errors: {},
      onSaveError: null,
      saved: null
    };
    window.addEventListener('message', ev => {
      return this.messagesHandler(ev.data);
    });
  }

  validateField(field) {
    const checks = this.state.fields[field].validators || [];
    const errors = {};
    checks.forEach(c => {
      let message;

      if (message = c.call(this, this.state.data[field])) {
        errors[field] = null;
      } else {
        errors[field] = c.errorMessage || message;
      }
    });
    return Object.keys(errors).reduce((p, f) => {
      if (!errors[f]) return p;
      p[f] = errors[f];
      return p;
    }, {});
  }

  validateFields() {
    let errors = {};
    this.getVisibleFields().forEach(f => {
      errors = Object.assign({}, errors, this.validateField(f));
    });
    this.setState({
      errors: Object.keys(errors).reduce((p, f) => {
        if (errors[f] === null || typeof errors[f] === 'undefined') return p;
        p[f] = errors[f];
        return p;
      }, {})
    });
  }

  componentDidMount() {
    this.setState({
      loading: false
    }, () => {
      document.getElementsByTagName('input')[0].focus();
      this.validateFields();
    });
  }

  getVisibleFields() {
    return Object.keys(this.state.fields).filter(k => this.state.fields[k].visible || typeof this.state.fields[k].visible === 'undefined');
  }

  getParsedFormData(workspaces = []) {
    const data = this.getVisibleFields().reduce((d, k) => {
      const parse = this.state.fields[k].parse || (v => v === '' ? null : v);

      d[k] = parse(this.state.data[k]);
      return d;
    }, {});
    data['password'] = data['password'] || undefined;

    if (data['dialect'] === interface_1.DatabaseDialect.SQLite) {
      data['database'] = relativeToWorkspace(data['database'], workspaces);
    }

    delete data['isGlobal'];
    delete data['connectionMethod'];
    return data;
  }

  render() {
    const formFields = this.getVisibleFields().map((f, i) => {
      const field = this.state.fields[f];
      let formField;

      if (Array.isArray(field.values)) {
        const options = field.values.map((o, k) => {
          return react_1.default.createElement("option", {
            value: typeof o !== 'string' ? o.value : o,
            key: k
          }, typeof o !== 'string' ? o.text : o);
        });
        formField = react_1.default.createElement("select", {
          name: f,
          value: this.state.data[f],
          id: `input-${f}`,
          key: i,
          onChange: this.handleChange,
          disabled: this.state.loading
        }, options);
      } else if (field.type === 'file') {
        formField = react_1.default.createElement(FileInput_1.FileInput, {
          id: `input-${f}`,
          key: i,
          name: f,
          onChange: this.handleChange,
          disabled: this.state.loading,
          value: this.state.data[f] || ''
        });
      } else {
        let fieldProps = {
          value: this.state.data[f] || ''
        };

        if (field.type === 'number') {
          fieldProps = Object.assign({
            value: this.state.data[f] || ''
          }, field.minMax);
        }

        if (field.type === 'checkbox') {
          fieldProps = {
            checked: !!this.state.data[f]
          };
        }

        formField = react_1.default.createElement("input", Object.assign({
          type: field.type || 'text',
          id: `input-${f}`,
          name: f,
          placeholder: field.placeholder || field.label,
          onChange: this.handleChange,
          disabled: this.state.loading,
          key: i
        }, fieldProps));
      }

      return react_1.default.createElement(FieldWrapper, {
        field: field,
        key: i,
        i: i,
        component: formField
      });
    });
    return react_1.default.createElement("div", {
      className: 'fullscreen-container settings-screen'
    }, react_1.default.createElement("form", {
      onSubmit: this.handleSubmit,
      className: 'container'
    }, react_1.default.createElement("div", {
      className: 'row'
    }, react_1.default.createElement("div", {
      className: 'col-12'
    }, react_1.default.createElement("h3", null, this.state.beforeEditData ? `Editing ${this.state.beforeEditData.name}` : 'Setup a new connection'))), this.state.saved || this.state.onSaveError ? react_1.default.createElement("div", {
      className: 'row'
    }, react_1.default.createElement("div", {
      className: 'col-12 messages radius'
    }, react_1.default.createElement("div", {
      className: `message ${this.state.saved ? 'success' : 'error'}`
    }, this.state.saved ? this.state.saved : react_1.default.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: this.state.onSaveError
      }
    })))) : null, react_1.default.createElement("div", {
      className: 'row'
    }, react_1.default.createElement("div", {
      className: 'col-6'
    }, react_1.default.createElement("div", {
      className: 'row'
    }, react_1.default.createElement("div", {
      className: 'col-12 no-margin'
    }, react_1.default.createElement("h5", {
      className: 'no-margin-top'
    }, "Connection Information"))), formFields, react_1.default.createElement("div", {
      className: 'row'
    }, react_1.default.createElement("div", {
      className: 'col-4 no-margin-left'
    }, "\u00A0"), react_1.default.createElement("div", {
      className: 'col-8'
    }, react_1.default.createElement("button", {
      className: 'btn capitalize',
      type: 'submit',
      disabled: Object.keys(this.state.errors).length > 0
    }, this.state.beforeEditData ? 'Update' : 'Create')))), react_1.default.createElement("div", {
      className: 'col-6'
    }, this.state.data.dialect && availableDialects[this.state.data.dialect].showHelperText ? react_1.default.createElement("div", null, react_1.default.createElement("h5", {
      className: "no-margin-top"
    }, "Attention: Beta Feature"), react_1.default.createElement("div", {
      className: 'messages radius'
    }, react_1.default.createElement("div", {
      className: 'message radius attention'
    }, "This connection dialect ", react_1.default.createElement("strong", null, this.state.data.dialect), " is new and might not work for some machines. Please, open an issue at ", react_1.default.createElement("a", {
      href: 'https://github.com/mtxr/vscode-sqltools/issues'
    }, "GitHub"), " if it doesn't work for you.", (availableDialects[this.state.data.dialect].requirements || []).length > 0 ? react_1.default.createElement("div", null, react_1.default.createElement("strong", null, "Requirements:"), react_1.default.createElement("ul", null, (availableDialects[this.state.data.dialect].requirements || []).map(r => react_1.default.createElement("li", {
      key: r
    }, r)))) : null, react_1.default.createElement("div", null, "You can find more information ", react_1.default.createElement("a", {
      href: `${constants_1.DOCS_ROOT_URL}/connections/${this.state.data.dialect.toLowerCase()}`
    }, "here"), ".")))) : null, react_1.default.createElement("div", null, react_1.default.createElement("h5", {
      className: this.state.data.dialect && availableDialects[this.state.data.dialect].showHelperText ? '' : 'no-margin-top'
    }, "Preview")), react_1.default.createElement(Syntax_1.default, {
      code: this.getParsedFormData(this.state.workspaces),
      language: 'json',
      strong: true
    }), Object.keys(this.state.errors).length ? react_1.default.createElement("div", null, react_1.default.createElement("h5", null, "Validations"), react_1.default.createElement("div", {
      className: 'messages radius'
    }, Object.keys(this.state.errors).map((f, k) => {
      return react_1.default.createElement("div", {
        key: k,
        onClick: () => this.focusField(`input-${f}`),
        className: 'message error pointer',
        dangerouslySetInnerHTML: {
          __html: this.state.errors[f].replace('{0}', `<strong>${this.state.fields[f].label}</strong>`)
        }
      });
    }))) : null))), react_1.default.createElement(Loading_1.default, {
      active: this.state.loading
    }));
  }

}

SettingsScreen.storageKey = 'sqltools.setupConnection';

SettingsScreen.saveLocal = data => {
  storage.setItem(SettingsScreen.storageKey, JSON.stringify(data));
};

SettingsScreen.loadLocal = () => {
  const local = storage.getItem(SettingsScreen.storageKey);
  if (!local) return null;
  return JSON.parse(local);
};

SettingsScreen.generateConnData = fields => {
  return Object.keys(fields).reduce((obj, f) => {
    obj[f] = typeof fields[f].default !== 'undefined' ? fields[f].default : '';
    return obj;
  }, {});
};

exports.default = SettingsScreen;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.idSep = '|';

function getConnectionId(c) {
  if (!c) return null;
  if (c.id) return c.id;
  if (c.connectString) `${c.name}${exports.idSep}${c.connectString}`.replace(/\./g, ':').replace(/\//g, '\\');
  return `${c.name}${exports.idSep}${c.dialect}${exports.idSep}${c.server}${exports.idSep}${c.database}`.replace(/\./g, ':').replace(/\//g, '\\');
}

exports.getConnectionId = getConnectionId;

function getNameFromId(id) {
  if (!id) return null;
  return id.split(exports.idSep)[0];
}

exports.getNameFromId = getNameFromId;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importDefault(__webpack_require__(1));

const utils_1 = __webpack_require__(3);

class Syntax extends react_1.default.Component {
  constructor(props) {
    super(props);
    this.id = `syntax-${(Math.random() * 1000).toFixed(0)}`;
    this.interval = null;

    this.copyCode = () => {
      utils_1.clipboardInsert(JSON.stringify(this.props.code, null, 2));
      this.setState({
        copyMsg: 'Copied!'
      }, () => {
        clearTimeout(this.interval);
        this.interval = setTimeout(() => {
          this.setState({
            copyMsg: 'Copy'
          });
        }, 1000);
      });
    };

    this.renderCode = code => {
      if (this.props.language === 'json' && typeof code === 'object') {
        return JSON.stringify(code, null, 2).replace(/( *)(".+") *:/g, '$1<span class="key">$2</span>:').replace(/: *(".+")/g, ': <span class="string">$1</span>').replace(/: *([0-9]+(\.[0-9]+)?)/g, ': <span class="number">$1</span>').replace(/: *(null|true|false)/g, ': <span class="bool">$1</span>');
      }

      return JSON.stringify(code);
    };

    this.state = {
      copyMsg: 'Copy'
    };
  }

  render() {
    return react_1.default.createElement("div", {
      className: 'relative'
    }, react_1.default.createElement("div", {
      id: this.id,
      className: `syntax ${this.props.language} ${this.props.strong ? 'strong-bg' : ''}`,
      dangerouslySetInnerHTML: {
        __html: this.renderCode(this.props.code)
      }
    }), react_1.default.createElement("button", {
      className: 'btn copy-code',
      type: 'button',
      onClick: this.copyCode
    }, this.state.copyMsg));
  }

}

exports.default = Syntax;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(20);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(9)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// Module
exports.push([module.i, "* {\n  font-family: var(--vscode-font-family, var(--vscode-editor-font-family, var(--font-family)));\n  color: var(--vscode-editor-foreground, var(--color)); }\n\nbody {\n  font-size: var(--vscode-font-size, var(--vscode-editor-font-size, var(--font-size)));\n  background: var(--vscode-editor-background, var(--background-color)); }\n\ninput, select, select > option {\n  border-radius: 0;\n  background: var(--vscode-settings-textInputBackground);\n  border: 1px solid var(--vscode-input-border);\n  color: var(--vscode-settings-textInputForeground);\n  padding: 4px 8px; }\n\nselect {\n  padding: 4px 6px; }\n\n.fullscreen-container {\n  display: flex;\n  width: 100%;\n  height: 100%; }\n\n.capitalize {\n  text-transform: capitalize; }\n  .capitalize small {\n    margin-left: 10px;\n    text-transform: none; }\n\n::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.2);\n  text-transform: capitalize; }\n\n.vscode-dark {\n  color: rgba(255, 255, 255, 0.2); }\n  .vscode-dark ::-webkit-input-placeholder {\n    color: rgba(255, 255, 255, 0.2);\n    text-transform: capitalize; }\n\n.pointer {\n  cursor: pointer; }\n\n.btn, button {\n  background: var(--vscode-button-background, var(--link-color));\n  padding: 4px 8px;\n  color: var(--vscode-button-foreground);\n  border: 1px solid var(--vscode-input-border);\n  text-transform: uppercase;\n  cursor: pointer; }\n  .btn:disabled, .btn[disabled], button:disabled, button[disabled] {\n    opacity: 0.3;\n    cursor: not-allowed; }\n\n.backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: rgba(255, 255, 255, 0.5);\n  overflow: hidden;\n  display: none;\n  width: 100vw;\n  height: 100vh; }\n\n.loading {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: block; }\n  .loading .backdrop {\n    display: block; }\n  .loading div.spinner,\n  .loading div.spinner:after {\n    border-radius: 50%;\n    width: 10em;\n    height: 10em; }\n  .loading div.spinner {\n    margin: auto;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    font-size: 10px;\n    position: absolute;\n    text-indent: -9999em;\n    border-top: 1.1em solid rgba(0, 0, 0, 0.2);\n    border-right: 1.1em solid rgba(0, 0, 0, 0.2);\n    border-bottom: 1.1em solid rgba(0, 0, 0, 0.2);\n    border-left: 1.1em solid #ffffff;\n    transform: translate3d(0, -50%, 0);\n    animation: load8 1.1s infinite linear; }\n\n.vscode-dark .loading .backdrop {\n  background: rgba(0, 0, 0, 0.5); }\n\n.vscode-dark .loading div.spinner {\n  border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2); }\n\n@keyframes load8 {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.no-margin {\n  margin: 0 !important; }\n\n.no-margin-top {\n  margin-top: 0 !important; }\n\n.no-margin-bottom {\n  margin-bottom: 0 !important; }\n\n.no-margin-left {\n  margin-left: 0 !important; }\n\n.no-margin-right {\n  margin-right: 0 !important; }\n\n.no-padding {\n  padding: 0 !important; }\n\n.no-padding-top {\n  padding-top: 0 !important; }\n\n.no-padding-bottom {\n  padding-bottom: 0 !important; }\n\n.no-padding-left {\n  padding-left: 0 !important; }\n\n.no-padding-right {\n  padding-right: 0 !important; }\n\n.row.no-margin-first-top .col-* {\n  margin-top: 0 !important; }\n\n.relative {\n  position: relative !important; }\n\n.flex-full {\n  display: flex;\n  align-items: baseline; }\n  .flex-full > * {\n    flex-grow: 1; }\n\n* {\n  font-family: var(--vscode-font-family, var(--vscode-editor-font-family, var(--font-family)));\n  color: var(--vscode-editor-foreground, var(--color)); }\n\nbody {\n  font-size: var(--vscode-font-size, var(--vscode-editor-font-size, var(--font-size)));\n  background: var(--vscode-editor-background, var(--background-color)); }\n\ninput, select, select > option {\n  border-radius: 0;\n  background: var(--vscode-settings-textInputBackground);\n  border: 1px solid var(--vscode-input-border);\n  color: var(--vscode-settings-textInputForeground);\n  padding: 4px 8px; }\n\nselect {\n  padding: 4px 6px; }\n\n.fullscreen-container {\n  display: flex;\n  width: 100%;\n  height: 100%; }\n\n.capitalize {\n  text-transform: capitalize; }\n  .capitalize small {\n    margin-left: 10px;\n    text-transform: none; }\n\n::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.2);\n  text-transform: capitalize; }\n\n.vscode-dark {\n  color: rgba(255, 255, 255, 0.2); }\n  .vscode-dark ::-webkit-input-placeholder {\n    color: rgba(255, 255, 255, 0.2);\n    text-transform: capitalize; }\n\n.pointer {\n  cursor: pointer; }\n\n.btn, button {\n  background: var(--vscode-button-background, var(--link-color));\n  padding: 4px 8px;\n  color: var(--vscode-button-foreground);\n  border: 1px solid var(--vscode-input-border);\n  text-transform: uppercase;\n  cursor: pointer; }\n  .btn:disabled, .btn[disabled], button:disabled, button[disabled] {\n    opacity: 0.3;\n    cursor: not-allowed; }\n\n.backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: rgba(255, 255, 255, 0.5);\n  overflow: hidden;\n  display: none;\n  width: 100vw;\n  height: 100vh; }\n\n.loading {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: block; }\n  .loading .backdrop {\n    display: block; }\n  .loading div.spinner,\n  .loading div.spinner:after {\n    border-radius: 50%;\n    width: 10em;\n    height: 10em; }\n  .loading div.spinner {\n    margin: auto;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    font-size: 10px;\n    position: absolute;\n    text-indent: -9999em;\n    border-top: 1.1em solid rgba(0, 0, 0, 0.2);\n    border-right: 1.1em solid rgba(0, 0, 0, 0.2);\n    border-bottom: 1.1em solid rgba(0, 0, 0, 0.2);\n    border-left: 1.1em solid #ffffff;\n    transform: translate3d(0, -50%, 0);\n    animation: load8 1.1s infinite linear; }\n\n.vscode-dark .loading .backdrop {\n  background: rgba(0, 0, 0, 0.5); }\n\n.vscode-dark .loading div.spinner {\n  border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2); }\n\n@keyframes load8 {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.no-margin {\n  margin: 0 !important; }\n\n.no-margin-top {\n  margin-top: 0 !important; }\n\n.no-margin-bottom {\n  margin-bottom: 0 !important; }\n\n.no-margin-left {\n  margin-left: 0 !important; }\n\n.no-margin-right {\n  margin-right: 0 !important; }\n\n.no-padding {\n  padding: 0 !important; }\n\n.no-padding-top {\n  padding-top: 0 !important; }\n\n.no-padding-bottom {\n  padding-bottom: 0 !important; }\n\n.no-padding-left {\n  padding-left: 0 !important; }\n\n.no-padding-right {\n  padding-right: 0 !important; }\n\n.row.no-margin-first-top .col-* {\n  margin-top: 0 !important; }\n\n.relative {\n  position: relative !important; }\n\n.flex-full {\n  display: flex;\n  align-items: baseline; }\n  .flex-full > * {\n    flex-grow: 1; }\n\n* {\n  font-family: var(--font-family);\n  font-family: var(--vscode-editor-font-family, var(--font-family));\n  font-family: var(--vscode-font-family, var(--vscode-editor-font-family, var(--font-family)));\n  line-height: 1.5; }\n\nh1 {\n  font-size: 2.5rem; }\n\nh2 {\n  font-size: 2rem; }\n\nh3 {\n  font-size: 1.375rem; }\n\nh4 {\n  font-size: 1.125rem; }\n\nh5 {\n  font-size: 1rem; }\n\nh6 {\n  font-size: 0.875rem; }\n\np {\n  font-size: 1.125rem;\n  font-weight: 200;\n  line-height: 1.8; }\n\n.font-light {\n  font-weight: 300; }\n\n.font-regular {\n  font-weight: 400; }\n\n.font-heavy {\n  font-weight: 700; }\n\n.left {\n  text-align: left; }\n\n.right {\n  text-align: right; }\n\n.center {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto; }\n\n.justify {\n  text-align: justify; }\n\n.hidden-sm {\n  display: none; }\n\n.container {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1024px; }\n\n.row {\n  position: relative;\n  width: 100%; }\n\n.row [class^=\"col\"] {\n  float: left;\n  margin: 0.5rem 2%;\n  min-height: 0.125rem; }\n\n.row::after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.col-1,\n.col-2,\n.col-3,\n.col-4,\n.col-5,\n.col-6,\n.col-7,\n.col-8,\n.col-9,\n.col-10,\n.col-11,\n.col-12 {\n  width: 96%; }\n\n.col-1-sm {\n  width: 4.33333%; }\n\n.col-2-sm {\n  width: 12.66667%; }\n\n.col-3-sm {\n  width: 21%; }\n\n.col-4-sm {\n  width: 29.33333%; }\n\n.col-5-sm {\n  width: 37.66667%; }\n\n.col-6-sm {\n  width: 46%; }\n\n.col-7-sm {\n  width: 54.33333%; }\n\n.col-8-sm {\n  width: 62.66667%; }\n\n.col-9-sm {\n  width: 71%; }\n\n.col-10-sm {\n  width: 79.33333%; }\n\n.col-11-sm {\n  width: 87.66667%; }\n\n.col-12-sm {\n  width: 96%; }\n\n@media only screen and (min-width: 1em) {\n  .col-1 {\n    width: 4.33333%; }\n  .col-2 {\n    width: 12.66667%; }\n  .col-3 {\n    width: 21%; }\n  .col-4 {\n    width: 29.33333%; }\n  .col-5 {\n    width: 37.66667%; }\n  .col-6 {\n    width: 46%; }\n  .col-7 {\n    width: 54.33333%; }\n  .col-8 {\n    width: 62.66667%; }\n  .col-9 {\n    width: 71%; }\n  .col-10 {\n    width: 79.33333%; }\n  .col-11 {\n    width: 87.66667%; }\n  .col-12 {\n    width: 96%; }\n  .hidden-sm {\n    display: block; } }\n\n.syntax {\n  background: var(--vscode-editor-background, #eaeaea);\n  border-radius: 3px;\n  padding: 4px; }\n  .syntax, .syntax * {\n    line-height: 1.2;\n    white-space: pre-wrap;\n    font-family: monospace; }\n  .syntax.json .key {\n    color: #00bcd4; }\n  .syntax.json .number {\n    color: #cddc39; }\n  .syntax.json .string {\n    color: #ffc107; }\n  .syntax.json .bool, .syntax.json .null {\n    color: #2196f3; }\n  .syntax pre {\n    text-overflow: ellipsis;\n    overflow: hidden; }\n\n.syntax.strong-bg {\n  background: rgba(0, 0, 0, 0.02); }\n\n.btn.copy-code {\n  position: absolute;\n  top: 0;\n  right: 0;\n  border-top-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  background: rgba(255, 255, 255, 0.2);\n  font-size: 0.6em;\n  padding: 2px 4px;\n  cursor: copy; }\n\nbody.vscode-dark .syntax {\n  background: var(--vscode-editor-background, #222); }\n  body.vscode-dark .syntax.strong-bg {\n    background: rgba(255, 255, 255, 0.02); }\n\n.messages .message {\n  padding: 4px;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-bottom-color: rgba(0, 0, 0, 0.15); }\n  .messages .message:last-child {\n    border-bottom-color: transparent !important; }\n  .messages .message.error {\n    background: rgba(255, 0, 0, 0.2); }\n  .messages .message.success {\n    background: rgba(0, 255, 0, 0.4); }\n  .messages .message.attention {\n    border: 1px solid var(--vscode-inputValidation-warningBorder) !important;\n    padding: 4px;\n    background: var(--vscode-editorGroup-background); }\n  .messages .message .btn {\n    float: right;\n    padding: 0 4px;\n    margin: 0 4px;\n    color: white;\n    text-decoration: none;\n    font-weight: bold;\n    background: var(--vscode-editorLink-activeForeground);\n    text-transform: initial; }\n    .messages .message .btn.danger {\n      background: var(--vscode-editorError-foreground); }\n\n.messages.radius .message:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px; }\n\n.messages.radius .message:last-child {\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px; }\n\n.vscode-high-contrast .message .btn:not(.danger) {\n  background: var(--vscode-editorInfo-border);\n  border: 1px solid var --vscode-editorInfo-border; }\n", ""]);


/***/ }),
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VERSION = "0.19.7";
exports.EXT_NAME = "SQLTools";
exports.DISPLAY_NAME = "SQLTools";
exports.AUTHOR = "Matheus Teixeira <me@mteixeira.me>";
exports.ENV = "production" || false;
exports.AI_KEY = 'd739ccec-c4e8-45e0-9d14-3b43d57a1db7';
exports.DOCS_ROOT_URL = 'https://vscode-sqltools.mteixeira.dev';
exports.TREE_SEP = '/-##-/';
exports.LineSplitterRegex = /\r?\n/g;
exports.CommentIdentifiersRegex = /^\s*(#|\/{2})/;
exports.FileVariableDefinitionRegex = /^\s*@([^\s=]+)\s*=\s*(.+?)\s*$/;
exports.DelimiterStartRegex = /^\s*-{2,}\s*@block.*$/;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

__export(__webpack_require__(24));

__export(__webpack_require__(25));

__export(__webpack_require__(26));

__export(__webpack_require__(27));

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DatabaseDialect;

(function (DatabaseDialect) {
  DatabaseDialect["MSSQL"] = "MSSQL";
  DatabaseDialect["MySQL"] = "MySQL";
  DatabaseDialect["PostgreSQL"] = "PostgreSQL";
  DatabaseDialect["AWS Redshift"] = "AWS Redshift";
  DatabaseDialect["SQLite"] = "SQLite";
  DatabaseDialect["OracleDB"] = "OracleDB";
  DatabaseDialect["SAPHana"] = "SAPHana";
})(DatabaseDialect = exports.DatabaseDialect || (exports.DatabaseDialect = {}));

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importDefault(__webpack_require__(1));

class FileInput extends react_1.default.Component {
  constructor(props) {
    super(props);

    this.onChange = () => {
      return this.props.onChange({
        target: {
          type: 'text',
          name: this.props.name,
          id: this.props.id,
          value: this.state.value
        }
      });
    };

    this.onChangeFile = () => {
      const value = this.fileField.current.files && this.fileField.current.files.length > 0 ? this.fileField.current.files[0]['path'] : undefined;
      const name = this.fileField.current.files && this.fileField.current.files.length > 0 ? this.fileField.current.files[0].name : undefined;
      this.setState({
        value,
        name
      }, this.onChange);
    };

    this.fileField = react_1.default.createRef();
    const value = this.props.value || undefined;
    let name;

    if (value) {
      const startIndex = value.indexOf('\\') >= 0 ? value.lastIndexOf('\\') : value.lastIndexOf('/');
      name = value.substring(startIndex);

      if (name.indexOf('\\') === 0 || name.indexOf('/') === 0) {
        name = name.substring(1);
      }
    }

    this.state = {
      value,
      name
    };
  }

  render() {
    return react_1.default.createElement("div", {
      style: {
        position: 'relative',
        display: 'flex'
      },
      title: this.state.value
    }, react_1.default.createElement("input", {
      style: {
        flex: 1
      },
      type: "text",
      id: this.props.id,
      name: this.props.name,
      placeholder: "Click to select a file",
      value: this.state.name,
      disabled: true
    }), react_1.default.createElement("input", {
      style: {
        opacity: 0,
        position: 'absolute',
        flex: 1,
        cursor: 'pointer',
        width: '100%',
        padding: '4px 0'
      },
      type: "file",
      ref: this.fileField,
      onChange: this.onChangeFile
    }));
  }

}

exports.FileInput = FileInput;

/***/ })
/******/ ]);
//# sourceMappingURL=Settings.js.map