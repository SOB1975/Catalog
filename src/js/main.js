"use strict" //обрабатываем код в строгом режиме
// import Swiper JS
import Swiper, {
  Navigation,
  Pagination,
  Thumbs
} from 'swiper';
// Код определяет на каком устройстве запущен сайт
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone[iPad]iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  }
};

if (isMobile.any()) {
  document.body.classList.add('_touch');
  let menuArrows = document.querySelectorAll('.menu__arrow');
  if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
      const menuArrow = menuArrows[index];
      menuArrow.addEventListener('click', function (e) {
        menuArrow.parentElement.classList.toggle('_active');
      });
    }
  }
} else {
  document.body.classList.add('_pc');
}
// ZOOM Увелечительное стекло
function magnify(imgID, zoom) {
  let img, glass, w, h, bw;
  // img = document.querySelector(imgID);
  img = imgID;

  /* Создать увеличительное стекло: */
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");
  /* Вставить увеличительное стекло: */
  img.parentElement.insertBefore(glass, img);

  /* Установите свойства фона для стекла лупы: */
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  /* Выполните функцию, когда кто-то перемещает лупу по изображению: */
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  /* а также для сенсорных экранов: */
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  // закрываем лупу
  glass.addEventListener("click", function () {
    glass.setAttribute("class", "_hidden");
  });


  function moveMagnifier(e) {
    var pos, x, y;
    /* Предотвратите любые другие действия, которые могут возникнуть при перемещении по изображению */
    e.preventDefault();
    /* Получить позиции курсора x и y: */
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /* Не допускайте, чтобы лупа находилась вне изображения: */
    if (x > img.width - (w / zoom)) {
      x = img.width - (w / zoom);
    }
    if (x < w / zoom) {
      x = w / zoom;
    }
    if (y > img.height - (h / zoom)) {
      y = img.height - (h / zoom);
    }
    if (y < h / zoom) {
      y = h / zoom;
    }
    /* Установите положение стекла лупы: */
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /* Покажите, что такое увеличительное стекло "смотреть": */
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a, x = 0,
      y = 0;
    e = e || window.event;
    /* Получить x и y позиции изображения: */
    a = img.getBoundingClientRect();
    /* Вычислите координаты курсора x и y относительно изображения: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {
      x: x,
      y: y
    };
  }
}
const myImg = document.querySelectorAll('.modal-slider__img');
myImg.forEach(function (item) {

  item.addEventListener('click', function () {
    item.classList.toggle('_active');
    magnify(item, 3);

  });
});

// кнопка показать еще
// const showMore = document.querySelector('.show-more');
// все карточки(количество)
// const productsLenght = document.querySelectorAll('.product').length;
// видимое количество элементов
// let items = 9;

// showMore.addEventListener('click', function () {
//   console.log('TEST');
//   // шаг по 3 карточки
//   items += 6;
//   const array = Array.from(document.querySelector('.products-box').children);
//   const visItems = array.slice(0, items);
//   console.log(array);
//   console.log(visItems);
//   visItems.forEach(el => el.classList.add('_is-visible'));
//   if (visItems.length === productsLenght) {
//     showMore.style.display = 'none';
//   }
// });

//Swup библиотека=======================================================================
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd)
    define([], factory);
  else if (typeof exports === 'object')
    exports["Swup"] = factory();
  else
    root["Swup"] = factory();
})(window, function () {
  return /******/ (function (modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/
      if (installedModules[moduleId]) {
        /******/
        return installedModules[moduleId].exports;
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/
      var module = installedModules[moduleId] = {
        /******/
        i: moduleId,
        /******/
        l: false,
        /******/
        exports: {}
        /******/
      };
      /******/
      /******/ // Execute the module function
      /******/
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /******/
      /******/ // Flag the module as loaded
      /******/
      module.l = true;
      /******/
      /******/ // Return the exports of the module
      /******/
      return module.exports;
      /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/
    __webpack_require__.d = function (exports, name, getter) {
      /******/
      if (!__webpack_require__.o(exports, name)) {
        /******/
        Object.defineProperty(exports, name, {
          enumerable: true,
          get: getter
        });
        /******/
      }
      /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/
    __webpack_require__.r = function (exports) {
      /******/
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/
    __webpack_require__.t = function (value, mode) {
      /******/
      if (mode & 1) value = __webpack_require__(value);
      /******/
      if (mode & 8) return value;
      /******/
      if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
      /******/
      var ns = Object.create(null);
      /******/
      __webpack_require__.r(ns);
      /******/
      Object.defineProperty(ns, 'default', {
        enumerable: true,
        value: value
      });
      /******/
      if (mode & 2 && typeof value != 'string')
        for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
      /******/
      return ns;
      /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function (module) {
      /******/
      var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
      /******/
      __webpack_require__.d(getter, 'a', getter);
      /******/
      return getter;
      /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 3);
    /******/
  })
  /************************************************************************/
  /******/
  ([
    /* 0 */
    /***/
    (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.cleanupAnimationClasses = exports.Link = exports.markSwupElements = exports.normalizeUrl = exports.getCurrentUrl = exports.transitionProperty = exports.transitionEnd = exports.fetch = exports.getDataFromHtml = exports.createHistoryRecord = exports.classify = undefined;

      var _classify = __webpack_require__(7);

      var _classify2 = _interopRequireDefault(_classify);

      var _createHistoryRecord = __webpack_require__(8);

      var _createHistoryRecord2 = _interopRequireDefault(_createHistoryRecord);

      var _getDataFromHtml = __webpack_require__(9);

      var _getDataFromHtml2 = _interopRequireDefault(_getDataFromHtml);

      var _fetch = __webpack_require__(10);

      var _fetch2 = _interopRequireDefault(_fetch);

      var _transitionEnd = __webpack_require__(11);

      var _transitionEnd2 = _interopRequireDefault(_transitionEnd);

      var _transitionProperty = __webpack_require__(12);

      var _transitionProperty2 = _interopRequireDefault(_transitionProperty);

      var _getCurrentUrl = __webpack_require__(13);

      var _getCurrentUrl2 = _interopRequireDefault(_getCurrentUrl);

      var _normalizeUrl = __webpack_require__(14);

      var _normalizeUrl2 = _interopRequireDefault(_normalizeUrl);

      var _markSwupElements = __webpack_require__(15);

      var _markSwupElements2 = _interopRequireDefault(_markSwupElements);

      var _Link = __webpack_require__(2);

      var _Link2 = _interopRequireDefault(_Link);

      var _cleanupAnimationClasses = __webpack_require__(16);

      var _cleanupAnimationClasses2 = _interopRequireDefault(_cleanupAnimationClasses);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }

      var classify = exports.classify = _classify2.default;
      var createHistoryRecord = exports.createHistoryRecord = _createHistoryRecord2.default;
      var getDataFromHtml = exports.getDataFromHtml = _getDataFromHtml2.default;
      var fetch = exports.fetch = _fetch2.default;
      var transitionEnd = exports.transitionEnd = _transitionEnd2.default;
      var transitionProperty = exports.transitionProperty = _transitionProperty2.default;
      var getCurrentUrl = exports.getCurrentUrl = _getCurrentUrl2.default;
      var normalizeUrl = exports.normalizeUrl = _normalizeUrl2.default;
      var markSwupElements = exports.markSwupElements = _markSwupElements2.default;
      var Link = exports.Link = _Link2.default;
      var cleanupAnimationClasses = exports.cleanupAnimationClasses = _cleanupAnimationClasses2.default;

      /***/
    }),
    /* 1 */
    /***/
    (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var query = exports.query = function query(selector) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

        if (typeof selector !== 'string') {
          return selector;
        }

        return context.querySelector(selector);
      };

      var queryAll = exports.queryAll = function queryAll(selector) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

        if (typeof selector !== 'string') {
          return selector;
        }

        return Array.prototype.slice.call(context.querySelectorAll(selector));
      };

      var escapeCssIdentifier = exports.escapeCssIdentifier = function escapeCssIdentifier(ident) {
        if (window.CSS && window.CSS.escape) {
          return CSS.escape(ident);
        } else {
          return ident;
        }
      };

      /***/
    }),
    /* 2 */
    /***/
    (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var Link = function () {
        function Link(elementOrUrl) {
          _classCallCheck(this, Link);

          if (elementOrUrl instanceof Element || elementOrUrl instanceof SVGElement) {
            this.link = elementOrUrl;
          } else {
            this.link = document.createElement('a');
            this.link.href = elementOrUrl;
          }
        }

        _createClass(Link, [{
          key: 'getPath',
          value: function getPath() {
            var path = this.link.pathname;
            if (path[0] !== '/') {
              path = '/' + path;
            }
            return path;
          }
        }, {
          key: 'getAddress',
          value: function getAddress() {
            var path = this.link.pathname + this.link.search;

            if (this.link.getAttribute('xlink:href')) {
              path = this.link.getAttribute('xlink:href');
            }

            if (path[0] !== '/') {
              path = '/' + path;
            }
            return path;
          }
        }, {
          key: 'getHash',
          value: function getHash() {
            return this.link.hash;
          }
        }]);

        return Link;
      }();

      exports.default = Link;

      /***/
    }),
    /* 3 */
    /***/
    (function (module, exports, __webpack_require__) {

      "use strict";


      var _index = __webpack_require__(4);

      var _index2 = _interopRequireDefault(_index);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }

      module.exports = _index2.default; // this is here for webpack to expose Swup as window.Swup

      /***/
    }),
    /* 4 */
    /***/
    (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      // modules


      var _delegateIt = __webpack_require__(5);

      var _delegateIt2 = _interopRequireDefault(_delegateIt);

      var _Cache = __webpack_require__(6);

      var _Cache2 = _interopRequireDefault(_Cache);

      var _loadPage = __webpack_require__(17);

      var _loadPage2 = _interopRequireDefault(_loadPage);

      var _renderPage = __webpack_require__(18);

      var _renderPage2 = _interopRequireDefault(_renderPage);

      var _triggerEvent = __webpack_require__(19);

      var _triggerEvent2 = _interopRequireDefault(_triggerEvent);

      var _on = __webpack_require__(20);

      var _on2 = _interopRequireDefault(_on);

      var _off = __webpack_require__(21);

      var _off2 = _interopRequireDefault(_off);

      var _updateTransition = __webpack_require__(22);

      var _updateTransition2 = _interopRequireDefault(_updateTransition);

      var _getAnchorElement = __webpack_require__(23);

      var _getAnchorElement2 = _interopRequireDefault(_getAnchorElement);

      var _getAnimationPromises = __webpack_require__(24);

      var _getAnimationPromises2 = _interopRequireDefault(_getAnimationPromises);

      var _getPageData = __webpack_require__(25);

      var _getPageData2 = _interopRequireDefault(_getPageData);

      var _plugins = __webpack_require__(26);

      var _utils = __webpack_require__(1);

      var _helpers = __webpack_require__(0);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var Swup = function () {
        function Swup(setOptions) {
          _classCallCheck(this, Swup);

          // default options
          var defaults = {
            animateHistoryBrowsing: false,
            animationSelector: '[class*="transition-"]',
            linkSelector: 'a[href^="' + window.location.origin + '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
            cache: true,
            containers: ['#swup'],
            requestHeaders: {
              'X-Requested-With': 'swup',
              Accept: 'text/html, application/xhtml+xml'
            },
            plugins: [],
            skipPopStateHandling: function skipPopStateHandling(event) {
              return !(event.state && event.state.source === 'swup');
            }
          };

          // merge options
          var options = _extends({}, defaults, setOptions);

          // handler arrays
          this._handlers = {
            animationInDone: [],
            animationInStart: [],
            animationOutDone: [],
            animationOutStart: [],
            animationSkipped: [],
            clickLink: [],
            contentReplaced: [],
            disabled: [],
            enabled: [],
            openPageInNewTab: [],
            pageLoaded: [],
            pageRetrievedFromCache: [],
            pageView: [],
            popState: [],
            samePage: [],
            samePageWithHash: [],
            serverError: [],
            transitionStart: [],
            transitionEnd: [],
            willReplaceContent: []
          };

          // variable for anchor to scroll to after render
          this.scrollToElement = null;
          // variable for promise used for preload, so no new loading of the same page starts while page is loading
          this.preloadPromise = null;
          // variable for save options
          this.options = options;
          // variable for plugins array
          this.plugins = [];
          // variable for current transition object
          this.transition = {};
          // variable for keeping event listeners from "delegate"
          this.delegatedListeners = {};
          // so we are able to remove the listener
          this.boundPopStateHandler = this.popStateHandler.bind(this);

          // make modules accessible in instance
          this.cache = new _Cache2.default();
          this.cache.swup = this;
          this.loadPage = _loadPage2.default;
          this.renderPage = _renderPage2.default;
          this.triggerEvent = _triggerEvent2.default;
          this.on = _on2.default;
          this.off = _off2.default;
          this.updateTransition = _updateTransition2.default;
          this.getAnimationPromises = _getAnimationPromises2.default;
          this.getPageData = _getPageData2.default;
          this.getAnchorElement = _getAnchorElement2.default;
          this.log = function () {}; // here so it can be used by plugins
          this.use = _plugins.use;
          this.unuse = _plugins.unuse;
          this.findPlugin = _plugins.findPlugin;
          this.getCurrentUrl = _helpers.getCurrentUrl;
          this.cleanupAnimationClasses = _helpers.cleanupAnimationClasses;

          // enable swup
          this.enable();
        }

        _createClass(Swup, [{
          key: 'enable',
          value: function enable() {
            var _this = this;

            // check for Promise support
            if (typeof Promise === 'undefined') {
              console.warn('Promise is not supported');
              return;
            }

            // add event listeners
            this.delegatedListeners.click = (0, _delegateIt2.default)(document, this.options.linkSelector, 'click', this.linkClickHandler.bind(this));
            window.addEventListener('popstate', this.boundPopStateHandler);

            // initial save to cache
            if (this.options.cache) {}
            // disabled to avoid caching modified dom state
            // https://github.com/swup/swup/issues/475
            // logic moved to preload plugin


            // mark swup blocks in html
            (0, _helpers.markSwupElements)(document.documentElement, this.options.containers);

            // mount plugins
            this.options.plugins.forEach(function (plugin) {
              _this.use(plugin);
            });

            // modify initial history record
            window.history.replaceState(Object.assign({}, window.history.state, {
              url: window.location.href,
              random: Math.random(),
              source: 'swup'
            }), document.title, window.location.href);

            // trigger enabled event
            this.triggerEvent('enabled');

            // add swup-enabled class to html tag
            document.documentElement.classList.add('swup-enabled');

            // trigger page view event
            this.triggerEvent('pageView');
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            var _this2 = this;

            // remove delegated listeners
            this.delegatedListeners.click.destroy();

            // remove popstate listener
            window.removeEventListener('popstate', this.boundPopStateHandler);

            // empty cache
            this.cache.empty();

            // unmount plugins
            this.options.plugins.forEach(function (plugin) {
              _this2.unuse(plugin);
            });

            // remove swup data atributes from blocks
            (0, _utils.queryAll)('[data-swup]').forEach(function (element) {
              element.removeAttribute('data-swup');
            });

            // remove handlers
            this.off();

            // trigger disable event
            this.triggerEvent('disabled');

            // remove swup-enabled class from html tag
            document.documentElement.classList.remove('swup-enabled');
          }
        }, {
          key: 'linkClickHandler',
          value: function linkClickHandler(event) {
            // no control key pressed
            if (!event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
              // index of pressed button needs to be checked because Firefox triggers click on all mouse buttons
              if (event.button === 0) {
                this.triggerEvent('clickLink', event);
                event.preventDefault();
                var link = new _helpers.Link(event.delegateTarget);
                if (link.getAddress() == (0, _helpers.getCurrentUrl)() || link.getAddress() == '') {
                  // link to the same URL
                  if (link.getHash() != '') {
                    // link to the same URL with hash
                    this.triggerEvent('samePageWithHash', event);
                    var element = (0, _getAnchorElement2.default)(link.getHash());
                    if (element != null) {
                      history.replaceState({
                        url: link.getAddress() + link.getHash(),
                        random: Math.random(),
                        source: 'swup'
                      }, document.title, link.getAddress() + link.getHash());
                    } else {
                      // referenced element not found
                      console.warn('Element for offset not found (' + link.getHash() + ')');
                    }
                  } else {
                    // link to the same URL without hash
                    this.triggerEvent('samePage', event);
                  }
                } else {
                  // link to different url
                  if (link.getHash() != '') {
                    this.scrollToElement = link.getHash();
                  }

                  // get custom transition from data
                  var customTransition = event.delegateTarget.getAttribute('data-swup-transition');

                  // load page
                  this.loadPage({
                    url: link.getAddress(),
                    customTransition: customTransition
                  }, false);
                }
              }
            } else {
              // open in new tab (do nothing)
              this.triggerEvent('openPageInNewTab', event);
            }
          }
        }, {
          key: 'popStateHandler',
          value: function popStateHandler(event) {
            if (this.options.skipPopStateHandling(event)) return;
            var link = new _helpers.Link(event.state ? event.state.url : window.location.pathname);
            if (link.getHash() !== '') {
              this.scrollToElement = link.getHash();
            } else {
              event.preventDefault();
            }
            this.triggerEvent('popState', event);

            if (!this.options.animateHistoryBrowsing) {
              document.documentElement.classList.remove('is-animating');
              (0, _helpers.cleanupAnimationClasses)();
            }

            this.loadPage({
              url: link.getAddress()
            }, event);
          }
        }]);

        return Swup;
      }();

      exports.default = Swup;

      /***/
    }),
    /* 5 */
    /***/
    (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /** Keeps track of raw listeners added to the base elements to avoid duplication */
      const ledger = new WeakMap();

      function editLedger(wanted, baseElement, callback, setup) {
        var _a, _b;
        if (!wanted && !ledger.has(baseElement)) {
          return false;
        }
        const elementMap = (_a = ledger.get(baseElement)) !== null && _a !== void 0 ? _a : new WeakMap();
        ledger.set(baseElement, elementMap);
        if (!wanted && !ledger.has(baseElement)) {
          return false;
        }
        const setups = (_b = elementMap.get(callback)) !== null && _b !== void 0 ? _b : new Set();
        elementMap.set(callback, setups);
        const existed = setups.has(setup);
        if (wanted) {
          setups.add(setup);
        } else {
          setups.delete(setup);
        }
        return existed && wanted;
      }

      function isEventTarget(elements) {
        return typeof elements.addEventListener === 'function';
      }

      function safeClosest(event, selector) {
        let target = event.target;
        if (target instanceof Text) {
          target = target.parentElement;
        }
        if (target instanceof Element && event.currentTarget instanceof Element) {
          // `.closest()` may match ancestors of `currentTarget` but we only need its children
          const closest = target.closest(selector);
          if (closest && event.currentTarget.contains(closest)) {
            return closest;
          }
        }
      }
      // This type isn't exported as a declaration, so it needs to be duplicated above
      function delegate(base, selector, type, callback, options) {
        // Handle Selector-based usage
        if (typeof base === 'string') {
          base = document.querySelectorAll(base);
        }
        // Handle Array-like based usage
        if (!isEventTarget(base)) {
          const subscriptions = Array.prototype.map.call(base, (element) => delegate(element, selector, type, callback, options));
          return {
            destroy() {
              for (const subscription of subscriptions) {
                subscription.destroy();
              }
            },
          };
        }
        // `document` should never be the base, it's just an easy way to define "global event listeners"
        const baseElement = base instanceof Document ? base.documentElement : base;
        // Handle the regular Element usage
        const capture = Boolean(typeof options === 'object' ? options.capture : options);
        const listenerFn = (event) => {
          const delegateTarget = safeClosest(event, selector);
          if (delegateTarget) {
            event.delegateTarget = delegateTarget;
            callback.call(baseElement, event);
          }
        };
        // Drop unsupported `once` option https://github.com/fregante/delegate-it/pull/28#discussion_r863467939
        if (typeof options === 'object') {
          delete options.once;
        }
        const setup = JSON.stringify({
          selector,
          type,
          capture
        });
        const isAlreadyListening = editLedger(true, baseElement, callback, setup);
        const delegateSubscription = {
          destroy() {
            baseElement.removeEventListener(type, listenerFn, options);
            editLedger(false, baseElement, callback, setup);
          },
        };
        if (!isAlreadyListening) {
          baseElement.addEventListener(type, listenerFn, options);
        }
        return delegateSubscription;
      }
      /* harmony default export */
      __webpack_exports__["default"] = (delegate);


      /***/
    }),
    /* 6 */
    /***/
    (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Cache = undefined;

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _helpers = __webpack_require__(0);

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var Cache = exports.Cache = function () {
        function Cache() {
          _classCallCheck(this, Cache);

          this.pages = {};
          this.last = null;
        }

        _createClass(Cache, [{
          key: 'cacheUrl',
          value: function cacheUrl(page) {
            page.url = (0, _helpers.normalizeUrl)(page.url);
            if (page.url in this.pages === false) {
              this.pages[page.url] = page;
            }
            this.last = this.pages[page.url];
            this.swup.log('Cache (' + Object.keys(this.pages).length + ')', this.pages);
          }
        }, {
          key: 'getPage',
          value: function getPage(url) {
            url = (0, _helpers.normalizeUrl)(url);
            return this.pages[url];
          }
        }, {
          key: 'getCurrentPage',
          value: function getCurrentPage() {
            return this.getPage((0, _helpers.getCurrentUrl)());
          }
        }, {
          key: 'exists',
          value: function exists(url) {
            url = (0, _helpers.normalizeUrl)(url);
            return url in this.pages;
          }
        }, {
          key: 'empty',
          value: function empty() {
            this.pages = {};
            this.last = null;
            this.swup.log('Cache cleared');
          }
        }, {
          key: 'remove',
          value: function remove(url) {
            delete this.pages[url];
          }
        }]);

        return Cache;
      }();

      exports.default = Cache;

      /***/
    }),
    /* 7 */
    /***/
    (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var classify = function classify(text) {
        var output = text.toString().toLowerCase().replace(/\s+/g, '-') // Replace spaces with -
          .replace(/\//g, '-') // Replace / with -
          .replace(/[^\w\-]+/g, '') // Remove all non-word chars
          .replace(/\-\-+/g, '-') // Replace multiple - with single -
          .replace(/^-+/, '') // Trim - from start of text
          .replace(/-+$/, ''); // Trim - from end of text
        if (output[0] === '/') output = output.splice(1);
        if (output === '') output = 'homepage';
        return output;
      };

      exports.default = classify;

      /***/
    }),
    /* 8 */
    /***/
    (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var createHistoryRecord = function createHistoryRecord(url) {
        window.history.pushState({
          url: url || window.location.href.split(window.location.hostname)[1],
          random: Math.random(),
          source: 'swup'
        }, document.title, url || window.location.href.split(window.location.hostname)[1]);
      };

      exports.default = createHistoryRecord;

      /***/
    }),
    /* 9 */
    /***/
    (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _utils = __webpack_require__(1);

      var getDataFromHtml = function getDataFromHtml(html, containers) {
        var fakeDom = document.createElement('html');
        fakeDom.innerHTML = html;
        var blocks = [];

        containers.forEach(function (selector) {
          if ((0, _utils.query)(selector, fakeDom) == null) {
            console.warn('[swup] Container ' + selector + ' not found on page.');
            return null;
          } else {
            if ((0, _utils.queryAll)(selector).length !== (0, _utils.queryAll)(selector, fakeDom).length) {
              console.warn('[swup] Mismatched number of containers found on new page.');
            }
            (0, _utils.queryAll)(selector).forEach(function (item, index) {
              (0, _utils.queryAll)(selector, fakeDom)[index].setAttribute('data-swup', blocks.length);
              blocks.push((0, _utils.queryAll)(selector, fakeDom)[index].outerHTML);
            });
          }
        });

        var json = {
          title: (fakeDom.querySelector('title') || {}).innerText,
          pageClass: fakeDom.querySelector('body').className,
          originalContent: html,
          blocks: blocks
        };

        // to prevent memory leaks
        fakeDom.innerHTML = '';
        fakeDom = null;

        return json;
      };

      exports.default = getDataFromHtml;

      /***/
    }),
    /* 10 */
    /***/
    (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };

      var fetch = function fetch(setOptions) {
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        var defaults = {
          url: window.location.pathname + window.location.search,
          method: 'GET',
          data: null,
          headers: {}
        };

        var options = _extends({}, defaults, setOptions);

        var request = new XMLHttpRequest();

        request.onreadystatechange = function () {
          if (request.readyState === 4) {
            if (request.status !== 500) {
              callback(request);
            } else {
              callback(request);
            }
          }
        };

        request.open(options.method, options.url, true);
        Object.keys(options.headers).forEach(function (key) {
          request.setRequestHeader(key, options.headers[key]);
        });
        request.send(options.data);
        return request;
      };

      exports.default = fetch;

      /***/
    }),
    /* 11 */
    /***/
    (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var transitionEnd = function transitionEnd() {
        if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
          return 'webkitTransitionEnd';
        } else {
          return 'transitionend';
        }
      };

      exports.default = transitionEnd;

      /***/
    }),
    /* 12 */
    /***/
    (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var transitionProperty = function transitionProperty() {
        if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
          return 'WebkitTransition';
        } else {
          return 'transition';
        }
      };

      exports.default = transitionProperty;

      /***/
    }),
    /* 13 */
    /***/
    (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var getCurrentUrl = function getCurrentUrl() {
        return window.location.pathname + window.location.search;
      };

      exports.default = getCurrentUrl;

      /***/
    }),
    /* 14 */
    /***/
    (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _Link = __webpack_require__(2);

      var _Link2 = _interopRequireDefault(_Link);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }

      var normalizeUrl = function normalizeUrl(url) {
        return new _Link2.default(url).getAddress();
      };

      exports.default = normalizeUrl;

      /***/
    }),
    /* 15 */
    /***/
    (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _utils = __webpack_require__(1);

      var markSwupElements = function markSwupElements(element, containers) {
        var blocks = 0;

        containers.forEach(function (selector) {
          if ((0, _utils.query)(selector, element) == null) {
            console.warn('[swup] Container ' + selector + ' not found on page.');
          } else {
            (0, _utils.queryAll)(selector).forEach(function (item, index) {
              (0, _utils.queryAll)(selector, element)[index].setAttribute('data-swup', blocks);
              blocks++;
            });
          }
        });
      };

      exports.default = markSwupElements;

      /***/
    }),
    /* 16 */
    /***/
    (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var cleanupAnimationClasses = function cleanupAnimationClasses() {
        document.documentElement.className.split(' ').forEach(function (classItem) {
          if (
            // remove "to-{page}" classes
            new RegExp('^to-').test(classItem) ||
            // remove all other classes
            classItem === 'is-changing' || classItem === 'is-rendering' || classItem === 'is-popstate') {
            document.documentElement.classList.remove(classItem);
          }
        });
      };

      exports.default = cleanupAnimationClasses;

      /***/
    }),
    /* 17 */
    /***/
    (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _slicedToArray = function () {
        function sliceIterator(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;
          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"]) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }
        return function (arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };

      var _helpers = __webpack_require__(0);

      var loadPage = function loadPage(data, popstate) {
        var _this = this;

        // create array for storing animation promises
        var animationPromises = [],
          xhrPromise = void 0;
        var animateOut = function animateOut() {
          _this.triggerEvent('animationOutStart');

          // handle classes
          document.documentElement.classList.add('is-changing');
          document.documentElement.classList.add('is-leaving');
          document.documentElement.classList.add('is-animating');
          if (popstate) {
            document.documentElement.classList.add('is-popstate');
          }
          document.documentElement.classList.add('to-' + (0, _helpers.classify)(data.url));

          // animation promise stuff
          animationPromises = _this.getAnimationPromises('out');
          Promise.all(animationPromises).then(function () {
            _this.triggerEvent('animationOutDone');
          });

          // create history record if this is not a popstate call
          if (!popstate) {
            // create pop element with or without anchor
            var state = void 0;
            if (_this.scrollToElement != null) {
              state = data.url + _this.scrollToElement;
            } else {
              state = data.url;
            }

            (0, _helpers.createHistoryRecord)(state);
          }
        };

        this.triggerEvent('transitionStart', popstate);

        // set transition object
        if (data.customTransition != null) {
          this.updateTransition(window.location.pathname, data.url, data.customTransition);
          document.documentElement.classList.add('to-' + (0, _helpers.classify)(data.customTransition));
        } else {
          this.updateTransition(window.location.pathname, data.url);
        }

        // start/skip animation
        if (!popstate || this.options.animateHistoryBrowsing) {
          animateOut();
        } else {
          this.triggerEvent('animationSkipped');
        }

        // start/skip loading of page
        if (this.cache.exists(data.url)) {
          xhrPromise = new Promise(function (resolve) {
            resolve(_this.cache.getPage(data.url));
          });
          this.triggerEvent('pageRetrievedFromCache');
        } else {
          if (!this.preloadPromise || this.preloadPromise.route != data.url) {
            xhrPromise = new Promise(function (resolve, reject) {
              (0, _helpers.fetch)(_extends({}, data, {
                headers: _this.options.requestHeaders
              }), function (response) {
                if (response.status === 500) {
                  _this.triggerEvent('serverError');
                  reject(data.url);
                  return;
                } else {
                  // get json data
                  var page = _this.getPageData(response);
                  if (page != null && page.blocks.length > 0) {
                    page.url = data.url;
                  } else {
                    reject(data.url);
                    return;
                  }
                  // render page
                  _this.cache.cacheUrl(page);
                  _this.triggerEvent('pageLoaded');
                  resolve(page);
                }
              });
            });
          } else {
            xhrPromise = this.preloadPromise;
          }
        }

        // when everything is ready, handle the outcome
        Promise.all([xhrPromise].concat(animationPromises)).then(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 1),
            pageData = _ref2[0];

          // render page
          _this.renderPage(pageData, popstate);
          _this.preloadPromise = null;
        }).catch(function (errorUrl) {
          // rewrite the skipPopStateHandling function to redirect manually when the history.go is processed
          _this.options.skipPopStateHandling = function () {
            window.location = errorUrl;
            return true;
          };

          // go back to the actual page were still at
          window.history.go(-1);
        });
      };

      exports.default = loadPage;

      /***/
    }),
    /* 18 */
    /***/
    (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };

      var _helpers = __webpack_require__(0);

      var renderPage = function renderPage(page, popstate) {
        var _this = this;

        document.documentElement.classList.remove('is-leaving');

        var isCurrentPage = this.getCurrentUrl() === page.url;
        if (!isCurrentPage) return;

        // replace state in case the url was redirected
        var url = new _helpers.Link(page.responseURL).getPath();
        if (window.location.pathname !== url) {
          window.history.replaceState({
            url: url,
            random: Math.random(),
            source: 'swup'
          }, document.title, url);

          // save new record for redirected url
          this.cache.cacheUrl(_extends({}, page, {
            url: url
          }));
        }

        // only add for non-popstate transitions
        if (!popstate || this.options.animateHistoryBrowsing) {
          document.documentElement.classList.add('is-rendering');
        }

        this.triggerEvent('willReplaceContent', popstate);
        // replace blocks
        for (var i = 0; i < page.blocks.length; i++) {
          document.body.querySelector('[data-swup="' + i + '"]').outerHTML = page.blocks[i];
        }
        // set title
        document.title = page.title;
        this.triggerEvent('contentReplaced', popstate);
        this.triggerEvent('pageView', popstate);

        // empty cache if it's disabled (because pages could be preloaded and stuff)
        if (!this.options.cache) {
          this.cache.empty();
        }

        // start animation IN
        setTimeout(function () {
          if (!popstate || _this.options.animateHistoryBrowsing) {
            _this.triggerEvent('animationInStart');
            document.documentElement.classList.remove('is-animating');
          }
        }, 10);

        // handle end of animation
        if (!popstate || this.options.animateHistoryBrowsing) {
          var animationPromises = this.getAnimationPromises('in');
          Promise.all(animationPromises).then(function () {
            _this.triggerEvent('animationInDone');
            _this.triggerEvent('transitionEnd', popstate);
            _this.cleanupAnimationClasses();
          });
        } else {
          this.triggerEvent('transitionEnd', popstate);
        }

        // reset scroll-to element
        this.scrollToElement = null;
      };

      exports.default = renderPage;

      /***/
    }),
    /* 19 */
    /***/
    (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var triggerEvent = function triggerEvent(eventName, originalEvent) {
        // call saved handlers with "on" method and pass originalEvent object if available
        this._handlers[eventName].forEach(function (handler) {
          try {
            handler(originalEvent);
          } catch (error) {
            console.error(error);
          }
        });

        // trigger event on document with prefix "swup:"
        var event = new CustomEvent('swup:' + eventName, {
          detail: eventName
        });
        document.dispatchEvent(event);
      };

      exports.default = triggerEvent;

      /***/
    }),
    /* 20 */
    /***/
    (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var on = function on(event, handler) {
        if (this._handlers[event]) {
          this._handlers[event].push(handler);
        } else {
          console.warn("Unsupported event " + event + ".");
        }
      };

      exports.default = on;

      /***/
    }),
    /* 21 */
    /***/
    (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var off = function off(event, handler) {
        var _this = this;

        if (event != null) {
          if (handler != null) {
            if (this._handlers[event] && this._handlers[event].filter(function (savedHandler) {
                return savedHandler === handler;
              }).length) {
              var toRemove = this._handlers[event].filter(function (savedHandler) {
                return savedHandler === handler;
              })[0];
              var index = this._handlers[event].indexOf(toRemove);
              if (index > -1) {
                this._handlers[event].splice(index, 1);
              }
            } else {
              console.warn("Handler for event '" + event + "' no found.");
            }
          } else {
            this._handlers[event] = [];
          }
        } else {
          Object.keys(this._handlers).forEach(function (keys) {
            _this._handlers[keys] = [];
          });
        }
      };

      exports.default = off;

      /***/
    }),
    /* 22 */
    /***/
    (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var updateTransition = function updateTransition(from, to, custom) {
        // transition routes
        this.transition = {
          from: from,
          to: to,
          custom: custom
        };
      };

      exports.default = updateTransition;

      /***/
    }),
    /* 23 */
    /***/
    (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _utils = __webpack_require__(1);

      var getAnchorElement = function getAnchorElement(hash) {
        if (!hash) {
          return null;
        }

        if (hash.charAt(0) === '#') {
          hash = hash.substring(1);
        }

        hash = decodeURIComponent(hash);
        hash = (0, _utils.escapeCssIdentifier)(hash);

        // https://html.spec.whatwg.org/#find-a-potential-indicated-element
        return (0, _utils.query)('#' + hash) || (0, _utils.query)('a[name=\'' + hash + '\']');
      };

      exports.default = getAnchorElement;

      /***/
    }),
    /* 24 */
    /***/
    (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _utils = __webpack_require__(1);

      var _helpers = __webpack_require__(0);

      var getAnimationPromises = function getAnimationPromises() {
        var selector = this.options.animationSelector;
        var durationProperty = (0, _helpers.transitionProperty)() + 'Duration';
        var promises = [];
        var animatedElements = (0, _utils.queryAll)(selector, document.body);

        if (!animatedElements.length) {
          console.warn('[swup] No animated elements found by selector ' + selector);
          return [Promise.resolve()];
        }

        animatedElements.forEach(function (element) {
          var transitionDuration = window.getComputedStyle(element)[durationProperty];
          // Resolve immediately if no transition defined
          if (!transitionDuration || transitionDuration == '0s') {
            console.warn('[swup] No CSS transition duration defined for element of selector ' + selector);
            promises.push(Promise.resolve());
            return;
          }
          var promise = new Promise(function (resolve) {
            element.addEventListener((0, _helpers.transitionEnd)(), function (event) {
              if (element == event.target) {
                resolve();
              }
            });
          });
          promises.push(promise);
        });

        return promises;
      };

      exports.default = getAnimationPromises;

      /***/
    }),
    /* 25 */
    /***/
    (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _helpers = __webpack_require__(0);

      var getPageData = function getPageData(request) {
        // this method can be replaced in case other content than html is expected to be received from server
        // this function should always return {title, pageClass, originalContent, blocks, responseURL}
        // in case page has invalid structure - return null
        var html = request.responseText;
        var pageObject = (0, _helpers.getDataFromHtml)(html, this.options.containers);

        if (pageObject) {
          pageObject.responseURL = request.responseURL ? request.responseURL : window.location.href;
        } else {
          console.warn('[swup] Received page is invalid.');
          return null;
        }

        return pageObject;
      };

      exports.default = getPageData;

      /***/
    }),
    /* 26 */
    /***/
    (function (module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var use = exports.use = function use(plugin) {
        if (!plugin.isSwupPlugin) {
          console.warn('Not swup plugin instance ' + plugin + '.');
          return;
        }

        this.plugins.push(plugin);
        plugin.swup = this;
        if (typeof plugin._beforeMount === 'function') {
          plugin._beforeMount();
        }
        plugin.mount();

        return this.plugins;
      };

      var unuse = exports.unuse = function unuse(plugin) {
        var pluginReference = void 0;

        if (typeof plugin === 'string') {
          pluginReference = this.plugins.find(function (p) {
            return plugin === p.name;
          });
        } else {
          pluginReference = plugin;
        }

        if (!pluginReference) {
          console.warn('No such plugin.');
          return;
        }

        pluginReference.unmount();

        if (typeof pluginReference._afterUnmount === 'function') {
          pluginReference._afterUnmount();
        }

        var index = this.plugins.indexOf(pluginReference);
        this.plugins.splice(index, 1);

        return this.plugins;
      };

      var findPlugin = exports.findPlugin = function findPlugin(pluginName) {
        return this.plugins.find(function (p) {
          return pluginName === p.name;
        });
      };

      /***/
    })
    /******/
  ]);
});
//===========================================================================================================

