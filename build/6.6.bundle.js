webpackJsonp([6],{

/***/ 40:
/***/ function(module, exports) {

	module.exports ={
	    data:function(){
	        return{
	            brdata: [
	                {
	                    'url':'',
	                    'name': '我的学习'
	                },
	                {
	                    'url':'/myschedule',
	                    'name': '我的课表'
	                },
	                {
	                    'url':'/veryday',
	                    'name': '2016-12-14'
	                },
	                {
	                    'url':'',
	                    'name': 'Java基础班'
	                }
	
	
	            ],
	            activeName: 'first'
	        }
	    },
	    components:{
	
	    }
	}

/***/ },

/***/ 78:
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	__webpack_require__(106);
	module.exports = __webpack_require__(40);

/***/ },

/***/ 106:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 114:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/images/banner-bg.png?55ca7cf0f79f1c95000f0f8800dff20b";

/***/ },

/***/ 131:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(78)
	
	/* template */
	var __vue_template__ = __webpack_require__(153)
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
	__vue_options__.__file = "E:\\refactorproject\\resetstudent\\app\\pages\\myschedule\\studaydetail\\studaydetail.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(1)
	  hotAPI.install(__webpack_require__(2), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-f864e2b0", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-f864e2b0", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] studaydetail.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 153:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _h('div', {
	    staticClass: "stu-detail"
	  }, [_h('stu-breadcrumb', {
	    attrs: {
	      "bcItems": _vm.brdata
	    }
	  }), " ", _h('div', [_h('el-tabs', {
	    attrs: {
	      "active-name": _vm.activeName
	    }
	  }, [_h('el-tab-pane', {
	    staticClass: "fist-p",
	    attrs: {
	      "label": "PPT",
	      "name": "first"
	    }
	  }, [_h('img', {
	    attrs: {
	      "src": __webpack_require__(114),
	      "alt": ""
	    }
	  }), " ", _h('el-button', {
	    staticClass: "btn-p btn-t"
	  }, ["预览课件"])]), " ", _h('el-tab-pane', {
	    staticClass: "third",
	    attrs: {
	      "label": "视频",
	      "name": "second"
	    }
	  }, ["视频"]), " ", _h('el-tab-pane', {
	    staticClass: "third",
	    attrs: {
	      "label": "文字讲义",
	      "name": "third"
	    }
	  }, [_h('el-button', {
	    staticClass: "btn-t"
	  }, ["讲义下载"])]), " ", _h('el-tab-pane', {
	    staticClass: "third",
	    attrs: {
	      "label": "在线资源",
	      "name": "fourth"
	    }
	  }, [_h('el-button', {
	    staticClass: "btn-t"
	  }, ["资源下载"])])])])])
	},staticRenderFns: []}
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(1).rerender("data-v-f864e2b0", module.exports)
	  }
	}

/***/ }

});
//# sourceMappingURL=6.6.bundle.js.map