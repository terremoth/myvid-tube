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
/*!***********************************!*\
  !*** ./source/_assets/js/home.js ***!
  \***********************************/
var _require = __webpack_require__(/*! ./helpers.js */ "./source/_assets/js/helpers.js"),
  shuffle_array = _require.shuffle_array,
  locale_path_not_en = _require.locale_path_not_en;
var video_block = function video_block(title, user, views, uploaded_at, video_duration) {
  return "\n<div class=\"col-sm-6 col-md-4 col-xs-1 col-lg-3 mt-3\">\n    <div class=\"card h-100 shadow-sm\">\n        <div class=\"position-relative\">\n            <span class=\"text-white rounded px-2 bg-black z-1 position-absolute bottom-0 end-0 mb-1 me-1\">".concat(video_duration, "</span>\n            \n            <div class=\"spinner-card z-1 position-absolute top-50 start-50 translate-middle\">\n                <div class=\"spinner-border\" role=\"status\">\n                    <span class=\"visually-hidden\">Loading...</span>\n                </div>\n            </div>\n            \n            <svg class=\"w-100 bd-placeholder-img card-img-top\" width=\"100%\" height=\"175\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" \n                aria-label=\"Placeholder\" preserveAspectRatio=\"xMidYMid slice\">\n                <title>Placeholder</title>\n                <rect width=\"100%\" height=\"100%\" fill=\"#868e96\"></rect>\n            </svg>\n        </div>\n\n        <div class=\"card-body\">\n            <h6><a href=\"").concat(locale_path_not_en(), "video.html\">").concat(title, "</a></h6>\n            <small class=\"badge text-bg-secondary\">").concat(views, "</small>\n            <small class=\"text-black ms-2\"><time>").concat(uploaded_at, "</time></small>\n            <div class=\"card-footer mt-3 bg-transparent px-0\">\n                <span>By </span>\n                <strong class=\"small bold\"><a href=\"").concat(locale_path_not_en(), "profile.html\">").concat(user, "</a></strong>\n            </div>\n        </div>  \n    </div>\n</div>\n");
};
var video_titles = ["10 Things You Didn't Know About Space", "How to Make the Perfect Pancakes", "I Tried Waking Up at 5AM for a Week", "The Truth About Fast Food", "Top 5 Budget Travel Destinations", "Unboxing the New iPhone 15 Pro", "Reacting to My Old Cringe Videos", "This App Will Change Your Life!", "Beginner's Guide to Investing", "What Happens If You Don’t Sleep for 72 Hours?", "24 Hours in the World’s Quietest Room", "My Dog Picks My Outfits for a Day", "Extreme Room Makeover 2025", "You Won’t Believe What I Found in the Woods", "5-Minute Crafts That Actually Work", "Trying Viral TikTok Recipes", "Day in the Life of a Software Engineer", "The Most Satisfying Video You’ll Watch Today", "Living on $1 a Day in New York", "I Learned Guitar in 30 Days", "Why Nobody Talks About This Anymore", "Can You Beat Minecraft Without Jumping?", "100 Layers of Duct Tape Challenge", "I Survived on Only Water for 3 Days", "The Evolution of Internet Memes", "What Happens If You Pour Lava on Ice?", "Top 10 Scariest Moments Caught on Camera", "Building a PC with My Dad", "Every Marvel Movie Ranked Worst to Best", "How I Lost 20 Pounds in 2 Months", "I Let an AI Control My Life for 24 Hours", "Behind the Scenes of a YouTube Video", "The Smartest Way to Study for Exams", "This Island Has No Laws", "Trying Every Starbucks Drink on the Menu", "$1 vs $1,000 Food Challenge", "My Honest College Experience", "The Most Expensive House on Zillow", "Secrets TikTok Doesn’t Want You to Know", "Reacting to Life Hacks with My Grandma", "What If Earth Stopped Spinning?", "How I Made $10,000 in a Month Online", "I Tried Living Like MrBeast", "The Best Free Video Editors in 2025", "Flying to Another Country Just for Lunch", "What School Doesn’t Teach You", "Learning to Dance in 7 Days", "Can You Survive in the Wild Without Tools?", "This Website Is Actually Genius", "If You Laugh, You Lose – Impossible Edition"];
var user_names = ["James Smith", "Mary Johnson", "John Williams", "Patricia Brown", "Robert Jones", "Jennifer Garcia", "Michael Miller", "Linda Davis", "William Rodriguez", "Elizabeth Martinez", "David Hernandez", "Barbara Lopez", "Richard Gonzalez", "Susan Wilson", "Joseph Anderson", "Jessica Thomas", "Thomas Taylor", "Sarah Moore", "Charles Jackson", "Karen Martin", "Christopher Lee", "Nancy Perez", "Daniel Thompson", "Lisa White", "Matthew Harris", "Margaret Sanchez", "Anthony Clark", "Betty Ramirez", "Donald Lewis", "Sandra Robinson", "Mark Walker", "Ashley Young", "Paul Allen", "Kimberly King", "Steven Wright", "Emily Scott", "Andrew Green", "Donna Adams", "Joshua Baker", "Michelle Nelson", "Kevin Hall", "Carol Rivera", "Brian Campbell", "Amanda Mitchell", "George Carter", "Melissa Roberts", "Edward Gomez", "Stephanie Phillips", "Ronald Evans", "Rebecca Turner"];
var video_views = ["1.2K views", "3.4K views", "567 views", "10K views", "23K views", "1.1M views", "876K views", "2.3M views", "98 views", "34K views", "4.5K views", "8.9K views", "741 views", "12M views", "6.2K views", "3.1K views", "55 views", "7.8K views", "2.7M views", "999K views", "301 views", "17K views", "49K views", "6.7M views", "803 views", "5.5K views", "2K views", "9.3K views", "1.8K views", "5.6M views", "432 views", "3.9K views", "600K views", "4.4M views", "2.2K views", "1K views", "900 views", "1.9K views", "7.1K views", "3M views", "5.2K views", "4.8K views", "79 views", "1.6M views", "2.8K views", "10M views", "157 views", "11K views", "700 views", "8.2K views"];
var uploaded_at = ["2 minutes ago", "5 minutes ago", "30 minutes ago", "1 hour ago", "2 hours ago", "5 hours ago", "12 hours ago", "23 hours ago", "1 day ago", "2 days ago", "3 days ago", "6 days ago", "1 week ago", "2 weeks ago", "3 weeks ago", "4 weeks ago", "1 month ago", "2 months ago", "3 months ago", "5 months ago", "7 months ago", "9 months ago", "11 months ago", "1 year ago", "2 years ago", "3 years ago", "4 years ago", "5 years ago", "6 years ago", "7 years ago", "8 years ago", "9 years ago", "10 years ago", "15 minutes ago", "45 minutes ago", "6 hours ago", "18 hours ago", "10 days ago", "13 days ago", "2 weeks ago", "6 weeks ago", "8 weeks ago", "4 months ago", "10 months ago", "1.5 years ago", "2.5 years ago", "3.5 years ago", "12 years ago", "14 years ago", "20 years ago"];
var video_durations = ["3:42", "7:15", "12:08", "2:31", "9:27", "5:53", "14:20", "8:19", "6:07", "10:44", "4:36", "1:58", "11:32", "13:21", "3:17", "2:05", "7:49", "15:02", "5:21", "6:59", "8:02", "9:45", "4:11", "3:28", "12:50", "6:33", "10:10", "1:25", "7:07", "13:05", "2:40", "4:59", "11:14", "3:03", "5:46", "9:12", "14:38", "8:56", "6:15", "10:01", "12:09", "4:22", "7:30", "5:10", "3:35", "9:59", "2:22", "13:44", "1:49", "6:45"];
var max_videos_per_page = 12;
var main = document.querySelector('main div.row');
video_titles = shuffle_array(video_titles);
user_names = shuffle_array(user_names);
video_views = shuffle_array(video_views);
uploaded_at = shuffle_array(uploaded_at);
video_durations = shuffle_array(video_durations);
for (var i = 0; i < max_videos_per_page; i++) {
  var title = video_titles.shift();
  var user = user_names.shift();
  var view = video_views.shift();
  var uploaded_time = uploaded_at.shift();
  var duration = video_durations.shift();
  var body = video_block(title, user, view, uploaded_time, duration);
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