// Иницилизация библиотеки swup
const swup = new Swup(); // only this line when included with script tag
// console.log(swup);

function init() {
  // Меню бургер
  const navBurger = document.querySelector('.nav__burger');
  const navMenu = document.querySelector('.nav__menu');
  const iconClose = document.querySelector('.nav__icon-close')
  const iconBurger = document.querySelector('.nav__icon-burger')
  if (navBurger) {
    navBurger.addEventListener('click', function () {
      // console.log('Test');
      navMenu.classList.toggle('_active');
      // dropDownCoins.classList.remove('_active');
      iconClose.classList.toggle('_hidden');
      iconBurger.classList.toggle('_hidden');
    });
  }
  //Подменю Монеты
  const arrowAll = document.querySelectorAll('.arrow');
  const allMenuItem = document.querySelectorAll('.nav__item');
  const subMenu = document.querySelectorAll('.submenu');
  console.log(allMenuItem);
  if (allMenuItem) {
    console.log('Test');
    allMenuItem.forEach(function (item, index) {
      console.log(index);
      item.addEventListener('click', function (e) {
        arrowAll.forEach(function (item, i) {
          if (index == i) {
            item.classList.toggle('_arrow-rotate');
          } else {
            item.classList.remove('_arrow-rotate');
          }
        });

        subMenu.forEach(function (item, i) {
          if (index == i + 1) {
            item.classList.toggle('_active');
          } else {
            item.classList.remove('_active');
          }
        });
      });
    });
  }

  //меню фильтров
  const menuFiltr = document.querySelectorAll('.menu-sidebar__dropdown');
  const menuFiltrIcon = document.querySelectorAll('.menu-sidebar__icon');
  const menuFiltrSubmenu = document.querySelectorAll('.menu-sidebar__submenu');
  console.log(menuFiltr);
  console.log(menuFiltrSubmenu);

  if (menuFiltr) {
    // перебираем по очереди пункты меню фильтров
    menuFiltr.forEach(function (item, index) {
      console.log(item);
      // слушаем выбраный пункт меню
      item.addEventListener('click', function (element) {

        menuFiltrIcon.forEach(function (item, i) {
          if (index == i) {
            item.classList.toggle('_rotate');
          }
        });

        menuFiltrSubmenu.forEach(function (item, i) {
          if (index == i) {
            item.classList.toggle('_active');
          }
        })
      })
    })
  }
  //Главное меню sidebar
  const menuSbMainDrop = document.querySelectorAll('.menu-sb-main__dropdown');
  const menuSbMain = document.querySelectorAll('.menu-sb-main__category');
  const menuSbIcon = document.querySelectorAll('.menu-sb-main__icon');
  const menuSbItem = document.querySelectorAll('.menu-sb-main__item');
  // console.log(menuSbMain);
  if (menuSbMainDrop) {

    menuSbMainDrop.forEach(function (item, index) {
      item.addEventListener('click', function () {

        menuSbItem.forEach(function (item, i) {
          if (index == i) {
            item.classList.toggle('_bg');
          }

        });
        console.log('Click');
        item.classList.toggle('_bg');
        menuSbIcon.forEach(function (item, i) {
          if (index == i) {
            item.classList.toggle('_rotate');
          }
        });

        menuSbMain.forEach(function (item, i) {
          if (index == i) {
            item.classList.toggle('_active');

          }

        });
      });
    });

  }
  // Подменю главного меню sidebar
  const menuSbMainSubCat = document.querySelectorAll('.menu-sb-main__subcategory');
  const menuSbMainCatDrop = document.querySelectorAll('.menu-sb-main__category-dropdown');
  const menuSbMainIcon = document.querySelectorAll('.menu-sb-main__category-icon');
  console.log(menuSbMainCatDrop);
  if (menuSbMainCatDrop) {

    menuSbMainCatDrop.forEach(function (item, index) {
      console.log(index);
      item.addEventListener('click', function (e) {

        menuSbMainIcon.forEach(function (item, i) {

          if (index == i) {
            item.classList.toggle('_rotate');
          }

        });

        console.log('Click');

        menuSbMainSubCat.forEach(function (item, i) {
          console.log(index);
          console.log(i);
          if (index == i) {
            item.classList.toggle('_active');
          }
        });
      });
    });
  }
  //Слайдер тумба
  const swiper = new Swiper('.product-thumbs', {
    modules: [Navigation, Pagination, Thumbs],
    spaceBetween: 20,
    slidesPerView: 1,
    cssMode: true,

    // loop: false,
    // freeMode: true,
    // watchSlidesProgress: true,

  });
  //Основной слайдер
  const swiper2 = new Swiper('.product-slider', {
    modules: [Navigation, Pagination, Thumbs],
    spaceBetween: 0,
    cssMode: true,
    slidesPerView: 1,

    // navigation: {
    // nextEl: ".swiper-button-next",
    // prevEl: ".swiper-button-prev",
    // },
    thumbs: {
      swiper: swiper,
    },
  });
  //Слайдер внутри модального окна
  const swiper3 = new Swiper(".modal-swiper", {
    modules: [Navigation, Pagination, Thumbs],
    spaceBetween: 0,
    slidesPerView: 1,
    autoHeight: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const htmlTeg = document.querySelector('html');
  const slide = document.querySelectorAll('.product-slider__slide');
  const modalSlider = document.querySelector('.modal-slider');
  const header = document.querySelector('.header');
  slide.forEach(function (item, index) {
    // открываем модальное окно со слайдером
    item.addEventListener('click', function () {
      console.log(item);
      console.log(modalSlider);
      if (modalSlider) {
        //прокручиваем страницу вверх
        window.scrollTo(0, 0);
        modalSlider.classList.toggle('_hidden');
        header.classList.toggle('_zindex');
        //убираем прокруту
        htmlTeg.classList.add('_overflow');

      }

    });
  });
  // Закрываем модальное окно со слайдером
  const modalSliderClose = document.querySelector('.modal-slider__close');
  const modalSliderBox = document.querySelector('.modal-slider__box');
  const modalSliderCont = document.querySelector('.modal-slider__container');
  const modalSliderSlide = document.querySelectorAll('.modal-slider__slide');
  if (modalSliderClose) {
    modalSliderClose.addEventListener('click', function () {
      modalSlider.classList.toggle('_hidden');
      header.classList.toggle('_zindex');
      //возвращаем прокрутку
      htmlTeg.classList.remove('_overflow');
    });
  }
  // закрытие окна по нажатию на фон
  if (modalSlider) {
    modalSlider.addEventListener('click', function (event) {

      if (event.target == modalSliderCont) {
        modalSlider.classList.add('_hidden');
        header.classList.toggle('_zindex');
        //возвращаем прокрутку
        htmlTeg.classList.remove('_overflow');
      }

      if (event.target == modalSliderBox) {
        modalSlider.classList.add('_hidden');
        header.classList.toggle('_zindex');
        //возвращаем прокрутку
        htmlTeg.classList.remove('_overflow');
      }

    });

    modalSliderSlide.forEach(function (item) {

      item.addEventListener('click', function (event) {

        if (event.target == item) {
          modalSlider.classList.add('_hidden');
        }

      });

    });

  }

  //==========================================================================
  // Изменяем border thumbs
  const slide2 = document.querySelectorAll('.product-slider2__slide');

  // if (slide2) {
  slide2.forEach(function (item) {
    item.addEventListener('click', function () {

      // console.log(item);
      onchange = function () {
        // console.log('klik');
        item.classList.toggle('_bg');
      }
      // item.classList.remove('_bg');

      // slide2[index].classList.remove('_bg');
    });
  });
  // }

  //==================================================================================== 
  //Переключение между сеткой и списком 
  const srtList = document.getElementById('srt-list');
  const srtGrid = document.getElementById('srt-grid');
  const product = document.querySelectorAll('.product');
  const productLink = document.querySelectorAll('.product__link');
  const productImage = document.querySelectorAll('.product__image');
  const productContainer = document.querySelectorAll('.product__container');
  const productName = document.querySelectorAll('.product__name');
  const productBody = document.querySelectorAll('.product__body');
  const productText = document.querySelectorAll('.product__text');
  const productCount = document.querySelectorAll('.product__count');
  const productPrice = document.querySelectorAll('.product__price');
  if (srtList) {
    srtList.addEventListener('change', function (e) {
      onchange = function (e) {

        product.forEach(function (item) {
          item.classList.add('_row');
        });

        productLink.forEach(function (item) {
          item.classList.add('_row');
        });

        productImage.forEach(function (item) {
          item.classList.add('_row');
        });

        productContainer.forEach(function (item) {
          item.classList.add('_row');
        });

        productName.forEach(function (item) {
          item.classList.add('_row');
        });

        productBody.forEach(function (item) {
          item.classList.add('_row');
        });

        productText.forEach(function (item) {
          item.classList.add('_row');
        });

        productCount.forEach(function (item) {
          item.classList.add('_row');
        });

        productPrice.forEach(function (item) {
          item.classList.add('_row');
        });

      };

      if (srtGrid) {
        srtGrid.addEventListener('change', function (e) {
          onchange = function (e) {
            console.log('Tect');
            product.forEach(function (item) {
              item.classList.remove('_row');
            });

            productLink.forEach(function (item) {
              item.classList.remove('_row');
            });

            productImage.forEach(function (item) {
              item.classList.remove('_row');
            });

            productContainer.forEach(function (item) {
              item.classList.remove('_row');
            });

            productName.forEach(function (item) {
              item.classList.remove('_row');
            });

            productBody.forEach(function (item) {
              item.classList.remove('_row');
            });

            productText.forEach(function (item) {
              item.classList.remove('_row');
            });

            productCount.forEach(function (item) {
              item.classList.remove('_row');
            });

            productPrice.forEach(function (item) {
              item.classList.remove('_row');
            });
          };
        });
      }
      // console.log(list.checked);
      // console.log(onchange);
      // if (list.checked == true) {
      //   product.forEach(function (item) {
      //     item.classList.add('_row');
      //   });
      //   productLink.forEach(function (item) {
      //     item.classList.add('_row');
      //   });
      //   productImage.forEach(function (item) {
      //     item.classList.add('_row');
      //   });
      //   productContainer.forEach(function (item) {
      //     item.classList.add('_row');
      //   });
      //   productName.forEach(function (item) {
      //     item.classList.add('_row');
      //   });
      //   productBody.forEach(function (item) {
      //     item.classList.add('_row');
      //   });
      //   productText.forEach(function (item) {
      //     item.classList.add('_row');
      //   });
      //   productCount.forEach(function (item) {
      //     item.classList.add('_row');
      //   });
      //   productPrice.forEach(function (item) {
      //     item.classList.add('_row');
      //   });
      // } else {
      //   product.forEach(function (item) {
      //     item.classList.remove('_row');
      //   });
      //   productLink.forEach(function (item) {
      //     item.classList.remove('_row');
      //   });
      //   productImage.forEach(function (item) {
      //     item.classList.remove('_row');
      //   });
      //   productContainer.forEach(function (item) {
      //     item.classList.remove('_row');
      //   });
      //   productName.forEach(function (item) {
      //     item.classList.remove('_row');
      //   });
      //   productBody.forEach(function (item) {
      //     item.classList.remove('_row');
      //   });
      //   productText.forEach(function (item) {
      //     item.classList.remove('_row');
      //   });
      //   productCount.forEach(function (item) {
      //     item.classList.remove('_row');
      //   });
      //   productPrice.forEach(function (item) {
      //     item.classList.remove('_row');
      //   });
      // }

    });
  }

  //================================================================================================
  // modal - status
  // находим модальное окно отображает состояние монеты

  const modalStatus = document.querySelector('.modal-status');


  //находим кнопку открытия модального окна
  const btnOpen = document.querySelector('.accordion__list-btn');
  // находим кнопки закрытия модального окна 
  const btnClose = document.querySelectorAll('.btn-close');
  if (btnOpen) {

    // слушаем найденную кнопку
    btnOpen.addEventListener('click', function () {
      //прокручиваем страницу вверх
      window.scrollTo(0, 0);
      // console.log('Клик');
      //убираем прокруту
      htmlTeg.classList.add('_overflow');
      // открываем модальное окно
      modalStatus.classList.remove('_hidden');
      header.classList.toggle('_zindex');

    });
  }
  //проверяем наличие кнопок
  if (btnClose) {
    //перебираем и находим конкретную кнопку
    btnClose.forEach(function (item) {
      // слушаем найденную кнопку
      item.addEventListener('click', function () {
        // скрываем модальное окно
        modalStatus.classList.add('_hidden');
        //возвращаем прокрутку
        htmlTeg.classList.remove('_overflow');
        header.classList.toggle('_zindex');
      });
    });
  }
  // закрытие окна по нажатию на фон
  if (modalStatus) {
    modalStatus.addEventListener('click', function (event) {
      // находим событие над фоном
      if (event.target == modalStatus) {
        modalStatus.classList.add('_hidden');
        //возвращаем прокрутку
        htmlTeg.classList.remove('_overflow');
        header.classList.toggle('_zindex');
      }
    });
  }


}
init();

swup.on('contentReplaced', init);