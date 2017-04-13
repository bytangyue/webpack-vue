webpackJsonp([12],{

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	__webpack_require__(99);
	module.exports = {
	    name: 'footer'
	};

/***/ },

/***/ 99:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 120:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(67)
	
	/* template */
	var __vue_template__ = __webpack_require__(140)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\refactorproject\\resetstudent\\app\\components\\footer\\footer.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(1)
	  hotAPI.install(__webpack_require__(2), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3365d13a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3365d13a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] footer.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 140:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _h('div', {
	    staticClass: "stu-footer"
	  }, [_h('ul', {
	    staticClass: "footer-list"
	  }, [_h('li', {
	    staticClass: "line"
	  }, ["关于我们"]), " ", _h('li', {
	    staticClass: "line"
	  }, ["意见反馈"]), " ", _h('li', {
	    staticClass: "line"
	  }, ["联系我们"]), " ", _h('li', {
	    staticClass: "line"
	  }, ["官方微博"]), " ", _h('li', ["免费公开课"])]), " ", _h('p', {
	    staticClass: "license"
	  }, ["江苏传智播客教育科技有限公司 版权所有Copyright 1999-2015, CSDN.NET, All Rights Reserved 京ICP备08001421号-2"])])
	}]}
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(1).rerender("data-v-3365d13a", module.exports)
	  }
	}

/***/ }

});
//# sourceMappingURL=12.12.bundle.js.map