module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/alert","2":"components/app-copy-button","3":"components/app-page-bottom","4":"components/app-prev-next","5":"components/app-toc","6":"components/badge","7":"components/built-with-nuxt-dark","8":"components/built-with-nuxt-light","9":"components/code-block","10":"components/code-group","11":"components/code-sandbox","12":"components/example-multiselect","13":"components/icon-arrow-left","14":"components/icon-arrow-right","15":"components/icon-badge-check","16":"components/icon-check-circle","17":"components/icon-clipboard-check","18":"components/icon-clipboard-copy","19":"components/icon-exclamation-circle","20":"components/icon-external-link","21":"components/icon-information-circle","22":"components/icon-x-circle","23":"components/list","24":"components/showcases","25":"pages/_","26":"pages/releases"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {//
//
//
//
function isSpecialClick(event) {
  return event.button === 1 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
}

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    options: {
      type: Object,
      required: true
    },
    settings: {
      type: Object,
      required: true
    }
  },
  watch: {
    '$i18n.locale'(newValue) {
      this.update(this.options, newValue);
    },

    options(newValue) {
      this.update(newValue, this.$i18n.locale);
    }

  },

  mounted() {
    this.initialize(this.options, this.$i18n.locale);
  },

  methods: {
    stripTrailingSlash(url) {
      return url.replace(/\/$|\/(?=\?)|\/(?=#)/g, '');
    },

    getRelativePath(absoluteUrl) {
      const {
        pathname,
        hash
      } = new URL(absoluteUrl);
      const url = pathname.replace(this.settings.url, '/') + hash;
      return this.stripTrailingSlash(url);
    },

    initialize(userOptions, code) {
      const lang = this.$i18n.locales.find(locale => locale.code === code);
      Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 48, 7)), Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 49, 7))]).then(([docsearch]) => {
        docsearch = docsearch.default;
        docsearch(Object.assign({}, userOptions, {
          container: '#docsearch',
          searchParameters: Object.assign({}, lang && {
            facetFilters: [`${userOptions.langAttribute || 'language'}:${lang.iso}`].concat(userOptions.facetFilters || [])
          }),
          navigator: {
            navigate: ({
              suggestionUrl
            }) => {
              const {
                pathname: hitPathname
              } = new URL(window.location.origin + suggestionUrl); // Vue Router doesn't handle same-page navigation so we use
              // the native browser location API for anchor navigation.

              if (this.$router.history.current.path === hitPathname) {
                window.location.assign(window.location.origin + suggestionUrl);
              } else {
                this.$router.push(suggestionUrl);
              }
            }
          },
          transformItems: items => {
            return items.map(item => {
              return Object.assign({}, item, {
                url: this.getRelativePath(item.url)
              });
            });
          },
          hitComponent: ({
            hit,
            children
          }) => {
            return {
              type: 'a',
              ref: undefined,
              constructor: undefined,
              key: undefined,
              props: {
                href: hit.url,
                onClick: event => {
                  if (isSpecialClick(event)) {
                    return;
                  } // We rely on the native link scrolling when user is
                  // already on the right anchor because Vue Router doesn't
                  // support duplicated history entries.


                  if (this.$router.history.current.fullPath === hit.url) {
                    return;
                  }

                  const {
                    pathname: hitPathname
                  } = new URL(window.location.origin + hit.url); // If the hits goes to another page, we prevent the native link behavior
                  // to leverage the Vue Router loading feature.

                  if (this.$router.history.current.path !== hitPathname) {
                    event.preventDefault();
                  }

                  this.$router.push(hit.url);
                },
                children
              }
            };
          }
        }));
      });
    },

    update(options, lang) {
      this.$el.innerHTML = '<div id="docsearch"></div>';
      this.initialize(options, lang);
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)["URL"]))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("property-information");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("vue-i18n");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7e56e4e3", content, true, context)
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("77295ca7", content, true, context)
};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/components/app/AppHeader.vue?vue&type=template&id=2bde1ac0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"fixed top-0 z-40 w-full border-b dark:border-gray-800 bg-white dark:bg-gray-900",class:{ 'shadow border-transparent': _vm.scrolled },on:{"click":_vm.scrollToTop}},[_vm._ssrNode("<div class=\"container mx-auto flex-1 px-4 lg:px-8\">","</div>",[_vm._ssrNode("<div class=\"flex items-center justify-between h-16\">","</div>",[_vm._ssrNode("<div class=\"lg:w-1/5 flex items-center pr-4\">","</div>",[_c('NuxtLink',{staticClass:"flex-shrink-0 flex-1 font-bold text-xl",attrs:{"to":_vm.localePath('/'),"aria-label":((_vm.settings.title) + " Logo")}},[(!_vm.logo)?_c('span',[_vm._v(_vm._s(_vm.settings.title))]):_vm._e(),_vm._v(" "),(_vm.logo)?_c('img',{staticClass:"h-8 max-w-full light-img",attrs:{"src":_vm.logo.light,"alt":_vm.settings.title}}):_vm._e(),_vm._v(" "),(_vm.logo)?_c('img',{staticClass:"h-8 max-w-full dark-img",attrs:{"src":_vm.logo.dark,"alt":_vm.settings.title}}):_vm._e()])],1),_vm._ssrNode(" "),(_vm.settings.layout !== 'single')?_vm._ssrNode("<div class=\"flex-1 flex justify-start w-4/6\">","</div>",[(_vm.settings.algolia)?_c('AppSearchAlgolia',{attrs:{"options":_vm.settings.algolia,"settings":_vm.settings}}):_c('AppSearch',{staticClass:"hidden lg:block"})],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass("lg:w-1/5 flex items-center pl-4 lg:pl-8",{ 'justify-between': _vm.lastRelease && _vm.settings.layout !== 'single', 'justify-end': !_vm.lastRelease || _vm.settings.layout === 'single' }))+">","</div>",[(_vm.lastRelease)?_c('NuxtLink',{staticClass:"font-semibold leading-none text-gray-700 dark:text-gray-300 hover:text-primary-500 dark-hover:text-primary-500 text-base mr-4",attrs:{"to":_vm.localePath('/releases'),"exact-active-class":"text-primary-500"}},[_vm._v(_vm._s(_vm.lastRelease.name))]):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex items-center\">","</div>",[(_vm.settings.twitter)?_vm._ssrNode("<a"+(_vm._ssrAttr("href",("https://twitter.com/" + (_vm.settings.twitter))))+" target=\"_blank\" rel=\"noopener noreferrer\" title=\"Twitter\" name=\"Twitter\""+(_vm._ssrClass("text-gray-700 dark:text-gray-300 hover:text-primary-500 dark-hover:text-primary-500 ml-4",{
              'hidden lg:block': _vm.settings.layout !== 'single'
            }))+">","</a>",[_c('IconTwitter',{staticClass:"w-5 h-5"})],1):_vm._e(),_vm._ssrNode(" "),(_vm.settings.github)?_vm._ssrNode("<a"+(_vm._ssrAttr("href",_vm.githubUrls.repo))+" target=\"_blank\" rel=\"noopener noreferrer\" title=\"Github\" name=\"Github\""+(_vm._ssrClass("text-gray-700 dark:text-gray-300 hover:text-primary-500 dark-hover:text-primary-500 ml-4",{
              'hidden lg:block': _vm.settings.layout !== 'single'
            }))+">","</a>",[_c('IconGithub',{staticClass:"w-5 h-5"})],1):_vm._e(),_vm._ssrNode(" "),(_vm.settings.layout !== 'single')?_vm._ssrNode("<button aria-label=\"Menu\" class=\"lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 focus:outline-none -mr-2\">","</button>",[(_vm.menu)?_c('IconX',{staticClass:"w-5 h-5"}):_c('IconMenu',{staticClass:"w-5 h-5"})],1):_vm._e()],2)],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/app/AppHeader.vue?vue&type=template&id=2bde1ac0&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/components/app/AppHeader.vue?vue&type=script&lang=js&
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
//

/* harmony default export */ var AppHeadervue_type_script_lang_js_ = ({
  data() {
    return {
      scrolled: 0
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])(['settings', 'githubUrls', 'lastRelease']),
    menu: {
      get() {
        return this.$store.state.menu.open;
      },

      set(val) {
        this.$store.commit('menu/toggle', val);
      }

    },

    logo() {
      if (!this.settings.logo) {
        return;
      }

      if (typeof this.settings.logo === 'object') {
        return this.settings.logo;
      }

      return {
        light: this.settings.logo,
        dark: this.settings.logo
      };
    }

  },

  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    },

    scrollToTop() {
      if (window.innerWidth >= 1280) {
        return;
      }

      window.scrollTo(0, 0);
    },

    noop() {}

  }
});
// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/app/AppHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var app_AppHeadervue_type_script_lang_js_ = (AppHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/app/AppHeader.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_AppHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5ff1c34b"
  
)

/* harmony default export */ var AppHeader = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AppSearchAlgolia: __webpack_require__(53).default,AppSearch: __webpack_require__(19).default,IconTwitter: __webpack_require__(22).default,IconGithub: __webpack_require__(23).default,IconX: __webpack_require__(56).default,IconMenu: __webpack_require__(57).default})


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/components/app/AppSearch.vue?vue&type=template&id=20cab314&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w-full relative flex flex-col justify-between"},[_vm._ssrNode("<div class=\"w-full relative\">","</div>",[_vm._ssrNode("<label for=\"search\" class=\"sr-only\">Search</label> "),_vm._ssrNode("<div class=\"relative\">","</div>",[_vm._ssrNode("<div class=\"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none\">","</div>",[_c('IconSearch',{staticClass:"h-5 w-5 text-gray-500"})],1),_vm._ssrNode(" <input id=\"search\""+(_vm._ssrAttr("placeholder",_vm.$t('search.placeholder')))+" type=\"search\" autocomplete=\"off\""+(_vm._ssrAttr("value",(_vm.q)))+(_vm._ssrClass("block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-transparent text-gray-700 dark:text-white dark-focus:text-white focus:border-gray-300 dark-focus:border-gray-700 rounded-md focus:outline-none focus:bg-white dark-focus:bg-gray-900 bg-gray-200 dark:bg-gray-800",{ 'rounded-b-none': _vm.focus && (_vm.searching || _vm.results.length) }))+">")],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<ul"+(_vm._ssrClass("z-10 absolute w-full flex-1 top-0 bg-white dark:bg-gray-900 rounded-md border border-gray-300 dark:border-gray-700 overflow-hidden",{ 'rounded-t-none': _vm.focus && (_vm.searching || _vm.results.length) }))+(_vm._ssrStyle({"margin-top":"37px"},null, { display: (_vm.focus && (_vm.searching || _vm.results.length)) ? '' : 'none' }))+">","</ul>",[_vm._ssrNode(((_vm.searching && !_vm.results.length)?("<li class=\"px-4 py-2\">Searching...</li>"):"<!---->")+" "),_vm._l((_vm.results),function(result,index){return _vm._ssrNode("<li>","</li>",[_c('NuxtLink',{staticClass:"flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150",class:{
          'text-primary-500 bg-gray-200 dark:bg-gray-800': _vm.focusIndex === index
        },attrs:{"to":_vm.localePath(result.to)},on:{"click":function($event){_vm.focus = false}}},[(result.category)?_c('span',{staticClass:"font-bold"},[_vm._v(_vm._s(result.category))]):_vm._e(),_vm._v(" "),(result.category)?_c('IconChevronRight',{staticClass:"w-3 h-3 mx-1"}):_vm._e(),_vm._v("\n        "+_vm._s(result.title)+"\n      ")],1)],1)})],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/app/AppSearch.vue?vue&type=template&id=20cab314&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/components/app/AppSearch.vue?vue&type=script&lang=js&
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
/* harmony default export */ var AppSearchvue_type_script_lang_js_ = ({
  data() {
    return {
      q: '',
      focus: false,
      focusIndex: -1,
      open: false,
      searching: false,
      results: []
    };
  },

  watch: {
    async q(q) {
      this.focusIndex = -1;

      if (!q) {
        this.searching = false;
        this.results = [];
        return;
      }

      this.searching = true;
      this.results = await this.$content(this.$i18n.locale, {
        deep: true
      }).sortBy('position', 'asc').only(['title', 'slug', 'category', 'to']).limit(12).search(q).fetch();
      this.searching = false;
    }

  },

  mounted() {
    window.addEventListener('keyup', this.keyup);
  },

  beforeDestroy() {
    window.removeEventListener('keyup', this.keyup);
  },

  methods: {
    onFocus() {
      this.focus = true;
      this.$emit('focus', true);
    },

    onBlur() {
      this.focus = false;
      this.$emit('focus', false);
    },

    keyup(e) {
      if (e.key === '/') {
        this.$refs.search.focus();
      }
    },

    increment() {
      if (this.focusIndex < this.results.length - 1) {
        this.focusIndex++;
      }
    },

    decrement() {
      if (this.focusIndex >= 0) {
        this.focusIndex--;
      }
    },

    go() {
      if (this.results.length === 0) {
        return;
      }

      const result = this.focusIndex === -1 ? this.results[0] : this.results[this.focusIndex];
      this.$router.push(this.localePath(result.to)); // Unfocus the input and reset the query.

      this.$refs.search.blur();
      this.q = '';
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/app/AppSearch.vue?vue&type=script&lang=js&
 /* harmony default export */ var app_AppSearchvue_type_script_lang_js_ = (AppSearchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/app/AppSearch.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_AppSearchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "808b7e34"
  
)

/* harmony default export */ var AppSearch = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconSearch: __webpack_require__(54).default,IconChevronRight: __webpack_require__(55).default})


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/components/app/AppLangSwitcher.vue?vue&type=template&id=ef75e94e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.availableLocales.length)?_c('AppDropdown',{staticClass:"inline-flex",scopedSlots:_vm._u([{key:"trigger",fn:function(ref){
var open = ref.open;
var toggle = ref.toggle;
return [_c('button',{staticClass:"rounded-md hover:text-primary-500 focus:outline-none",class:{ 'text-primary-500': open },on:{"touchstart":function($event){$event.stopPropagation();$event.preventDefault();return toggle.apply(null, arguments)}}},[_c('IconTranslate',{staticClass:"w-6 h-6"})],1)]}}],null,false,2711206920)},[_vm._v(" "),_c('ul',{staticClass:"py-2"},_vm._l((_vm.availableLocales),function(locale){return _c('li',{key:locale.code},[(_vm.$i18n.locale !== locale.code)?_c('nuxt-link',{staticClass:"flex px-4 items-center hover:text-primary-500 leading-7 whitespace-no-wrap",attrs:{"to":_vm.switchLocalePath(locale.code)}},[_vm._v(_vm._s(locale.name))]):_vm._e()],1)}),0)]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/app/AppLangSwitcher.vue?vue&type=template&id=ef75e94e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/components/app/AppLangSwitcher.vue?vue&type=script&lang=js&
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
//
//
//
/* harmony default export */ var AppLangSwitchervue_type_script_lang_js_ = ({
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/app/AppLangSwitcher.vue?vue&type=script&lang=js&
 /* harmony default export */ var app_AppLangSwitchervue_type_script_lang_js_ = (AppLangSwitchervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/app/AppLangSwitcher.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_AppLangSwitchervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a3418ba6"
  
)

/* harmony default export */ var AppLangSwitcher = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconTranslate: __webpack_require__(58).default,AppDropdown: __webpack_require__(51).default})


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/components/app/AppFooter.vue?vue&type=template&id=462008fe&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"h-16 relative w-full border-t dark:border-gray-800 bg-white dark:bg-gray-900 z-20"},[_vm._ssrNode("<div class=\"h-full w-full container mx-auto px-4 lg:px-8 flex items-center justify-between\">","</div>",[_vm._ssrNode("<div class=\"flex items-end\"></div> "),_vm._ssrNode("<div class=\"flex items-center space-x-4\">","</div>",[_c('AppLangSwitcher'),_vm._ssrNode(" "),_c('AppColorSwitcher')],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/app/AppFooter.vue?vue&type=template&id=462008fe&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/components/app/AppFooter.vue?vue&type=script&lang=js&
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
/* harmony default export */ var AppFootervue_type_script_lang_js_ = ({
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/app/AppFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var app_AppFootervue_type_script_lang_js_ = (AppFootervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/app/AppFooter.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_AppFootervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3ebf5f59"
  
)

/* harmony default export */ var AppFooter = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AppLangSwitcher: __webpack_require__(20).default,AppColorSwitcher: __webpack_require__(24).default})


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/components/global/icons/IconTwitter.vue?vue&type=template&id=6f2d1b86&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"feather feather-twitter",attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[_vm._ssrNode("<path d=\"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/global/icons/IconTwitter.vue?vue&type=template&id=6f2d1b86&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/global/icons/IconTwitter.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4cbacab7"
  
)

/* harmony default export */ var IconTwitter = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/components/global/icons/IconGithub.vue?vue&type=template&id=16ec3960&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"feather feather-github",attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[_vm._ssrNode("<path d=\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/global/icons/IconGithub.vue?vue&type=template&id=16ec3960&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/global/icons/IconGithub.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7c4fb04f"
  
)

/* harmony default export */ var IconGithub = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/components/global/app/AppColorSwitcher.vue?vue&type=template&id=51044d88&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"inline-flex"},[_vm._ssrNode("<button aria-label=\"Color Mode\" class=\"rounded-md hover:text-primary-500 focus:outline-none transition ease-in-out duration-150\">","</button>",[_c('client-only',[(_vm.$colorMode.value === 'light')?_c('IconSun',{staticClass:"w-6 h-6"}):_c('IconMoon',{staticClass:"w-6 h-6"})],1)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/global/app/AppColorSwitcher.vue?vue&type=template&id=51044d88&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/global/app/AppColorSwitcher.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "499db1a2"
  
)

/* harmony default export */ var AppColorSwitcher = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconSun: __webpack_require__(59).default,IconMoon: __webpack_require__(60).default})


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function baseAggregator(collection, setter, iteratee, accumulator) {
  baseEach(collection, function(value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {boolean} [bitmask] The bitmask of comparison flags.
 *  The bitmask may be composed of the following flags:
 *     1 - Unordered comparison
 *     2 - Partial comparison
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, bitmask, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = getTag(object);
    objTag = objTag == argsTag ? objectTag : objTag;
  }
  if (!othIsArr) {
    othTag = getTag(other);
    othTag = othTag == argsTag ? objectTag : othTag;
  }
  var objIsObj = objTag == objectTag && !isHostObject(object),
      othIsObj = othTag == objectTag && !isHostObject(other),
      isSameTag = objTag == othTag;

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
  }
  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
}

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
  };
}

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray(collection) ? arrayAggregator : baseAggregator,
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
  };
}

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!seen.has(othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
              return seen.add(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, customizer, bitmask, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= UNORDERED_COMPARE_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = isKey(path, object) ? [path] : castPath(path);

  var result,
      index = -1,
      length = path.length;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result) {
    return result;
  }
  var length = object ? object.length : 0;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity]
 *  The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * // The `_.property` iteratee shorthand.
 * _.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */
var groupBy = createAggregator(function(result, value, key) {
  if (hasOwnProperty.call(result, key)) {
    result[key].push(value);
  } else {
    result[key] = [value];
  }
});

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = groupBy;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(45)(module)))

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isHTTPS(req, trustProxy = true) {
  const _xForwardedProto = trustProxy && req.headers ? req.headers["x-forwarded-proto"] : void 0;

  const protoCheck = typeof _xForwardedProto === "string" ? _xForwardedProto.includes("https") : void 0;

  if (protoCheck) {
    return true;
  }

  const _encrypted = req.connection ? req.connection.encrypted : void 0;

  const encryptedCheck = _encrypted !== void 0 ? _encrypted === true : void 0;

  if (encryptedCheck) {
    return true;
  }

  if (protoCheck === void 0 && encryptedCheck === void 0) {
    return void 0;
  }

  return false;
}

module.exports = isHTTPS;

