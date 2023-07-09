exports.ids = [3];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/comments/_id.vue?vue&type=template&id=5f348b7c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<h1>" + _vm._ssrEscape(_vm._s(_vm.comment.name)) + "</h1> <p>" + _vm._ssrEscape(_vm._s(_vm.comment.email)) + "</p> <p>" + _vm._ssrEscape(_vm._s(_vm.comment.body)) + "</p>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/comments/_id.vue?vue&type=template&id=5f348b7c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/comments/_id.vue?vue&type=script&lang=js&
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  async asyncData({
    $axios,
    params
  }) {
    const id = params.id;
    const comment = await $axios.$get(`/comments/${id}`);
    return {
      comment
    };
  },
  data() {
    return {
      comment: {}
    };
  }
});
// CONCATENATED MODULE: ./pages/comments/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var comments_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/comments/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  comments_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "27d250e5"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map