webpackJsonp([2],{

/***/ 3:
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = React;

/***/ },

/***/ 5:
/*!*********************************************!*\
  !*** ./scripts/Detail/components/detail.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _react = __webpack_require__(/*! react */ 3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by huangjianhua on 2015/12/22.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	module.exports = (function (_Component) {
	    _inherits(DetailView, _Component);
	
	    //构造函数
	
	    function DetailView(props) {
	        _classCallCheck(this, DetailView);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DetailView).call(this, props));
	
	        console.log('constructor', props);
	        return _this;
	    }
	
	    _createClass(DetailView, [{
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
	            console.log('i am onShow detail');
	        }
	    }, {
	        key: 'onHide',
	        value: function onHide() {
	            console.log('i am onHide detail');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'div',
	                    null,
	                    'DetailView 11111  1111 111'
	                ),
	                React.createElement(
	                    'div',
	                    { onClick: this.backAction.bind(this) },
	                    'back Action '
	                )
	            );
	        }
	    }]);
	
	    return DetailView;
	})(_react.Component);
	
	//export default ListView;

/***/ }

});
//# sourceMappingURL=2.chunk.js.map