/***/ }),
/* 29 */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Masternetwork documentation\",\"meta\":[{\"hid\":\"charset\",\"charset\":\"utf-8\"},{\"hid\":\"viewport\",\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1\"},{\"hid\":\"mobile-web-app-capable\",\"name\":\"mobile-web-app-capable\",\"content\":\"yes\"},{\"hid\":\"apple-mobile-web-app-title\",\"name\":\"apple-mobile-web-app-title\",\"content\":\"Masternetwork documentation\"},{\"hid\":\"description\",\"name\":\"description\",\"content\":\"Docs for masternetwrok\"},{\"hid\":\"theme-color\",\"name\":\"theme-color\",\"content\":\"#00CD81\"},{\"hid\":\"og:type\",\"name\":\"og:type\",\"property\":\"og:type\",\"content\":\"website\"},{\"hid\":\"og:title\",\"name\":\"og:title\",\"property\":\"og:title\",\"content\":\"Masternetwork documentation\"},{\"hid\":\"og:site_name\",\"name\":\"og:site_name\",\"property\":\"og:site_name\",\"content\":\"Masternetwork documentation\"},{\"hid\":\"og:description\",\"name\":\"og:description\",\"property\":\"og:description\",\"content\":\"Docs for masternetwrok\"}],\"link\":[{\"hid\":\"shortcut-icon\",\"rel\":\"shortcut icon\",\"href\":\"/_nuxt/icons/icon_64x64.8f91ea.png\"},{\"hid\":\"apple-touch-icon\",\"rel\":\"apple-touch-icon\",\"href\":\"/_nuxt/icons/icon_512x512.8f91ea.png\",\"sizes\":\"512x512\"},{\"rel\":\"manifest\",\"href\":\"/_nuxt/manifest.409ae852.json\",\"hid\":\"manifest\"}],\"htmlAttrs\":{\"lang\":\"en\"}}");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("vue-scrollactive");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(32);
module.exports = __webpack_require__(50);


