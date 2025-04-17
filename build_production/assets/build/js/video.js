/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./source/_assets/js/helpers.js":
/*!**************************************!*\
  !*** ./source/_assets/js/helpers.js ***!
  \**************************************/
/***/ ((module) => {

function generate_video_duration() {
  var gen_num = function gen_num() {
    return String(Math.floor(Math.random() * 60));
  };
  var minutes = gen_num();
  var seconds = gen_num().padStart(2, "0");
  return "".concat(minutes, ":").concat(seconds);
}
function generate_random_views() {
  var skewed = Math.pow(Math.random(), 8); // Mais inclinado para números pequenos

  var min = 153;
  var max = 2000000;
  var num = Math.floor(skewed * (max - min) + min);
  if (num > 2500000) {
    num = Math.floor(num / 3);
  }
  var formatted;
  if (num < 1000) {
    formatted = "".concat(num);
  } else if (num < 1000000) {
    formatted = (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  } else {
    formatted = (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  return "".concat(formatted, " views");
}
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
function generate_uploaded_at() {
  var timing = ['minutes', 'hours', 'days', 'weeks', 'months', 'years'];
  var time,
    time_table = {
      minutes: 60,
      hours: 24,
      days: 30,
      weeks: 4,
      months: 12,
      years: 6
    };
  timing = shuffle_array(timing);
  time = timing = timing.shift();
  timing = time_table[timing];
  return "".concat(Math.floor(Math.random() * timing) + 1, " ").concat(time, " ago");
}
function is_mobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent);
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
    window.BASE_URL = window.location.origin;
  }
  return BASE_URL + '/' + append;
}
module.exports = {
  shuffle_array: shuffle_array,
  is_mobile: is_mobile,
  get_locale: get_locale,
  locale_path_not_en: locale_path_not_en,
  base_url: base_url,
  generate_video_duration: generate_video_duration,
  generate_random_views: generate_random_views,
  generate_uploaded_at: generate_uploaded_at
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

// fetch(base_url('assets/videos.json')).then(async resp => {
//     const json = await resp.json();
//     let videos = json.videos;
//     let shuffle = shuffle_array(videos);
//     let chosen_video = shuffle[0];
//     let img = new Image();
//
//     img.onload = function() {
//         // document.querySelector('article video').height = img.height;
//         img = null;
//     };
//     img.src = chosen_video.thumb;
//
//     let video_container = document.querySelector('article video');
//     video_container.preload = 'metadata';
//     video_container.poster = chosen_video.thumb;
//     video_container.onloadedmetadata = function () {
//         // logic here
//     };
//
//     video_container.src = chosen_video.sources[0];
//
//     document.querySelector('article h1').innerHTML = chosen_video.title;
//     document.querySelector('article video source').src = chosen_video.sources[0];
//     document.querySelector('article a').innerHTML = chosen_video.subtitle;
//     document.querySelector('article p').innerHTML = chosen_video.description;
//
// });

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