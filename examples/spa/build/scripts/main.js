/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".chunk.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "//localhost:5389/webapp/hybrid/src/spa/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*************************!*\
  !*** ./scripts/main.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Created by huangjianhua on 2015/12/24.
	 */
	
	window.DEFAULTCONFIG = {
	    defalutView: 'index',
	    childRoutes: {
	        list: __webpack_require__(/*! ../scripts/List */ 1),
	        detail: __webpack_require__(/*! ../scripts/Detail */ 4),
	        index: __webpack_require__(/*! ../scripts/Index */ 6)
	    }
	};
	
	window.addEventListener("popstate", function () {
	    var currentState = history.state;
	    /*
	     * 该干嘛干嘛
	     */
	    DF.loadView(currentState && currentState.viewPath || DEFAULTCONFIG.defalutView, false);
	
	    console.log('currentState ', currentState);
	});
	
	window.DF = {
	    //所有view的引用都保存下来了
	    VIEWREF: {},
	    //当前view
	    curView: '',
	    //动态引入view
	    loadView: function loadView(viewPath) {
	        var pushState = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	
	        var viewPath = viewPath.replace('.html', '');
	
	        !/* require.ensure */(function (require) {
	
	            //加载对应view
	            var ViewComponent = DEFAULTCONFIG.childRoutes[viewPath];
	
	            //获取组件
	            ViewComponent = ViewComponent.getComponent(viewPath, _loadView);
	
	            //引入组件的cb 函数
	            function _loadView(viewPath, ViewComponent) {
	                //判断view 是否存在
	                var $viewWrap = document.querySelector('#viewport');
	                var $view = document.querySelector('#' + viewPath);
	                var $viewports = document.querySelectorAll('.viewport');
	                //隐藏其它view
	                for (var i = 0; i < $viewports.length; i++) {
	                    $viewports[i].style.display = 'none';
	                }
	
	                if ($view) {
	                    $view.style.display = 'block';
	
	                    //如果有尚一个view，执行上一个view的onHide
	                    DF.curView && DF.VIEWREF[DF.curView].onHide();
	                    //执行view的onShow方法
	                    DF.VIEWREF[viewPath] && DF.VIEWREF[viewPath].onShow();
	                } else {
	                    //否则，创建1个view的节点
	                    var $createDiv = document.createElement("div");
	                    $createDiv.id = viewPath;
	                    $createDiv.className = 'viewport';
	                    $viewWrap.appendChild($createDiv);
	
	                    //渲染 react view
	                    var $wrap = document.querySelector('#' + viewPath);
	                    var $viewComponent = ReactDOM.render(React.createElement(ViewComponent, null), $wrap);
	
	                    //如果有尚一个view，执行上一个view的onHide
	                    DF.curView && DF.VIEWREF[DF.curView].onHide();
	                    //执行当前view的onShow
	                    $viewComponent.onShow();
	
	                    //每创建一个view 把引用存起来
	                    DF.VIEWREF[viewPath] = $viewComponent;
	
	                    //
	
	                    console.log('show pushState $viewComponent', pushState, $viewComponent);
	                }
	
	                //设置当前view
	                DF.curView = viewPath;
	
	                //渲染成功
	                if (pushState) {
	                    history.pushState({
	                        'viewPath': viewPath,
	                        'xm': '123'
	                    }, "页面标题", viewPath + '.html');
	                }
	            }
	
	            console.log('view 222 ', ViewComponent);
	        }(__webpack_require__));
	    },
	    //加载页面
	    goTo: function goTo(viewPath) {
	        var opt = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	        //打开方式, 1单页， 2 location.href
	        if (opt.targetModel) {
	            switch (opt.targetModel) {
	                case 1:
	                    break;
	                case 2:
	                    if (viewPath.indexOf('http://') > -1) {
	                        window.location.href = viewPath;
	                    } else {
	                        window.location.href = viewPath;
	                        //window.location.href = DF.baseUrl + viewPath;
	                    }
	                    break;
	                default:
	                    break;
	            }
	        }
	
	        //设置title
	        if (opt.title) {
	            DF.setTitle(opt.title);
	        }
	        //show loading
	        if (opt.showLoading) {
	            DF.showLoading();
	        }
	
	        DF.loadView(viewPath);
	    },
	
	    back: function back() {
	        history.back();
	    }
	
	};
	
	__webpack_require__(/*! ../styles/demo.css */ 8);
	
	//默认view
	var pathname = location.pathname.split('/').pop();
	if (pathname.indexOf('.html') > -1) {
	    DEFAULTCONFIG.defalutView = pathname;
	}
	
	//加载默认view
	DF.loadView(DEFAULTCONFIG.defalutView, false);

/***/ },
/* 1 */
/*!*******************************!*\
  !*** ./scripts/List/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Created by huangjianhua on 2015/12/24.
	 */
	
	module.exports = {
	    getComponent: function getComponent(viewPath, cb) {
	        __webpack_require__.e/* nsure */(1, function (require) {
	            cb(viewPath, __webpack_require__(/*! ./components/list */ 2));
	        });
	    }
	};

/***/ },
/* 2 */,
/* 3 */,
/* 4 */
/*!*********************************!*\
  !*** ./scripts/Detail/index.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Created by huangjianhua on 2015/12/24.
	 */
	
	module.exports = {
	    getComponent: function getComponent(viewPath, cb) {
	        __webpack_require__.e/* nsure */(2, function (require) {
	            cb(viewPath, __webpack_require__(/*! ./components/detail */ 5));
	        });
	    }
	};

/***/ },
/* 5 */,
/* 6 */
/*!********************************!*\
  !*** ./scripts/Index/index.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Created by huangjianhua on 2015/12/24.
	 */
	
	module.exports = {
	    getComponent: function getComponent(viewPath, cb) {
	        __webpack_require__.e/* nsure */(3, function (require) {
	            cb(viewPath, __webpack_require__(/*! ./components/index */ 7));
	        });
	    }
	};

/***/ },
/* 7 */,
/* 8 */
/*!*************************!*\
  !*** ./styles/demo.css ***!
  \*************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map