/***/ }),
/* 32 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#00cd81;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("0211d3d2", content, true)

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}details{display:block}summary{display:list-item}[hidden],template{display:none}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}fieldset,ol,ul{margin:0;padding:0}ol,ul{list-style:none}html{font-family:DM Sans,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,\"Segoe UI\",\"Helvetica Neue\",Arial,\"Noto Sans\",\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";line-height:1.5}*,:after,:before{box-sizing:border-box;border:0 solid #e2e8f0}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#a0aec0}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#a0aec0}input::placeholder,textarea::placeholder{color:#a0aec0}button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:DM Mono,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}.prose{color:#4a5568;max-width:65ch}.prose [class~=lead]{color:#4a5568;font-size:1.25em;line-height:1.6;margin-top:1.2em;margin-bottom:1.2em}.prose a{color:#00cd81;text-decoration:underline}.prose strong{color:#1a202c;font-weight:600}.prose ol{counter-reset:list-counter;margin-top:1.25em;margin-bottom:1.25em}.prose ol>li{position:relative;counter-increment:list-counter;padding-left:1.75em}.prose ol>li:before{content:counter(list-counter) \".\";position:absolute;font-weight:400;color:#718096}.prose ul>li{position:relative;padding-left:1.75em}.prose ul>li:before{content:\"\";position:absolute;background-color:#cbd5e0;border-radius:50%;width:.375em;height:.375em;top:.6875em;left:.25em}.prose hr{border-color:#e2e8f0;border-top-width:1px;margin-top:3em;margin-bottom:3em}.prose blockquote{font-weight:400;font-style:normal;color:#718096;border-left-width:.25rem;border-left-color:#e2e8f0;quotes:\"\\201C\"\"\\201D\"\"\\2018\"\"\\2019\";margin-top:1.6em;margin-bottom:1.6em;padding-left:1em}.prose h1{color:#1a202c;font-weight:800;font-size:2.25em;margin-top:0;margin-bottom:.8888889em;line-height:1.1111111}.prose h2{font-weight:700;font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.3333333}.prose h2,.prose h3{color:#1a202c;padding-bottom:.5rem;border-bottom-width:1px;border-bottom-color:#edf2f7}.prose h3{font-weight:600;font-size:1.25em;margin-top:1.6em;margin-bottom:.6em;line-height:1.6}.prose h4{color:#1a202c;font-weight:600;margin-top:1.5em;margin-bottom:.5em;line-height:1.5}.prose figure figcaption{color:#718096;font-size:.875em;line-height:1.4285714;margin-top:.8571429em}.prose code{color:#1a202c;font-weight:400;font-size:.875em;background-color:#f7fafc;padding:.25rem;border-width:1px;border-color:#edf2f7;border-radius:.25rem}.prose pre{color:#e2e8f0;background-color:#2d3748;overflow-x:auto;font-size:.875em;line-height:1.7142857;margin-top:1.7142857em;margin-bottom:1.7142857em;border-radius:.375rem;padding:.8571429em 1.1428571em}.prose pre code{background-color:transparent;border-width:0;border-radius:0;padding:0;font-weight:400;color:inherit;font-size:inherit;font-family:DM Mono;line-height:inherit}.prose pre code:after,.prose pre code:before{content:\"\"}.prose table{width:100%;table-layout:auto;text-align:left;margin-top:2em;margin-bottom:2em;font-size:.875em;line-height:1.7142857}.prose thead{color:#1a202c;font-weight:600;border-bottom-width:1px;border-bottom-color:#cbd5e0}.prose thead th{vertical-align:bottom;padding-right:.5714286em;padding-bottom:.5714286em;padding-left:.5714286em}.prose tbody tr{border-bottom-width:1px;border-bottom-color:#e2e8f0}.prose tbody tr:last-child{border-bottom-width:0}.prose tbody td{vertical-align:top;padding:.5714286em}.prose{font-size:1rem;line-height:1.75}.prose p{margin-top:1.25em;margin-bottom:1.25em}.prose figure,.prose img,.prose video{margin-top:2em;margin-bottom:2em}.prose figure>*{margin-top:0;margin-bottom:0}.prose h2 code{font-size:.875em}.prose h3 code{font-size:.9em;font-weight:600}.prose ul{margin-top:1.25em;margin-bottom:1.25em}.prose li{margin-top:.5em;margin-bottom:.5em}.prose ol>li:before{left:0}.prose>ul>li p{margin-top:.75em;margin-bottom:.75em}.prose>ul>li>:first-child{margin-top:1.25em}.prose>ul>li>:last-child{margin-bottom:1.25em}.prose>ol>li>:first-child{margin-top:1.25em}.prose>ol>li>:last-child{margin-bottom:1.25em}.prose ol ol,.prose ol ul,.prose ul ol,.prose ul ul{margin-top:.75em;margin-bottom:.75em}.prose h2+*,.prose h3+*,.prose h4+*,.prose hr+*{margin-top:0}.prose thead th:first-child{padding-left:0}.prose thead th:last-child{padding-right:0}.prose tbody td:first-child{padding-left:0}.prose tbody td:last-child{padding-right:0}.prose>:first-child{margin-top:0}.prose>:last-child{margin-bottom:0}.prose a code{color:#00cd81}.dark-mode .dark\\:prose-dark,.dark-mode .dark\\:prose-dark [class~=lead]{color:#e2e8f0}.dark-mode .dark\\:prose-dark a{color:#00cd81}.dark-mode .dark\\:prose-dark strong{color:#f7fafc}.dark-mode .dark\\:prose-dark ol>li:before{color:#cbd5e0}.dark-mode .dark\\:prose-dark ul>li:before{background-color:#718096}.dark-mode .dark\\:prose-dark hr{border-color:#4a5568}.dark-mode .dark\\:prose-dark blockquote{color:#cbd5e0;border-left-color:#4a5568}.dark-mode .dark\\:prose-dark h1{color:#f7fafc}.dark-mode .dark\\:prose-dark h2,.dark-mode .dark\\:prose-dark h3{color:#f7fafc;border-bottom-color:#2d3748}.dark-mode .dark\\:prose-dark h4{color:#f7fafc}.dark-mode .dark\\:prose-dark figure figcaption{color:#cbd5e0}.dark-mode .dark\\:prose-dark code{color:#f7fafc;background-color:#2d3748;border-width:0}.dark-mode .dark\\:prose-dark a code{color:#00cd81}.dark-mode .dark\\:prose-dark thead{color:#f7fafc;border-bottom-color:#718096}.dark-mode .dark\\:prose-dark tbody tr{border-bottom-color:#4a5568}:root{--color-transparent:transparent;--color-current:currentColor;--color-black:#000;--color-white:#fff;--color-gray-100:#f7fafc;--color-gray-200:#edf2f7;--color-gray-300:#e2e8f0;--color-gray-400:#cbd5e0;--color-gray-500:#a0aec0;--color-gray-600:#718096;--color-gray-700:#4a5568;--color-gray-800:#2d3748;--color-gray-900:#1a202c;--color-red-100:#fff5f5;--color-red-200:#fed7d7;--color-red-300:#feb2b2;--color-red-400:#fc8181;--color-red-500:#f56565;--color-red-600:#e53e3e;--color-red-700:#c53030;--color-red-800:#9b2c2c;--color-red-900:#742a2a;--color-orange-100:#fffaf0;--color-orange-200:#feebc8;--color-orange-300:#fbd38d;--color-orange-400:#f6ad55;--color-orange-500:#ed8936;--color-orange-600:#dd6b20;--color-orange-700:#c05621;--color-orange-800:#9c4221;--color-orange-900:#7b341e;--color-yellow-100:ivory;--color-yellow-200:#fefcbf;--color-yellow-300:#faf089;--color-yellow-400:#f6e05e;--color-yellow-500:#ecc94b;--color-yellow-600:#d69e2e;--color-yellow-700:#b7791f;--color-yellow-800:#975a16;--color-yellow-900:#744210;--color-green-100:#f0fff4;--color-green-200:#c6f6d5;--color-green-300:#9ae6b4;--color-green-400:#68d391;--color-green-500:#48bb78;--color-green-600:#38a169;--color-green-700:#2f855a;--color-green-800:#276749;--color-green-900:#22543d;--color-teal-100:#e6fffa;--color-teal-200:#b2f5ea;--color-teal-300:#81e6d9;--color-teal-400:#4fd1c5;--color-teal-500:#38b2ac;--color-teal-600:#319795;--color-teal-700:#2c7a7b;--color-teal-800:#285e61;--color-teal-900:#234e52;--color-blue-100:#ebf8ff;--color-blue-200:#bee3f8;--color-blue-300:#90cdf4;--color-blue-400:#63b3ed;--color-blue-500:#4299e1;--color-blue-600:#3182ce;--color-blue-700:#2b6cb0;--color-blue-800:#2c5282;--color-blue-900:#2a4365;--color-indigo-100:#ebf4ff;--color-indigo-200:#c3dafe;--color-indigo-300:#a3bffa;--color-indigo-400:#7f9cf5;--color-indigo-500:#667eea;--color-indigo-600:#5a67d8;--color-indigo-700:#4c51bf;--color-indigo-800:#434190;--color-indigo-900:#3c366b;--color-purple-100:#faf5ff;--color-purple-200:#e9d8fd;--color-purple-300:#d6bcfa;--color-purple-400:#b794f4;--color-purple-500:#9f7aea;--color-purple-600:#805ad5;--color-purple-700:#6b46c1;--color-purple-800:#553c9a;--color-purple-900:#44337a;--color-pink-100:#fff5f7;--color-pink-200:#fed7e2;--color-pink-300:#fbb6ce;--color-pink-400:#f687b3;--color-pink-500:#ed64a6;--color-pink-600:#d53f8c;--color-pink-700:#b83280;--color-pink-800:#97266d;--color-pink-900:#702459;--color-primary-50:#f2fdf9;--color-primary-100:#e6faf2;--color-primary-200:#bff3e0;--color-primary-300:#99ebcd;--color-primary-400:#4ddca7;--color-primary-500:#00cd81;--color-primary-600:#00b974;--color-primary-700:#007b4d;--color-primary-800:#005c3a;--color-primary-900:#003e27}.space-x-2>:not(template)~:not(template){--space-x-reverse:0;margin-right:calc(0.5rem*var(--space-x-reverse));margin-left:calc(0.5rem*(1 - var(--space-x-reverse)))}.space-x-4>:not(template)~:not(template){--space-x-reverse:0;margin-right:calc(1rem*var(--space-x-reverse));margin-left:calc(1rem*(1 - var(--space-x-reverse)))}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.bg-black{--bg-opacity:1;background-color:#000;background-color:rgba(0,0,0,var(--bg-opacity))}.bg-white{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}.bg-gray-200{--bg-opacity:1;background-color:#edf2f7;background-color:rgba(237,242,247,var(--bg-opacity))}.bg-gray-800{--bg-opacity:1;background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity))}.bg-red-100{--bg-opacity:1;background-color:#fff5f5;background-color:rgba(255,245,245,var(--bg-opacity))}.bg-red-200{--bg-opacity:1;background-color:#fed7d7;background-color:rgba(254,215,215,var(--bg-opacity))}.bg-red-900{--bg-opacity:1;background-color:#742a2a;background-color:rgba(116,42,42,var(--bg-opacity))}.bg-orange-100{--bg-opacity:1;background-color:#fffaf0;background-color:rgba(255,250,240,var(--bg-opacity))}.bg-orange-200{--bg-opacity:1;background-color:#feebc8;background-color:rgba(254,235,200,var(--bg-opacity))}.bg-yellow-900{--bg-opacity:1;background-color:#744210;background-color:rgba(116,66,16,var(--bg-opacity))}.bg-green-100{--bg-opacity:1;background-color:#f0fff4;background-color:rgba(240,255,244,var(--bg-opacity))}.bg-green-200{--bg-opacity:1;background-color:#c6f6d5;background-color:rgba(198,246,213,var(--bg-opacity))}.bg-green-900{--bg-opacity:1;background-color:#22543d;background-color:rgba(34,84,61,var(--bg-opacity))}.bg-blue-100{--bg-opacity:1;background-color:#ebf8ff;background-color:rgba(235,248,255,var(--bg-opacity))}.bg-blue-200{--bg-opacity:1;background-color:#bee3f8;background-color:rgba(190,227,248,var(--bg-opacity))}.bg-blue-900{--bg-opacity:1;background-color:#2a4365;background-color:rgba(42,67,101,var(--bg-opacity))}.bg-primary-100{--bg-opacity:1;background-color:#e6faf2;background-color:rgba(230,250,242,var(--bg-opacity))}.bg-primary-500{--bg-opacity:1;background-color:#00cd81;background-color:rgba(0,205,129,var(--bg-opacity))}.focus\\:bg-white:focus{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}.dark-mode .dark\\:bg-gray-800{--bg-opacity:1;background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity))}.dark-mode .dark\\:bg-gray-900{--bg-opacity:1;background-color:#1a202c;background-color:rgba(26,32,44,var(--bg-opacity))}.dark-mode .dark\\:bg-primary-900{--bg-opacity:1;background-color:#003e27;background-color:rgba(0,62,39,var(--bg-opacity))}.dark-mode .dark-focus\\:bg-gray-900:focus{--bg-opacity:1;background-color:#1a202c;background-color:rgba(26,32,44,var(--bg-opacity))}.border-transparent{border-color:transparent}.border-gray-300{--border-opacity:1;border-color:#e2e8f0;border-color:rgba(226,232,240,var(--border-opacity))}.border-gray-700{--border-opacity:1;border-color:#4a5568;border-color:rgba(74,85,104,var(--border-opacity))}.focus\\:border-gray-300:focus{--border-opacity:1;border-color:#e2e8f0;border-color:rgba(226,232,240,var(--border-opacity))}.dark-mode .dark\\:border-gray-700{--border-opacity:1;border-color:#4a5568;border-color:rgba(74,85,104,var(--border-opacity))}.dark-mode .dark\\:border-gray-800{--border-opacity:1;border-color:#2d3748;border-color:rgba(45,55,72,var(--border-opacity))}.dark-mode .dark-focus\\:border-gray-700:focus{--border-opacity:1;border-color:#4a5568;border-color:rgba(74,85,104,var(--border-opacity))}.rounded{border-radius:.25rem}.rounded-md{border-radius:.375rem}.rounded-full{border-radius:9999px}.rounded-t-none{border-top-left-radius:0;border-top-right-radius:0}.rounded-b-none{border-bottom-right-radius:0;border-bottom-left-radius:0}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.border-dashed{border-style:dashed}.border-0{border-width:0}.border{border-width:1px}.border-b-2{border-bottom-width:2px}.border-l-4{border-left-width:4px}.border-t{border-top-width:1px}.border-b{border-bottom-width:1px}.first\\:border-t-0:first-child{border-top-width:0}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.flex-wrap-reverse{flex-wrap:wrap-reverse}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.flex-1{flex:1 1 0%}.flex-grow{flex-grow:1}.flex-shrink-0{flex-shrink:0}.font-mono{font-family:DM Mono,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}.font-normal{font-weight:400}.font-medium{font-weight:500}.font-semibold{font-weight:600}.font-bold{font-weight:700}.font-black{font-weight:900}.h-2{height:.5rem}.h-3{height:.75rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-16{height:4rem}.h-full{height:100%}.h-screen{height:100vh}.text-sm{font-size:.875rem;line-height:1.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.leading-5{line-height:1.25rem}.leading-7{line-height:1.75rem}.leading-none{line-height:1}.leading-normal{line-height:1.5}.m-0{margin:0}.my-0{margin-top:0;margin-bottom:0}.mx-1{margin-left:.25rem;margin-right:.25rem}.mx-auto{margin-left:auto;margin-right:auto}.ml-0{margin-left:0}.mr-1{margin-right:.25rem}.ml-1{margin-left:.25rem}.mt-2{margin-top:.5rem}.mb-2{margin-bottom:.5rem}.ml-2{margin-left:.5rem}.mt-3{margin-top:.75rem}.mr-3{margin-right:.75rem}.mb-3{margin-bottom:.75rem}.ml-3{margin-left:.75rem}.mt-4{margin-top:1rem}.mr-4{margin-right:1rem}.mb-4{margin-bottom:1rem}.ml-4{margin-left:1rem}.ml-5{margin-left:1.25rem}.mb-6{margin-bottom:1.5rem}.mt-16{margin-top:4rem}.mt-px{margin-top:1px}.-mr-2{margin-right:-.5rem}.-mt-4{margin-top:-1rem}.max-w-none{max-width:none}.max-w-full{max-width:100%}.opacity-0{opacity:0}.opacity-75{opacity:.75}.opacity-100{opacity:1}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.overflow-y-hidden{overflow-y:hidden}.p-2{padding:.5rem}.p-4{padding:1rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.px-3{padding-left:.75rem;padding-right:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.px-4{padding-left:1rem;padding-right:1rem}.pb-2{padding-bottom:.5rem}.pr-3{padding-right:.75rem}.pl-3{padding-left:.75rem}.pt-4{padding-top:1rem}.pr-4{padding-right:1rem}.pb-4{padding-bottom:1rem}.pl-4{padding-left:1rem}.pl-10{padding-left:2.5rem}.pt-16{padding-top:4rem}.hover\\:pl-1:hover{padding-left:.25rem}.placeholder-gray-500::-moz-placeholder{--placeholder-opacity:1;color:#a0aec0;color:rgba(160,174,192,var(--placeholder-opacity))}.placeholder-gray-500:-ms-input-placeholder{--placeholder-opacity:1;color:#a0aec0;color:rgba(160,174,192,var(--placeholder-opacity))}.placeholder-gray-500::placeholder{--placeholder-opacity:1;color:#a0aec0;color:rgba(160,174,192,var(--placeholder-opacity))}.pointer-events-none{pointer-events:none}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{right:0;left:0}.inset-0,.inset-y-0{top:0;bottom:0}.top-0{top:0}.right-0{right:0}.bottom-0{bottom:0}.left-0{left:0}.shadow-xs{box-shadow:0 0 0 1px rgba(0,0,0,.05)}.shadow{box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}.shadow-lg{box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}.shadow-none{box-shadow:none}.text-left{text-align:left}.text-center{text-align:center}.text-white{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.text-gray-300{--text-opacity:1;color:#e2e8f0;color:rgba(226,232,240,var(--text-opacity))}.text-gray-400{--text-opacity:1;color:#cbd5e0;color:rgba(203,213,224,var(--text-opacity))}.text-gray-500{--text-opacity:1;color:#a0aec0;color:rgba(160,174,192,var(--text-opacity))}.text-gray-600{--text-opacity:1;color:#718096;color:rgba(113,128,150,var(--text-opacity))}.text-gray-700{--text-opacity:1;color:#4a5568;color:rgba(74,85,104,var(--text-opacity))}.hover\\:text-primary-500:hover,.text-primary-500{--text-opacity:1;color:#00cd81;color:rgba(0,205,129,var(--text-opacity))}.dark-mode .dark\\:text-white{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.dark-mode .dark\\:text-gray-300{--text-opacity:1;color:#e2e8f0;color:rgba(226,232,240,var(--text-opacity))}.dark-mode .dark\\:text-gray-400{--text-opacity:1;color:#cbd5e0;color:rgba(203,213,224,var(--text-opacity))}.dark-mode .dark-hover\\:text-primary-500:hover{--text-opacity:1;color:#00cd81;color:rgba(0,205,129,var(--text-opacity))}.dark-mode .dark-focus\\:text-white:focus{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.uppercase{text-transform:uppercase}.hover\\:underline:hover{text-decoration:underline}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.tracking-tight{letter-spacing:-.025em}.tracking-wider{letter-spacing:.05em}.truncate,.whitespace-no-wrap{white-space:nowrap}.truncate{overflow:hidden;text-overflow:ellipsis}.w-2{width:.5rem}.w-3{width:.75rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-auto{width:auto}.w-4\\/6{width:66.666667%}.w-full{width:100%}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.gap-2{grid-gap:.5rem;gap:.5rem}.gap-4{grid-gap:1rem;gap:1rem}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.transform{--transform-translate-x:0;--transform-translate-y:0;--transform-rotate:0;--transform-skew-x:0;--transform-skew-y:0;--transform-scale-x:1;--transform-scale-y:1;transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y))}.origin-top-right{transform-origin:top right}.scale-95{--transform-scale-x:.95;--transform-scale-y:.95}.scale-100{--transform-scale-x:1;--transform-scale-y:1}.transition{transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform}.transition-padding{transition-property:padding}.ease-in{transition-timing-function:cubic-bezier(.4,0,1,1)}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-75{transition-duration:75ms}.duration-100{transition-duration:.1s}.duration-150{transition-duration:.15s}.duration-300{transition-duration:.3s}@-webkit-keyframes spin{to{transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn)}}@-webkit-keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@-webkit-keyframes pulse{50%{opacity:.5}}@keyframes pulse{50%{opacity:.5}}@-webkit-keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}.animate-pulse{-webkit-animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite;animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@media (min-width:640px){.sm\\:flex-row{flex-direction:row}}@media (min-width:1024px){.dark-mode .lg\\:dark\\:bg-transparent,.lg\\:bg-transparent{background-color:transparent}.lg\\:border-t-0{border-top-width:0}.lg\\:border-r{border-right-width:1px}.lg\\:border-l{border-left-width:1px}.lg\\:block{display:block}.lg\\:hidden{display:none}.lg\\:h-auto{height:auto}.lg\\:text-xs{font-size:.75rem;line-height:1rem}.lg\\:-mx-8{margin-left:-2rem;margin-right:-2rem}.lg\\:mt-0{margin-top:0}.lg\\:mb-0{margin-bottom:0}.lg\\:mb-2{margin-bottom:.5rem}.lg\\:max-h-\\(screen-16\\){max-height:calc(100vh - 4rem)}.lg\\:overflow-y-auto{overflow-y:auto}.lg\\:py-8{padding-top:2rem;padding-bottom:2rem}.lg\\:px-8{padding-left:2rem;padding-right:2rem}.lg\\:pl-0{padding-left:0}.lg\\:pr-2{padding-right:.5rem}.lg\\:pb-4{padding-bottom:1rem}.lg\\:pt-8{padding-top:2rem}.lg\\:pr-8{padding-right:2rem}.lg\\:pl-8{padding-left:2rem}.lg\\:relative{position:relative}.lg\\:sticky{position:-webkit-sticky;position:sticky}.lg\\:top-16{top:4rem}.lg\\:w-1\\/4{width:25%}.lg\\:w-3\\/4{width:75%}.lg\\:w-1\\/5{width:20%}.lg\\:w-4\\/5{width:80%}.lg\\:w-full{width:100%}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("4a9a2993", content, true)

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dark-mode .light-img{display:none}.dark-mode .dark-img{display:block}.dark-img{display:none}.light-img{display:block}.nuxt-content{word-wrap:break-word}.nuxt-content h2:before,.nuxt-content h3:before{display:block;content:\" \";margin-top:-85px;height:85px;visibility:hidden;pointer-events:none}.nuxt-content h2>a,.nuxt-content h3>a{margin-left:1.25rem}.nuxt-content h2>a:before,.nuxt-content h3>a:before{content:\"#\";--text-opacity:1;color:#00cd81;color:rgba(0,205,129,var(--text-opacity));font-weight:400;font-size:1.25rem;line-height:1.75rem;line-height:2rem;margin-left:-1.25rem;padding-right:.5rem;position:absolute;opacity:1}@media (min-width:1024px){.nuxt-content h2>a,.nuxt-content h3>a{margin-left:0}.nuxt-content h2>a:before,.nuxt-content h3>a:before{opacity:0}}.nuxt-content h2:hover>a:before,.nuxt-content h3:hover>a:before{opacity:1}.nuxt-content .nuxt-content-highlight{position:relative}.nuxt-content .nuxt-content-highlight>.filename{position:absolute;right:0;top:0;--text-opacity:1;color:#f7fafc;color:rgba(247,250,252,var(--text-opacity));z-index:10;font-family:DM Mono,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:.875rem;line-height:1.25rem;letter-spacing:-.025em;line-height:1;margin-right:1rem;margin-top:.75rem}.nuxt-content .nuxt-content-highlight>.filename+pre[class*=language-]{padding-top:2rem}.nuxt-content .nuxt-content-highlight>.copy{display:none;position:absolute;right:0;bottom:0;line-height:1;box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);padding:.5rem;--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));--bg-opacity:1;background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity));font-size:.875rem;line-height:1.25rem;text-transform:uppercase;border-radius:.375rem;border-width:1px;--border-opacity:1;border-color:#fff;border-color:rgba(255,255,255,var(--border-opacity));font-weight:600;margin-right:.75rem;margin-bottom:.75rem}.nuxt-content .nuxt-content-highlight>.copy:hover{--bg-opacity:1;background-color:#4a5568;background-color:rgba(74,85,104,var(--bg-opacity))}.nuxt-content .nuxt-content-highlight>.copy:focus{outline:2px solid transparent;outline-offset:2px;--bg-opacity:1;background-color:#718096;background-color:rgba(113,128,150,var(--bg-opacity))}.nuxt-content .nuxt-content-highlight:hover>.copy{display:block}.nuxt-content pre[class*=language-]{--bg-opacity:1;background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity));position:static}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("0623093e", content, true)

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "code[class*=language-],pre[class*=language-]{text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;color:#c3cee3;background:#263238;font-family:Roboto Mono,monospace;font-size:1em;line-height:1.5em;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{background:#363636}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{background:#363636}:not(pre)>code[class*=language-]{white-space:normal;border-radius:.2em;padding:.1em}pre[class*=language-]{overflow:auto;position:relative;margin:.5em 0;padding:1.25em 1em}.language-css>code,.language-sass>code,.language-scss>code{color:#fd9170}[class*=language-] .namespace{opacity:.7}.token.atrule{color:#c792ea}.token.attr-name{color:#ffcb6b}.token.attr-value,.token.attribute{color:#c3e88d}.token.boolean{color:#c792ea}.token.builtin{color:#ffcb6b}.token.cdata,.token.char{color:#80cbc4}.token.class{color:#ffcb6b}.token.class-name,.token.color{color:#f2ff00}.token.comment{color:#546e7a}.token.constant{color:#c792ea}.token.deleted{color:#f07178}.token.doctype{color:#546e7a}.token.entity{color:#f07178}.token.function{color:#c792ea}.token.hexcode{color:#f2ff00}.token.id,.token.important{color:#c792ea;font-weight:700}.token.inserted{color:#80cbc4}.token.keyword{color:#c792ea;font-style:italic}.token.number{color:#fd9170}.token.operator{color:#89ddff}.token.prolog{color:#546e7a}.token.property{color:#80cbc4}.token.pseudo-class,.token.pseudo-element{color:#c3e88d}.token.punctuation{color:#89ddff}.token.regex{color:#f2ff00}.token.selector{color:#f07178}.token.string{color:#c3e88d}.token.symbol{color:#c792ea}.token.tag,.token.unit{color:#f07178}.token.url{color:#fd9170}.token.variable{color:#f07178}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_AppSearchAlgolia_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_AppSearchAlgolia_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_AppSearchAlgolia_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_AppSearchAlgolia_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_3_oneOf_1_0_css_loader_dist_cjs_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_AppSearchAlgolia_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".DocSearch{--docsearch-primary-color:var(--color-primary-500);--docsearch-highlight-color:var(--docsearch-primary-color);--docsearch-text-color:var(--color-gray-700);--docsearch-modal-background:var(--color-gray-100);--docsearch-searchbox-shadow:inset 0 0 0 2px var(--docsearch-primary-color);--docsearch-searchbox-background:var(--color-gray-200);--docsearch-searchbox-focus-background:var(--color-gray-200);--docsearch-hit-color:var(--color-gray-700);--docsearch-muted-color:var(--color-gray-500)}.DocSearch-Button{width:100%!important;margin-left:0!important;border-radius:.375rem!important}.DocSearch-Button,.DocSearch-Button-Placeholder{padding-left:.75rem!important;padding-right:.75rem!important}.DocSearch-Screen-Icon>svg{display:inline!important}.dark-mode .DocSearch{--docsearch-text-color:var(--color-gray-300);--docsearch-container-background:rgba(9,10,17,0.8);--docsearch-modal-background:var(--color-gray-900);--docsearch-modal-shadow:inset 1px 1px 0 0 #2c2e40,0 3px 8px 0 #000309;--docsearch-searchbox-background:var(--color-gray-800);--docsearch-searchbox-focus-background:var(--color-gray-800);--docsearch-hit-color:var(--color-gray-300);--docsearch-hit-shadow:none;--docsearch-hit-background:var(--color-gray-800);--docsearch-key-gradient:linear-gradient(-26.5deg,#565872,#31355b);--docsearch-key-shadow:inset 0 -2px 0 0 #282d55,inset 0 0 1px 1px #51577d,0 2px 2px 0 rgba(3,4,9,0.3);--docsearch-footer-background:var(--color-gray-800);--docsearch-footer-shadow:inset 0 1px 0 0 rgba(73,76,106,0.5),0 -4px 8px 0 rgba(0,0,0,0.2);--docsearch-logo-color:#fff;--docsearch-muted-color:var(--color-gray-500)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_groupby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var lodash_groupby__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_groupby__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var defu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var defu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(defu__WEBPACK_IMPORTED_MODULE_2__);




const state = () => ({
  categories: {},
  releases: [],
  settings: {
    title: 'Nuxt Content Docs',
    url: '',
    defaultDir: 'docs',
    defaultBranch: '',
    filled: false
  }
})

const getters = {
  settings (state) {
    return state.settings
  },
  githubUrls (state) {
    const { github = '', githubApi = '' } = state.settings

    // GitHub Enterprise
    if (github.startsWith('http') && githubApi.startsWith('http')) {
      return {
        repo: github,
        api: {
          repo: githubApi,
          releases: `${githubApi}/releases`
        }
      }
    }

    // GitHub
    return {
      repo: `https://github.com/${github}`,
      api: {
        repo: `https://api.github.com/repos/${github}`,
        releases: `https://api.github.com/repos/${github}/releases`
      }
    }
  },
  releases (state) {
    return state.releases
  },
  lastRelease (state) {
    return state.releases[0]
  }
}

const mutations = {
  SET_CATEGORIES (state, categories) {
    // Vue Reactivity rules since we add a nested object
    vue__WEBPACK_IMPORTED_MODULE_0___default.a.set(state.categories, this.$i18n.locale, categories)
  },
  SET_RELEASES (state, releases) {
    state.releases = releases
  },
  SET_DEFAULT_BRANCH (state, branch) {
    state.settings.defaultBranch = branch
  },
  SET_SETTINGS (state, settings) {
    state.settings = defu__WEBPACK_IMPORTED_MODULE_2___default()({ filled: true }, settings, state.settings)
    if (!state.settings.url) {
      // eslint-disable-next-line no-console
      console.warn('Please provide the `url` property in `content/setting.json`')
    }
  }
}

const actions = {
  async fetchCategories ({ commit, state }) {
    // Avoid re-fetching in production
    if ( true && state.categories[this.$i18n.locale]) {
      return
    }
    const docs = await this.$content(this.$i18n.locale, { deep: true }).only(['title', 'menuTitle', 'category', 'slug', 'version', 'to']).sortBy('position', 'asc').fetch()
    if (state.releases.length > 0) {
      docs.push({ slug: 'releases', title: 'Releases', category: 'Community', to: '/releases' })
    }
    const categories = lodash_groupby__WEBPACK_IMPORTED_MODULE_1___default()(docs, 'category')

    commit('SET_CATEGORIES', categories)
  },
  async fetchReleases ({ commit, state, getters }) {
    if (!state.settings.github) {
      return
    }

    const options = {}
    if (this.$config.githubToken) {
      options.headers = { Authorization: `token ${this.$config.githubToken}` }
    }
    let releases = []
    try {
      const data = await fetch(getters.githubUrls.api.releases, options).then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText)
        }
        return res
      }).then(res => res.json())
      releases = data.filter(r => !r.draft).map((release) => {
        return {
          name: (release.name || release.tag_name).replace('Release ', ''),
          date: release.published_at,
          body: this.$markdown(release.body)
        }
      })
    } catch (e) { }

    const getMajorVersion = r => r.name && Number(r.name.substring(1, 2))
    releases.sort((a, b) => {
      const aMajorVersion = getMajorVersion(a)
      const bMajorVersion = getMajorVersion(b)
      if (aMajorVersion !== bMajorVersion) {
        return bMajorVersion - aMajorVersion
      }
      return new Date(b.date) - new Date(a.date)
    })

    commit('SET_RELEASES', releases)
  },
  async fetchDefaultBranch ({ commit, state, getters }) {
    if (!state.settings.github || state.settings.defaultBranch) {
      return
    }

    const options = {}
    if (this.$config.githubToken) {
      options.headers = { Authorization: `token ${this.$config.githubToken}` }
    }
    let defaultBranch
    try {
      const data = await fetch(getters.githubUrls.api.repo, options).then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText)
        }
        return res
      }).then(res => res.json())
      defaultBranch = data.default_branch
    } catch (e) { }

    commit('SET_DEFAULT_BRANCH', defaultBranch || 'main')
  },
  async fetchSettings ({ commit }) {
    try {
      const { dir, extension, path, slug, to, createdAt, updatedAt, ...settings } = await this.$content('settings').fetch()

      commit('SET_SETTINGS', settings)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('You can add a `settings.json` file inside the `content/` folder to customize this theme.')
    }
  }
}


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
const state = () => ({
  open: false
})

const mutations = {
  toggle (state, open) {
    state.open = open !== undefined ? open : !state.open
  },
  close (state) {
    state.open = false
  }
}


/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("@docsearch/js");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("@docsearch/css");

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "AppColorSwitcher", function() { return AppColorSwitcher; });
__webpack_require__.d(components_namespaceObject, "Alert", function() { return Alert; });
__webpack_require__.d(components_namespaceObject, "Badge", function() { return Badge; });
__webpack_require__.d(components_namespaceObject, "CodeBlock", function() { return CodeBlock; });
__webpack_require__.d(components_namespaceObject, "CodeGroup", function() { return CodeGroup; });
__webpack_require__.d(components_namespaceObject, "CodeSandbox", function() { return CodeSandbox; });
__webpack_require__.d(components_namespaceObject, "List", function() { return List; });
__webpack_require__.d(components_namespaceObject, "BuiltWithNuxtDark", function() { return BuiltWithNuxtDark; });
__webpack_require__.d(components_namespaceObject, "BuiltWithNuxtLight", function() { return BuiltWithNuxtLight; });
__webpack_require__.d(components_namespaceObject, "IconArrowLeft", function() { return IconArrowLeft; });
__webpack_require__.d(components_namespaceObject, "IconArrowRight", function() { return IconArrowRight; });
__webpack_require__.d(components_namespaceObject, "IconBadgeCheck", function() { return IconBadgeCheck; });
__webpack_require__.d(components_namespaceObject, "IconCheckCircle", function() { return IconCheckCircle; });
__webpack_require__.d(components_namespaceObject, "IconChevronRight", function() { return IconChevronRight; });
__webpack_require__.d(components_namespaceObject, "IconClipboardCheck", function() { return IconClipboardCheck; });
__webpack_require__.d(components_namespaceObject, "IconClipboardCopy", function() { return IconClipboardCopy; });
__webpack_require__.d(components_namespaceObject, "IconExclamationCircle", function() { return IconExclamationCircle; });
__webpack_require__.d(components_namespaceObject, "IconExternalLink", function() { return IconExternalLink; });
__webpack_require__.d(components_namespaceObject, "IconGithub", function() { return IconGithub; });
__webpack_require__.d(components_namespaceObject, "IconInformationCircle", function() { return IconInformationCircle; });
__webpack_require__.d(components_namespaceObject, "IconMenu", function() { return IconMenu; });
__webpack_require__.d(components_namespaceObject, "IconMoon", function() { return IconMoon; });
__webpack_require__.d(components_namespaceObject, "IconSearch", function() { return IconSearch; });
__webpack_require__.d(components_namespaceObject, "IconSun", function() { return IconSun; });
__webpack_require__.d(components_namespaceObject, "IconTranslate", function() { return IconTranslate; });
__webpack_require__.d(components_namespaceObject, "IconTwitter", function() { return IconTwitter; });
__webpack_require__.d(components_namespaceObject, "IconX", function() { return IconX; });
__webpack_require__.d(components_namespaceObject, "IconXCircle", function() { return IconXCircle; });
__webpack_require__.d(components_namespaceObject, "AppCopyButton", function() { return AppCopyButton; });
__webpack_require__.d(components_namespaceObject, "AppDropdown", function() { return AppDropdown; });
__webpack_require__.d(components_namespaceObject, "AppFooter", function() { return AppFooter; });
__webpack_require__.d(components_namespaceObject, "AppHeader", function() { return AppHeader; });
__webpack_require__.d(components_namespaceObject, "AppLangSwitcher", function() { return AppLangSwitcher; });
__webpack_require__.d(components_namespaceObject, "AppNav", function() { return AppNav; });
__webpack_require__.d(components_namespaceObject, "AppPageBottom", function() { return AppPageBottom; });
__webpack_require__.d(components_namespaceObject, "AppPrevNext", function() { return AppPrevNext; });
__webpack_require__.d(components_namespaceObject, "AppSearch", function() { return AppSearch; });
__webpack_require__.d(components_namespaceObject, "AppSearchAlgolia", function() { return AppSearchAlgolia; });
__webpack_require__.d(components_namespaceObject, "AppToc", function() { return AppToc; });
__webpack_require__.d(components_namespaceObject, "Showcases", function() { return Showcases; });
__webpack_require__.d(components_namespaceObject, "ExampleMultiselect", function() { return ExampleMultiselect; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(2);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(25);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function utils_compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(7);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(10);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(9);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(11);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _317794d8 = () => interopDefault(__webpack_require__.e(/* import() | pages/releases */ 26).then(__webpack_require__.bind(null, 94)));

