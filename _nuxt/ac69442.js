(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{293:function(t,e,r){"use strict";var n=r(2),o=r(4),c=r(33),f=r(26),h=r(34),v=r(207),m=r(13),d=r(3),l=r(205),_=r(136),P=r(294),k=r(295),C=r(87),x=r(296),y=[],w=o(y.sort),D=o(y.push),B=d((function(){y.sort(void 0)})),j=d((function(){y.sort(null)})),A=_("sort"),O=!d((function(){if(C)return C<70;if(!(P&&P>3)){if(k)return!0;if(x)return x<603;var code,t,e,r,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)y.push({k:t+r,v:e})}for(y.sort((function(a,b){return b.v-a.v})),r=0;r<y.length;r++)t=y[r].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:B||!j||!A||!O},{sort:function(t){void 0!==t&&c(t);var e=f(this);if(O)return void 0===t?w(e):w(e,t);var r,n,o=[],d=h(e);for(n=0;n<d;n++)n in e&&D(o,e[n]);for(l(o,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:m(e)>m(r)?1:-1}}(t)),r=h(o),n=0;n<r;)e[n]=o[n++];for(;n<d;)v(e,n++);return e}})},294:function(t,e,r){var n=r(65).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},295:function(t,e,r){var n=r(65);t.exports=/MSIE|Trident/.test(n)},296:function(t,e,r){var n=r(65).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},299:function(t,e,r){"use strict";r.r(e);r(29);var n=r(132),o=r(10),c=(r(66),r(47),r(293),r(206),r(88),{data:function(){return{comments:[],page:1,perPage:10,sortByColumn:"id",sortDirection:"asc"}},computed:{totalPages:function(){return Math.ceil(this.comments.length/this.perPage)},paginatedComments:function(){var t=(this.page-1)*this.perPage,e=t+this.perPage;return this.comments.slice(t,e)}},mounted:function(){this.getComments()},methods:{getComments:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("https://jsonplaceholder.typicode.com'/comments");case 3:r=e.sent,t.comments=r.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},sortBy:function(t){var e,r=this;t===this.sortByColumn?this.sortDirection="asc"===this.sortDirection?"desc":"asc":(this.sortByColumn=t,this.sortDirection="asc");var o=Object(n.a)(this.paginatedComments).sort((function(a,b){var e=a[t],n=b[t];if("asc"===r.sortDirection){if(e<n)return-1;if(e>n)return 1}else{if(e>n)return-1;if(e<n)return 1}return 0})),c=(this.page-1)*this.perPage;this.perPage;(e=this.comments).splice.apply(e,[c,this.perPage].concat(Object(n.a)(o.slice(0,this.perPage))))},nextPage:function(){this.page<this.totalPages&&this.page++},prevPage:function(){this.page>1&&this.page--},goToComment:function(t){this.$router.push("/comments/".concat(t))}}}),f=r(48),component=Object(f.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("table",[e("thead",[e("tr",[e("th",{on:{click:function(e){return t.sortBy("id")}}},[t._v("ID")]),t._v(" "),e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Email")])])]),t._v(" "),e("tbody",t._l(t.paginatedComments,(function(r){return e("tr",{key:r.id,on:{click:function(e){return t.goToComment(r.id)}}},[e("td",[t._v(t._s(r.id))]),t._v(" "),e("td",[t._v(t._s(r.name))]),t._v(" "),e("td",[t._v(t._s(r.email))])])})),0)]),t._v(" "),e("div",[e("button",{attrs:{disabled:1===t.page},on:{click:function(e){return t.prevPage()}}},[t._v("Previous")]),t._v(" "),e("span",[t._v(t._s(t.page))]),t._v(" "),e("button",{attrs:{disabled:t.page===t.totalPages},on:{click:function(e){return t.nextPage()}}},[t._v("Next")])])])}),[],!1,null,null,null);e.default=component.exports}}]);