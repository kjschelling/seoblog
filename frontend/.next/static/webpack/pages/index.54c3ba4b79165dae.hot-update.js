"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/dist/reactstrap.modern.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Header = (args)=>{\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggle = ()=>setIsOpen(!isOpen);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Navbar, {\n            color: \"light\",\n            expand: \"md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavbarBrand, {\n                    href: \"/\",\n                    children: _config__WEBPACK_IMPORTED_MODULE_2__.APP_NAME\n                }, void 0, false, {\n                    fileName: \"/Users/kjschelling/Documents/dev/seoblog/frontend/components/Header.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavbarToggler, {\n                    onClick: toggle\n                }, void 0, false, {\n                    fileName: \"/Users/kjschelling/Documents/dev/seoblog/frontend/components/Header.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Collapse, {\n                    isOpen: isOpen,\n                    navbar: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Nav, {\n                            className: \"me-auto\",\n                            navbar: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavLink, {\n                                        href: \"/signin/\",\n                                        children: \"Sign In\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kjschelling/Documents/dev/seoblog/frontend/components/Header.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/kjschelling/Documents/dev/seoblog/frontend/components/Header.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavLink, {\n                                        href: \"/signup/\",\n                                        children: \"Sign Up\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kjschelling/Documents/dev/seoblog/frontend/components/Header.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/kjschelling/Documents/dev/seoblog/frontend/components/Header.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.UncontrolledDropdown, {\n                                    nav: true,\n                                    inNavbar: true,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.DropdownToggle, {\n                                            nav: true,\n                                            caret: true,\n                                            children: \"Options\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kjschelling/Documents/dev/seoblog/frontend/components/Header.js\",\n                                            lineNumber: 37,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu, {\n                                            end: true,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.DropdownItem, {\n                                                    children: \"Option 1\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/kjschelling/Documents/dev/seoblog/frontend/components/Header.js\",\n                                                    lineNumber: 41,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.DropdownItem, {\n                                                    children: \"Option 2\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/kjschelling/Documents/dev/seoblog/frontend/components/Header.js\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.DropdownItem, {\n                                                    divider: true\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/kjschelling/Documents/dev/seoblog/frontend/components/Header.js\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.DropdownItem, {\n                                                    children: \"Reset\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/kjschelling/Documents/dev/seoblog/frontend/components/Header.js\",\n                                                    lineNumber: 44,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/kjschelling/Documents/dev/seoblog/frontend/components/Header.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/kjschelling/Documents/dev/seoblog/frontend/components/Header.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kjschelling/Documents/dev/seoblog/frontend/components/Header.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.NavbarText, {\n                            children: \"Simple Text\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kjschelling/Documents/dev/seoblog/frontend/components/Header.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kjschelling/Documents/dev/seoblog/frontend/components/Header.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kjschelling/Documents/dev/seoblog/frontend/components/Header.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kjschelling/Documents/dev/seoblog/frontend/components/Header.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQXdDO0FBQ0g7QUFjakI7QUFFcEIsTUFBTWUsU0FBUyxDQUFDQyxPQUFTOztJQUN2QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR2pCLCtDQUFRQSxDQUFDLEtBQUs7SUFFMUMsTUFBTWtCLFNBQVMsSUFBTUQsVUFBVSxDQUFDRDtJQUVoQyxxQkFDRSw4REFBQ2pCLHVEQUFjO2tCQUNiLDRFQUFDSSw4Q0FBTUE7WUFBQ2lCLE9BQU07WUFBUUMsUUFBTzs7OEJBQzNCLDhEQUFDaEIsbURBQVdBO29CQUFDaUIsTUFBSzs4QkFBS3JCLDZDQUFRQTs7Ozs7OzhCQUMvQiw4REFBQ0cscURBQWFBO29CQUFDbUIsU0FBU0w7Ozs7Ozs4QkFDeEIsOERBQUNoQixnREFBUUE7b0JBQUNjLFFBQVFBO29CQUFRUSxNQUFNOztzQ0FDOUIsOERBQUNsQiwyQ0FBR0E7NEJBQUNtQixXQUFVOzRCQUFVRCxNQUFNOzs4Q0FDN0IsOERBQUNqQiwrQ0FBT0E7OENBQ04sNEVBQUNDLCtDQUFPQTt3Q0FBQ2MsTUFBSztrREFBVzs7Ozs7Ozs7Ozs7OENBRTNCLDhEQUFDZiwrQ0FBT0E7OENBQ04sNEVBQUNDLCtDQUFPQTt3Q0FBQ2MsTUFBSztrREFBVzs7Ozs7Ozs7Ozs7OENBRTNCLDhEQUFDYiw0REFBb0JBO29DQUFDaUIsR0FBRztvQ0FBQ0MsUUFBUTs7c0RBQ2hDLDhEQUFDakIsc0RBQWNBOzRDQUFDZ0IsR0FBRzs0Q0FBQ0UsS0FBSztzREFBQzs7Ozs7O3NEQUcxQiw4REFBQ2pCLG9EQUFZQTs0Q0FBQ2tCLEdBQUc7OzhEQUNmLDhEQUFDakIsb0RBQVlBOzhEQUFDOzs7Ozs7OERBQ2QsOERBQUNBLG9EQUFZQTs4REFBQzs7Ozs7OzhEQUNkLDhEQUFDQSxvREFBWUE7b0RBQUNrQixPQUFPOzs7Ozs7OERBQ3JCLDhEQUFDbEIsb0RBQVlBOzhEQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSXBCLDhEQUFDQyxrREFBVUE7c0NBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RCO0dBbkNNQztLQUFBQTtBQXFDTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qcz80ZGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQVBQX05BTUUgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQge1xuICBDb2xsYXBzZSxcbiAgTmF2YmFyLFxuICBOYXZiYXJUb2dnbGVyLFxuICBOYXZiYXJCcmFuZCxcbiAgTmF2LFxuICBOYXZJdGVtLFxuICBOYXZMaW5rLFxuICBVbmNvbnRyb2xsZWREcm9wZG93bixcbiAgRHJvcGRvd25Ub2dnbGUsXG4gIERyb3Bkb3duTWVudSxcbiAgRHJvcGRvd25JdGVtLFxuICBOYXZiYXJUZXh0LFxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuXG5jb25zdCBIZWFkZXIgPSAoYXJncykgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHNldElzT3BlbighaXNPcGVuKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxOYXZiYXIgY29sb3I9XCJsaWdodFwiIGV4cGFuZD1cIm1kXCI+XG4gICAgICAgIDxOYXZiYXJCcmFuZCBocmVmPVwiL1wiPntBUFBfTkFNRX08L05hdmJhckJyYW5kPlxuICAgICAgICA8TmF2YmFyVG9nZ2xlciBvbkNsaWNrPXt0b2dnbGV9IC8+XG4gICAgICAgIDxDb2xsYXBzZSBpc09wZW49e2lzT3Blbn0gbmF2YmFyPlxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWUtYXV0b1wiIG5hdmJhcj5cbiAgICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL3NpZ25pbi9cIj5TaWduIEluPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvc2lnbnVwL1wiPlNpZ24gVXA8L05hdkxpbms+XG4gICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgICA8VW5jb250cm9sbGVkRHJvcGRvd24gbmF2IGluTmF2YmFyPlxuICAgICAgICAgICAgICA8RHJvcGRvd25Ub2dnbGUgbmF2IGNhcmV0PlxuICAgICAgICAgICAgICAgIE9wdGlvbnNcbiAgICAgICAgICAgICAgPC9Ecm9wZG93blRvZ2dsZT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duTWVudSBlbmQ+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbT5PcHRpb24gMTwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+T3B0aW9uIDI8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtPlJlc2V0PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWREcm9wZG93bj5cbiAgICAgICAgICA8L05hdj5cbiAgICAgICAgICA8TmF2YmFyVGV4dD5TaW1wbGUgVGV4dDwvTmF2YmFyVGV4dD5cbiAgICAgICAgPC9Db2xsYXBzZT5cbiAgICAgIDwvTmF2YmFyPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFQUF9OQU1FIiwiQ29sbGFwc2UiLCJOYXZiYXIiLCJOYXZiYXJUb2dnbGVyIiwiTmF2YmFyQnJhbmQiLCJOYXYiLCJOYXZJdGVtIiwiTmF2TGluayIsIlVuY29udHJvbGxlZERyb3Bkb3duIiwiRHJvcGRvd25Ub2dnbGUiLCJEcm9wZG93bk1lbnUiLCJEcm9wZG93bkl0ZW0iLCJOYXZiYXJUZXh0IiwiSGVhZGVyIiwiYXJncyIsImlzT3BlbiIsInNldElzT3BlbiIsInRvZ2dsZSIsIkZyYWdtZW50IiwiY29sb3IiLCJleHBhbmQiLCJocmVmIiwib25DbGljayIsIm5hdmJhciIsImNsYXNzTmFtZSIsIm5hdiIsImluTmF2YmFyIiwiY2FyZXQiLCJlbmQiLCJkaXZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});