const _2741f1fa = () => interopDefault(__webpack_require__.e(/* import() | pages/_ */ 25).then(__webpack_require__.bind(null, 95)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/releases",
    component: _317794d8,
    name: "releases___en"
  }, {
    path: "/",
    component: _2741f1fa,
    name: "index___en"
  }, {
    path: "/*",
    component: _2741f1fa,
    name: "all___en"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/layouts/error.vue?vue&type=template&id=cf7cb920&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex flex-wrap-reverse"},[_vm._ssrNode("<div class=\"w-full lg:w-3/4 py-4 lg:pt-8 lg:pb-4 dark:border-gray-800 lg:border-l lg:border-r\"><article class=\"lg:px-8\"><h1 class=\"text-4xl font-black mb-4 leading-none\">"+_vm._ssrEscape(_vm._s(_vm.error.message))+"</h1></article></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/layouts/error.vue?vue&type=template&id=cf7cb920&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/layouts/error.vue?vue&type=script&lang=js&
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
/* harmony default export */ var errorvue_type_script_lang_js_ = ({
  props: {
    error: {
      type: Object,
      required: true
    }
  },

  head() {
    return {
      title: this.error.message
    };
  }

});
// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/layouts/error.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_errorvue_type_script_lang_js_ = (errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/layouts/error.vue





/* normalize component */

var error_component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c4b7d572"
  
)

/* harmony default export */ var layouts_error = (error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: layouts_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || utils_compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(layouts_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function injectStyles (context) {
  
  var style0 = __webpack_require__(33)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  injectStyles,
  null,
  "1f4d1aec"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/@nuxtjs/tailwindcss/lib/files/tailwind.css
var tailwind = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/@nuxt/content-theme-doc/src/assets/css/main.css
var main = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/prism-themes/themes/prism-material-oceanic.css
var prism_material_oceanic = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/layouts/default.vue?vue&type=template&id=9e7eeee0&
var defaultvue_type_template_id_9e7eeee0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pt-16"},[_c('AppHeader'),_vm._ssrNode(" "),_vm._ssrNode("<main class=\"container mx-auto px-4 lg:px-8\">","</main>",[_vm._ssrNode("<div class=\"flex flex-wrap relative\">","</div>",[_c('AppNav'),_vm._ssrNode(" "),_c('Nuxt',{staticClass:"w-full lg:w-4/5"})],2)]),_vm._ssrNode(" "),_c('AppFooter')],2)}
var defaultvue_type_template_id_9e7eeee0_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/layouts/default.vue?vue&type=template&id=9e7eeee0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/layouts/default.vue?vue&type=script&lang=js&
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

/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  head() {
    const i18nSeo = this.$nuxtI18nSeo();
    const previewUrl = this.settings.url.replace(/\/$/, '') + '/preview.png';
    return {
      titleTemplate: chunk => {
        if (chunk) {
          return `${chunk} - ${this.settings.title}`;
        }

        return this.settings.title;
      },
      bodyAttrs: {
        class: [...this.bodyClass, 'antialiased text-gray-700 leading-normal bg-white dark:bg-gray-900 dark:text-gray-300']
      },
      ...i18nSeo,
      meta: (i18nSeo.meta || []).concat([// Open Graph
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: this.settings.title
      }, {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      }, {
        hid: 'og:url',
        property: 'og:url',
        content: this.settings.url
      }, {
        hid: 'og:image',
        property: 'og:image',
        content: previewUrl
      }, // Twitter Card
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      }, {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: this.settings.twitter
      }, {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: this.settings.title
      }, {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: previewUrl
      }, {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: this.settings.title
      }])
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])(['settings']),

    bodyClass() {
      return this.$store.state.menu.open ? ['h-screen lg:h-auto overflow-y-hidden lg:overflow-y-auto'] : [];
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/layouts/default.vue





/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_9e7eeee0_render,
  defaultvue_type_template_id_9e7eeee0_staticRenderFns,
  false,
  null,
  null,
  "2f11c740"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);

/* nuxt-component-imports */
installComponents(default_component, {AppHeader: __webpack_require__(18).default,AppNav: __webpack_require__(52).default,AppFooter: __webpack_require__(21).default})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/layouts/single.vue?vue&type=template&id=88df7894&
var singlevue_type_template_id_88df7894_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pt-16"},[_c('AppHeader'),_vm._ssrNode(" "),_vm._ssrNode("<main class=\"container mx-auto px-4 lg:px-8\">","</main>",[_c('Nuxt')],1),_vm._ssrNode(" "),_c('AppFooter')],2)}
var singlevue_type_template_id_88df7894_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/layouts/single.vue?vue&type=template&id=88df7894&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/layouts/single.vue?vue&type=script&lang=js&
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

/* harmony default export */ var singlevue_type_script_lang_js_ = ({
  head() {
    const i18nSeo = this.$nuxtI18nSeo();
    const previewUrl = this.settings.url.replace(/\/$/, '') + '/preview.png';
    return {
      titleTemplate: chunk => {
        if (chunk) {
          return `${chunk} - ${this.settings.title}`;
        }

        return this.settings.title;
      },
      bodyAttrs: {
        class: [...this.bodyClass, 'antialiased text-gray-700 leading-normal bg-white dark:bg-gray-900 dark:text-gray-300']
      },
      ...i18nSeo,
      meta: (i18nSeo.meta || []).concat([// Open Graph
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: this.settings.title
      }, {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      }, {
        hid: 'og:url',
        property: 'og:url',
        content: this.settings.url
      }, {
        hid: 'og:image',
        property: 'og:image',
        content: previewUrl
      }, // Twitter Card
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      }, {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: this.settings.twitter
      }, {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: this.settings.title
      }, {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: previewUrl
      }, {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: this.settings.title
      }])
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])(['settings']),

    bodyClass() {
      return this.$store.state.menu.open ? ['h-screen lg:h-auto overflow-y-hidden lg:overflow-y-auto'] : [];
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/layouts/single.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_singlevue_type_script_lang_js_ = (singlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/layouts/single.vue





/* normalize component */

var single_component = Object(componentNormalizer["a" /* default */])(
  layouts_singlevue_type_script_lang_js_,
  singlevue_type_template_id_88df7894_render,
  singlevue_type_template_id_88df7894_staticRenderFns,
  false,
  null,
  null,
  "2324d9ce"
  
)

/* harmony default export */ var single = (single_component.exports);

/* nuxt-component-imports */
installComponents(single_component, {AppHeader: __webpack_require__(18).default,AppFooter: __webpack_require__(21).default})

// CONCATENATED MODULE: ./.nuxt/App.js










const layouts = {
  "_default": sanitizeComponent(layouts_default),
  "_single": sanitizeComponent(single)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;

    if (this.isPreview) {
      if (this.$store && this.$store._actions.nuxtServerInit) {
        this.$loading.start();
        await this.$store.dispatch('nuxtServerInit', this.context);
      }

      await this.refresh();
      this.$loading.finish();
    }
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    },

    isPreview() {
      return Boolean(this.$options.previewData);
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (layouts_error.options || layouts_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    },

    getRouterBase() {
      return Object(external_ufo_["withoutTrailingSlash"])(this.$router.options.base);
    },

    getRoutePath(route = '/') {
      const base = this.getRouterBase();
      return Object(external_ufo_["withoutTrailingSlash"])(Object(external_ufo_["withoutBase"])(Object(external_ufo_["parsePath"])(route).pathname, base));
    },

    getStaticAssetsPath(route = '/') {
      const {
        staticAssetsBase
      } = window.__NUXT__;
      return urlJoin(staticAssetsBase, this.getRoutePath(route));
    },

    async fetchStaticManifest() {
      return window.__NUXT_IMPORT__('manifest.js', Object(external_ufo_["normalizeURL"])(urlJoin(this.getStaticAssetsPath(), 'manifest.js')));
    },

    setPagePayload(payload) {
      this._pagePayload = payload;
      this._fetchCounters = {};
    },

    async fetchPayload(route, prefetch) {
      const path = Object(external_ufo_["decode"])(this.getRoutePath(route));
      const manifest = await this.fetchStaticManifest();

      if (!manifest.routes.includes(path)) {
        if (!prefetch) {
          this.setPagePayload(false);
        }

        throw new Error(`Route ${path} is not pre-rendered`);
      }

      const src = urlJoin(this.getStaticAssetsPath(route), 'payload.js');

      try {
        const payload = await window.__NUXT_IMPORT__(path, Object(external_ufo_["normalizeURL"])(src));

        if (!prefetch) {
          this.setPagePayload(payload);
        }

        return payload;
      } catch (err) {
        if (!prefetch) {
          this.setPagePayload(false);
        }

        throw err;
      }
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(44), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(46), 'menu.js'); // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}

function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData; // Remove store src + extension (./foo/index.js -> foo/index)

  const namespace = filename.replace(/\.(js|mjs)$/, '');
  const namespaces = namespace.split('/');
  let moduleName = namespaces[namespaces.length - 1];
  const filePath = `store/${filename}`;
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath); // If src is a known Vuex property

  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName;
    const propertyStoreModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    }); // Replace state since it's a function

    mergeProperty(propertyStoreModule, moduleData, property);
    return;
  } // If file is foo/index.js, it should be saved as foo


  const isIndexModule = moduleName === 'index';

  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }

  const storeModule = getStoreModule(store_store, namespaces);

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property);
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}

