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
/*!***********************************!*\
  !*** ./source/_assets/js/home.js ***!
  \***********************************/
var _require = __webpack_require__(/*! ./helpers.js */ "./source/_assets/js/helpers.js"),
  shuffle_array = _require.shuffle_array,
  locale_path_not_en = _require.locale_path_not_en,
  generate_video_duration = _require.generate_video_duration,
  generate_random_views = _require.generate_random_views,
  generate_uploaded_at = _require.generate_uploaded_at;
var video_block = function video_block(title, user, uploaded_at) {
  return "\n<div class=\"col-sm-6 col-md-4 col-xs-1 col-lg-3 mt-3\">\n    <div class=\"card h-100 shadow-sm\">\n        <div class=\"position-relative\">\n            <span class=\"text-white rounded px-2 bg-black z-1 position-absolute bottom-0 end-0 mb-1 me-1\">".concat(generate_video_duration(), "</span>\n            \n            <div class=\"spinner-card z-1 position-absolute top-50 start-50 translate-middle\">\n                <div class=\"spinner-border\" role=\"status\">\n                    <span class=\"visually-hidden\">Loading...</span>\n                </div>\n            </div>\n            \n            <svg class=\"w-100 bd-placeholder-img card-img-top\" width=\"100%\" height=\"175\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" \n                aria-label=\"Placeholder\" preserveAspectRatio=\"xMidYMid slice\">\n                <title>Placeholder</title>\n                <rect width=\"100%\" height=\"100%\" fill=\"#868e96\"></rect>\n            </svg>\n        </div>\n\n        <div class=\"card-body\">\n            <h6><a href=\"").concat(locale_path_not_en(), "video.html\">").concat(title, "</a></h6>\n            <small class=\"badge text-bg-secondary\">").concat(generate_random_views(), "</small>\n            <small class=\"text-black ms-2\"><time>").concat(generate_uploaded_at(), "</time></small>\n            <div class=\"card-footer mt-3 bg-transparent px-0\">\n                <span>By </span>\n                <strong class=\"small bold\"><a href=\"").concat(locale_path_not_en(), "profile.html\">").concat(user, "</a></strong>\n            </div>\n        </div>  \n    </div>\n</div>\n");
};
var video_titles = ["10 Things You Didn't Know About Space", "How to Make the Perfect Pancakes", "I Tried Waking Up at 5AM for a Week", "The Truth About Fast Food", "Top 5 Budget Travel Destinations", "Unboxing the New iPhone 15 Pro", "Reacting to My Old Cringe Videos", "This App Will Change Your Life!", "Beginner's Guide to Investing", "What Happens If You Don’t Sleep for 72 Hours?", "24 Hours in the World’s Quietest Room", "My Dog Picks My Outfits for a Day", "Extreme Room Makeover 2025", "You Won’t Believe What I Found in the Woods", "5-Minute Crafts That Actually Work", "Trying Viral TikTok Recipes", "Day in the Life of a Software Engineer", "The Most Satisfying Video You’ll Watch Today", "Living on $1 a Day in New York", "I Learned Guitar in 30 Days", "Why Nobody Talks About This Anymore", "Can You Beat Minecraft Without Jumping?", "100 Layers of Duct Tape Challenge", "I Survived on Only Water for 3 Days", "The Evolution of Internet Memes", "What Happens If You Pour Lava on Ice?", "Top 10 Scariest Moments Caught on Camera", "Building a PC with My Dad", "Every Marvel Movie Ranked Worst to Best", "How I Lost 20 Pounds in 2 Months", "I Let an AI Control My Life for 24 Hours", "Behind the Scenes of a YouTube Video", "The Smartest Way to Study for Exams", "This Island Has No Laws", "Trying Every Starbucks Drink on the Menu", "$1 vs $1,000 Food Challenge", "My Honest College Experience", "The Most Expensive House on Zillow", "Secrets TikTok Doesn’t Want You to Know", "Reacting to Life Hacks with My Grandma", "What If Earth Stopped Spinning?", "How I Made $10,000 in a Month Online", "I Tried Living Like MrBeast", "The Best Free Video Editors in 2025", "Flying to Another Country Just for Lunch", "What School Doesn’t Teach You", "Learning to Dance in 7 Days", "Can You Survive in the Wild Without Tools?", "This Website Is Actually Genius", "If You Laugh, You Lose – Impossible Edition"];
var user_names = ["James Smith", "Mary Johnson", "John Williams", "Patricia Brown", "Robert Jones", "Jennifer Garcia", "Michael Miller", "Linda Davis", "William Rodriguez", "Elizabeth Martinez", "David Hernandez", "Barbara Lopez", "Richard Gonzalez", "Susan Wilson", "Joseph Anderson", "Jessica Thomas", "Thomas Taylor", "Sarah Moore", "Charles Jackson", "Karen Martin", "Christopher Lee", "Nancy Perez", "Daniel Thompson", "Lisa White", "Matthew Harris", "Margaret Sanchez", "Anthony Clark", "Betty Ramirez", "Donald Lewis", "Sandra Robinson", "Mark Walker", "Ashley Young", "Paul Allen", "Kimberly King", "Steven Wright", "Emily Scott", "Andrew Green", "Donna Adams", "Joshua Baker", "Michelle Nelson", "Kevin Hall", "Carol Rivera", "Brian Campbell", "Amanda Mitchell", "George Carter", "Melissa Roberts", "Edward Gomez", "Stephanie Phillips", "Ronald Evans", "Rebecca Turner"];
var max_videos_per_page = 12;
var main = document.querySelector('main div.row');
video_titles = shuffle_array(video_titles);
user_names = shuffle_array(user_names);
for (var i = 0; i < max_videos_per_page; i++) {
  var title = video_titles.shift();
  var user = user_names.shift();
  var body = video_block(title, user);
  main.innerHTML += body;
}
function load_random_img(el) {
  var rand_img = Math.floor(Math.random() * 1080) + 1;
  var image = new Image();
  image.onload = function () {
    var card = el.parentElement;
    card.querySelector('.spinner-card').remove();
    el.remove();
    card.innerHTML = this.outerHTML + card.innerHTML;
  };
  image.onerror = function () {
    load_random_img(el);
  };
  image.classList.add('w-100');
  image.classList.add('rounded-top');
  image.src = "https://picsum.photos/id/".concat(rand_img, "/320/180");
}
document.querySelectorAll('.bd-placeholder-img').forEach(function (el) {
  load_random_img(el);
});
})();

/******/ })()
;