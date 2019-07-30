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
/******/ 		1: 0
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
/******/ 	deferredModules.push([29,0]);
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
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
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

const Screen_1 = __importDefault(__webpack_require__(30));

react_dom_1.render(react_1.default.createElement(Screen_1.default, null), document.getElementById('root'));

/***/ }),
/* 30 */
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

const Loading_1 = __importDefault(__webpack_require__(5));

const QueryResult_1 = __importDefault(__webpack_require__(31));

const vscode_1 = __importDefault(__webpack_require__(4));

__webpack_require__(38);

class ResultsScreen extends react_1.default.Component {
  constructor() {
    super(...arguments);
    this.state = {
      connId: null,
      isLoaded: false,
      resultMap: {},
      queries: [],
      error: null,
      activeTab: null
    };

    this.saveState = (data, cb = () => {}) => {
      this.setState(data, () => {
        cb();
        vscode_1.default().setState(this.state);
      });
    };

    this.messagesHandler = ({
      action,
      payload
    }) => {
      console.log(`Message received: ${action}`, ...[payload]);

      switch (action) {
        case 'queryResults':
          const results = payload;
          const queries = [];
          const resultMap = {};
          let connId;
          (Array.isArray(results) ? results : [results]).forEach(r => {
            connId = r.connId;
            queries.push(r.query);
            resultMap[r.query] = r;
          });
          this.saveState({
            connId,
            isLoaded: true,
            queries,
            resultMap,
            error: null,
            activeTab: queries[0]
          });
          break;

        case 'reset':
          this.saveState({
            connId: null,
            isLoaded: false,
            resultMap: {},
            queries: []
          });
          break;

        case 'getState':
          vscode_1.default().postMessage({
            action: 'receivedState',
            payload: this.state
          });
          break;

        default:
          break;
      }
    };
  }

  componentWillMount() {
    window.addEventListener('message', ev => {
      return this.messagesHandler(ev.data);
    });
  }

  toggle(query) {
    this.saveState({
      activeTab: query
    });
  }

  render() {
    if (!this.state.isLoaded) {
      return react_1.default.createElement(Loading_1.default, {
        active: true
      });
    } else if (this.state.isLoaded && this.state.error) {
      return react_1.default.createElement("div", null, react_1.default.createElement("h2", null, "Query errored. Check the logs."), react_1.default.createElement("h4", null, this.state.error.toString()));
    }

    const tabs = this.state.queries.map(query => react_1.default.createElement("li", {
      title: query,
      key: query,
      onClick: () => this.toggle(query),
      className: 'truncate ' + (this.state.activeTab === query ? 'active' : '')
    }, this.state.resultMap[query] && this.state.resultMap[query].label || query));
    return react_1.default.createElement("div", {
      className: 'query-results-container fullscreen-container'
    }, react_1.default.createElement("ul", {
      className: 'tabs'
    }, tabs), react_1.default.createElement(QueryResult_1.default, Object.assign({}, this.state.resultMap[this.state.activeTab])));
  }

}

exports.default = ResultsScreen;

/***/ }),
/* 31 */
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

const Collpsible_1 = __importDefault(__webpack_require__(32));

const ResultsTable_1 = __importDefault(__webpack_require__(33));

const ErrorIcon_1 = __importDefault(__webpack_require__(37));

exports.default = ({
  cols,
  error,
  query,
  messages,
  results = [],
  connId
}) => {
  const table = error ? react_1.default.createElement("div", {
    style: {
      flexGrow: 1,
      textAlign: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      display: 'flex',
      justifyContent: 'center'
    }
  }, react_1.default.createElement("div", null, react_1.default.createElement(ErrorIcon_1.default, null)), react_1.default.createElement("div", null, "Query with errors. Please, check the error below.")) : react_1.default.createElement(ResultsTable_1.default, {
    cols: !cols || cols.length === 0 ? [''] : cols,
    data: results || [],
    paginationSize: 50,
    query: query,
    connId: connId
  });
  return react_1.default.createElement("div", {
    className: "result"
  }, react_1.default.createElement("div", {
    className: "results-table"
  }, table), react_1.default.createElement("div", {
    className: "query-extras"
  }, react_1.default.createElement(Collpsible_1.default, {
    title: "View Query"
  }, react_1.default.createElement("pre", null, query)), react_1.default.createElement(Collpsible_1.default, {
    title: `Messages (${messages.length})`,
    open: results.length === 0
  }, react_1.default.createElement("div", {
    className: "messages"
  }, (messages.length > 0 ? messages : ['No messages to show.']).map((m, i) => react_1.default.createElement("div", {
    key: i,
    className: 'message ' + (error ? 'error' : '')
  }, m))))));
};

/***/ }),
/* 32 */
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

class Collapsible extends react_1.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.toggle = () => this.setState({
      open: !this.state.open
    });

    this.state = {
      open: props.open || false
    };
  }

  render() {
    return react_1.default.createElement("div", {
      className: 'collapse ' + (this.state.open ? 'open' : '')
    }, react_1.default.createElement("div", {
      className: 'collapse-toggle',
      onClick: this.toggle
    }, this.props.title, " ", react_1.default.createElement("i", {
      className: 'icon'
    })), react_1.default.createElement("div", {
      className: 'collapsible'
    }, this.props.children));
  }

}

exports.default = Collapsible;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  return t;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const react_1 = __importDefault(__webpack_require__(1));

const react_table_1 = __importStar(__webpack_require__(40));

const Menu_1 = __importDefault(__webpack_require__(36));

const utils_1 = __webpack_require__(3);

const vscode_1 = __importDefault(__webpack_require__(4));

const FilterByValueOption = 'Filter by \'{value}\'';
const ReRunQueryOption = 'Re-run this query';
const ClearFiltersOption = 'Clear all filters';
const CopyCellOption = 'Copy Cell value';
const CopyRowOption = 'Copy Row value';
const SaveCSVOption = 'Save results as CSV';
const SaveJSONOption = 'Save results as JSON';
const OpenEditorWithValueOption = 'Open editor with\'{value}\'';
const OpenEditorWithRowOption = 'Open editor with row';
const isRegExMatcher = /^\/(.+)\/(\w+)?$/gi;

function toRegEx(value) {
  if (value instanceof RegExp) return value;

  try {
    if (isRegExMatcher.test(value)) {
      try {
        return eval(value.replace(isRegExMatcher, '/($1)/$2'));
      } catch (ee) {}
    }

    return new RegExp(`(${value})`, 'gi');
  } catch (e) {}

  return value;
}

const FilterComponent = ({
  filter = {
    value: ''
  },
  column,
  onChange
}) => {
  return react_1.default.createElement("input", {
    type: "text",
    placeholder: `Filter by ${column.id}`,
    style: {
      width: '100%'
    },
    value: filter.value,
    onChange: event => onChange(column.id, event.target.value)
  });
};

const TbodyComponent = react_1.default.forwardRef((_a, ref) => {
  var {
    onScroll
  } = _a,
      props = __rest(_a, ["onScroll"]);

  for (let i = 0; i < props.children[0].length; i++) {
    props.children[0][i] = react_1.default.cloneElement(props.children[0][i], {
      minWidth: props.style.minWidth
    });
  }

  return react_1.default.createElement("div", {
    className: "rt-tbody",
    id: "tbody",
    onScroll: onScroll,
    ref: ref
  }, props.children);
});

const TrGroupComponent = props => {
  return react_1.default.createElement("div", {
    className: "rt-tr-group",
    role: "rowgroup",
    style: {
      minWidth: props.minWidth
    }
  }, props.children);
};

const getSizeForItem = (colname, sample) => {
  const props = {
    Header: colname,
    accessor: colname
  };

  if (typeof sample === 'undefined') {
    props.width = 100;
  } else if (sample instanceof Date) {
    props.width = 200;
  } else if (typeof sample === 'number') {
    props.width = 100;
    props.className = 'text-right';
  } else if (typeof sample === 'boolean') {
    props.width = 75;
    props.className = 'text-center';
  }

  return props;
};