function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`);
    const state = Object.assign({}, moduleData);
    return () => state;
  }

  return normalizeModule(moduleData, filePath);
}

function getStoreModule(storeModule, namespaces, {
  isProperty = false
} = {}) {
  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }

  const namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty
  });
}

function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// CONCATENATED MODULE: ./.nuxt/components/index.js
const AppColorSwitcher = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 24)).then(c => wrapFunctional(c.default || c));
const Alert = () => __webpack_require__.e(/* import() | components/alert */ 1).then(__webpack_require__.bind(null, 96)).then(c => wrapFunctional(c.default || c));
const Badge = () => __webpack_require__.e(/* import() | components/badge */ 6).then(__webpack_require__.bind(null, 79)).then(c => wrapFunctional(c.default || c));
const CodeBlock = () => __webpack_require__.e(/* import() | components/code-block */ 9).then(__webpack_require__.bind(null, 97)).then(c => wrapFunctional(c.default || c));
const CodeGroup = () => __webpack_require__.e(/* import() | components/code-group */ 10).then(__webpack_require__.bind(null, 98)).then(c => wrapFunctional(c.default || c));
const CodeSandbox = () => __webpack_require__.e(/* import() | components/code-sandbox */ 11).then(__webpack_require__.bind(null, 99)).then(c => wrapFunctional(c.default || c));
const List = () => __webpack_require__.e(/* import() | components/list */ 23).then(__webpack_require__.bind(null, 100)).then(c => wrapFunctional(c.default || c));
const BuiltWithNuxtDark = () => __webpack_require__.e(/* import() | components/built-with-nuxt-dark */ 7).then(__webpack_require__.bind(null, 103)).then(c => wrapFunctional(c.default || c));
const BuiltWithNuxtLight = () => __webpack_require__.e(/* import() | components/built-with-nuxt-light */ 8).then(__webpack_require__.bind(null, 104)).then(c => wrapFunctional(c.default || c));
const IconArrowLeft = () => __webpack_require__.e(/* import() | components/icon-arrow-left */ 13).then(__webpack_require__.bind(null, 67)).then(c => wrapFunctional(c.default || c));
const IconArrowRight = () => __webpack_require__.e(/* import() | components/icon-arrow-right */ 14).then(__webpack_require__.bind(null, 68)).then(c => wrapFunctional(c.default || c));
const IconBadgeCheck = () => __webpack_require__.e(/* import() | components/icon-badge-check */ 15).then(__webpack_require__.bind(null, 105)).then(c => wrapFunctional(c.default || c));
const IconCheckCircle = () => __webpack_require__.e(/* import() | components/icon-check-circle */ 16).then(__webpack_require__.bind(null, 106)).then(c => wrapFunctional(c.default || c));
const IconChevronRight = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 55)).then(c => wrapFunctional(c.default || c));
const IconClipboardCheck = () => __webpack_require__.e(/* import() | components/icon-clipboard-check */ 17).then(__webpack_require__.bind(null, 65)).then(c => wrapFunctional(c.default || c));
const IconClipboardCopy = () => __webpack_require__.e(/* import() | components/icon-clipboard-copy */ 18).then(__webpack_require__.bind(null, 66)).then(c => wrapFunctional(c.default || c));
const IconExclamationCircle = () => __webpack_require__.e(/* import() | components/icon-exclamation-circle */ 19).then(__webpack_require__.bind(null, 107)).then(c => wrapFunctional(c.default || c));
const IconExternalLink = () => __webpack_require__.e(/* import() | components/icon-external-link */ 20).then(__webpack_require__.bind(null, 108)).then(c => wrapFunctional(c.default || c));
const IconGithub = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 23)).then(c => wrapFunctional(c.default || c));
const IconInformationCircle = () => __webpack_require__.e(/* import() | components/icon-information-circle */ 21).then(__webpack_require__.bind(null, 109)).then(c => wrapFunctional(c.default || c));
const IconMenu = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 57)).then(c => wrapFunctional(c.default || c));
const IconMoon = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 60)).then(c => wrapFunctional(c.default || c));
const IconSearch = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 54)).then(c => wrapFunctional(c.default || c));
const IconSun = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 59)).then(c => wrapFunctional(c.default || c));
const IconTranslate = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 58)).then(c => wrapFunctional(c.default || c));
const IconTwitter = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 22)).then(c => wrapFunctional(c.default || c));
const IconX = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 56)).then(c => wrapFunctional(c.default || c));
const IconXCircle = () => __webpack_require__.e(/* import() | components/icon-x-circle */ 22).then(__webpack_require__.bind(null, 110)).then(c => wrapFunctional(c.default || c));
const AppCopyButton = () => __webpack_require__.e(/* import() | components/app-copy-button */ 2).then(__webpack_require__.bind(null, 76)).then(c => wrapFunctional(c.default || c));
const AppDropdown = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 51)).then(c => wrapFunctional(c.default || c));
const AppFooter = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 21)).then(c => wrapFunctional(c.default || c));
const AppHeader = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 18)).then(c => wrapFunctional(c.default || c));
const AppLangSwitcher = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 20)).then(c => wrapFunctional(c.default || c));
const AppNav = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 52)).then(c => wrapFunctional(c.default || c));
const AppPageBottom = () => __webpack_require__.e(/* import() | components/app-page-bottom */ 3).then(__webpack_require__.bind(null, 77)).then(c => wrapFunctional(c.default || c));
const AppPrevNext = () => __webpack_require__.e(/* import() | components/app-prev-next */ 4).then(__webpack_require__.bind(null, 78)).then(c => wrapFunctional(c.default || c));
const AppSearch = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 19)).then(c => wrapFunctional(c.default || c));
const AppSearchAlgolia = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 53)).then(c => wrapFunctional(c.default || c));
const AppToc = () => __webpack_require__.e(/* import() | components/app-toc */ 5).then(__webpack_require__.bind(null, 64)).then(c => wrapFunctional(c.default || c));
const Showcases = () => __webpack_require__.e(/* import() | components/showcases */ 24).then(__webpack_require__.bind(null, 101)).then(c => wrapFunctional(c.default || c));
const ExampleMultiselect = () => __webpack_require__.e(/* import() | components/example-multiselect */ 12).then(__webpack_require__.bind(null, 102)).then(c => wrapFunctional(c.default || c)); // nuxt/nuxt.js#8607

function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js



for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(4);

// EXTERNAL MODULE: external "property-information"
var external_property_information_ = __webpack_require__(12);
var external_property_information_default = /*#__PURE__*/__webpack_require__.n(external_property_information_);

// CONCATENATED MODULE: ./.nuxt/content/nuxt-content.js

const rootKeys = ['class-name', 'class', 'className', 'style'];
const rxOn = /^@|^v-on:/;
const rxBind = /^:|^v-bind:/;
const rxModel = /^v-model/;
const nativeInputs = ['select', 'textarea', 'input'];

function evalInContext(code, context) {
  return new Function("with(this) { return (" + code + ") }").call(context);
}

function propsToData(node, doc) {
  const {
    tag,
    props
  } = node;
  return Object.keys(props).reduce(function (data, key) {
    const k = key.replace(/.*:/, '');
    let obj = rootKeys.includes(k) ? data : data.attrs;
    const value = props[key];
    const {
      attribute
    } = external_property_information_default.a.find(external_property_information_default.a.html, key);
    const native = nativeInputs.includes(tag);

    if (rxModel.test(key) && value in doc && !native) {
      const mods = key.replace(rxModel, '').split('.').filter(d => d).reduce((d, k) => (d[k] = true, d), {}); // As of yet we don't resolve custom v-model field/event names from components

      const field = 'value';
      const event = mods.lazy ? 'change' : 'input';
      const processor = mods.number ? d => +d : mods.trim ? d => d.trim() : d => d;
      obj[field] = evalInContext(value, doc);
      data.on = data.on || {};

      data.on[event] = e => doc[value] = processor(e);
    } else if (key === 'v-bind') {
      const val = value in doc ? doc[value] : evalInContext(value, doc);
      obj = Object.assign(obj, val);
    } else if (rxOn.test(key)) {
      key = key.replace(rxOn, '');
      data.on = data.on || {};
      data.on[key] = evalInContext(value, doc);
    } else if (rxBind.test(key)) {
      key = key.replace(rxBind, '');
      obj[key] = value in doc ? doc[value] : evalInContext(value, doc);
    } else if (Array.isArray(value)) {
      obj[attribute] = value.join(' ');
    } else {
      obj[attribute] = value;
    }

    return data;
  }, {
    attrs: {}
  });
}
/**
 * Create the scoped slots from `node` template children. Templates for default
 * slots are processed as regular children in `processNode`.
 */


function slotsToData(node, h, doc) {
  const data = {};
  const children = node.children || [];
  children.forEach(child => {
    // Regular children and default templates are processed inside `processNode`.
    if (!isTemplate(child) || isDefaultTemplate(child)) {
      return;
    } // Non-default templates are converted into slots.


    data.scopedSlots = data.scopedSlots || {};
    const template = child;
    const name = getSlotName(template);
    const vDomTree = template.content.map(tmplNode => processNode(tmplNode, h, doc));

    data.scopedSlots[name] = function () {
      return vDomTree;
    };
  });
  return data;
}

function processNode(node, h, doc) {
  /**
   * Return raw value as it is
   */
  if (node.type === 'text') {
    return node.value;
  }

  const slotData = slotsToData(node || {}, h, doc);
  const propData = propsToData(node || {}, doc);
  const data = Object.assign({}, slotData, propData);
  /**
   * Process child nodes, flat-mapping templates pointing to default slots.
   */

  const children = [];

  for (const child of node.children) {
    // Template nodes pointing to non-default slots are processed inside `slotsToData`.
    if (isTemplate(child) && !isDefaultTemplate(child)) {
      continue;
    }

    const processQueue = isDefaultTemplate(child) ? child.content : [child];
    children.push(...processQueue.map(node => processNode(node, h, doc)));
  }

  return h(node.tag, data, children);
}

const DEFAULT_SLOT = 'default';

function isDefaultTemplate(node) {
  return isTemplate(node) && getSlotName(node) === DEFAULT_SLOT;
}

function isTemplate(node) {
  return node.tag === 'template';
}

function getSlotName(node) {
  let name = '';

  for (const propName of Object.keys(node.props)) {
    if (!propName.startsWith('#') && !propName.startsWith('v-slot:')) {
      continue;
    }

    name = propName.split(/[:#]/, 2)[1];
    break;
  }

  return name || DEFAULT_SLOT;
}

/* harmony default export */ var nuxt_content = ({
  name: 'NuxtContent',
  functional: true,
  props: {
    document: {
      required: true
    },
    tag: {
      type: String,
      default: 'div'
    }
  },

  render(h, {
    data,
    props
  }) {
    const {
      document,
      tag
    } = props;
    const {
      body
    } = document || {};

    if (!body || !body.children || !Array.isArray(body.children)) {
      return;
    }

    let classes = [];

    if (Array.isArray(data.class)) {
      classes = data.class;
    } else if (typeof data.class === 'object') {
      const keys = Object.keys(data.class);
      classes = keys.filter(key => data.class[key]);
    } else {
      classes = [data.class];
    }

    data.class = classes.concat('nuxt-content');
    data.props = Object.assign({ ...body.props
    }, data.props);
    return h(tag, data, body.children.map(child => processNode(child, h, document)));
  }

});
// CONCATENATED MODULE: ./.nuxt/content/plugin.server.js


external_vue_default.a.component(nuxt_content.name, nuxt_content);
/* harmony default export */ var plugin_server = ((ctx, inject) => {
  const $content = ctx.ssrContext.$content;
  inject('content', $content);
  ctx.$content = $content;
});
// EXTERNAL MODULE: ./node_modules/is-https/dist/index.js
var dist = __webpack_require__(28);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/i18n/en-US.js
/* harmony default export */ var en_US = ({
  search: {
    placeholder: 'Search the docs (Press "/" to focus)'
  },
  toc: {
    title: 'On this page'
  },
  article: {
    github: 'Edit this page on GitHub',
    updatedAt: 'Updated at'
  }
});

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/options.js

const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {
    "PREFIX": "prefix",
    "PREFIX_EXCEPT_DEFAULT": "prefix_except_default",
    "PREFIX_AND_DEFAULT": "prefix_and_default",
    "NO_PREFIX": "no_prefix"
  }
};
const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined
};
const options = {
  vueI18n: {
    "fallbackLocale": "en",
    "dateTimeFormats": {
      "en": {
        "long": {
          "year": "numeric",
          "month": "short",
          "day": "numeric",
          "weekday": "short"
        }
      },
      "fr": {
        "long": {
          "year": "numeric",
          "month": "long",
          "day": "numeric",
          "weekday": "short"
        }
      }
    }
  },
  vueI18nLoader: false,
  locales: [{
    "code": "en",
    "iso": "en-US",
    "file": "en-US.js",
    "name": "English"
  }],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "C:\\Users\\thoma\\Documents\\remote python\\docs\\node_modules\\@nuxt\\content-theme-doc\\src\\i18n",
  rootRedirect: null,
  detectBrowserLanguage: {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "onlyOnNoPrefix": false,
    "onlyOnRoot": false,
    "useCookie": true
  },
  differentDomains: false,
  seo: false,
  baseUrl: "",
  vuex: {
    "moduleName": "i18n",
    "syncLocale": false,
    "syncMessages": false,
    "syncRouteParams": true
  },
  parsePages: false,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{
    "code": "en",
    "iso": "en-US",
    "file": "en-US.js",
    "name": "English"
  }],
  localeCodes: ["en"]
};
const localeMessages = {
  'en-US.js': () => Promise.resolve(en_US)
};
// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(13);
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(47);

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/utils-common.js


/** @typedef {import('../../types/internal').ResolvedOptions} ResolvedOptions */

/**
 * Formats a log message, prefixing module's name to it.
 *
 * @param {string} text
 * @return {string}
 */

function formatMessage(text) {
  return `[nuxt-i18n] ${text}`;
}
/**
 * Parses locales provided from browser through `accept-language` header.
 *
 * @param {string} input
 * @return {string[]} An array of locale codes. Priority determined by order in array.
 */

function parseAcceptLanguage(input) {
  // Example input: en-US,en;q=0.9,nb;q=0.8,no;q=0.7
  // Contains tags separated by comma.
  // Each tag consists of locale code (2-3 letter language code) and optionally country code
  // after dash. Tag can also contain score after semicolon, that is assumed to match order
  // so it's not explicitly used.
  return input.split(',').map(tag => tag.split(';')[0]);
}
/**
 * Find locale code that best matches provided list of browser locales.
 *
 * @param {ResolvedOptions['normalizedLocales']} appLocales The user-configured locales that are to be matched.
 * @param {readonly string[]} browserLocales The locales to match against configured.
 * @return {string | undefined}
 */

function matchBrowserLocale(appLocales, browserLocales) {
  /** @type {{ code: string, score: number }[]} */
  const matchedLocales = []; // Normalise appLocales input

  /** @type {{ code: string, iso: string }[]} */

  const normalizedAppLocales = [];

  for (const appLocale of appLocales) {
    const {
      code
    } = appLocale;
    const iso = appLocale.iso || code;
    normalizedAppLocales.push({
      code,
      iso
    });
  } // First pass: match exact locale.


  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = normalizedAppLocales.find(appLocale => appLocale.iso.toLowerCase() === browserCode.toLowerCase());

    if (matchedLocale) {
      matchedLocales.push({
        code: matchedLocale.code,
        score: 1 - index / browserLocales.length
      });
      break;
    }
  } // Second pass: match only locale code part of the browser locale (not including country).


  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split('-')[0].toLowerCase();
    const matchedLocale = normalizedAppLocales.find(appLocale => appLocale.iso.split('-')[0].toLowerCase() === languageCode);

    if (matchedLocale) {
      // Deduct a thousandth for being non-exact match.
      matchedLocales.push({
        code: matchedLocale.code,
        score: 0.999 - index / browserLocales.length
      });
      break;
    }
  } // Sort the list by score (0 - lowest, 1 - highest).


  if (matchedLocales.length > 1) {
    matchedLocales.sort((localeA, localeB) => {
      if (localeA.score === localeB.score) {
        // If scores are equal then pick more specific (longer) code.
        return localeB.code.length - localeA.code.length;
      }

      return localeB.score - localeA.score;
    });
  }

  return matchedLocales.length ? matchedLocales[0].code : undefined;
}
/**
 * Get locale code that corresponds to current hostname
 *
 * @param  {ResolvedOptions['normalizedLocales']} locales
 * @param  {import('http').IncomingMessage | undefined} req
 * @return {string} Locale code found if any
 */

function getLocaleDomain(locales, req) {
  /** @type {string | undefined} */
  let host;

  if (false) {} else if (req) {
    const detectedHost = req.headers['x-forwarded-host'] || req.headers.host;
    host = Array.isArray(detectedHost) ? detectedHost[0] : detectedHost;
  }

  if (host) {
    const matchingLocale = locales.find(l => l.domain === host);

    if (matchingLocale) {
      return matchingLocale.code;
    }
  }

  return '';
}
/**
 * Creates a RegExp for route paths
 *
 * @param  {readonly string[]} localeCodes
 * @return {RegExp}
 */

function getLocalesRegex(localeCodes) {
  return new RegExp(`^/(${localeCodes.join('|')})(?:/|$)`, 'i');
}
/**
 * Creates getter for getLocaleFromRoute
 *
 * @param  {readonly string[]} localeCodes
 * @param  {Pick<ResolvedOptions, 'routesNameSeparator' | 'defaultLocaleRouteNameSuffix'>} options
 */

function createLocaleFromRouteGetter(localeCodes, {
  routesNameSeparator,
  defaultLocaleRouteNameSuffix
}) {
  const localesPattern = `(${localeCodes.join('|')})`;
  const defaultSuffixPattern = `(?:${routesNameSeparator}${defaultLocaleRouteNameSuffix})?`;
  const regexpName = new RegExp(`${routesNameSeparator}${localesPattern}${defaultSuffixPattern}$`, 'i');
  const regexpPath = getLocalesRegex(localeCodes);
  /**
   * Extract locale code from given route:
   * - If route has a name, try to extract locale from it
   * - Otherwise, fall back to using the routes'path
   * @param  {import('vue-router').Route} route
   * @return {string} Locale code found if any
   */

  const getLocaleFromRoute = route => {
    // Extract from route name
    if (route.name) {
      const matches = route.name.match(regexpName);

      if (matches && matches.length > 1) {
        return matches[1];
      }
    } else if (route.path) {
      // Extract from path
      const matches = route.path.match(regexpPath);

      if (matches && matches.length > 1) {
        return matches[1];
      }
    }

    return '';
  };

  return getLocaleFromRoute;
}
/**
 * @param {import('http').IncomingMessage | undefined} req
 * @param {{ useCookie: boolean, cookieKey: string, localeCodes: readonly string[] }} options
 * @return {string | undefined}
 */

function getLocaleCookie(req, {
  useCookie,
  cookieKey,
  localeCodes
}) {
  if (useCookie) {
    let localeCode;

    if (false) {} else if (req && typeof req.headers.cookie !== 'undefined') {
      const cookies = req.headers && req.headers.cookie ? external_cookie_default.a.parse(req.headers.cookie) : {};
      localeCode = cookies[cookieKey];
    }

    if (localeCode && localeCodes.includes(localeCode)) {
      return localeCode;
    }
  }
}
/**
 * @param {string} locale
 * @param {import('http').ServerResponse | undefined} res
 * @param {{ useCookie: boolean, cookieDomain: string | null, cookieKey: string, cookieSecure: boolean, cookieCrossOrigin: boolean}} options
 */

function setLocaleCookie(locale, res, {
  useCookie,
  cookieDomain,
  cookieKey,
  cookieSecure,
  cookieCrossOrigin
}) {
  if (!useCookie) {
    return;
  }

  const date = new Date();
  /** @type {import('cookie').CookieSerializeOptions} */

  const cookieOptions = {
    expires: new Date(date.setDate(date.getDate() + 365)),
    path: '/',
    sameSite: cookieCrossOrigin ? 'none' : 'lax',
    secure: cookieCrossOrigin || cookieSecure
  };

  if (cookieDomain) {
    cookieOptions.domain = cookieDomain;
  }

  if (false) {} else if (res) {
    let headers = res.getHeader('Set-Cookie') || [];

    if (!Array.isArray(headers)) {
      headers = [String(headers)];
    }

    const redirectCookie = external_cookie_default.a.serialize(cookieKey, locale, cookieOptions);
    headers.push(redirectCookie);
    res.setHeader('Set-Cookie', headers);
  }
}
// CONCATENATED MODULE: ./node_modules/ufo/dist/index.mjs
const n = /[^\0-\x7E]/;
const t = /[\x2E\u3002\uFF0E\uFF61]/g;
const o = {
  overflow: "Overflow Error",
  "not-basic": "Illegal Input",
  "invalid-input": "Invalid Input"
};
const e = Math.floor;
const r = String.fromCharCode;

function s(n2) {
  throw new RangeError(o[n2]);
}

const c = function (n2, t2) {
  return n2 + 22 + 75 * (n2 < 26) - ((t2 != 0) << 5);
};

const u = function (n2, t2, o2) {
  let r2 = 0;

  for (n2 = o2 ? e(n2 / 700) : n2 >> 1, n2 += e(n2 / t2); n2 > 455; r2 += 36) {
    n2 = e(n2 / 35);
  }

  return e(r2 + 36 * n2 / (n2 + 38));
};

function toASCII(o2) {
  return function (n2, o3) {
    const e2 = n2.split("@");
    let r2 = "";
    e2.length > 1 && (r2 = e2[0] + "@", n2 = e2[1]);

    const s2 = function (n3, t2) {
      const o4 = [];
      let e3 = n3.length;

      for (; e3--;) {
        o4[e3] = t2(n3[e3]);
      }

      return o4;
    }((n2 = n2.replace(t, ".")).split("."), o3).join(".");

    return r2 + s2;
  }(o2, function (t2) {
    return n.test(t2) ? "xn--" + function (n2) {
      const t3 = [];

      const o3 = (n2 = function (n3) {
        const t4 = [];
        let o4 = 0;
        const e2 = n3.length;

        for (; o4 < e2;) {
          const r2 = n3.charCodeAt(o4++);

          if (r2 >= 55296 && r2 <= 56319 && o4 < e2) {
            const e3 = n3.charCodeAt(o4++);
            (64512 & e3) == 56320 ? t4.push(((1023 & r2) << 10) + (1023 & e3) + 65536) : (t4.push(r2), o4--);
          } else {
            t4.push(r2);
          }
        }

        return t4;
      }(n2)).length;

      let f = 128;
      let i = 0;
      let l = 72;

      for (const o4 of n2) {
        o4 < 128 && t3.push(r(o4));
      }

      const h = t3.length;
      let p = h;

      for (h && t3.push("-"); p < o3;) {
        let o4 = 2147483647;

        for (const t4 of n2) {
          t4 >= f && t4 < o4 && (o4 = t4);
        }

        const a = p + 1;
        o4 - f > e((2147483647 - i) / a) && s("overflow"), i += (o4 - f) * a, f = o4;

        for (const o5 of n2) {
          if (o5 < f && ++i > 2147483647 && s("overflow"), o5 == f) {
            let n3 = i;

            for (let o6 = 36;; o6 += 36) {
              const s2 = o6 <= l ? 1 : o6 >= l + 26 ? 26 : o6 - l;

              if (n3 < s2) {
                break;
              }

              const u2 = n3 - s2;
              const f2 = 36 - s2;
              t3.push(r(c(s2 + u2 % f2, 0))), n3 = e(u2 / f2);
            }

            t3.push(r(c(n3, 0))), l = u(i, a, p == h), i = 0, ++p;
          }
        }

        ++i, ++f;
      }

      return t3.join("");
    }(t2) : t2;
  });
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/gi;
const ENC_BRACKET_CLOSE_RE = /%5D/gi;
const ENC_CARET_RE = /%5E/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_CURLY_OPEN_RE = /%7B/gi;
const ENC_PIPE_RE = /%7C/gi;
const ENC_CURLY_CLOSE_RE = /%7D/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2F/gi;
const ENC_ENC_SLASH_RE = /%252F/gi;

function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}

function encodeHash(text) {
  return encode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}

function encodeQueryValue(text) {
  return encode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}

function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}

function encodePath(text) {
  return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
}

function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, "%2F");
}

function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch (_err) {
    return "" + text;
  }
}

function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}

function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}

function encodeHost(name = "") {
  return toASCII(name);
}

function parseQuery(paramsStr = "") {
  const obj = {};

  if (paramsStr[0] === "?") {
    paramsStr = paramsStr.substr(1);
  }

  for (const param of paramsStr.split("&")) {
    const s = param.match(/([^=]+)=?(.*)/) || [];

    if (s.length < 2) {
      continue;
    }

    const key = decode(s[1]);

    if (key === "__proto__" || key === "constructor") {
      continue;
    }

    const value = decodeQueryValue(s[2] || "");

    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    } else {
      obj[key] = value;
    }
  }

  return obj;
}

function encodeQueryItem(key, val) {
  if (!val) {
    return encodeQueryKey(key);
  }

  if (Array.isArray(val)) {
    return val.map(_val => `${encodeQueryKey(key)}=${encodeQueryValue(_val)}`).join("&");
  }

  return `${encodeQueryKey(key)}=${encodeQueryValue(val)}`;
}

function stringifyQuery(query) {
  return Object.keys(query).map(k => encodeQueryItem(k, query[k])).join("&");
}

class $URL {
  constructor(input = "") {
    this.query = {};

    if (typeof input !== "string") {
      throw new TypeError(`URL input should be string received ${typeof input} (${input})`);
    }

    const parsed = parseURL(input);
    this.protocol = decode(parsed.protocol);
    this.host = decode(parsed.host);
    this.auth = decode(parsed.auth);
    this.pathname = decodePath(parsed.pathname);
    this.query = parseQuery(parsed.search);
    this.hash = decode(parsed.hash);
  }

  get hostname() {
    return parseHost(this.host).hostname;
  }

  get port() {
    return parseHost(this.host).port || "";
  }

  get username() {
    return parseAuth(this.auth).username;
  }

  get password() {
    return parseAuth(this.auth).password || "";
  }

  get hasProtocol() {
    return this.protocol.length;
  }

  get isAbsolute() {
    return this.hasProtocol || this.pathname[0] === "/";
  }

  get search() {
    const q = stringifyQuery(this.query);
    return q.length ? "?" + q : "";
  }

  get searchParams() {
    const p = new URLSearchParams();

    for (const name in this.query) {
      const value = this.query[name];

      if (Array.isArray(value)) {
        value.forEach(v => p.append(name, v));
      } else {
        p.append(name, value || "");
      }
    }

    return p;
  }

  get origin() {
    return (this.protocol ? this.protocol + "//" : "") + encodeHost(this.host);
  }

  get fullpath() {
    return encodePath(this.pathname) + this.search + encodeHash(this.hash);
  }

  get encodedAuth() {
    if (!this.auth) {
      return "";
    }

    const {
      username,
      password
    } = parseAuth(this.auth);
    return encodeURIComponent(username) + (password ? ":" + encodeURIComponent(password) : "");
  }

  get href() {
    const auth = this.encodedAuth;
    const originWithAuth = (this.protocol ? this.protocol + "//" : "") + (auth ? auth + "@" : "") + encodeHost(this.host);
    return this.hasProtocol && this.isAbsolute ? originWithAuth + this.fullpath : this.fullpath;
  }

  append(url) {
    if (url.hasProtocol) {
      throw new Error("Cannot append a URL with protocol");
    }

    Object.assign(this.query, url.query);

    if (url.pathname) {
      this.pathname = withTrailingSlash(this.pathname) + withoutLeadingSlash(url.pathname);
    }

    if (url.hash) {
      this.hash = url.hash;
    }
  }

  toJSON() {
    return this.href;
  }

  toString() {
    return this.href;
  }

}

function isRelative(inputStr) {
  return ["./", "../"].some(str => inputStr.startsWith(str));
}

function hasProtocol(inputStr, acceptProtocolRelative = false) {
  return /^\w+:\/\/.+/.test(inputStr) || acceptProtocolRelative && /^\/\/[^/]+/.test(inputStr);
}

const TRAILING_SLASH_RE = /\/$|\/\?/;

function hasTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/");
  }

  return TRAILING_SLASH_RE.test(input);
}

function withoutTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }

  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }

  const [s0, ...s] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s.length ? `?${s.join("?")}` : "");
}

function withTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/") ? input : input + "/";
  }

  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }

  const [s0, ...s] = input.split("?");
  return s0 + "/" + (s.length ? `?${s.join("?")}` : "");
}

function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}

function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.substr(1) : input) || "/";
}

function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}

function cleanDoubleSlashes(input = "") {
  return input.split("://").map(str => str.replace(/\/{2,}/g, "/")).join("://");
}

function withBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }

  const _base = withoutTrailingSlash(base);

  if (input.startsWith(_base)) {
    return input;
  }

  return joinURL(_base, input);
}

function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }

  const _base = withoutTrailingSlash(base);

  if (input.startsWith(_base)) {
    return input.substr(_base.length) || "/";
  }

  return input;
}

function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search),
    ...query
  };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}

function getQuery(input) {
  return parseQuery(parseURL(input).search);
}

function isEmptyURL(url) {
  return !url || url === "/";
}

function isNonEmptyURL(url) {
  return url && url !== "/";
}

function joinURL(base, ...input) {
  let url = base || "";

  for (const i of input.filter(isNonEmptyURL)) {
    url = url ? withTrailingSlash(url) + withoutLeadingSlash(i) : i;
  }

  return url;
}

function createURL(input) {
  return new $URL(input);
}

function normalizeURL(input) {
  return createURL(input).toString();
}

function resolveURL(base, ...input) {
  const url = createURL(base);

  for (const i of input.filter(isNonEmptyURL)) {
    url.append(createURL(i));
  }

  return url.toString();
}

function dist_isSamePath(p1, p2) {
  return decode(withoutTrailingSlash(p1)) === decode(withoutTrailingSlash(p2));
}

function parseURL(input = "", defaultProto) {
  if (!hasProtocol(input, true)) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }

  const [protocol = "", auth, hostAndPath] = (input.match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1);
  const [host = "", path = ""] = (hostAndPath.match(/([^/?]*)(.*)?/) || []).splice(1);
  const {
    pathname,
    search,
    hash
  } = parsePath(path);
  return {
    protocol,
    auth: auth ? auth.substr(0, auth.length - 1) : "",
    host,
    pathname,
    search,
    hash
  };
}

function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}

function parseAuth(input = "") {
  const [username, password] = input.split(":");
  return {
    username: decode(username),
    password: decode(password)
  };
}

function parseHost(input = "") {
  const [hostname, port] = (input.match(/([^/]*)(:0-9+)?/) || []).splice(1);
  return {
    hostname: decode(hostname),
    port
  };
}

function stringifyParsedURL(parsed) {
  const fullpath = parsed.pathname + (parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "") + parsed.hash;

  if (!parsed.protocol) {
    return fullpath;
  }

  return parsed.protocol + "//" + (parsed.auth ? parsed.auth + "@" : "") + parsed.host + fullpath;
}


// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.utils.js


 // @ts-ignore


/** @typedef {import('../../types/internal').ResolvedOptions} ResolvedOptions */

/**
 * Asynchronously load messages from translation files
 *
 * @param {import('@nuxt/types').Context} context
 * @param {string} locale Language code to load
 * @return {Promise<void>}
 */

async function loadLanguageAsync(context, locale) {
  const {
    app
  } = context;
  const {
    i18n
  } = app;

  if (!i18n.loadedLanguages) {
    i18n.loadedLanguages = [];
  }

  if (!i18n.loadedLanguages.includes(locale)) {
    const localeObject = options.normalizedLocales.find(l => l.code === locale);

    if (localeObject) {
      const {
        file
      } = localeObject;

      if (file) {
        /*  */

        /** @type {import('vue-i18n').LocaleMessageObject | undefined} */
        let messages;

        if (false) {}

        if (!messages) {
          try {
            // @ts-ignore
            const getter = await localeMessages[file]().then(m => m.default || m);
            messages = typeof getter === 'function' ? await Promise.resolve(getter(context, locale)) : getter;
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error(formatMessage(`Failed loading async locale export: ${error.message}`));
          }
        }

        if (messages) {
          i18n.setLocaleMessage(locale, messages);
          i18n.loadedLanguages.push(locale);
        }
        /*  */

      } else {
        console.warn(formatMessage(`Could not find lang file for locale ${locale}`));
      }
    } else {
      console.warn(formatMessage(`Attempted to load messages for non-existant locale code "${locale}"`));
    }
  }
}
/**
 * Resolves base URL value if provided as function. Otherwise just returns verbatim.
 *
 * @param {string | ((context: import('@nuxt/types').Context) => string)} baseUrl
 * @param {import('@nuxt/types').Context} context
 * @param {import('../../types').Locale} localeCode
 * @param {Pick<ResolvedOptions, 'differentDomains' | 'normalizedLocales'>} options
 * @return {string}
 */

function resolveBaseUrl(baseUrl, context, localeCode, {
  differentDomains,
  normalizedLocales
}) {
  if (typeof baseUrl === 'function') {
    return baseUrl(context);
  }

  if (differentDomains && localeCode) {
    // Lookup the `differentDomain` origin associated with given locale.
    const domain = getDomainFromLocale(localeCode, context.req, {
      normalizedLocales
    });

    if (domain) {
      return domain;
    }
  }

  return baseUrl;
}
/**
 * Gets the `differentDomain` domain from locale.
 *
 * @param {string} localeCode
 * @param {import('http').IncomingMessage | undefined} req
 * @param {Pick<ResolvedOptions, 'normalizedLocales'>} options
 * @return {string | undefined}
 */

function getDomainFromLocale(localeCode, req, {
  normalizedLocales
}) {
  // Lookup the `differentDomain` origin associated with given locale.
  const lang = normalizedLocales.find(locale => locale.code === localeCode);

  if (lang && lang.domain) {
    if (hasProtocol(lang.domain)) {
      return lang.domain;
    }

    let protocol;

    if (true) {
      protocol = req && dist_default()(req) ? 'https' : 'http';
    } else {}

    return `${protocol}://${lang.domain}`;
  } // eslint-disable-next-line no-console


  console.warn(formatMessage(`Could not find domain name for locale ${localeCode}`));
}
/**
 * @param {import('vuex').Store<Record<string, boolean>>} store
 * @param {Required<import('../../types').VuexOptions>} vuex
 * @param {readonly string[]} localeCodes
 */

