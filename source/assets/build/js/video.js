/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./source/_assets/js/helpers.js":
/*!**************************************!*\
  !*** ./source/_assets/js/helpers.js ***!
  \**************************************/
/***/ ((module) => {

function shuffle_array(array) {
  var arr = array.slice();
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [arr[j], arr[i]];
    arr[i] = _ref[0];
    arr[j] = _ref[1];
  }
  return arr;
}
function is_mobile() {
  var toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];
  return toMatch.some(function (toMatchItem) {
    return navigator.userAgent.match(toMatchItem);
  });
}
function getCookie(name) {
  var _document$cookie$spli;
  return ((_document$cookie$spli = document.cookie.split('; ').find(function (row) {
    return row.startsWith(name + '=');
  })) === null || _document$cookie$spli === void 0 ? void 0 : _document$cookie$spli.split('=')[1]) || null;
}
function get_locale() {
  var _document$querySelect;
  return document.documentElement.lang || ((_document$querySelect = document.querySelector('meta[http-equiv="Content-Language"]')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.content) || document.body.dataset.locale || getCookie('lang') || localStorage.getItem('lang') || new URLSearchParams(location.search).get('lang') || new URLSearchParams(location.search).get('locale') || navigator.language || Intl.NumberFormat().resolvedOptions().locale || 'en';
}
function locale_path_not_en() {
  var locale = get_locale();
  if (locale === 'en') {
    return '';
  }
  return locale + '/';
}
function base_url() {
  var append = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  if (typeof BASE_URL === 'undefined') {
    var _BASE_URL = window.BASE_URL = window.location.origin;
  }
  return BASE_URL + '/' + append;
}
module.exports = {
  shuffle_array: shuffle_array,
  is_mobile: is_mobile,
  get_locale: get_locale,
  locale_path_not_en: locale_path_not_en,
  base_url: base_url
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************************!*\
  !*** ./source/_assets/js/video.js ***!
  \************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var _require = __webpack_require__(/*! ./helpers.js */ "./source/_assets/js/helpers.js"),
  shuffle_array = _require.shuffle_array,
  is_mobile = _require.is_mobile,
  base_url = _require.base_url;
var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
_toConsumableArray(tooltipTriggerList).map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
fetch(base_url('assets/videos.json')).then(/*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(resp) {
    var json, videos, shuffle, chosen_video, img, video_container;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return resp.json();
        case 2:
          json = _context.sent;
          videos = json.videos;
          shuffle = shuffle_array(videos);
          chosen_video = shuffle[0]; // console.log(chosen_video);
          img = new Image();
          img.onload = function () {
            // document.querySelector('article video').height = img.height; 
            img = null;
          };
          img.src = chosen_video.thumb;
          video_container = document.querySelector('article video');
          video_container.preload = 'metadata';
          video_container.poster = chosen_video.thumb;
          video_container.onloadedmetadata = function () {
            // logic here
          };
          video_container.src = chosen_video.sources[0];
          document.querySelector('article h1').innerHTML = chosen_video.title;
          document.querySelector('article video source').src = chosen_video.sources[0];
          document.querySelector('article a').innerHTML = chosen_video.subtitle;
          document.querySelector('article p').innerHTML = chosen_video.description;
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
var play_btn = document.querySelector('.video-play-btn');
var video = document.querySelector('video');
if (is_mobile()) {
  play_btn.classList.add('d-none');
}
video.addEventListener('play', function () {
  play_btn.classList.add('d-none');
});
video.addEventListener('pause', function () {
  if (!is_mobile()) {
    play_btn.classList.remove('d-none');
  }
});
play_btn.addEventListener('click', function () {
  play_btn.classList.add('d-none');
  video.play();
});
var like_btn = document.querySelector('.like');
var dislike_btn = document.querySelector('.dislike');
var like_counter = document.querySelector('.like-counter');
var dislike_counter = document.querySelector('.dislike-counter');
like_btn.addEventListener('click', function () {
  if (like_btn.classList.contains('btn-primary')) {
    like_btn.classList.remove('btn-primary');
    like_btn.classList.add('btn-outline-primary');
    like_counter.innerHTML = parseInt(like_counter.innerHTML) - 1;
    return;
  }
  if (dislike_btn.classList.contains('btn-warning')) {
    dislike_counter.innerHTML = parseInt(dislike_counter.innerHTML) - 1;
  }
  like_btn.classList.add('btn-primary');
  like_btn.classList.remove('btn-outline-primary');
  like_counter.innerHTML = parseInt(like_counter.innerHTML) + 1;
  dislike_btn.classList.remove('btn-warning');
  dislike_btn.classList.add('btn-outline-warning');
});
dislike_btn.addEventListener('click', function () {
  if (dislike_btn.classList.contains('btn-warning')) {
    dislike_btn.classList.remove('btn-warning');
    dislike_btn.classList.add('btn-outline-warning');
    dislike_counter.innerHTML = parseInt(dislike_counter.innerHTML) - 1;
    return;
  }
  if (like_btn.classList.contains('btn-primary')) {
    like_counter.innerHTML = parseInt(like_counter.innerHTML) - 1;
  }
  dislike_btn.classList.add('btn-warning');
  dislike_btn.classList.remove('btn-outline-warning');
  dislike_counter.innerHTML = parseInt(dislike_counter.innerHTML) + 1;
  like_btn.classList.remove('btn-primary');
  like_btn.classList.add('btn-outline-primary');
});
var favorite_btn = document.querySelector('.fav-btn');
favorite_btn.addEventListener('click', function () {
  if (favorite_btn.classList.contains('btn-success')) {
    favorite_btn.classList.remove('btn-success');
    favorite_btn.classList.add('btn-outline-primary');
    favorite_btn.innerHTML = '<i class="fa fa-heart"></i> Favorite';
    return;
  }
  favorite_btn.classList.remove('btn-outline-primary');
  favorite_btn.classList.add('btn-success');
  favorite_btn.innerHTML = '<i class="fa fa-check"></i> Favorited';
});
var submit_comment_btn = document.querySelector('.submit-comment');
var comment_box = document.querySelector('textarea[name="content"]');
var comment_counter = document.querySelector('.comments-counter');
var all_comments_area = document.querySelector('.all-comments');
// const toastLiveExample = document.getElementById('liveToast');

submit_comment_btn.addEventListener('click', function () {
  if (!comment_box.checkValidity()) {
    return comment_box.reportValidity();
  }
  var comment = DOMPurify.sanitize(comment_box.value, {
    ALLOWED_TAGS: []
  });
  if (!comment) {
    return alert('Error while trying to comment. You probably cannot comment that.');
  }
  all_comments_area.innerHTML = "<div class=\"d-flex mb-4\">\n    <div class=\"flex-shrink-0\">\n        <img class=\"rounded-circle\" src=\"https://dummyimage.com/50x50/ced4da/6c757d.jpg\"\n            alt=\"...\" />\n    </div>\n    <div class=\"ms-3 text-break\">\n        <div class=\"fw-bold\">You</div>\n        ".concat(comment, "\n    </div>\n</div>") + all_comments_area.innerHTML;
  comment_box.value = '';
  comment_counter.innerHTML = String(parseInt(comment_counter.innerHTML.split(' ')[0]) + 1) + ' comments';
});
})();

/******/ })()
;