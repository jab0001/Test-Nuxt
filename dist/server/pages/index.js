exports.ids = [4];
exports.modules = {

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=7464fcd2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<table><thead><tr><th>ID</th> <th>Name</th> <th>Email</th></tr></thead> <tbody>" + _vm._ssrList(_vm.resultedComments, function (comment) {
    return "<tr><td>" + _vm._ssrEscape(_vm._s(comment.id)) + "</td> <td>" + _vm._ssrEscape(_vm._s(comment.name)) + "</td> <td>" + _vm._ssrEscape(_vm._s(comment.email)) + "</td></tr>";
  }) + "</tbody></table> <div><button" + _vm._ssrAttr("disabled", _vm.page === 1) + ">Previous</button> <span>" + _vm._ssrEscape(_vm._s(_vm.page)) + "</span> <button" + _vm._ssrAttr("disabled", _vm.page === _vm.totalPages) + ">Next</button></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=7464fcd2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  async fetch({
    store
  }) {
    if (store.getters["comments/comments"].length === 0) {
      await store.dispatch("comments/fetch");
    }
  },
  data() {
    return {
      /* comments: [], */
      page: 1,
      perPage: 10,
      sortByColumn: "id",
      sortDirection: "asc",
      resultedComments: []
    };
  },
  computed: {
    comments() {
      const start = (this.page - 1) * this.perPage;
      const end = start + this.perPage;
      this.resultedComments = this.$store.getters['comments/comments'].slice(start, end);
      return this.$store.getters['comments/comments'];
    },
    totalPages() {
      return Math.ceil(this.comments.length / this.perPage);
    }
    /* paginatedComments() {
      const start = (this.page - 1) * this.perPage;
      const end = start + this.perPage;
      return this.resultedComments = this.comments.slice(start, end);
    }, */
  },

  methods: {
    sortBy(column) {
      if (column === this.sortByColumn) {
        this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
      } else {
        this.sortByColumn = column;
        this.sortDirection = "asc";
      }
      const sortedComments = this.resultedComments.sort((a, b) => {
        const valueA = a[column];
        const valueB = b[column];
        if (this.sortDirection === "asc") {
          if (valueA < valueB) return -1;
          if (valueA > valueB) return 1;
        } else {
          if (valueA > valueB) return -1;
          if (valueA < valueB) return 1;
        }
        return 0;
      });
    },
    nextPage() {
      if (this.page < this.totalPages) {
        this.page++;
      }
    },
    prevPage() {
      if (this.page > 1) {
        this.page--;
      }
    },
    goToComment(commentId) {
      this.$router.push(`/comments/${commentId}`);
    }
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0eb6f77c"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map