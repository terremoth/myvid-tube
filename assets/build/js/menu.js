/******/ (() => { // webpackBootstrap
/*!***********************************!*\
  !*** ./source/_assets/js/main.js ***!
  \***********************************/
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
document.querySelector('.notifications-menu').addEventListener('click', function (evt) {
  var _document$querySelect;
  (_document$querySelect = document.querySelector('.notifications-menu a span')) === null || _document$querySelect === void 0 || _document$querySelect.remove();
});
var input_search = document.getElementById('search');
var trend_history = document.getElementById('trend-history');
var currentFocus = -1;
var _iterator = _createForOfIteratorHelper(trend_history.options),
  _step;
try {
  var _loop = function _loop() {
    var option = _step.value;
    option.addEventListener('click', function () {
      input_search.value = option.value;
      trend_history.classList.remove('d-block');
    });
  };
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
input_search.addEventListener('focus', function () {
  input_search.classList.add('rounded-top-0', 'rounded-0');
  trend_history.classList.add('d-block');
});
input_search.addEventListener('input', function () {
  input_search.classList.add('rounded-top-0', 'rounded-0');
  currentFocus = -1;
  var text = input_search.value.toUpperCase();
  var _iterator2 = _createForOfIteratorHelper(trend_history.options),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var option = _step2.value;
      if (option.value.toUpperCase().indexOf(text) > -1) {
        option.classList.add('d-block');
      } else {
        option.classList.remove('d-block');
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
});
input_search.addEventListener('keydown', function (e) {
  if (e.keyCode === 40) {
    currentFocus++;
    addActive(trend_history.options);
  } else if (e.keyCode === 38) {
    currentFocus--;
    addActive(trend_history.options);
  } else if (e.keyCode === 13) {
    e.preventDefault();
    if (currentFocus > -1) {
      /*and simulate a click on the "active" item:*/
      if (trend_history.options) trend_history.options[currentFocus].click();
    }
  }
});
input_search.addEventListener('focusout', function (_) {
  input_search.classList.remove('rounded-top-0', 'rounded-0');
  setTimeout(function (_) {
    return trend_history.classList.remove('d-block');
  }, 100);
});
trend_history.querySelectorAll('option').forEach(function (option) {
  option.addEventListener('mouseover', function (_) {
    option.classList.remove('text-black', 'bg-white');
    option.classList.add('bg-primary', 'text-white');
  });
  option.addEventListener('mouseout', function (_) {
    option.classList.add('text-black', 'bg-white');
    option.classList.remove('bg-primary', 'text-white');
  });
});
function addActive(x) {
  if (!x) return false;
  removeActive(x);
  if (currentFocus >= x.length) currentFocus = 0;
  if (currentFocus < 0) currentFocus = x.length - 1;
  x[currentFocus].classList.add("active");
}
function removeActive(x) {
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("active");
  }
}
var pagination_links = document.querySelectorAll('.pagination .page-item');
pagination_links.forEach(function (el) {
  el.addEventListener('click', function (_) {
    pagination_links.forEach(function (el) {
      return el.classList.remove('active');
    });
    el.classList.add('active');
  });
});
/******/ })()
;