class ResultsTable extends react_1.default.PureComponent {
  constructor() {
    super(...arguments);
    this.state = ResultsTable.initialState;
    this.columnDefault = Object.assign({}, react_table_1.ReactTableDefaults.column, {
      minResizeWidth: 11
    }, {
      Cell: r => {
        let v = r.original[r.column.id];
        if (v === null) return react_1.default.createElement("small", null, "NULL");
        if (v === true) return react_1.default.createElement("span", null, "TRUE");
        if (v === false) return react_1.default.createElement("span", null, "FALSE");

        if (typeof v === 'object' || Array.isArray(v)) {
          return react_1.default.createElement("div", {
            className: "syntax json copy-allowed",
            "data-value": v === null ? 'null' : JSON.stringify(v, null, 2),
            "data-col": r.column.id,
            "data-index": r.index
          }, react_1.default.createElement("pre", null, JSON.stringify(v)));
        }

        v = String(v);
        if (!this.state.filtered[r.column.id]) return react_1.default.createElement("span", null, v);
        return react_1.default.createElement("span", null, v.replace(this.state.filtered[r.column.id].regex || this.state.filtered[r.column.id].value, '<###>$1<###>').split('<###>').map((str, i) => {
          if (i % 2 === 1) return react_1.default.createElement("mark", {
            key: i,
            className: "filter-highlight"
          }, str);
          if (str.trim().length === 0) return null;
          return react_1.default.createElement("span", {
            key: i
          }, str);
        }));
      }
    });

    this.openContextMenu = e => {
      const {
        pageX,
        pageY
      } = e;
      this.highlightClickedRow(e, () => {
        this.setState({
          contextMenu: {
            open: true,
            x: pageX,
            y: pageY
          }
        });
      });
    };

    this.onTableClick = (e = undefined) => {
      if (this.state.contextMenu.open) {
        const {
          clickedData,
          contextMenu
        } = ResultsTable.initialState;
        this.setState({
          clickedData,
          contextMenu
        });
      } else if (e) {
        this.highlightClickedRow(e);
      }
    };

    this.tableContextOptions = () => {
      const options = [];
      if (!this.state.clickedData.col) return options;
      const {
        clickedData
      } = this.state;
      ;

      if (typeof this.state.clickedData.value !== 'undefined') {
        options.push({
          get label() {
            return FilterByValueOption.replace('{value}', clickedData.value);
          },

          value: FilterByValueOption
        });
        options.push('sep');
      }

      if (Object.keys(this.state.filtered).length > 0) {
        options.push(ClearFiltersOption);
        options.push('sep');
      }

      return options.concat([{
        get label() {
          return OpenEditorWithValueOption.replace('{value}', clickedData.value);
        },

        value: OpenEditorWithValueOption
      }, OpenEditorWithRowOption, CopyCellOption, CopyRowOption, 'sep', ReRunQueryOption, SaveCSVOption, SaveJSONOption]);
    };

    this.onFilterChange = (id, value = '', cb) => {
      const {
        filtered
      } = this.state;

      if (!value) {
        delete filtered[id];
      } else {
        filtered[id] = {
          id,
          value,
          regex: toRegEx(value)
        };
      }

      this.setState({
        filtered
      }, () => cb ? cb(value) : void 0);
    };

    this.onPageChange = page => this.setState({
      page
    });

    this.onMenuSelect = choice => {
      const {
        clickedData
      } = this.state;

      switch (choice) {
        case FilterByValueOption:
          const {
            filtered = {}
          } = this.state;
          this.setState({
            filtered: Object.assign({}, filtered, {
              [clickedData.col]: {
                id: clickedData.col,
                value: clickedData.value,
                regex: clickedData.value
              }
            })
          });

        case CopyCellOption:
          this.clipboardInsert(clickedData.value);
          break;

        case CopyRowOption:
          this.clipboardInsert(this.props.data[clickedData.index] || 'Failed');
          break;

        case ClearFiltersOption:
          this.setState({
            filtered: {}
          });
          break;

        case OpenEditorWithValueOption:
          vscode_1.default().postMessage({
            action: 'call',
            payload: {
              command: `${"SQLTools"}.insertText`,
              args: [clickedData.value]
            }
          });
          break;

        case OpenEditorWithRowOption:
          vscode_1.default().postMessage({
            action: 'call',
            payload: {
              command: `${"SQLTools"}.insertText`,
              args: [JSON.stringify(this.props.data[clickedData.index], null, 2)]
            }
          });
          break;

        case ReRunQueryOption:
          vscode_1.default().postMessage({
            action: 'call',
            payload: {
              command: `${"SQLTools"}.executeQuery`,
              args: [this.props.query, this.props.connId]
            }
          });
          break;

        case SaveCSVOption:
          vscode_1.default().postMessage({
            action: 'call',
            payload: {
              command: `${"SQLTools"}.saveResults`,
              args: ['csv', this.props.connId]
            }
          });
          break;

        case SaveJSONOption:
          vscode_1.default().postMessage({
            action: 'call',
            payload: {
              command: `${"SQLTools"}.saveResults`,
              args: ['json', this.props.connId]
            }
          });
          break;
      }

      this.onTableClick();
    };

    this.handleScroll = () => {
      const tbody = this.tbodyRef && this.tbodyRef.current;
      if (!tbody) return;
      let headers = document.querySelectorAll('.rt-thead') || [];
      headers.forEach(header => {
        header.scrollLeft = tbody.scrollLeft;
      });
    };

    this.tbodyRef = react_1.default.createRef();
  }

  highlightClickedRow(e, cb = () => void 0) {
    let node = e.target;

    if (!node.matches('.copy-allowed')) {
      node = node.closest('.copy-allowed');
    }

    if (!node) return;
    const {
      value,
      index,
      col
    } = node.dataset;

    if (typeof index === 'undefined' || typeof col === 'undefined') {
      return;
    }

    this.setState({
      clickedData: {
        value,
        col,
        index: parseInt(index)
      }
    }, () => cb());
  }

  clipboardInsert(value) {
    value = typeof value === 'string' ? value : JSON.stringify(value, null, 2);
    utils_1.clipboardInsert(value);
  }

  getSnapshotBeforeUpdate() {
    try {
      const tbody = this.tbodyRef && this.tbodyRef.current;

      if (tbody) {
        const {
          scrollHeight,
          scrollLeft,
          scrollTop,
          scrollWidth
        } = tbody;
        return {
          scrollHeight,
          scrollLeft,
          scrollTop,
          scrollWidth
        };
      }
    } catch (e) {}

    return null;
  }

  componentDidUpdate(_, __, snapshot) {
    if (!snapshot) return;
    const tbody = this.tbodyRef && this.tbodyRef.current;
    if (!tbody) return;
    tbody.scrollLeft = snapshot.scrollLeft;
    tbody.scrollTop = snapshot.scrollTop;
  }

  render() {
    const firstRow = this.props.data[0] || {};
    const cols = this.props.cols.map(c => getSizeForItem(c, firstRow[c]));

    if (cols.length > 0 && cols.length < 8) {
      delete cols[0].width;
    }

    return react_1.default.createElement("div", {
      onContextMenu: this.openContextMenu,
      onClick: this.onTableClick,
      className: "react-table-clickable"
    }, react_1.default.createElement(react_table_1.default, {
      noDataText: "Query didn't return any results.",
      data: this.props.data,
      columns: cols,
      column: this.columnDefault,
      filterable: true,
      filtered: Object.values(this.state.filtered),
      FilterComponent: ({
        column,
        onChange
      }) => react_1.default.createElement(FilterComponent, {
        filter: this.state.filtered[column.id],
        column: column,
        onChange: (id, value) => this.onFilterChange(id, value, onChange)
      }),
      pageSize: this.props.paginationSize,
      showPagination: this.props.data.length > this.props.paginationSize,
      minRows: this.props.data.length === 0 ? 1 : Math.min(this.props.paginationSize, this.props.data.length),
      getTrProps: (_, rowInfo) => {
        if (!rowInfo) return {};
        if (rowInfo && rowInfo.index === this.state.clickedData.index) return {
          className: ' active-row'
        };
        return {};
      },
      onPageChange: this.onPageChange,
      page: this.state.page,
      getTdProps: (_, rowInfo, column) => {
        if (!rowInfo || !column) return {};

        try {
          const v = rowInfo.original[column.id];
          const props = {
            className: 'copy-allowed',
            'data-value': v === null ? 'null' : v,
            'data-col': column.id,
            'data-index': rowInfo.index
          };
          if (v === null) props.className += ' td-null';
          if (v === true) props.className += ' td-badge green';
          if (v === false) props.className += ' td-badge red';

          if (column.id === this.state.clickedData.col && rowInfo && rowInfo.index === this.state.clickedData.index) {
            props.className += ' active-cell';
          }

          return props;
        } catch (e) {}

        return {};
      },
      defaultFilterMethod: (filter, row) => {
        const filterData = this.state.filtered[filter.id];
        if (!filterData || typeof row[filter.id] === 'undefined') return true;
        const {
          regex,
          value
        } = filterData;
        const position = `${row[filter.id]}`.search(regex || value);
        return position !== -1;
      },
      className: "-striped -highlight",
      TbodyComponent: props => react_1.default.createElement(TbodyComponent, Object.assign({}, props, {
        onScroll: this.handleScroll,
        ref: this.tbodyRef
      })),
      TrGroupComponent: TrGroupComponent,
      style: {
        width: '100%',
        height: '100%'
      }
    }), react_1.default.createElement(Menu_1.default, Object.assign({}, this.state.contextMenu, {
      width: 250,
      onSelect: this.onMenuSelect,
      options: this.tableContextOptions()
    })));
  }

}

