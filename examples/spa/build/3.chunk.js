webpackJsonp([3],{

/***/ 3:
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = React;

/***/ },

/***/ 7:
/*!*******************************************!*\
  !*** ./scripts/Index/components/index.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _react = __webpack_require__(/*! react */ 3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by huangjianhua on 2015/12/22.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	//import BaseView from '../../../components/BaseView';
	
	var SearchView = (function (_Component) {
	    _inherits(SearchView, _Component);
	
	    //构造函数
	
	    function SearchView(props) {
	        _classCallCheck(this, SearchView);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(SearchView).call(this, props));
	
	        //console.log('constructor', props);
	    }
	
	    _createClass(SearchView, [{
	        key: 'componentWillMount',
	        value: function componentWillMount(s) {
	            console.log('search view componetn will mount ', s);
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount(s) {
	            console.log('ssssss component did mount', s);
	        }
	    }, {
	        key: 'self',
	        value: function self() {
	            console.log('self ');
	        }
	    }, {
	        key: 'goToAction',
	        value: function goToAction() {
	            DF.goTo('list.html');
	        }
	    }, {
	        key: 'backAction',
	        value: function backAction() {
	            DF.back();
	        }
	    }, {
	        key: 'onShow',
	        value: function onShow() {
	            console.log('i am onShow index');
	        }
	    }, {
	        key: 'onHide',
	        value: function onHide() {
	            console.log('i am onHide index');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'div',
	                    { onClick: this.goToAction.bind(this) },
	                    'goTo'
	                ),
	                React.createElement(
	                    'div',
	                    { onClick: this.backAction.bind(this) },
	                    'back'
	                ),
	                React.createElement(
	                    'div',
	                    { onClick: this.self.bind(this) },
	                    'fun'
	                )
	            );
	        }
	    }]);
	
	    return SearchView;
	})(_react.Component);
	
	SearchView.defaultProps = {
	    viewName: 'search-view'
	};
	
	module.exports = SearchView;
	
	//ReactDOM.render(<SearchView me="xmzi" />, document.querySelector('#search-view') );

/***/ }

});
//# sourceMappingURL=3.chunk.js.map