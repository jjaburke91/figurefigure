webpackJsonp([94533468323174],{78:function(e,t){"use strict";function r(e,t,f){if("string"!=typeof t){if(c){var d=o(t);d&&d!==c&&r(e,d,f)}var p=l(t);n&&(p=p.concat(n(t)));for(var g=0;g<p.length;++g){var m=p[g];if(!(a[m]||s[m]||f&&f[m])){var y=i(t,m);try{u(e,m,y)}catch(e){}}}return e}return e}var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u=Object.defineProperty,l=Object.getOwnPropertyNames,n=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,o=Object.getPrototypeOf,c=o&&o(Object);e.exports=r},49:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=r(1),u=a(s),l=r(6),n=a(l),i=r(76);r(81);var o=function(e){var t=e.issue,r=e.isFullPage,a=r?"issue--full-height":"";return u.default.createElement("article",{className:"issue "+a},u.default.createElement("a",{href:(0,i.withPrefix)(t.path),target:"_blank"},u.default.createElement("img",{className:"issue__img",src:(0,i.withPrefix)(t.image_href),alt:"Issue "+t.title+" link"})))};o.propTypes={isFullPage:n.default.bool,issue:n.default.object.isRequired},t.default=o,e.exports=t.default},81:function(e,t){},139:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var s=r(1),u=a(s),l=r(49),n=a(l),i=function(e){var t=e.data.allDataJson.edges[0].node.issues;return u.default.createElement("main",null,u.default.createElement("div",{className:"issue-grid"},t.reverse().map(function(e,t){return u.default.createElement(n.default,{issue:e,key:t})})))};t.default=i;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-archive-js-56b13ec4a978d5d1a505.js.map