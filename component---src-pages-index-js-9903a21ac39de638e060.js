webpackJsonp([35783957827783],{78:function(e,t){"use strict";function a(e,t,f){if("string"!=typeof t){if(c){var p=o(t);p&&p!==c&&a(e,p,f)}var d=u(t);n&&(d=d.concat(n(t)));for(var g=0;g<d.length;++g){var m=d[g];if(!(r[m]||s[m]||f&&f[m])){var y=i(t,m);try{l(e,m,y)}catch(e){}}}return e}return e}var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l=Object.defineProperty,u=Object.getOwnPropertyNames,n=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,o=Object.getPrototypeOf,c=o&&o(Object);e.exports=a},49:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=a(1),l=r(s),u=a(6),n=r(u),i=a(76);a(81);var o=function(e){var t=e.issue,a=e.isFullPage,r=a?"issue--full-height":"";return l.default.createElement("article",{className:"issue "+r},l.default.createElement("a",{href:(0,i.withPrefix)(t.path),target:"_blank"},l.default.createElement("img",{className:"issue__img",src:(0,i.withPrefix)(t.image_href),alt:"Issue "+t.title+" link"})))};o.propTypes={isFullPage:n.default.bool,issue:n.default.object.isRequired},t.default=o,e.exports=t.default},81:function(e,t){},141:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var s=a(1),l=r(s),u=a(49),n=r(u),i=function(e){var t=e.data.allDataJson.edges[0].node.issues,a=t&&t[t.length-1];return l.default.createElement("main",null,l.default.createElement("div",{className:"text-center"},l.default.createElement(n.default,{issue:a,isFullPage:!0,key:"homepage issue"})))};t.default=i;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-9903a21ac39de638e060.js.map