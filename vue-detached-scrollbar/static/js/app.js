webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(10),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(11),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(12),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_detached_scrollbar__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_detached_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_detached_scrollbar__);




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            loop: 40,
            image: 'http://writm.com/wp-content/uploads/2016/08/Cat-hd-wallpapers.jpg',
            images: ['/vue-detached-scrollbar/static/horse-2574327_640.jpg', '/vue-detached-scrollbar/static/hydrangea-2552663_640.jpg', '/vue-detached-scrollbar/static/tomatoes-2559809_640.jpg', '/vue-detached-scrollbar/static/animal-2572781_640.jpg']
        };
    },

    methods: {
        pickRandomImage: function pickRandomImage() {
            var min = 0;
            var max = this.images.length;
            var random = Math.floor(Math.random() * (max - min)) + min;
            return this.images[random];
        }
    },
    components: {
        Gallery: __WEBPACK_IMPORTED_MODULE_0_vue_detached_scrollbar__["Gallery"]
    }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_detached_scrollbar__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_detached_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_detached_scrollbar__);




/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        ScrollBar: __WEBPACK_IMPORTED_MODULE_0_vue_detached_scrollbar__["ScrollBar"]
    }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_App__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Mid__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Mid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_Mid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Footer__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_Footer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_detached_scrollbar__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_detached_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_detached_scrollbar__);








var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  data: {
    scrollBus: __WEBPACK_IMPORTED_MODULE_4_vue_detached_scrollbar___default.a
  },
  el: '#app',
  template: '<div><appl/><mid/><foots/></div>',
  components: {
    Appl: __WEBPACK_IMPORTED_MODULE_1_App___default.a,
    Mid: __WEBPACK_IMPORTED_MODULE_2_Mid___default.a,
    Foots: __WEBPACK_IMPORTED_MODULE_3_Footer___default.a
  }
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h2', {
    staticClass: "mid"
  }, [_vm._v("Gallery - Component 1")]), _vm._v(" "), _c('gallery', [_c('div', {
    staticClass: "gallery",
    attrs: {
      "id": "gallery"
    }
  }, _vm._l((_vm.loop), function(stuff) {
    return _c('div', {
      staticClass: "gallery-item"
    }, [_c('img', {
      attrs: {
        "src": _vm.pickRandomImage(),
        "alt": ""
      }
    })])
  }))])], 1)
},staticRenderFns: []}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h2', {
    staticClass: "mid"
  }, [_vm._v("Scrollbar - Component 3")]), _vm._v(" "), _c('scroll-bar')], 1)
},staticRenderFns: []}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h2', {
    staticClass: "mid"
  }, [_vm._v("Middle Part - Component 2")]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus orci tortor, in sodales quam molestie vel. Cras eu neque eget velit porta varius. Vestibulum eros nisi, porttitor eget augue ac, molestie euismod velit. Donec in scelerisque felis, quis rutrum nulla. In in maximus elit, eu maximus turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In et quam libero. Donec venenatis eleifend lectus, vel gravida ipsum bibendum vitae.")]), _vm._v(" "), _c('p', [_vm._v("Donec eu imperdiet leo. Ut eget mi diam. Nullam dignissim id nulla sed placerat. Pellentesque rutrum, velit non mollis gravida, libero augue varius lacus, non elementum nulla nulla vel massa. Nulla dictum, dolor non eleifend semper, orci tellus consectetur nunc, in vehicula metus elit at nibh. Cras non nisl est. Morbi enim metus, imperdiet eget malesuada sagittis, rutrum eu felis. Ut congue varius mi et maximus. Nam non velit id sem commodo vestibulum. Morbi eu iaculis nisl. Nulla molestie quis mauris at hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.")]), _vm._v(" "), _c('p', [_vm._v("Aliquam mollis lobortis efficitur. Suspendisse ultricies leo sem, vel commodo felis egestas in. Vestibulum in quam congue, sagittis arcu sed, dapibus ipsum. Ut eu nisl odio. Ut vestibulum ligula eget justo dapibus, sit amet sodales lectus rhoncus. Nam fermentum, turpis in sollicitudin hendrerit, ante quam lacinia nisi, ut congue neque lacus in lectus. Duis dapibus et purus ut molestie. Quisque ultrices urna quis mi cursus condimentum. Cras maximus facilisis diam, id dignissim nisl varius at. In hac habitasse platea dictumst. Phasellus iaculis leo erat, in condimentum enim eleifend ut. Duis facilisis ligula vel quam rutrum varius.")]), _vm._v(" "), _c('p', [_vm._v("Sed molestie sapien ac arcu semper tincidunt quis ac massa. Maecenas eget tincidunt felis, sit amet porta neque. Duis interdum quis magna et pulvinar. Cras convallis diam volutpat, imperdiet tortor et, fermentum sapien. Donec viverra tempus dapibus. Nullam sed velit in diam hendrerit ultrices eget volutpat felis. Cras in lectus ac nibh consequat ultricies nec et augue. Vestibulum non justo eu massa accumsan malesuada. Donec laoreet interdum ante et ornare. Donec quam nulla, facilisis eu lobortis eget, tempus quis est. Aliquam orci libero, mattis eget fermentum non, pharetra in tortor.")]), _vm._v(" "), _c('p', [_vm._v("Aenean nec libero eu massa sagittis facilisis. Sed accumsan vulputate varius. Curabitur cursus tempus purus, ac iaculis eros porta eget. Integer tempus mi eget urna dapibus mollis. Nam sodales vitae est id imperdiet. Integer maximus, purus in ultricies scelerisque, augue diam consequat nibh, id hendrerit velit dolor sit amet nisi. Maecenas sapien arcu, placerat a elit vitae, ultrices lobortis risus. Aliquam placerat leo sed erat rutrum molestie. Etiam porta felis diam, id ornare ipsum tincidunt sit amet. Ut quam nunc, dictum eget gravida ut, varius nec ipsum. Maecenas eu sagittis purus, congue interdum odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque ut elit risus. Nunc non nunc feugiat, iaculis leo at, laoreet nunc. Sed eget imperdiet augue, nec accumsan mauris.")])])
}]}

/***/ })
],[9]);