ResultsTable.initialState = {
  page: 0,
  filtered: {},
  clickedData: {
    value: undefined,
    index: -1,
    col: undefined
  },
  contextMenu: {
    x: undefined,
    y: undefined,
    open: false
  }
};
exports.default = ResultsTable;

/***/ }),
/* 34 */,
/* 35 */,
/* 36 */
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

const Separator = () => react_1.default.createElement("div", {
  className: "context-menu-separator"
});

const Option = ({
  value,
  label,
  onSelect,
  command = undefined
}) => command ? react_1.default.createElement("a", {
  href: `command:${command}`,
  onClick: () => onSelect(value),
  className: "context-menu-option"
}, label) : react_1.default.createElement("div", {
  onClick: () => onSelect(value),
  className: "context-menu-option"
}, label);

exports.default = ({
  x,
  y,
  open,
  onSelect,
  options = [],
  width = 200
}) => {
  if (!open || options.length === 0) return null;
  return react_1.default.createElement("div", {
    className: "context-menu",
    style: {
      top: `${y}px`,
      left: `${Math.max(x - width, 15)}px`,
      width: `${width}px`
    }
  }, options.map((opt, index) => {
    if (opt === 'sep' || opt.value === 'sep') {
      return react_1.default.createElement(Separator, {
        key: index
      });
    }

    if (typeof opt === 'string') {
      return react_1.default.createElement(Option, {
        value: opt,
        label: opt,
        onSelect: onSelect,
        key: index
      });
    }

    return react_1.default.createElement(Option, {
      value: opt.value || opt.label,
      label: opt.label,
      onSelect: onSelect,
      command: opt.command,
      key: index
    });
  }));
};

/***/ }),
/* 37 */
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