function registerStore(store, vuex, localeCodes) {
  /** @typedef {{
   *    locale?: string
   *    messages?: Record<string, string>
   *    routeParams?: Record<string, Record<string, string>>
   * }} ModuleStore
   *
   * @type {import('vuex').Module<ModuleStore, {}>}
   */
  const storeModule = {
    namespaced: true,
    state: () => ({ ...(vuex.syncLocale ? {
        locale: ''
      } : {}),
      ...(vuex.syncMessages ? {
        messages: {}
      } : {}),
      ...(vuex.syncRouteParams ? {
        routeParams: {}
      } : {})
    }),
    actions: { ...(vuex.syncLocale ? {
        setLocale({
          commit
        }, locale) {
          commit('setLocale', locale);
        }

      } : {}),
      ...(vuex.syncMessages ? {
        setMessages({
          commit
        }, messages) {
          commit('setMessages', messages);
        }

      } : {}),
      ...(vuex.syncRouteParams ? {
        setRouteParams({
          commit
        }, params) {
          if (false) {}

          commit('setRouteParams', params);
        }

      } : {})
    },
    mutations: { ...(vuex.syncLocale ? {
        setLocale(state, locale) {
          state.locale = locale;
        }

      } : {}),
      ...(vuex.syncMessages ? {
        setMessages(state, messages) {
          state.messages = messages;
        }

      } : {}),
      ...(vuex.syncRouteParams ? {
        setRouteParams(state, params) {
          state.routeParams = params;
        }

      } : {})
    },
    getters: { ...(vuex.syncRouteParams ? {
        localeRouteParams: ({
          routeParams
        }) => {
          /** @type {(locale: string) => Record<string, string>} */
          const paramsGetter = locale => routeParams && routeParams[locale] || {};

          return paramsGetter;
        }
      } : {})
    }
  };
  store.registerModule(vuex.moduleName, storeModule, {
    preserveState: !!store.state[vuex.moduleName]
  });
}
/**
 * Dispatch store module actions to keep it in sync with app's locale data
 *
 * @param  {import('vuex').Store<void>} store
 * @param  {string | null} locale The current locale
 * @param  {object | null} messages Current messages
 * @param  {ResolvedOptions['vuex']} vuex
 * @return {Promise<void>}
 */

async function syncVuex(store, locale = null, messages = null, vuex) {
  if (vuex && store) {
    if (locale !== null && vuex.syncLocale) {
      await store.dispatch(vuex.moduleName + '/setLocale', locale);
    }

    if (messages !== null && vuex.syncMessages) {
      await store.dispatch(vuex.moduleName + '/setMessages', messages);
    }
  }
}
/**
 * Validate setRouteParams action's payload
 *
 * @param {object} routeParams The action's payload
 * @param {readonly string[]} localeCodes
 */

function validateRouteParams(routeParams, localeCodes) {
  if (!isObject(routeParams)) {
    // eslint-disable-next-line no-console
    console.warn(formatMessage('Route params should be an object'));
    return;
  }

  for (const [key, value] of Object.entries(routeParams)) {
    if (!localeCodes.includes(key)) {
      // eslint-disable-next-line no-console
      console.warn(formatMessage(`Trying to set route params for key ${key} which is not a valid locale`));
    } else if (!isObject(value)) {
      // eslint-disable-next-line no-console
      console.warn(formatMessage(`Trying to set route params for locale ${key} with a non-object value`));
    }
  }
}
/**
 * @param {any} value
 * @return {boolean}
 */

function isObject(value) {
  return value && !Array.isArray(value) && typeof value === 'object';
}
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/middleware.js
// @ts-ignore

/** @type {import('@nuxt/types').Middleware} */

const i18nMiddleware = async context => {
  const {
    app,
    isHMR
  } = context;

  if (isHMR) {
    return;
  }

  const [status, redirectPath, preserveQuery] = await app.i18n.__onNavigate(context.route);

  if (status && redirectPath) {
    const query = preserveQuery ? context.route.query : undefined;
    context.redirect(status, redirectPath, query);
  }
};

_nuxt_middleware.nuxti18n = i18nMiddleware;
// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.routing.js



 // @ts-ignore


/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['localePath']}
 */

function plugin_routing_localePath(route, locale) {
  const localizedRoute = resolveRoute.call(this, route, locale);
  return localizedRoute ? localizedRoute.route.fullPath : '';
}
/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['localeRoute']}
 */


function localeRoute(route, locale) {
  const resolved = resolveRoute.call(this, route, locale);
  return resolved ? resolved.route : undefined;
}
/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['localeLocation']}
 */


function localeLocation(route, locale) {
  const resolved = resolveRoute.call(this, route, locale);
  return resolved ? resolved.location : undefined;
}
/**
 * @this {import('../../types/internal').PluginProxy}
 * @param {import('vue-router').RawLocation} route
 * @param {string} [locale]
 * @return {ReturnType<import('vue-router').default['resolve']> | undefined}
 */


function resolveRoute(route, locale) {
  // Abort if no route or no locale
  if (!route) {
    return;
  }

  const {
    i18n
  } = this;
  locale = locale || i18n.locale;

  if (!locale) {
    return;
  } // If route parameter is a string, check if it's a path or name of route.


  if (typeof route === 'string') {
    if (route[0] === '/') {
      // If route parameter is a path, create route object with path.
      route = {
        path: route
      };
    } else {
      // Else use it as route name.
      route = {
        name: route
      };
    }
  }

  let localizedRoute = Object.assign({}, route);

  if (localizedRoute.path && !localizedRoute.name) {
    const resolvedRoute = this.router.resolve(localizedRoute).route;
    const resolvedRouteName = this.getRouteBaseName(resolvedRoute);

    if (resolvedRouteName) {
      localizedRoute = {
        name: getLocaleRouteName(resolvedRouteName, locale),
        params: resolvedRoute.params,
        query: resolvedRoute.query,
        hash: resolvedRoute.hash
      };
    } else {
      const isDefaultLocale = locale === options.defaultLocale; // if route has a path defined but no name, resolve full route using the path

      const isPrefixed = // don't prefix default locale
      !(isDefaultLocale && [Constants.STRATEGIES.PREFIX_EXCEPT_DEFAULT, Constants.STRATEGIES.PREFIX_AND_DEFAULT].includes(options.strategy)) && // no prefix for any language
      !(options.strategy === Constants.STRATEGIES.NO_PREFIX) && // no prefix for different domains
      !i18n.differentDomains;

      if (isPrefixed) {
        localizedRoute.path = `/${locale}${localizedRoute.path}`;
      }

      localizedRoute.path = nuxtOptions.trailingSlash ? withTrailingSlash(localizedRoute.path, true) : withoutTrailingSlash(localizedRoute.path, true);
    }
  } else {
    if (!localizedRoute.name && !localizedRoute.path) {
      localizedRoute.name = this.getRouteBaseName();
    }

    localizedRoute.name = getLocaleRouteName(localizedRoute.name, locale);
    const {
      params
    } = localizedRoute;

    if (params && params['0'] === undefined && params.pathMatch) {
      params['0'] = params.pathMatch;
    }
  }

  const resolvedRoute = this.router.resolve(localizedRoute);

  if (resolvedRoute.route.name) {
    return resolvedRoute;
  } // If didn't resolve to an existing route then just return resolved route based on original input.


  return this.router.resolve(route);
}
/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['switchLocalePath']}
 */


function switchLocalePath(locale) {
  const name = this.getRouteBaseName();

  if (!name) {
    return '';
  }

  const {
    i18n,
    route,
    store
  } = this;
  const {
    params,
    ...routeCopy
  } = route;
  let langSwitchParams = {};

  if (options.vuex && options.vuex.syncRouteParams && store) {
    langSwitchParams = store.getters[`${options.vuex.moduleName}/localeRouteParams`](locale);
  }

  const baseRoute = Object.assign({}, routeCopy, {
    name,
    params: { ...params,
      ...langSwitchParams,
      0: params.pathMatch
    }
  });
  let path = this.localePath(baseRoute, locale); // Handle different domains

  if (i18n.differentDomains) {
    const getDomainOptions = {
      differentDomains: i18n.differentDomains,
      normalizedLocales: options.normalizedLocales
    };
    const domain = getDomainFromLocale(locale, this.req, getDomainOptions);

    if (domain) {
      path = domain + path;
    }
  }

  return path;
}
/**
 * @this {import('../../types/internal').PluginProxy}
 * @type {Vue['getRouteBaseName']}
 */


function getRouteBaseName(givenRoute) {
  const route = givenRoute !== undefined ? givenRoute : this.route;

  if (!route || !route.name) {
    return;
  }

  return route.name.split(options.routesNameSeparator)[0];
}
/**
 * @param {string | undefined} routeName
 * @param {string} locale
 */


function getLocaleRouteName(routeName, locale) {
  let name = routeName + (options.strategy === Constants.STRATEGIES.NO_PREFIX ? '' : options.routesNameSeparator + locale);

  if (locale === options.defaultLocale && options.strategy === Constants.STRATEGIES.PREFIX_AND_DEFAULT) {
    name += options.routesNameSeparator + options.defaultLocaleRouteNameSuffix;
  }

  return name;
}
/**
 * @template {(...args: any[]) => any} T
 * @param {T} targetFunction
 * @return {(this: Vue, ...args: Parameters<T>) => ReturnType<T>}
 */


const VueInstanceProxy = function (targetFunction) {
  return function () {
    const proxy = {
      getRouteBaseName: this.getRouteBaseName,
      i18n: this.$i18n,
      localePath: this.localePath,
      localeRoute: this.localeRoute,
      localeLocation: this.localeLocation,
      req:  true ? this.$ssrContext.req : undefined,
      route: this.$route,
      router: this.$router,
      store: this.$store
    };
    return targetFunction.call(proxy, ...arguments);
  };
};
/**
 * @template {(...args: any[]) => any} T
 * @param {import('@nuxt/types').Context} context
 * @param {T} targetFunction
 * @return {(...args: Parameters<T>) => ReturnType<T>}
 */


const NuxtContextProxy = function (context, targetFunction) {
  return function () {
    const {
      app,
      req,
      route,
      store
    } = context;
    const proxy = {
      getRouteBaseName: app.getRouteBaseName,
      i18n: app.i18n,
      localePath: app.localePath,
      localeLocation: app.localeLocation,
      localeRoute: app.localeRoute,
      req:  true ? req : undefined,
      route,
      router: app.router,
      store
    };
    return targetFunction.call(proxy, ...arguments);
  };
};
/** @type {import('vue').PluginObject<void>} */


const plugin_routing_plugin = {
  install(Vue) {
    Vue.mixin({
      methods: {
        localePath: VueInstanceProxy(plugin_routing_localePath),
        localeRoute: VueInstanceProxy(localeRoute),
        localeLocation: VueInstanceProxy(localeLocation),
        switchLocalePath: VueInstanceProxy(switchLocalePath),
        getRouteBaseName: VueInstanceProxy(getRouteBaseName)
      }
    });
  }

};
/** @type {import('@nuxt/types').Plugin} */

/* harmony default export */ var plugin_routing = (context => {
  external_vue_default.a.use(plugin_routing_plugin);
  const {
    app,
    store
  } = context;
  app.localePath = context.localePath = NuxtContextProxy(context, plugin_routing_localePath);
  app.localeRoute = context.localeRoute = NuxtContextProxy(context, localeRoute);
  app.localeLocation = context.localeLocation = NuxtContextProxy(context, localeLocation);
  app.switchLocalePath = context.switchLocalePath = NuxtContextProxy(context, switchLocalePath);
  app.getRouteBaseName = context.getRouteBaseName = NuxtContextProxy(context, getRouteBaseName);

  if (store) {
    store.localePath = app.localePath;
    store.localeRoute = app.localeRoute;
    store.localeLocation = app.localeLocation;
    store.switchLocalePath = app.switchLocalePath;
    store.getRouteBaseName = app.getRouteBaseName;
  }
});
// EXTERNAL MODULE: external "vue-i18n"
var external_vue_i18n_ = __webpack_require__(14);
var external_vue_i18n_default = /*#__PURE__*/__webpack_require__.n(external_vue_i18n_);

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/head-meta.js



/**
 * @this {import('vue/types/vue').Vue}
 * @return {import('vue-meta').MetaInfo}
 */

function nuxtI18nHead({
  addDirAttribute = true,
  addSeoAttributes = false
} = {}) {
  // Can happen when using from a global mixin.
  if (!this.$i18n) {
    return {};
  }
  /** @type {import('../../types/vue').NuxtI18nMeta} */


  const metaObject = {
    htmlAttrs: {},
    link: [],
    meta: []
  };
  const currentLocale = this.$i18n.localeProperties;
  const currentLocaleIso = currentLocale.iso;
  const currentLocaleDir = currentLocale.dir || options.defaultDirection;
  /**
   * Adding Direction Attribute:
   */

  if (addDirAttribute) {
    metaObject.htmlAttrs.dir = currentLocaleDir;
  }
  /**
   * Adding SEO Meta:
   */


  if (addSeoAttributes && ( // @ts-ignore
  external_vue_meta_default.a.hasMetaInfo ? external_vue_meta_default.a.hasMetaInfo(this) : this._hasMetaInfo) && this.$i18n.locale && this.$i18n.locales && this.$options[Constants.COMPONENT_OPTIONS_KEY] !== false && // @ts-ignore
  !(this.$options[Constants.COMPONENT_OPTIONS_KEY] && this.$options[Constants.COMPONENT_OPTIONS_KEY].seo === false)) {
    if (currentLocaleIso) {
      metaObject.htmlAttrs.lang = currentLocaleIso; // TODO: simple lang or "specific" lang with territory?
    }

    const locales =
    /** @type {import('../../types').LocaleObject[]} */
    this.$i18n.locales;
    addHreflangLinks.bind(this)(locales, this.$i18n.__baseUrl, metaObject.link);
    addCanonicalLinks.bind(this)(this.$i18n.__baseUrl, metaObject.link);
    addCurrentOgLocale.bind(this)(currentLocale, currentLocaleIso, metaObject.meta);
    addAlternateOgLocales.bind(this)(locales, currentLocaleIso, metaObject.meta);
  }
  /**
   * Internals:
   */

  /**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {import('../../types').LocaleObject[]} locales
   * @param {string} baseUrl
   * @param {import('../../types/vue').NuxtI18nMeta['link']} link
   */


  function addHreflangLinks(locales, baseUrl, link) {
    if (options.strategy === Constants.STRATEGIES.NO_PREFIX) {
      return;
    }
    /** @type {Map<string, import('../../types').LocaleObject>} */


    const localeMap = new Map();

    for (const locale of locales) {
      const localeIso = locale.iso;

      if (!localeIso) {
        // eslint-disable-next-line no-console
        console.warn(formatMessage('Locale ISO code is required to generate alternate link'));
        continue;
      }

      const [language, region] = localeIso.split('-');

      if (language && region && (locale.isCatchallLocale || !localeMap.has(language))) {
        localeMap.set(language, locale);
      }

      localeMap.set(localeIso, locale);
    }

    for (const [iso, mapLocale] of localeMap.entries()) {
      const localePath = this.switchLocalePath(mapLocale.code);

      if (localePath) {
        link.push({
          hid: `i18n-alt-${iso}`,
          rel: 'alternate',
          href: toAbsoluteUrl(localePath, baseUrl),
          hreflang: iso
        });
      }
    }

    if (options.defaultLocale) {
      const localePath = this.switchLocalePath(options.defaultLocale);

      if (localePath) {
        link.push({
          hid: 'i18n-xd',
          rel: 'alternate',
          href: toAbsoluteUrl(localePath, baseUrl),
          hreflang: 'x-default'
        });
      }
    }
  }
  /**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {string} baseUrl
   * @param {import('../../types/vue').NuxtI18nMeta['link']} link
   */


  function addCanonicalLinks(baseUrl, link) {
    const currentRoute = this.localeRoute({ ...this.$route,
      name: this.getRouteBaseName()
    });
    const canonicalPath = currentRoute ? currentRoute.path : null;

    if (canonicalPath) {
      link.push({
        hid: 'i18n-can',
        rel: 'canonical',
        href: toAbsoluteUrl(canonicalPath, baseUrl)
      });
    }
  }
  /**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {import('../../types').LocaleObject} currentLocale
   * @param {string | undefined} currentLocaleIso
   * @param {import('../../types/vue').NuxtI18nMeta['meta']} meta
   */


  function addCurrentOgLocale(currentLocale, currentLocaleIso, meta) {
    const hasCurrentLocaleAndIso = currentLocale && currentLocaleIso;

    if (!hasCurrentLocaleAndIso) {
      return;
    }

    meta.push({
      hid: 'i18n-og',
      property: 'og:locale',
      // Replace dash with underscore as defined in spec: language_TERRITORY
      content: hypenToUnderscore(currentLocaleIso)
    });
  }
  /**
   * @this {import('vue/types/vue').Vue}
   *
   * @param {import('../../types').LocaleObject[]} locales
   * @param {string | undefined} currentLocaleIso
   * @param {import('../../types/vue').NuxtI18nMeta['meta']} meta
   */


  function addAlternateOgLocales(locales, currentLocaleIso, meta) {
    const localesWithoutCurrent = locales.filter(locale => {
      const localeIso = locale.iso;
      return localeIso && localeIso !== currentLocaleIso;
    });

    if (localesWithoutCurrent.length) {
      const alternateLocales = localesWithoutCurrent.map(locale => ({
        hid: `i18n-og-alt-${locale.iso}`,
        property: 'og:locale:alternate',
        content: hypenToUnderscore(locale.iso)
      }));
      meta.push(...alternateLocales);
    }
  }
  /**
   * @param {string | undefined} str
   * @return {string}
   */


  function hypenToUnderscore(str) {
    return (str || '').replace(/-/g, '_');
  }
  /**
   * @param {string} urlOrPath
   * @param {string} baseUrl
   */


  function toAbsoluteUrl(urlOrPath, baseUrl) {
    if (urlOrPath.match(/^https?:\/\//)) {
      return urlOrPath;
    }

    return baseUrl + urlOrPath;
  }

  return metaObject;
}
/**
 * @deprecated Use `nuxtI18nHead()` instead.
 * @this {import('vue/types/vue').Vue}
 */

function nuxtI18nSeo() {
  return nuxtI18nHead.call(this, {
    addDirAttribute: false,
    addSeoAttributes: true
  });
}
// CONCATENATED MODULE: ./node_modules/klona/full/index.mjs
function set(obj, key, val) {
	if (typeof val.value === 'object') val.value = klona(val.value);
	if (!val.enumerable || val.get || val.set || !val.configurable || !val.writable || key === '__proto__') {
		Object.defineProperty(obj, key, val);
	} else obj[key] = val.value;
}

function klona(x) {
	if (typeof x !== 'object') return x;

	var i=0, k, list, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		tmp = Object.create(x.__proto__ || null);
	} else if (str === '[object Array]') {
		tmp = Array(x.length);
	} else if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
	} else if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
	} else if (str === '[object Date]') {
		tmp = new Date(+x);
	} else if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
	} else if (str === '[object DataView]') {
		tmp = new x.constructor( klona(x.buffer) );
	} else if (str === '[object ArrayBuffer]') {
		tmp = x.slice(0);
	} else if (str.slice(-6) === 'Array]') {
		// ArrayBuffer.isView(x)
		// ~> `new` bcuz `Buffer.slice` => ref
		tmp = new x.constructor(x);
	}

	if (tmp) {
		for (list=Object.getOwnPropertySymbols(x); i < list.length; i++) {
			set(tmp, list[i], Object.getOwnPropertyDescriptor(x, list[i]));
		}

		for (i=0, list=Object.getOwnPropertyNames(x); i < list.length; i++) {
			if (Object.hasOwnProperty.call(tmp, k=list[i]) && tmp[k] === x[k]) continue;
			set(tmp, k, Object.getOwnPropertyDescriptor(x, k));
		}
	}

	return tmp || x;
}