exports.default = () => react_1.default.createElement("div", {
  style: {
    width: '50px',
    height: '50px',
    marginBottom: '30px'
  },
  dangerouslySetInnerHTML: {
    __html: `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 426.667 426.667" style="enable-background:new 0 0 426.667 426.667; width: 100%; height: 100%;" xml:space="preserve">
  <path style="fill:#F05228;" d="M213.333,0C95.514,0,0,95.514,0,213.333s95.514,213.333,213.333,213.333
    s213.333-95.514,213.333-213.333S331.153,0,213.333,0z M330.995,276.689l-54.302,54.306l-63.36-63.356l-63.36,63.36l-54.302-54.31
    l63.356-63.356l-63.356-63.36l54.302-54.302l63.36,63.356l63.36-63.356l54.302,54.302l-63.356,63.36L330.995,276.689z"/>
</svg>
`
  }
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(39);

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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// Module
exports.push([module.i, "* {\n  font-family: var(--vscode-font-family, var(--vscode-editor-font-family, var(--font-family)));\n  color: var(--vscode-editor-foreground, var(--color)); }\n\nbody {\n  font-size: var(--vscode-font-size, var(--vscode-editor-font-size, var(--font-size)));\n  background: var(--vscode-editor-background, var(--background-color)); }\n\ninput, select, select > option {\n  border-radius: 0;\n  background: var(--vscode-settings-textInputBackground);\n  border: 1px solid var(--vscode-input-border);\n  color: var(--vscode-settings-textInputForeground);\n  padding: 4px 8px; }\n\nselect {\n  padding: 4px 6px; }\n\n.fullscreen-container {\n  display: flex;\n  width: 100%;\n  height: 100%; }\n\n.capitalize {\n  text-transform: capitalize; }\n  .capitalize small {\n    margin-left: 10px;\n    text-transform: none; }\n\n::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.2);\n  text-transform: capitalize; }\n\n.vscode-dark {\n  color: rgba(255, 255, 255, 0.2); }\n  .vscode-dark ::-webkit-input-placeholder {\n    color: rgba(255, 255, 255, 0.2);\n    text-transform: capitalize; }\n\n.pointer {\n  cursor: pointer; }\n\n.btn, button {\n  background: var(--vscode-button-background, var(--link-color));\n  padding: 4px 8px;\n  color: var(--vscode-button-foreground);\n  border: 1px solid var(--vscode-input-border);\n  text-transform: uppercase;\n  cursor: pointer; }\n  .btn:disabled, .btn[disabled], button:disabled, button[disabled] {\n    opacity: 0.3;\n    cursor: not-allowed; }\n\n.backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: rgba(255, 255, 255, 0.5);\n  overflow: hidden;\n  display: none;\n  width: 100vw;\n  height: 100vh; }\n\n.loading {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: block; }\n  .loading .backdrop {\n    display: block; }\n  .loading div.spinner,\n  .loading div.spinner:after {\n    border-radius: 50%;\n    width: 10em;\n    height: 10em; }\n  .loading div.spinner {\n    margin: auto;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    font-size: 10px;\n    position: absolute;\n    text-indent: -9999em;\n    border-top: 1.1em solid rgba(0, 0, 0, 0.2);\n    border-right: 1.1em solid rgba(0, 0, 0, 0.2);\n    border-bottom: 1.1em solid rgba(0, 0, 0, 0.2);\n    border-left: 1.1em solid #ffffff;\n    transform: translate3d(0, -50%, 0);\n    animation: load8 1.1s infinite linear; }\n\n.vscode-dark .loading .backdrop {\n  background: rgba(0, 0, 0, 0.5); }\n\n.vscode-dark .loading div.spinner {\n  border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2); }\n\n@keyframes load8 {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.no-margin {\n  margin: 0 !important; }\n\n.no-margin-top {\n  margin-top: 0 !important; }\n\n.no-margin-bottom {\n  margin-bottom: 0 !important; }\n\n.no-margin-left {\n  margin-left: 0 !important; }\n\n.no-margin-right {\n  margin-right: 0 !important; }\n\n.no-padding {\n  padding: 0 !important; }\n\n.no-padding-top {\n  padding-top: 0 !important; }\n\n.no-padding-bottom {\n  padding-bottom: 0 !important; }\n\n.no-padding-left {\n  padding-left: 0 !important; }\n\n.no-padding-right {\n  padding-right: 0 !important; }\n\n.row.no-margin-first-top .col-* {\n  margin-top: 0 !important; }\n\n.relative {\n  position: relative !important; }\n\n.flex-full {\n  display: flex;\n  align-items: baseline; }\n  .flex-full > * {\n    flex-grow: 1; }\n\n* {\n  font-family: var(--vscode-font-family, var(--vscode-editor-font-family, var(--font-family)));\n  color: var(--vscode-editor-foreground, var(--color)); }\n\nbody {\n  font-size: var(--vscode-font-size, var(--vscode-editor-font-size, var(--font-size)));\n  background: var(--vscode-editor-background, var(--background-color)); }\n\ninput, select, select > option {\n  border-radius: 0;\n  background: var(--vscode-settings-textInputBackground);\n  border: 1px solid var(--vscode-input-border);\n  color: var(--vscode-settings-textInputForeground);\n  padding: 4px 8px; }\n\nselect {\n  padding: 4px 6px; }\n\n.fullscreen-container {\n  display: flex;\n  width: 100%;\n  height: 100%; }\n\n.capitalize {\n  text-transform: capitalize; }\n  .capitalize small {\n    margin-left: 10px;\n    text-transform: none; }\n\n::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.2);\n  text-transform: capitalize; }\n\n.vscode-dark {\n  color: rgba(255, 255, 255, 0.2); }\n  .vscode-dark ::-webkit-input-placeholder {\n    color: rgba(255, 255, 255, 0.2);\n    text-transform: capitalize; }\n\n.pointer {\n  cursor: pointer; }\n\n.btn, button {\n  background: var(--vscode-button-background, var(--link-color));\n  padding: 4px 8px;\n  color: var(--vscode-button-foreground);\n  border: 1px solid var(--vscode-input-border);\n  text-transform: uppercase;\n  cursor: pointer; }\n  .btn:disabled, .btn[disabled], button:disabled, button[disabled] {\n    opacity: 0.3;\n    cursor: not-allowed; }\n\n.backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: rgba(255, 255, 255, 0.5);\n  overflow: hidden;\n  display: none;\n  width: 100vw;\n  height: 100vh; }\n\n.loading {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: block; }\n  .loading .backdrop {\n    display: block; }\n  .loading div.spinner,\n  .loading div.spinner:after {\n    border-radius: 50%;\n    width: 10em;\n    height: 10em; }\n  .loading div.spinner {\n    margin: auto;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    font-size: 10px;\n    position: absolute;\n    text-indent: -9999em;\n    border-top: 1.1em solid rgba(0, 0, 0, 0.2);\n    border-right: 1.1em solid rgba(0, 0, 0, 0.2);\n    border-bottom: 1.1em solid rgba(0, 0, 0, 0.2);\n    border-left: 1.1em solid #ffffff;\n    transform: translate3d(0, -50%, 0);\n    animation: load8 1.1s infinite linear; }\n\n.vscode-dark .loading .backdrop {\n  background: rgba(0, 0, 0, 0.5); }\n\n.vscode-dark .loading div.spinner {\n  border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2); }\n\n@keyframes load8 {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.no-margin {\n  margin: 0 !important; }\n\n.no-margin-top {\n  margin-top: 0 !important; }\n\n.no-margin-bottom {\n  margin-bottom: 0 !important; }\n\n.no-margin-left {\n  margin-left: 0 !important; }\n\n.no-margin-right {\n  margin-right: 0 !important; }\n\n.no-padding {\n  padding: 0 !important; }\n\n.no-padding-top {\n  padding-top: 0 !important; }\n\n.no-padding-bottom {\n  padding-bottom: 0 !important; }\n\n.no-padding-left {\n  padding-left: 0 !important; }\n\n.no-padding-right {\n  padding-right: 0 !important; }\n\n.row.no-margin-first-top .col-* {\n  margin-top: 0 !important; }\n\n.relative {\n  position: relative !important; }\n\n.flex-full {\n  display: flex;\n  align-items: baseline; }\n  .flex-full > * {\n    flex-grow: 1; }\n\n* {\n  font-family: var(--vscode-font-family, var(--vscode-editor-font-family, var(--font-family)));\n  color: var(--vscode-editor-foreground, var(--color)); }\n\nbody {\n  font-size: var(--vscode-font-size, var(--vscode-editor-font-size, var(--font-size)));\n  background: var(--vscode-editor-background, var(--background-color)); }\n\ninput, select, select > option {\n  border-radius: 0;\n  background: var(--vscode-settings-textInputBackground);\n  border: 1px solid var(--vscode-input-border);\n  color: var(--vscode-settings-textInputForeground);\n  padding: 4px 8px; }\n\nselect {\n  padding: 4px 6px; }\n\n.fullscreen-container {\n  display: flex;\n  width: 100%;\n  height: 100%; }\n\n.capitalize {\n  text-transform: capitalize; }\n  .capitalize small {\n    margin-left: 10px;\n    text-transform: none; }\n\n::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.2);\n  text-transform: capitalize; }\n\n.vscode-dark {\n  color: rgba(255, 255, 255, 0.2); }\n  .vscode-dark ::-webkit-input-placeholder {\n    color: rgba(255, 255, 255, 0.2);\n    text-transform: capitalize; }\n\n.pointer {\n  cursor: pointer; }\n\n.btn, button {\n  background: var(--vscode-button-background, var(--link-color));\n  padding: 4px 8px;\n  color: var(--vscode-button-foreground);\n  border: 1px solid var(--vscode-input-border);\n  text-transform: uppercase;\n  cursor: pointer; }\n  .btn:disabled, .btn[disabled], button:disabled, button[disabled] {\n    opacity: 0.3;\n    cursor: not-allowed; }\n\n.backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: rgba(255, 255, 255, 0.5);\n  overflow: hidden;\n  display: none;\n  width: 100vw;\n  height: 100vh; }\n\n.loading {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: block; }\n  .loading .backdrop {\n    display: block; }\n  .loading div.spinner,\n  .loading div.spinner:after {\n    border-radius: 50%;\n    width: 10em;\n    height: 10em; }\n  .loading div.spinner {\n    margin: auto;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    font-size: 10px;\n    position: absolute;\n    text-indent: -9999em;\n    border-top: 1.1em solid rgba(0, 0, 0, 0.2);\n    border-right: 1.1em solid rgba(0, 0, 0, 0.2);\n    border-bottom: 1.1em solid rgba(0, 0, 0, 0.2);\n    border-left: 1.1em solid #ffffff;\n    transform: translate3d(0, -50%, 0);\n    animation: load8 1.1s infinite linear; }\n\n.vscode-dark .loading .backdrop {\n  background: rgba(0, 0, 0, 0.5); }\n\n.vscode-dark .loading div.spinner {\n  border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2); }\n\n@keyframes load8 {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.no-margin {\n  margin: 0 !important; }\n\n.no-margin-top {\n  margin-top: 0 !important; }\n\n.no-margin-bottom {\n  margin-bottom: 0 !important; }\n\n.no-margin-left {\n  margin-left: 0 !important; }\n\n.no-margin-right {\n  margin-right: 0 !important; }\n\n.no-padding {\n  padding: 0 !important; }\n\n.no-padding-top {\n  padding-top: 0 !important; }\n\n.no-padding-bottom {\n  padding-bottom: 0 !important; }\n\n.no-padding-left {\n  padding-left: 0 !important; }\n\n.no-padding-right {\n  padding-right: 0 !important; }\n\n.row.no-margin-first-top .col-* {\n  margin-top: 0 !important; }\n\n.relative {\n  position: relative !important; }\n\n.flex-full {\n  display: flex;\n  align-items: baseline; }\n  .flex-full > * {\n    flex-grow: 1; }\n\n* {\n  font-family: var(--font-family);\n  font-family: var(--vscode-editor-font-family, var(--font-family));\n  font-family: var(--vscode-font-family, var(--vscode-editor-font-family, var(--font-family)));\n  line-height: 1.5; }\n\nh1 {\n  font-size: 2.5rem; }\n\nh2 {\n  font-size: 2rem; }\n\nh3 {\n  font-size: 1.375rem; }\n\nh4 {\n  font-size: 1.125rem; }\n\nh5 {\n  font-size: 1rem; }\n\nh6 {\n  font-size: 0.875rem; }\n\np {\n  font-size: 1.125rem;\n  font-weight: 200;\n  line-height: 1.8; }\n\n.font-light {\n  font-weight: 300; }\n\n.font-regular {\n  font-weight: 400; }\n\n.font-heavy {\n  font-weight: 700; }\n\n.left {\n  text-align: left; }\n\n.right {\n  text-align: right; }\n\n.center {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto; }\n\n.justify {\n  text-align: justify; }\n\n.hidden-sm {\n  display: none; }\n\n.container {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1024px; }\n\n.row {\n  position: relative;\n  width: 100%; }\n\n.row [class^=\"col\"] {\n  float: left;\n  margin: 0.5rem 2%;\n  min-height: 0.125rem; }\n\n.row::after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.col-1,\n.col-2,\n.col-3,\n.col-4,\n.col-5,\n.col-6,\n.col-7,\n.col-8,\n.col-9,\n.col-10,\n.col-11,\n.col-12 {\n  width: 96%; }\n\n.col-1-sm {\n  width: 4.33333%; }\n\n.col-2-sm {\n  width: 12.66667%; }\n\n.col-3-sm {\n  width: 21%; }\n\n.col-4-sm {\n  width: 29.33333%; }\n\n.col-5-sm {\n  width: 37.66667%; }\n\n.col-6-sm {\n  width: 46%; }\n\n.col-7-sm {\n  width: 54.33333%; }\n\n.col-8-sm {\n  width: 62.66667%; }\n\n.col-9-sm {\n  width: 71%; }\n\n.col-10-sm {\n  width: 79.33333%; }\n\n.col-11-sm {\n  width: 87.66667%; }\n\n.col-12-sm {\n  width: 96%; }\n\n@media only screen and (min-width: 1em) {\n  .col-1 {\n    width: 4.33333%; }\n  .col-2 {\n    width: 12.66667%; }\n  .col-3 {\n    width: 21%; }\n  .col-4 {\n    width: 29.33333%; }\n  .col-5 {\n    width: 37.66667%; }\n  .col-6 {\n    width: 46%; }\n  .col-7 {\n    width: 54.33333%; }\n  .col-8 {\n    width: 62.66667%; }\n  .col-9 {\n    width: 71%; }\n  .col-10 {\n    width: 79.33333%; }\n  .col-11 {\n    width: 87.66667%; }\n  .col-12 {\n    width: 96%; }\n  .hidden-sm {\n    display: block; } }\n\n.syntax {\n  background: var(--vscode-editor-background, #eaeaea);\n  border-radius: 3px;\n  padding: 4px; }\n  .syntax, .syntax * {\n    line-height: 1.2;\n    white-space: pre-wrap;\n    font-family: monospace; }\n  .syntax.json .key {\n    color: #00bcd4; }\n  .syntax.json .number {\n    color: #cddc39; }\n  .syntax.json .string {\n    color: #ffc107; }\n  .syntax.json .bool, .syntax.json .null {\n    color: #2196f3; }\n  .syntax pre {\n    text-overflow: ellipsis;\n    overflow: hidden; }\n\n.syntax.strong-bg {\n  background: rgba(0, 0, 0, 0.02); }\n\n.btn.copy-code {\n  position: absolute;\n  top: 0;\n  right: 0;\n  border-top-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n  background: rgba(255, 255, 255, 0.2);\n  font-size: 0.6em;\n  padding: 2px 4px;\n  cursor: copy; }\n\nbody.vscode-dark .syntax {\n  background: var(--vscode-editor-background, #222); }\n  body.vscode-dark .syntax.strong-bg {\n    background: rgba(255, 255, 255, 0.02); }\n\n.messages .message {\n  padding: 4px;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-bottom-color: rgba(0, 0, 0, 0.15); }\n  .messages .message:last-child {\n    border-bottom-color: transparent !important; }\n  .messages .message.error {\n    background: rgba(255, 0, 0, 0.2); }\n  .messages .message.success {\n    background: rgba(0, 255, 0, 0.4); }\n  .messages .message.attention {\n    border: 1px solid var(--vscode-inputValidation-warningBorder) !important;\n    padding: 4px;\n    background: var(--vscode-editorGroup-background); }\n  .messages .message .btn {\n    float: right;\n    padding: 0 4px;\n    margin: 0 4px;\n    color: white;\n    text-decoration: none;\n    font-weight: bold;\n    background: var(--vscode-editorLink-activeForeground);\n    text-transform: initial; }\n    .messages .message .btn.danger {\n      background: var(--vscode-editorError-foreground); }\n\n.messages.radius .message:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px; }\n\n.messages.radius .message:last-child {\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px; }\n\n.vscode-high-contrast .message .btn:not(.danger) {\n  background: var(--vscode-editorInfo-border);\n  border: 1px solid var --vscode-editorInfo-border; }\n\n.ReactTable {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  border: 1px solid rgba(0, 0, 0, 0.1); }\n\n.ReactTable * {\n  box-sizing: border-box; }\n\n.ReactTable .rt-table {\n  -webkit-box-flex: 1;\n  -ms-flex: auto 1;\n  flex: auto 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-align: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  width: 100%;\n  border-collapse: collapse;\n  overflow: auto; }\n\n.ReactTable .rt-thead {\n  -webkit-box-flex: 1;\n  -ms-flex: 1 0 auto;\n  flex: 1 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.ReactTable .rt-thead.-headerGroups {\n  background: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05); }\n\n.ReactTable .rt-thead.-filters {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05); }\n\n.ReactTable .rt-thead.-filters input, .ReactTable .rt-thead.-filters select {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  background: #fff;\n  padding: 5px 7px;\n  font-size: inherit;\n  border-radius: 3px;\n  font-weight: normal;\n  outline: none; }\n\n.ReactTable .rt-thead.-filters .rt-th {\n  border-right: 1px solid rgba(0, 0, 0, 0.02); }\n\n.ReactTable .rt-thead.-header {\n  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.15); }\n\n.ReactTable .rt-thead .rt-tr {\n  text-align: center; }\n\n.ReactTable .rt-thead .rt-th, .ReactTable .rt-thead .rt-td {\n  padding: 5px 5px;\n  line-height: normal;\n  position: relative;\n  border-right: 1px solid rgba(0, 0, 0, 0.05);\n  transition: box-shadow 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  box-shadow: inset 0 0 0 0 transparent; }\n\n.ReactTable .rt-thead .rt-th.-sort-asc, .ReactTable .rt-thead .rt-td.-sort-asc {\n  box-shadow: inset 0 3px 0 0 rgba(0, 0, 0, 0.6); }\n\n.ReactTable .rt-thead .rt-th.-sort-desc, .ReactTable .rt-thead .rt-td.-sort-desc {\n  box-shadow: inset 0 -3px 0 0 rgba(0, 0, 0, 0.6); }\n\n.ReactTable .rt-thead .rt-th.-cursor-pointer, .ReactTable .rt-thead .rt-td.-cursor-pointer {\n  cursor: pointer; }\n\n.ReactTable .rt-thead .rt-th:last-child, .ReactTable .rt-thead .rt-td:last-child {\n  border-right: 0; }\n\n.ReactTable .rt-thead .rt-resizable-header {\n  overflow: visible; }\n\n.ReactTable .rt-thead .rt-resizable-header:last-child {\n  overflow: hidden; }\n\n.ReactTable .rt-thead .rt-resizable-header-content {\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.ReactTable .rt-thead .rt-header-pivot {\n  border-right-color: #f7f7f7; }\n\n.ReactTable .rt-thead .rt-header-pivot:after, .ReactTable .rt-thead .rt-header-pivot:before {\n  left: 100%;\n  top: 50%;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none; }\n\n.ReactTable .rt-thead .rt-header-pivot:after {\n  border-color: rgba(255, 255, 255, 0);\n  border-left-color: #fff;\n  border-width: 8px;\n  margin-top: -8px; }\n\n.ReactTable .rt-thead .rt-header-pivot:before {\n  border-color: rgba(102, 102, 102, 0);\n  border-left-color: #f7f7f7;\n  border-width: 10px;\n  margin-top: -10px; }\n\n.ReactTable .rt-tbody {\n  -webkit-box-flex: 99999;\n  -ms-flex: 99999 1 auto;\n  flex: 99999 1 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  overflow: auto; }\n\n.ReactTable .rt-tbody .rt-tr-group {\n  border-bottom: solid 1px rgba(0, 0, 0, 0.05); }\n\n.ReactTable .rt-tbody .rt-tr-group:last-child {\n  border-bottom: 0; }\n\n.ReactTable .rt-tbody .rt-td {\n  border-right: 1px solid rgba(0, 0, 0, 0.02); }\n\n.ReactTable .rt-tbody .rt-td:last-child {\n  border-right: 0; }\n\n.ReactTable .rt-tbody .rt-expandable {\n  cursor: pointer;\n  text-overflow: clip; }\n\n.ReactTable .rt-tr-group {\n  -webkit-box-flex: 1;\n  -ms-flex: 1 0 auto;\n  flex: 1 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-align: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch; }\n\n.ReactTable .rt-tr {\n  -webkit-box-flex: 1;\n  -ms-flex: 1 0 auto;\n  flex: 1 0 auto;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.ReactTable .rt-th, .ReactTable .rt-td {\n  -webkit-box-flex: 1;\n  -ms-flex: 1 0 0px;\n  flex: 1 0 0;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 7px 5px;\n  overflow: hidden;\n  transition: .3s ease;\n  transition-property: width,min-width,padding,opacity; }\n\n.ReactTable .rt-th.-hidden, .ReactTable .rt-td.-hidden {\n  width: 0 !important;\n  min-width: 0 !important;\n  padding: 0 !important;\n  border: 0 !important;\n  opacity: 0 !important; }\n\n.ReactTable .rt-expander {\n  display: inline-block;\n  position: relative;\n  margin: 0;\n  color: transparent;\n  margin: 0 10px; }\n\n.ReactTable .rt-expander:after {\n  content: '';\n  position: absolute;\n  width: 0;\n  height: 0;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%) rotate(-90deg);\n  transform: translate(-50%, -50%) rotate(-90deg);\n  border-left: 5.04px solid transparent;\n  border-right: 5.04px solid transparent;\n  border-top: 7px solid rgba(0, 0, 0, 0.8);\n  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  cursor: pointer; }\n\n.ReactTable .rt-expander.-open:after {\n  -webkit-transform: translate(-50%, -50%) rotate(0);\n  transform: translate(-50%, -50%) rotate(0); }\n\n.ReactTable .rt-resizer {\n  display: inline-block;\n  position: absolute;\n  width: 36px;\n  top: 0;\n  bottom: 0;\n  right: -18px;\n  cursor: col-resize;\n  z-index: 10; }\n\n.ReactTable .rt-tfoot {\n  -webkit-box-flex: 1;\n  -ms-flex: 1 0 auto;\n  flex: 1 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15); }\n\n.ReactTable .rt-tfoot .rt-td {\n  border-right: 1px solid rgba(0, 0, 0, 0.05); }\n\n.ReactTable .rt-tfoot .rt-td:last-child {\n  border-right: 0; }\n\n.ReactTable.-striped .rt-tr.-odd {\n  background: rgba(0, 0, 0, 0.03); }\n\n.ReactTable.-highlight .rt-tbody .rt-tr:not(.-padRow):hover {\n  background: rgba(0, 0, 0, 0.05); }\n\n.ReactTable .-pagination {\n  z-index: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -webkit-box-align: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  padding: 3px;\n  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);\n  border-top: 2px solid rgba(0, 0, 0, 0.1); }\n\n.ReactTable .-pagination input, .ReactTable .-pagination select {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  background: #fff;\n  padding: 5px 7px;\n  font-size: inherit;\n  border-radius: 3px;\n  font-weight: normal;\n  outline: none; }\n\n.ReactTable .-pagination .-btn {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  display: block;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  border-radius: 3px;\n  padding: 6px;\n  font-size: 1em;\n  color: rgba(0, 0, 0, 0.6);\n  background: rgba(0, 0, 0, 0.1);\n  transition: all .1s ease;\n  cursor: pointer;\n  outline: none; }\n\n.ReactTable .-pagination .-btn[disabled] {\n  opacity: .5;\n  cursor: default; }\n\n.ReactTable .-pagination .-btn:not([disabled]):hover {\n  background: rgba(0, 0, 0, 0.3);\n  color: #fff; }\n\n.ReactTable .-pagination .-previous, .ReactTable .-pagination .-next {\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  text-align: center; }\n\n.ReactTable .-pagination .-center {\n  -webkit-box-flex: 1.5;\n  -ms-flex: 1.5;\n  flex: 1.5;\n  text-align: center;\n  margin-bottom: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: distribute;\n  justify-content: space-around; }\n\n.ReactTable .-pagination .-pageInfo {\n  display: inline-block;\n  margin: 3px 10px;\n  white-space: nowrap; }\n\n.ReactTable .-pagination .-pageJump {\n  display: inline-block; }\n\n.ReactTable .-pagination .-pageJump input {\n  width: 70px;\n  text-align: center; }\n\n.ReactTable .-pagination .-pageSizeOptions {\n  margin: 3px 10px; }\n\n.ReactTable .rt-noData {\n  display: block;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  background: rgba(255, 255, 255, 0.8);\n  transition: all .3s ease;\n  z-index: 1;\n  pointer-events: none;\n  padding: 20px;\n  color: rgba(0, 0, 0, 0.5); }\n\n.ReactTable .-loading {\n  display: block;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.8);\n  transition: all .3s ease;\n  z-index: -1;\n  opacity: 0;\n  pointer-events: none; }\n\n.ReactTable .-loading > div {\n  position: absolute;\n  display: block;\n  text-align: center;\n  width: 100%;\n  top: 50%;\n  left: 0;\n  font-size: 15px;\n  color: rgba(0, 0, 0, 0.6);\n  -webkit-transform: translateY(-52%);\n  transform: translateY(-52%);\n  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94); }\n\n.ReactTable .-loading.-active {\n  opacity: 1;\n  z-index: 2;\n  pointer-events: all; }\n\n.ReactTable .-loading.-active > div {\n  -webkit-transform: translateY(50%);\n  transform: translateY(50%); }\n\n.ReactTable .rt-resizing .rt-th, .ReactTable .rt-resizing .rt-td {\n  transition: none !important;\n  cursor: col-resize;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\nbody {\n  font-size: var(--vscode-font-size, var(--vscode-editor-font-size, var(--font-size)));\n  font-family: var(--vscode-font-family, var(--vscode-editor-font-family, var(--font-family)));\n  color: var(--vscode-editor-foreground, var(--color));\n  background: var(--vscode-editor-background, var(--background-color));\n  display: flex;\n  width: 100%;\n  height: 100%; }\n  body ::-webkit-scrollbar-corner {\n    display: none; }\n\npre {\n  margin: 0;\n  padding: 4px; }\n\n.query-results-container {\n  display: flex;\n  flex-direction: column; }\n\n.query-results-container, .query-results-container * {\n  font-size: var(--sqltools-font-size, var(--vscode-font-size, var(--vscode-editor-font-size, var(--font-size))));\n  font-family: var(--sqltools-font-family, var(--vscode-font-family, var(--vscode-editor-font-family, var(--font-family)))); }\n\nbody,\nhtml,\n#root {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  width: 100%;\n  overflow-x: hidden; }\n\nbody, #root {\n  min-height: 100%;\n  max-height: 100%;\n  height: 100%;\n  width: 100%; }\n\n.result {\n  overflow: hidden;\n  display: flex;\n  flex-grow: 1;\n  min-height: 0;\n  flex-direction: column;\n  background: rgba(0, 0, 0, 0.05) !important; }\n  .result .syntax {\n    padding: 3px;\n    cursor: pointer; }\n  .result .results-table {\n    overflow: hidden;\n    height: 100%;\n    display: flex;\n    flex: 1; }\n    .result .results-table > div {\n      flex: 1;\n      width: 100%;\n      display: flex; }\n  .result .query-extras {\n    width: 100%;\n    background: var(--vscode-editor-background, var(--background-color));\n    flex-grow: 0; }\n\n.truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  overflow-x: auto; }\n\n.tabs {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  clear: both;\n  min-height: 30px;\n  max-height: 30px;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  display: flex;\n  overflow-x: auto;\n  overflow-y: hidden;\n  flex-grow: 0; }\n  .tabs::-webkit-scrollbar {\n    height: 2px;\n    transition: all 0.3s ease 0s; }\n  .tabs::-webkit-scrollbar {\n    height: 6px; }\n  .tabs li {\n    overflow: hidden;\n    height: 30px;\n    line-height: 30px;\n    vertical-align: middle;\n    float: left;\n    padding: 0px 4px;\n    min-width: 100px;\n    list-style: none;\n    margin-right: 1px;\n    border-width: 1px;\n    border-style: solid;\n    border-bottom-width: 0px;\n    border-bottom-style: solid;\n    font-size: 0.8em;\n    cursor: pointer;\n    flex-grow: 1;\n    max-width: 350px; }\n\n.collapse {\n  border-width: 1px;\n  border-style: solid;\n  border-bottom-width: 0;\n  border-left-width: 0;\n  border-right-width: 0;\n  border-color: rgba(0, 0, 0, 0.15);\n  transition: all 0.3s ease 0s; }\n  .collapse .collapse-toggle {\n    cursor: pointer;\n    background-color: rgba(0, 0, 0, 0.1);\n    text-transform: uppercase;\n    height: 29px;\n    line-height: 29px;\n    vertical-align: middle;\n    padding: 0px 4px;\n    font-size: 0.7em;\n    cursor: pointer; }\n    .collapse .collapse-toggle .icon {\n      transition: all 0.3s ease 0s;\n      padding: 4.5px;\n      display: block;\n      width: 20px;\n      height: 20px;\n      float: right;\n      background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANwSURBVGiB7drdi1VVGAbw3+joNOIXY1qEzpXSF0Z0E0lQNgV6oeiFgl54EwWmkBHd119QEUIQ9F9EBRZpUfmF47eOWmJdRKWl+FHM4HSx1pqzZzhn5ux91pzJgw9sFuy91vM+714fe6333dzH/wtdGbn6MIAX8ChWYeGEOtdxEeewH1/hr4waKmMutuJzjGC05DWCz7AFc1oRUrVH5mEn9mB5vDeCg9iH4ziD3ye0W4Yn8LTQe8+iOz77Be/jY9ypqKsUNuGy2lv9Ea8JQ6ssluB14QUkvp+wMYfQRpiHT4134MWM/C/hcIH/E/Rm5AcPYzAauIk3MCu3kci5G7eiraN4KBd5Py5E4lN4PBfxJHgSZ6PN81jRKmE/rkTCfZjfKmEJLMK30fYlPFKV6AGha9N8WJBDXUkswKGo4TB6qpDsjQRnhdVlprAUQ1HLh2Ubr4sNbwnjdabxFG7jLl5utlGvMCZHsSuDiLSctoo3I8+QMOynxDtqY3J2BgG5HJmNY5Frz1SV5+PPWHltBuPkcwReiVy/CR/ohtgRKx7JZJi8jnSp9cr2ySp+HSu9mskweR0h7M1G8WWjCn3CDvYfLM5oOLcjS/AvhhXOO8X90lphQn2HvzMazo2r+EHY/o/N46Ijz8VyfxtFVcU3sVyTbhQdSR++wXapaQFJ49jHuujIylheaJuc6kgaV9Z7eFWYlFVOepMh92SHByPnH+lGd+Fh2qLfbIKoirAybaaKJSSNY8eKeqe83G9vOpA0jjlcdCR52cy5o6vE1UqbRkgab9Rz5FoslzVBNNNI5/ikeZwj52P5WNvkVEfSmDSPc+RcLFe3TU51JI1J8zhHDsRyoG1yqiOdEg/Ue9gxm8ZrQsinB9syGs6NbULw/AuFVWsiOuZg1YNfY8X1mYzndGRD5LqsiTRERwQf6KBwEB0SoEvoiJApHRTEJvTEabXcSMt5ihLoL9gelOEjXUz0XBISmdONZ/CzjImehGLq7baQHuuetEU1dAur0x3TkHpL6MVHwsoxipPCByoHuoRMbhpKd/GBEstsFQyoDbU0CVtNTx8p8A3JF0CfEr14W0jyJwHDQpTyXWwWfuMoTtDF8d5mvBfrDhfaX8FbprkXGuGe/4WjHhbheSGMuTpefWpnhhtC7OwUTuB7oVcabsXv417GfxeiENO2cND/AAAAAElFTkSuQmCC\") !important;\n      background-size: 20px !important;\n      background-position: center center !important;\n      background-repeat: no-repeat !important; }\n  .collapse .collapsible {\n    transition: all 0.3s ease 0s;\n    width: 100%;\n    overflow: auto;\n    max-height: 0px; }\n  .collapse.open .collapse-toggle .icon {\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANeSURBVGiB7drdi1VVGMfxz+TUOKIpo1lEzZXRG0Z0I0VQNgV1UeRFgV10Ewm9QEZ0X39BhQRC0H8RFVikRW8aTa/qmCXWRVSjKb4UMzhdrLXm7DOcM3P2OnvvyYNf2CzYe61n/dZZ789zuMT/i6EKbY1hAvfgRtyAKxfkOYWfcAh78QFOVqghmyvwON7FLOZKPrN4B4/h8n6E5PbIKjyDnbguvpvFF9iDb/Aj/lhQbiNuwe1C723BcPz2K17DbpzP1FWKR3FM61f9HE8LQ6ss67FD+AGSvZ/xSBVCu7EKb2tvwL0V2r8P+wv238JohfbBNZiMFZzBs7is6kqizedxNtb1Fa6uyvg4jkTD3+Pmqgwvwq04GOs8jOv7NTiO49HgHqzu12AJ1uLjWPdRXJtraKXQtWk+rKlCXUnW4MuoYT9Gcoy8GQ0cFFaX5eIqTEUtb5Qt/GAseFYYr8vNbTiHC7i/10Kjwpicw3P16MriBUHTlDDsl+RlrTG5oj5dpVmBrwVtO5fKvBp/xcxb69WVxQOCtt+FDborT8aMBxoQlcOQVq88sVjGD2OmpxoQlcsOQeP73TKMCSfYf7CuIVE5rMe/mFG47xTPS1uFCfUJ/m5UWjmm8Zlw/J+fx8WG3BnTvQ2KyuWjmN6VXhQbkja+yabU9EHSOL9ZFxuyKaZHGpOTT9K4qdPHaWE1yLnpNc0GQeuf6cVw4WM6op/pwdBchaI6sZQvIWmcv1Z0uuXVLbIKksb5BhcbklrZy71jqOZnKdL+cbpTQ07EdGMPhpabpDFpbmvI4Zje1JicfJLGpLmtIYdiurkxOfkkjUlzW0P2xXSiMTn5pFvivk4fB+bQeEJw+Yxge6PSyrFdcJ6/p7BqLWRgLlYj+C1mfKh+XaV5WNB2TA9hiIFwPjBA7iAGxEGXGAiXKQPkxCb0xA9asZG+4xQlGC/UPamCTboY6DkqBDLr5g78osJAT6IYejsnhMeGFy2Rx7CwOp1XQ+gtMYpdwsoxh++EDaoKhoRIbhpKF/C6EstsDhNaQy1Nwn7D0wcK9qY06EAfxUtCkD8JmBG8lK9gm/A3juIEXRffbcOrMe9MofxxvKjmXujGRf8Xjk6sxd2CG3NzfMa0OwqmhWX8W3wq9ErXo/glLmb+AwTq998URjZ+AAAAAElFTkSuQmCC\") !important; }\n  .collapse.open .collapsible {\n    max-height: 100px; }\n\n.ReactTable .rt-thead.-filters input,\n.ReactTable .rt-thead.-filters select,\n.ReactTable .-pagination input,\n.ReactTable .-pagination select,\n.ReactTable .-pagination .-btn {\n  border-radius: 0;\n  background: rgba(0, 0, 0, 0.05);\n  border: 1px solid var(--vscode-input-border);\n  color: 1px solid var(--vscode-input-foreground); }\n\n.tabs {\n  border-bottom-color: rgba(0, 0, 0, 0.05) !important; }\n  .tabs li {\n    border-color: rgba(0, 0, 0, 0.05) !important; }\n    .tabs li:hover {\n      background: rgba(0, 0, 0, 0.15) !important; }\n    .tabs li.active {\n      font-weight: bold;\n      background: rgba(0, 0, 0, 0.05) !important;\n      cursor: initial; }\n\nbody.vscode-dark .tabs, body.vscode-high-contrast .tabs {\n  border-bottom-color: rgba(255, 255, 255, 0.05) !important; }\n  body.vscode-dark .tabs li, body.vscode-high-contrast .tabs li {\n    border-color: rgba(255, 255, 255, 0.05) !important; }\n    body.vscode-dark .tabs li:hover, body.vscode-high-contrast .tabs li:hover {\n      background: rgba(255, 255, 255, 0.15) !important; }\n    body.vscode-dark .tabs li.active, body.vscode-high-contrast .tabs li.active {\n      background: rgba(255, 255, 255, 0.05) !important; }\n\nbody.vscode-dark .result, body.vscode-high-contrast .result {\n  background: rgba(255, 255, 255, 0.05) !important; }\n\nbody.vscode-dark .ReactTable, body.vscode-high-contrast .ReactTable {\n  display: flex;\n  max-height: 100%;\n  overflow: hidden;\n  width: 100vw;\n  flex-direction: column; }\n  body.vscode-dark .ReactTable.-striped .rt-tr.-odd, body.vscode-high-contrast .ReactTable.-striped .rt-tr.-odd {\n    background: rgba(255, 255, 255, 0.03); }\n  body.vscode-dark .ReactTable .-pagination .-btn, body.vscode-high-contrast .ReactTable .-pagination .-btn {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 0px;\n    padding: 6px;\n    font-size: 1em;\n    color: rgba(255, 255, 255, 0.6);\n    background: rgba(255, 255, 255, 0.1);\n    transition: all 0.3s ease 0s;\n    cursor: pointer;\n    outline: none; }\n\nbody.vscode-dark .collapse, body.vscode-high-contrast .collapse {\n  border-color: rgba(255, 255, 255, 0.15) !important;\n  color: var(--vscode-editor-foreground, var(--color)); }\n  body.vscode-dark .collapse .collapse-toggle, body.vscode-high-contrast .collapse .collapse-toggle {\n    background-color: rgba(255, 255, 255, 0.1) !important; }\n    body.vscode-dark .collapse .collapse-toggle .icon, body.vscode-high-contrast .collapse .collapse-toggle .icon {\n      background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAC+klEQVR42u1aW0uUQRjePK6huWpRBHprsRDhL+gIHdA2rC666CYSKqEiuhQU6kLoorCugv5DZVQUIeRFRxIqKiWT6iI6QVCpGLs+bzxfvGyf6+fu7LffTL7wMAvvzDPzzOGd+WY2Fls0Ry2TyTQCe4ELwG1gAvimkU6n39I3AOwBGqLS+CpgHxp4A+nvzMJNylxnB1SWQsBS4CQEvFeNmgGGgV5gN9AqPZ6FVvr6mHfGKwyud0hOADVhiUhx2nh2HzgkUysPriagCyIeKL5xoKPYo3A5S8AGg/ybgEeK/5Lx0QHhKvTaCKfADyRHgLIidFYZ0A38pJgnwEpT5C3AGEU8R7I2hOmbRF0vWedrJM0Fi+AiFLsD1IYYUOpR9z3W/QZYnS9RnEPrrYe6EkTHOuAh2yDrpzofkoscWhniphLuVSuAUYo5v9DC21hQFl0yAhvvOuCX9CuwJWihGs5JsaMGGvHHDPAcI5WMTjxIgVNqTpZHSEg58JR0x+fLXIs18YWZNxqaFkaEkGsr6T7KBp0r4wFmfGxwfpsUskSNyv5cGe8y08EoCiFfF6PprVzfE3KsngISERYiB81pnpyX+WXo9HZww6HTqBByDpF2l5/zLJ09FgjpJW3/P05+5Ym1WyAkRdpBP+cYnWssEJIk7Ss/51c6Gy0QspyR67Ofc5p1VgVtXLEs4MlcbDKXkEoLhFQz65QrU+uT04t9kM6UBUI6OSJX3N0Q5VKMziELhAyTdqe7h0YeU26y3sMRFtJNymv/xYeVbDQfmHF7BIW0k25i3o3bicsHp66DnLmgU4XtvzJVR2X7L7HV5vNCvY00hyiiRdU9UvAmrR96GATWhyCijU/ZZh56FPHfpzcuOtldK4ogoILRadL401tWWB5g5BB7ZurGhTt2hzeVWMe5wGE2z0o3q6nmLcKCnqflSKT4Rk1doAcdnSB/GEioMomAfxiIx0oQHu3+C8ccourlQwc4A2FXJeoA31WPy+9x8SE9DeyY83ti0RywWQLBsp3QUNTrAAAAAElFTkSuQmCC\") !important; }\n  body.vscode-dark .collapse .collapsible, body.vscode-high-contrast .collapse .collapsible {\n    color: var(--vscode-editor-foreground, var(--color)); }\n  body.vscode-dark .collapse.open .collapse-toggle .icon, body.vscode-high-contrast .collapse.open .collapse-toggle .icon {\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAC8UlEQVR42u1aW0tUURSevI6hOd4oAn21GAjxF2QlVKJNWD300EskVEJF+Cgo1EPQQ2E9Cf2HSskoQsiHriRUVEom1UN0g6BSMWb8FnwnFtNxPM6cObP3yQUfZ2Dtvfb69mWtfZlIZE1CKqlUqhY4CFwB7gCzwHeNZDL5jroh4ABQY4rzZcAhOHgL3z+p1YvUGWUHlBaCwHrgLAh8UE4tAhPAALAfaJYeT0MzdYMsu+hUhq33+JwBKoIikeC0ceQBcEymVha26oAekHio7M0AXfkehWtpBLb7aH8H8FjZH/Z9dGBwE3ptklPgJz4ngKI8dFYR0Av8IpmnwEa/jDcB0yTxAp+tAUzfONp6xTbf4NOYMwkuQpG7QGWAAaUabd9n22+BzdkainJonfVQVYDoWAU8og+yfsqzMXKVQytDXFfAXNUATJHM5dVW3s2KsujiBiTebcBv6Vdgl9dKFZyTIicN2gKdok8yOlEvFfrUnCw2iEgx8Iy+nV6pcCXWxFcWbjNwY9pO3z5Jgs5U8AgLPjF0h71OjcrhTAXvsdBRg48LPYymtzOdJ2RbPQ/EDCYiG80F7pw3uBXodjK4BYe4cfq6z015kcp+C4gM0NcL/yh5yhPptIBIgr6OuCmnqdxiAZE4fX3tpvxGZa0FROoZub64KRdIpMyDobyKx525yFwmIqUWECln0Xnbp1YDp9bnUC/2ESoTFhDp5ohcD29ClEsxKsctIDJBXzvCu2nkNmWMTI8bTKSXPt78Lw5Wkmg+suAeA4l00rfZFRN3KC4fQnUdFJoLOlXZ/itTtVW2/xJbJZ+X6m2kMUASTartyZyTtH7oYRBoCYBEK5+y/XnoUYb/Pr1x0Ul2LckDgRJGpznfn97SwvIQI4fIc79uXJixu5ypxDYueQ6zWTa6U001ZxHm9DwtWyJlbyqwC3SOjpc/DMRUnZjHPwxEIwUIj3b/hWMZUtVy0AHOg9gNiTrAD9Xj8ntGdPieA/Yue55YkxDIEhnjA05aewj1AAAAAElFTkSuQmCC\") !important; }\n\nbody.vscode-dark .messages .message, body.vscode-high-contrast .messages .message {\n  border-bottom-color: rgba(255, 255, 255, 0.15); }\n  body.vscode-dark .messages .message:last-child, body.vscode-high-contrast .messages .message:last-child {\n    border-bottom-color: transparent !important; }\n\n.filter-highlight {\n  border-radius: 2px;\n  color: #333; }\n\ndiv mark:nth-child(even) {\n  background: cyan; }\n\ndiv mark:nth-child(odd) {\n  background: yellow; }\n\n.rt-td.td-badge > span {\n  font-size: 0.8em;\n  padding: 2px;\n  border-radius: 2px; }\n\n.rt-td.td-badge.green span {\n  background: #00b159;\n  color: #333; }\n\n.rt-td.td-badge.red span {\n  background: #d11141;\n  color: #fafafa; }\n\n.rt-td.td-null {\n  justify-content: space-around;\n  display: flex;\n  font-size: 0.8em; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.ReactTable .rt-tr-group {\n  flex-grow: 0;\n  border: none !important; }\n\n.ReactTable .rt-tbody .rt-td {\n  border-right: 1px solid rgba(0, 0, 0, 0.1); }\n\n.ReactTable .rt-tbody .rt-tr.-padRow {\n  display: none; }\n\n.ReactTable .rt-thead {\n  border-bottom: solid 1px rgba(0, 0, 0, 0.1); }\n  .ReactTable .rt-thead .rt-th, .ReactTable .rt-thead .rt-td {\n    border-right: 1px solid rgba(0, 0, 0, 0.1) !important;\n    outline: none; }\n\n.context-menu {\n  background: var(--vscode-menu-background);\n  position: absolute;\n  box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.6);\n  padding: 4px 0px;\n  overflow: hidden; }\n  .context-menu .context-menu-option {\n    display: block;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    padding: 4px 24px;\n    color: var(--vscode-menu-foreground);\n    text-decoration: none;\n    white-space: nowrap; }\n    .context-menu .context-menu-option:hover {\n      background: var(--vscode-menu-selectionBackground);\n      color: var(--vscode-menu-selectionForeground); }\n  .context-menu .context-menu-separator {\n    display: block;\n    margin: 4px 0px;\n    height: 1px;\n    background: var(--vscode-menu-separatorBackground);\n    opacity: 0.5; }\n\n.active-row {\n  background: var(--vscode-editor-selectionBackground) !important; }\n\n.active-cell {\n  background: var(--vscode-editor-selectionHighlightBackground) !important; }\n  .active-cell .syntax pre {\n    text-overflow: initial;\n    word-wrap: break-word; }\n\n.ReactTable .rt-table {\n  overflow: hidden; }\n\n.ReactTable .rt-thead,\n.ReactTable .rt-tbody {\n  min-width: auto !important; }\n\n.ReactTable .rt-thead {\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.ReactTable .rt-thead.-filters input, .ReactTable .rt-thead.-filters select, .ReactTable .-pagination input, .ReactTable .-pagination select,\n.ReactTable .rt-th, .ReactTable .rt-td,\n.ReactTable .rt-thead .rt-th, .ReactTable .rt-thead .rt-td {\n  padding: var(--sqltools-table-cell-padding, 5px 3px); }\n", ""]);


/***/ })
/******/ ]);
//# sourceMappingURL=Results.js.map