// CONCATENATED MODULE: ./.nuxt/nuxt-i18n/plugin.main.js





 // @ts-ignore

 // @ts-ignore


external_vue_default.a.use(external_vue_i18n_default.a);
/** @type {import('@nuxt/types').Plugin} */

/* harmony default export */ var plugin_main = (async context => {
  const {
    app,
    route,
    store,
    req,
    res,
    redirect
  } = context;

  if (options.vuex && store) {
    registerStore(store, options.vuex, options.localeCodes);
  }

  const {
    lazy
  } = options;
  const injectInNuxtState = lazy && (lazy === true || lazy.skipNuxtState !== true);

  if ( true && injectInNuxtState) {
    const devalue = (await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 63, 7))).default;
    context.beforeNuxtRender(({
      nuxtState
    }) => {
      /** @type {Record<string, import('vue-i18n').LocaleMessageObject>} */
      const langs = {};
      const {
        fallbackLocale,
        locale
      } = app.i18n;

      if (locale && locale !== fallbackLocale) {
        // @ts-ignore Using internal API to avoid unnecessary cloning.
        const messages = app.i18n._getMessages()[locale];

        if (messages) {
          try {
            devalue(messages);
            langs[locale] = messages;
          } catch {// Ignore - client-side will load the chunk asynchronously.
          }
        }
      }

      nuxtState.__i18n = {
        langs
      };
    });
  }

  const {
    alwaysRedirect,
    fallbackLocale,
    onlyOnNoPrefix,
    onlyOnRoot,
    useCookie,
    cookieKey,
    cookieDomain,
    cookieSecure,
    cookieCrossOrigin
  } =
  /** @type {Required<import('../../types').DetectBrowserLanguageOptions>} */
  options.detectBrowserLanguage;
  /**
   * @param {string | undefined} newLocale
   * @param {{ initialSetup?: boolean }} [options=false]
   */

  const loadAndSetLocale = async (newLocale, {
    initialSetup = false
  } = {}) => {
    if (!newLocale) {
      return;
    } // Abort if different domains option enabled


    if (!initialSetup && app.i18n.differentDomains) {
      return;
    }

    const oldLocale = app.i18n.locale;

    if (newLocale === oldLocale) {
      return;
    }

    const localeOverride = app.i18n.onBeforeLanguageSwitch(oldLocale, newLocale, initialSetup, context);

    if (localeOverride && app.i18n.localeCodes.includes(localeOverride)) {
      if (localeOverride === oldLocale) {
        return;
      }

      newLocale = localeOverride;
    }

    if (!initialSetup) {
      app.i18n.beforeLanguageSwitch(oldLocale, newLocale);
    }

    if (useCookie) {
      app.i18n.setLocaleCookie(newLocale);
    }

    if (options.langDir) {
      const i18nFallbackLocale = app.i18n.fallbackLocale;

      if (options.lazy) {
        // Load fallback locale(s).
        if (i18nFallbackLocale) {
          /** @type {Promise<void>[]} */
          let localesToLoadPromises = [];

          if (Array.isArray(i18nFallbackLocale)) {
            localesToLoadPromises = i18nFallbackLocale.map(fbLocale => loadLanguageAsync(context, fbLocale));
          } else if (typeof i18nFallbackLocale === 'object') {
            if (i18nFallbackLocale[newLocale]) {
              localesToLoadPromises = localesToLoadPromises.concat(i18nFallbackLocale[newLocale].map(fbLocale => loadLanguageAsync(context, fbLocale)));
            }

            if (i18nFallbackLocale.default) {
              localesToLoadPromises = localesToLoadPromises.concat(i18nFallbackLocale.default.map(fbLocale => loadLanguageAsync(context, fbLocale)));
            }
          } else if (newLocale !== i18nFallbackLocale) {
            localesToLoadPromises.push(loadLanguageAsync(context, i18nFallbackLocale));
          }

          await Promise.all(localesToLoadPromises);
        }

        await loadLanguageAsync(context, newLocale);
      } else {
        // Load all locales.
        await Promise.all(options.localeCodes.map(locale => loadLanguageAsync(context, locale)));
      }
    }

    app.i18n.locale = newLocale;
    /** @type {import('../../types').LocaleObject} */

    const newLocaleProperties = options.normalizedLocales.find(l => l.code === newLocale) || {
      code: newLocale
    }; // In case certain locale has more properties than another, reset all the properties.

    for (const key of Object.keys(app.i18n.localeProperties)) {
      app.i18n.localeProperties[key] = undefined;
    } // Copy properties of the new locale


    for (const [key, value] of Object.entries(newLocaleProperties)) {
      external_vue_default.a.set(app.i18n.localeProperties, key, klona(value));
    }

    if (options.vuex) {
      await syncVuex(store, newLocale, app.i18n.getLocaleMessage(newLocale), options.vuex);
    } // Must retrieve from context as it might have changed since plugin initialization.


    const {
      route
    } = context;
    const redirectPath = getRedirectPathForLocale(route, newLocale);

    if (initialSetup) {
      // Redirect will be delayed until middleware runs as redirecting from plugin does not
      // work in SPA (https://github.com/nuxt/nuxt.js/issues/4491).
      app.i18n.__redirect = redirectPath;
    } else {
      app.i18n.onLanguageSwitched(oldLocale, newLocale);

      if (redirectPath) {
        redirect(redirectPath);
      }
    }
  };

  const getLocaleFromRoute = createLocaleFromRouteGetter(options.localeCodes, {
    routesNameSeparator: options.routesNameSeparator,
    defaultLocaleRouteNameSuffix: options.defaultLocaleRouteNameSuffix
  });
  /**
   * Gets the redirect path for locale.
   *
   * @param {import("vue-router").Route} route
   * @param {string | undefined} locale
   * @return {string} The redirect path for locale.
   */

  const getRedirectPathForLocale = (route, locale) => {
    // Redirects are ignored if it is a nuxt generate.
    if (true) {
      return '';
    }

    if (!locale || app.i18n.differentDomains || options.strategy === Constants.STRATEGIES.NO_PREFIX) {
      return '';
    }

    if (getLocaleFromRoute(route) === locale) {
      // If "onlyOnRoot" or "onlyOnNoPrefix" is set and strategy is "prefix_and_default", prefer unprefixed route for
      // default locale.
      if (!(onlyOnRoot || onlyOnNoPrefix) || locale !== options.defaultLocale || options.strategy !== Constants.STRATEGIES.PREFIX_AND_DEFAULT) {
        return '';
      }
    } // At this point we are left with route that either has no or different locale.


    let redirectPath = app.switchLocalePath(locale);

    if (!redirectPath) {
      // Current route could be 404 in which case attempt to find matching route for given locale.
      redirectPath = app.localePath(route.fullPath, locale);
    }

    if (!redirectPath || redirectPath === route.fullPath || redirectPath.startsWith('//')) {
      return '';
    }

    return redirectPath;
  };
  /**
   * Called by middleware on navigation (also on the initial one).
   *
   * @type {import('../../types/internal').onNavigateInternal}
   */


  const onNavigate = async route => {
    // Handle root path redirect
    if (route.path === '/' && options.rootRedirect) {
      let statusCode = 302;
      let path = options.rootRedirect;

      if (typeof options.rootRedirect !== 'string') {
        statusCode = options.rootRedirect.statusCode;
        path = options.rootRedirect.path;
      }

      return [statusCode, `/${path}`,
      /* preserve query */
      true];
    }

    const storedRedirect = app.i18n.__redirect;

    if (storedRedirect) {
      app.i18n.__redirect = null;
      return [302, storedRedirect];
    }

    const resolveBaseUrlOptions = {
      differentDomains: options.differentDomains,
      normalizedLocales: options.normalizedLocales
    };
    app.i18n.__baseUrl = resolveBaseUrl(options.baseUrl, context, app.i18n.locale, resolveBaseUrlOptions);
    const finalLocale = options.detectBrowserLanguage && doDetectBrowserLanguage(route) || getLocaleFromRoute(route) || app.i18n.locale || app.i18n.defaultLocale || '';

    if (options.skipSettingLocaleOnNavigate) {
      app.i18n.__pendingLocale = finalLocale;
      app.i18n.__pendingLocalePromise = new Promise(resolve => {
        app.i18n.__resolvePendingLocalePromise = resolve;
      });
    } else {
      await app.i18n.setLocale(finalLocale);
    }

    return [null, null];
  };

  const finalizePendingLocaleChange = async () => {
    if (!app.i18n.__pendingLocale) {
      return;
    }

    await app.i18n.setLocale(app.i18n.__pendingLocale);

    app.i18n.__resolvePendingLocalePromise('');

    app.i18n.__pendingLocale = null;
  };

  const waitForPendingLocaleChange = async () => {
    if (app.i18n.__pendingLocale) {
      await app.i18n.__pendingLocalePromise;
    }
  };

  const getBrowserLocale = () => {
    if (false) {} else if (req && typeof req.headers['accept-language'] !== 'undefined') {
      return matchBrowserLocale(options.normalizedLocales, parseAcceptLanguage(req.headers['accept-language']));
    } else {
      return undefined;
    }
  };
  /**
   * @param {import('vue-router').Route} route
   * @return {string} Returns the browser locale that was detected or an empty string otherwise.
   */


  const doDetectBrowserLanguage = route => {
    // Browser detection is ignored if it is a nuxt generate.
    if (true) {
      return '';
    }

    if (options.strategy !== Constants.STRATEGIES.NO_PREFIX) {
      if (onlyOnRoot) {
        if (route.path !== '/') {
          return '';
        }
      } else if (onlyOnNoPrefix) {
        if (!alwaysRedirect && route.path.match(getLocalesRegex(options.localeCodes))) {
          return '';
        }
      }
    }

    let matchedLocale;

    if (useCookie && (matchedLocale = app.i18n.getLocaleCookie())) {// Get preferred language from cookie if present and enabled
    } else {
      // Try to get locale from either navigator or header detection
      matchedLocale = getBrowserLocale();
    }

    const finalLocale = matchedLocale || fallbackLocale; // Handle cookie option to prevent multiple redirections

    if (finalLocale && (!useCookie || alwaysRedirect || !app.i18n.getLocaleCookie())) {
      if (finalLocale !== app.i18n.locale) {
        return finalLocale;
      }
    }

    return '';
  };
  /**
   * Extends the newly created vue-i18n instance with nuxt-i18n properties.
   *
   * @param {import('vue-i18n').IVueI18n} i18n
   */


  const extendVueI18nInstance = i18n => {
    i18n.locales = klona(options.locales);
    i18n.localeCodes = klona(options.localeCodes);
    i18n.localeProperties = external_vue_default.a.observable(klona(options.normalizedLocales.find(l => l.code === i18n.locale) || {
      code: i18n.locale
    }));
    i18n.defaultLocale = options.defaultLocale;
    i18n.differentDomains = options.differentDomains;
    i18n.beforeLanguageSwitch = options.beforeLanguageSwitch;
    i18n.onBeforeLanguageSwitch = options.onBeforeLanguageSwitch;
    i18n.onLanguageSwitched = options.onLanguageSwitched;

    i18n.setLocaleCookie = locale => setLocaleCookie(locale, res, {
      useCookie,
      cookieDomain,
      cookieKey,
      cookieSecure,
      cookieCrossOrigin
    });

    i18n.getLocaleCookie = () => getLocaleCookie(req, {
      useCookie,
      cookieKey,
      localeCodes: options.localeCodes
    });

    i18n.setLocale = locale => loadAndSetLocale(locale);

    i18n.getBrowserLocale = () => getBrowserLocale();

    i18n.finalizePendingLocaleChange = finalizePendingLocaleChange;
    i18n.waitForPendingLocaleChange = waitForPendingLocaleChange;
    i18n.__baseUrl = app.i18n.__baseUrl;
    i18n.__pendingLocale = app.i18n.__pendingLocale;
    i18n.__pendingLocalePromise = app.i18n.__pendingLocalePromise;
    i18n.__resolvePendingLocalePromise = app.i18n.__resolvePendingLocalePromise;
  }; // Set instance options


  const vueI18nOptions = typeof options.vueI18n === 'function' ? await options.vueI18n(context) : klona(options.vueI18n);
  vueI18nOptions.componentInstanceCreatedListener = extendVueI18nInstance; // @ts-ignore

  app.i18n = context.i18n = new external_vue_i18n_default.a(vueI18nOptions); // Initialize locale and fallbackLocale as vue-i18n defaults those to 'en-US' if falsey

  app.i18n.locale = '';
  app.i18n.fallbackLocale = vueI18nOptions.fallbackLocale || '';
  extendVueI18nInstance(app.i18n);
  const resolveBaseUrlOptions = {
    differentDomains: options.differentDomains,
    normalizedLocales: options.normalizedLocales
  };
  app.i18n.__baseUrl = resolveBaseUrl(options.baseUrl, context, '', resolveBaseUrlOptions);
  app.i18n.__onNavigate = onNavigate;
  external_vue_default.a.prototype.$nuxtI18nSeo = nuxtI18nSeo;
  external_vue_default.a.prototype.$nuxtI18nHead = nuxtI18nHead;

  if (store) {
    // Inject in store.
    store.$i18n = app.i18n;

    if (store.state.localeDomains) {
      for (const locale of app.i18n.locales) {
        if (typeof locale === 'string') {
          continue;
        }

        locale.domain = store.state.localeDomains[locale.code];
      }
    }
  }
  /** @type {string | undefined} */


  let finalLocale = options.detectBrowserLanguage ? doDetectBrowserLanguage(route) : '';

  if (!finalLocale) {
    const {
      vuex
    } = options;

    if (vuex && vuex.syncLocale && store && store.state[vuex.moduleName].locale !== '') {
      finalLocale = store.state[vuex.moduleName].locale;
    } else if (app.i18n.differentDomains) {
      const domainLocale = getLocaleDomain(options.normalizedLocales, req);
      finalLocale = domainLocale;
    } else if (options.strategy !== Constants.STRATEGIES.NO_PREFIX) {
      const routeLocale = getLocaleFromRoute(route);
      finalLocale = routeLocale;
    }
  }

  if (!finalLocale && useCookie) {
    finalLocale = app.i18n.getLocaleCookie();
  }

  if (!finalLocale) {
    finalLocale = app.i18n.defaultLocale || '';
  }

  await loadAndSetLocale(finalLocale, {
    initialSetup: true
  });

  if (false) {}
});
// CONCATENATED MODULE: ./.nuxt/pwa/meta.utils.js
function mergeMeta(to, from) {
  if (typeof to === 'function') {
    // eslint-disable-next-line no-console
    console.warn('Cannot merge meta. Avoid using head as a function!');
    return;
  }

  for (const key in from) {
    const value = from[key];

    if (Array.isArray(value)) {
      to[key] = to[key] || [];

      for (const item of value) {
        // Avoid duplicates
        if (item.hid && hasMeta(to[key], 'hid', item.hid) || item.name && hasMeta(to[key], 'name', item.name)) {
          continue;
        } // Add meta


        to[key].push(item);
      }
    } else if (typeof value === 'object') {
      to[key] = to[key] || {};

      for (const attr in value) {
        to[key][attr] = value[attr];
      }
    } else if (to[key] === undefined) {
      to[key] = value;
    }
  }
}

function hasMeta(arr, key, val) {
  return arr.find(obj => val ? obj[key] === val : obj[key]);
}
// EXTERNAL MODULE: ./.nuxt/pwa/meta.json
var meta = __webpack_require__(29);

// CONCATENATED MODULE: ./.nuxt/pwa/meta.plugin.js


/* harmony default export */ var meta_plugin = (function ({
  app
}) {
  mergeMeta(app.head, meta);
});
// CONCATENATED MODULE: ./.nuxt/pwa/icon.plugin.js
/* harmony default export */ var icon_plugin = (async function (ctx, inject) {
  const icons = {
    "64x64": "/_nuxt/icons/icon_64x64.8f91ea.png",
    "120x120": "/_nuxt/icons/icon_120x120.8f91ea.png",
    "144x144": "/_nuxt/icons/icon_144x144.8f91ea.png",
    "152x152": "/_nuxt/icons/icon_152x152.8f91ea.png",
    "192x192": "/_nuxt/icons/icon_192x192.8f91ea.png",
    "384x384": "/_nuxt/icons/icon_384x384.8f91ea.png",
    "512x512": "/_nuxt/icons/icon_512x512.8f91ea.png",
    "ipad_1536x2048": "/_nuxt/icons/splash_ipad_1536x2048.8f91ea.png",
    "ipadpro9_1536x2048": "/_nuxt/icons/splash_ipadpro9_1536x2048.8f91ea.png",
    "ipadpro10_1668x2224": "/_nuxt/icons/splash_ipadpro10_1668x2224.8f91ea.png",
    "ipadpro12_2048x2732": "/_nuxt/icons/splash_ipadpro12_2048x2732.8f91ea.png",
    "iphonese_640x1136": "/_nuxt/icons/splash_iphonese_640x1136.8f91ea.png",
    "iphone6_50x1334": "/_nuxt/icons/splash_iphone6_50x1334.8f91ea.png",
    "iphoneplus_1080x1920": "/_nuxt/icons/splash_iphoneplus_1080x1920.8f91ea.png",
    "iphonex_1125x2436": "/_nuxt/icons/splash_iphonex_1125x2436.8f91ea.png",
    "iphonexr_828x1792": "/_nuxt/icons/splash_iphonexr_828x1792.8f91ea.png",
    "iphonexsmax_1242x2688": "/_nuxt/icons/splash_iphonexsmax_1242x2688.8f91ea.png"
  };

  const getIcon = size => icons[size + 'x' + size] || '';

  inject('icon', getIcon);
});
// CONCATENATED MODULE: ./.nuxt/color-mode/color-scheme.js
/* harmony default export */ var color_scheme = ({
  name: 'ColorScheme',
  functional: true,
  props: {
    placeholder: String,
    tag: {
      type: String,
      default: 'span'
    }
  },

  render(createElement, {
    parent,
    data,
    props,
    children
  }) {
    // transform props for <client-only>
    props = {
      placeholder: props.placeholder,
      placeholderTag: props.tag
    };
    return createElement('client-only', { ...data,
      props
    }, children);
  }

});
// CONCATENATED MODULE: ./.nuxt/color-mode/plugin.server.js


external_vue_default.a.component('ColorScheme', color_scheme);
const script = {
  hid: 'nuxt-color-mode-script',
  innerHTML: `!function(){"use strict";var e=window,s=document,o=s.documentElement,a=["dark","light"],t=window.localStorage.getItem("nuxt-color-mode")||"system",c="system"===t?l():t,i=s.body.getAttribute("data-color-mode-forced");function r(e){var s=""+e+"-mode";o.classList?o.classList.add(s):o.className+=" "+s}function n(s){return e.matchMedia("(prefers-color-scheme"+s+")")}function l(){if(e.matchMedia&&"not all"!==n("").media)for(var s of a)if(n(":"+s).matches)return s;return"light"}i&&(c=i),r(c),e["__NUXT_COLOR_MODE__"]={preference:t,value:c,getColorScheme:l,addClass:r,removeClass:function(e){var s=""+e+"-mode";o.classList?o.classList.remove(s):o.className=o.className.replace(new RegExp(s,"g"),"")}}}();
`,
  pbody: true
};

const addScript = head => {
  head.script = head.script || [];
  head.script.push(script);
  const serializeProp = '__dangerouslyDisableSanitizersByTagID';
  head[serializeProp] = head[serializeProp] || {};
  head[serializeProp]['nuxt-color-mode-script'] = ['innerHTML'];
};

/* harmony default export */ var color_mode_plugin_server = (function (ctx, inject) {
  if (typeof ctx.app.head === 'function') {
    const originalHead = ctx.app.head;

    ctx.app.head = function () {
      const head = originalHead.call(this) || {};
      addScript(head);
      return head;
    };
  } else {
    addScript(ctx.app.head);
  }

  const preference = 'system';
  const colorMode = {
    preference,
    value: preference,
    unknown: true,
    forced: false
  };

  if (ctx.route.matched[0]) {
    const pageColorMode = ctx.route.matched[0].components.default.options.colorMode;

    if (pageColorMode && pageColorMode !== 'system') {
      colorMode.value = pageColorMode;
      colorMode.forced = true;
      ctx.app.head.bodyAttrs = ctx.app.head.bodyAttrs || {};
      ctx.app.head.bodyAttrs['data-color-mode-forced'] = pageColorMode;
    } else if (pageColorMode === 'system') {
      console.warn('You cannot force the colorMode to system at the page level.');
    }
  }

  ctx.beforeNuxtRender(({
    nuxtState
  }) => {
    nuxtState.colorMode = colorMode;
  });
  inject('colorMode', colorMode);
});
// EXTERNAL MODULE: external "marked"
var external_marked_ = __webpack_require__(15);
var external_marked_default = /*#__PURE__*/__webpack_require__.n(external_marked_);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/plugins/markdown.js


/* harmony default export */ var plugins_markdown = (function ({ app }, inject) {
  const renderer = new external_marked_default.a.Renderer()

  renderer.link = function (href, title, text) {
    return title
      ? '<a target="_blank" href="' + href + '" title="' + title + '">' + text + '</a>'
      : '<a target="_blank" href="' + href + '">' + text + '</a>'
  }

  const compile = (markdown) => {
    if (!markdown) {
      return
    }

    return external_marked_default()(markdown, { renderer })
  }

  inject('markdown', compile)
});

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/plugins/init.js
/* harmony default export */ var init = (async function ({ store, app }) {
  if (true) {
    await store.dispatch('fetchSettings')
    await store.dispatch('fetchReleases')
    await store.dispatch('fetchCategories')
    await store.dispatch('fetchDefaultBranch')
  }
  // Spa Fallback
  if (false) {}
  if (false) {}
  if (false) {}
  if (false) {}
  // Hot reload on development
  if (false) {}
});

// EXTERNAL MODULE: external "vue-scrollactive"
var external_vue_scrollactive_ = __webpack_require__(30);
var external_vue_scrollactive_default = /*#__PURE__*/__webpack_require__.n(external_vue_scrollactive_);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/plugins/vue-scrollactive.js



external_vue_default.a.use(external_vue_scrollactive_default.a)

// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: .\\components\\plugin.js (mode: 'all')

 // Source: .\\content\\plugin.client.js (mode: 'client')

 // Source: .\\content\\plugin.server.js (mode: 'server')

 // Source: .\\nuxt-i18n\\plugin.utils.js (mode: 'all')

 // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')

 // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')

 // Source: .\\vue-plausible.client.js (mode: 'client')

 // Source: .\\workbox.js (mode: 'client')

 // Source: .\\pwa\\meta.plugin.js (mode: 'all')

 // Source: .\\pwa\\icon.plugin.js (mode: 'all')

 // Source: .\\color-mode\\plugin.server.js (mode: 'server')

 // Source: .\\color-mode\\plugin.client.js (mode: 'client')

 // Source: ..\\node_modules\\@nuxt\\content-theme-doc\\src\\plugins\\markdown (mode: 'all')

 // Source: ..\\node_modules\\@nuxt\\content-theme-doc\\src\\plugins\\init (mode: 'all')

 // Source: ..\\node_modules\\@nuxt\\content-theme-doc\\src\\plugins\\i18n.client (mode: 'client')

 // Source: ..\\node_modules\\@nuxt\\content-theme-doc\\src\\plugins\\vue-scrollactive (mode: 'all')

 // Source: ..\\node_modules\\@nuxt\\content-theme-doc\\src\\plugins\\menu.client (mode: 'client')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;

function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }],
      "link": [{
        "hid": "gf-prefetch",
        "rel": "dns-prefetch",
        "href": "https:\u002F\u002Ffonts.gstatic.com\u002F"
      }, {
        "hid": "gf-preconnect",
        "rel": "preconnect",
        "href": "https:\u002F\u002Ffonts.gstatic.com\u002F",
        "crossorigin": ""
      }, {
        "hid": "gf-preload",
        "rel": "preload",
        "as": "style",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=DM+Sans&family=DM+Mono"
      }],
      "style": [],
      "script": [{
        "hid": "gf-script",
        "innerHTML": "(function(){var l=document.createElement('link');l.rel=\"stylesheet\";l.href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=DM+Sans&family=DM+Mono\";document.querySelector(\"head\").appendChild(l);})();"
      }],
      "noscript": [{
        "hid": "gf-noscript",
        "innerHTML": "\u003Clink rel=\"stylesheet\" href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=DM+Sans&family=DM+Mono\"\u003E"
      }],
      "__dangerouslyDisableSanitizersByTagID": {
        "gf-script": ["innerHTML"],
        "gf-noscript": ["innerHTML"]
      }
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (false) {}

  if ( true && typeof plugin_server === 'function') {
    await plugin_server(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/nuxt-i18n/plugin.utils.js" (known exports: loadLanguageAsync resolveBaseUrl getDomainFromLocale registerStore syncVuex validateRouteParams, known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/nuxt-i18n/plugin.utils.js" (known exports: loadLanguageAsync resolveBaseUrl getDomainFromLocale registerStore syncVuex validateRouteParams, known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof plugin_routing === 'function') {
    await plugin_routing(app.context, inject);
  }

  if (typeof plugin_main === 'function') {
    await plugin_main(app.context, inject);
  }

  if (false) {}

  if (false) {}

  if (typeof meta_plugin === 'function') {
    await meta_plugin(app.context, inject);
  }

  if (typeof icon_plugin === 'function') {
    await icon_plugin(app.context, inject);
  }

  if ( true && typeof color_mode_plugin_server === 'function') {
    await color_mode_plugin_server(app.context, inject);
  }

  if (false) {}

  if (typeof plugins_markdown === 'function') {
    await plugins_markdown(app.context, inject);
  }

  if (typeof init === 'function') {
    await init(app.context, inject);
  }

  if (false) {}

  if (typeof /* Cannot get final name for export "default" in "./node_modules/@nuxt/content-theme-doc/src/plugins/vue-scrollactive.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./node_modules/@nuxt/content-theme-doc/src/plugins/vue-scrollactive.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (false) {} // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}

    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target

  if (ssrContext.url) {
    ssrContext.url = ssrContext.url.split('?')[0];
  } // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state; // Stop recording store mutations

      ssrContext.unsetMutationObserver();
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (layouts_error.options || layouts_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(layouts_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = ["nuxti18n"];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Record store mutations for full-static after nuxtServerInit and Middleware


  ssrContext.nuxt.mutations = [];
  ssrContext.unsetMutationObserver = store.subscribe(m => {
    ssrContext.nuxt.mutations.push([m.type, m.payload]);
  });
  /*
  ** Set layout
  */

  let layout = Components.length ? Components[0].options.layout : layouts_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/components/app/AppDropdown.vue?vue&type=template&id=104db19a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"click-away",rawName:"v-click-away",value:('close'),expression:"'close'"}],staticClass:"relative inline-block text-left",on:{"mouseenter":function($event){_vm.open = true},"mouseleave":function($event){_vm.open = false},"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"escape",undefined,$event.key,undefined)){ return null; }_vm.open = false}}},[_vm._t("trigger",null,{"toggle":_vm.toggle,"open":_vm.open}),_vm._ssrNode(" "),_c('transition',{attrs:{"enter-class":"transform opacity-0 scale-95","enter-active-class":"transition ease-out duration-100","enter-to-class":"transform opacity-100 scale-100","leave-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-to-class":"transform opacity-0 scale-95"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.open),expression:"open"}],staticClass:"mt-2 w-auto rounded-md shadow-lg z-50 origin-top-right absolute bottom-0 right-0"},[_c('div',{staticClass:"rounded-md bg-white dark:bg-gray-800 shadow-xs"},[_vm._t("default")],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/app/AppDropdown.vue?vue&type=template&id=104db19a&

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/directives/click-away.js
let handleOutsideClick

/* harmony default export */ var click_away = ({
  bind (el, binding, vnode) {
    handleOutsideClick = (e) => {
      e.stopPropagation()

      // Trigger close if the clicked element is not in the dialog element (except if it's a link)
      if (!el.contains(e.target) || e.target.href) {
        vnode.context[binding.value]()
      }
    }

    document.addEventListener('click', handleOutsideClick)
  },

  unbind () {
    document.removeEventListener('click', handleOutsideClick)
  }
});

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/components/app/AppDropdown.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//
//

/* harmony default export */ var AppDropdownvue_type_script_lang_js_ = ({
  name: 'Dropdown',
  directives: {
    'click-away': click_away
  },

  data() {
    return {
      open: false
    };
  },

  methods: {
    toggle() {
      this.open = !this.open;
    },

    close() {
      this.open = false;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/app/AppDropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var app_AppDropdownvue_type_script_lang_js_ = (AppDropdownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/app/AppDropdown.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_AppDropdownvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "600b314f"
  
)

/* harmony default export */ var AppDropdown = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/components/app/AppNav.vue?vue&type=template&id=b2bf4828&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('aside',{staticClass:"w-full lg:w-1/5 lg:block fixed lg:relative inset-0 mt-16 lg:mt-0 z-30 bg-white dark:bg-gray-900 lg:bg-transparent lg:dark:bg-transparent",class:{ 'block': _vm.menu, 'hidden': !_vm.menu }},[_vm._ssrNode("<div class=\"lg:sticky lg:top-16 overflow-y-auto h-full lg:h-auto lg:max-h-(screen-16)\">","</div>",[_vm._ssrNode("<ul class=\"p-4 lg:py-8 lg:pl-0 lg:pr-8\">","</ul>",[(!_vm.settings.algolia)?_vm._ssrNode("<li class=\"mb-4 lg:hidden\">","</li>",[_c('AppSearch')],1):_vm._e(),_vm._ssrNode(" "),_vm._l((_vm.categories),function(docs,category,index){return _vm._ssrNode("<li"+(_vm._ssrClass("mb-4",{
          'active': _vm.isCategoryActive(docs),
          'lg:mb-0': index === Object.keys(_vm.categories).length - 1
        }))+">","</li>",[_vm._ssrNode(((category)?("<p class=\"mb-2 text-gray-500 uppercase tracking-wider font-bold text-sm lg:text-xs\">"+_vm._ssrEscape(_vm._s(category))+"</p>"):"<!---->")+" "),_vm._ssrNode("<ul>","</ul>",_vm._l((docs),function(doc){return _vm._ssrNode("<li class=\"text-gray-700 dark:text-gray-300\">","</li>",[_c('NuxtLink',{staticClass:"px-2 rounded font-medium py-1 hover:text-primary-500 flex items-center justify-between",attrs:{"to":_vm.localePath(doc.to),"exact-active-class":"text-primary-500 bg-primary-100 hover:text-primary-500 dark:bg-primary-900"}},[_vm._v("\n              "+_vm._s(doc.menuTitle || doc.title)+"\n              "),_c('client-only',[(_vm.isDocumentNew(doc))?_c('span',{staticClass:"animate-pulse rounded-full bg-primary-500 opacity-75 h-2 w-2"}):_vm._e()])],1)],1)}),0)],2)}),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"lg:hidden space-x-2\">","</li>",[_vm._ssrNode("<p class=\"mb-2 text-gray-500 uppercase tracking-wider font-bold text-sm lg:text-xs\">More</p> "),_vm._ssrNode("<div class=\"flex items-center space-x-4\">","</div>",[(_vm.settings.twitter)?_vm._ssrNode("<a"+(_vm._ssrAttr("href",("https://twitter.com/" + (_vm.settings.twitter))))+" target=\"_blank\" rel=\"noopener noreferrer\" title=\"Twitter\" name=\"Twitter\" class=\"inline-flex text-gray-700 dark:text-gray-300 hover:text-primary-500\">","</a>",[_c('IconTwitter',{staticClass:"w-5 h-5"})],1):_vm._e(),_vm._ssrNode(" "),(_vm.settings.github)?_vm._ssrNode("<a"+(_vm._ssrAttr("href",_vm.githubUrls.repo))+" target=\"_blank\" rel=\"noopener noreferrer\" title=\"Github\" name=\"Github\" class=\"inline-flex text-gray-700 dark:text-gray-300 hover:text-primary-500\">","</a>",[_c('IconGithub',{staticClass:"w-5 h-5"})],1):_vm._e(),_vm._ssrNode(" "),_c('AppLangSwitcher'),_vm._ssrNode(" "),_c('AppColorSwitcher')],2)],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/app/AppNav.vue?vue&type=template&id=b2bf4828&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/components/app/AppNav.vue?vue&type=script&lang=js&
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

/* harmony default export */ var AppNavvue_type_script_lang_js_ = ({
  computed: { ...Object(external_vuex_["mapGetters"])(['settings', 'githubUrls']),
    menu: {
      get() {
        return this.$store.state.menu.open;
      },

      set(val) {
        this.$store.commit('menu/toggle', val);
      }

    },

    categories() {
      return this.$store.state.categories[this.$i18n.locale];
    }

  },
  methods: {
    isCategoryActive(documents) {
      return documents.some(document => document.to === this.$route.fullPath);
    },

    isDocumentNew(document) {
      if (true) {
        return;
      }

      if (!document.version || document.version <= 0) {
        return;
      }

      const version = localStorage.getItem(`document-${document.slug}-version`);

      if (document.version > Number(version)) {
        return true;
      }

      return false;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/app/AppNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var app_AppNavvue_type_script_lang_js_ = (AppNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/app/AppNav.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_AppNavvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "02c08755"
  
)

/* harmony default export */ var AppNav = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AppSearch: __webpack_require__(19).default,IconTwitter: __webpack_require__(22).default,IconGithub: __webpack_require__(23).default,AppLangSwitcher: __webpack_require__(20).default,AppColorSwitcher: __webpack_require__(24).default})


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/components/app/AppSearchAlgolia.vue?vue&type=template&id=f1d15932&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lg:w-full",attrs:{"id":"docsearch"}},[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/app/AppSearchAlgolia.vue?vue&type=template&id=f1d15932&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/components/app/AppSearchAlgolia.vue?vue&type=script&lang=js&
var AppSearchAlgoliavue_type_script_lang_js_ = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/app/AppSearchAlgolia.vue?vue&type=script&lang=js&
 /* harmony default export */ var app_AppSearchAlgoliavue_type_script_lang_js_ = (AppSearchAlgoliavue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/app/AppSearchAlgolia.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(42)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_AppSearchAlgoliavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "19700b3b"
  
)

/* harmony default export */ var AppSearchAlgolia = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/components/global/icons/IconSearch.vue?vue&type=template&id=d54a83cc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"fill":"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24","stroke":"currentColor"}},[_vm._ssrNode("<path d=\"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/global/icons/IconSearch.vue?vue&type=template&id=d54a83cc&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/global/icons/IconSearch.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "48d6e0d8"
  
)

/* harmony default export */ var IconSearch = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/components/global/icons/IconChevronRight.vue?vue&type=template&id=de50c7e4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"fill":"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24","stroke":"currentColor"}},[_vm._ssrNode("<path d=\"M9 5l7 7-7 7\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/global/icons/IconChevronRight.vue?vue&type=template&id=de50c7e4&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/global/icons/IconChevronRight.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4455270d"
  
)

/* harmony default export */ var IconChevronRight = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/components/global/icons/IconX.vue?vue&type=template&id=8a1aab5a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"fill":"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24","stroke":"currentColor"}},[_vm._ssrNode("<path d=\"M6 18L18 6M6 6l12 12\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/global/icons/IconX.vue?vue&type=template&id=8a1aab5a&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/global/icons/IconX.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "59933188"
  
)

/* harmony default export */ var IconX = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/components/global/icons/IconMenu.vue?vue&type=template&id=13f4257a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"fill":"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24","stroke":"currentColor"}},[_vm._ssrNode("<path d=\"M4 6h16M4 12h16M4 18h16\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/global/icons/IconMenu.vue?vue&type=template&id=13f4257a&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/global/icons/IconMenu.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3df95e6a"
  
)

/* harmony default export */ var IconMenu = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/components/global/icons/IconTranslate.vue?vue&type=template&id=b08c39f0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"fill":"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","stroke":"currentColor","viewBox":"0 0 24 24"}},[_vm._ssrNode("<path d=\"M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/global/icons/IconTranslate.vue?vue&type=template&id=b08c39f0&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/global/icons/IconTranslate.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "904bdddc"
  
)

/* harmony default export */ var IconTranslate = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/components/global/icons/IconSun.vue?vue&type=template&id=affd30e6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"fill":"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24","stroke":"currentColor"}},[_vm._ssrNode("<path d=\"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/global/icons/IconSun.vue?vue&type=template&id=affd30e6&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/global/icons/IconSun.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4f51c010"
  
)

/* harmony default export */ var IconSun = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/content-theme-doc/src/components/global/icons/IconMoon.vue?vue&type=template&id=566d3abb&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"fill":"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","viewBox":"0 0 24 24","stroke":"currentColor"}},[_vm._ssrNode("<path d=\"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/global/icons/IconMoon.vue?vue&type=template&id=566d3abb&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@nuxt/content-theme-doc/src/components/global/icons/IconMoon.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "19585526"
  
)

/* harmony default export */ var IconMoon = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("clipboard");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("vue-multiselect");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("devalue");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map