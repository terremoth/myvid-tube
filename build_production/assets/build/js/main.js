(()=>{function e(e,n){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,n){if(e){if("string"==typeof e)return t(e,n);var o={}.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){o&&(e=o);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,d=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return s=e.done,e},e:function(e){d=!0,r=e},f:function(){try{s||null==o.return||o.return()}finally{if(d)throw r}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}document.querySelector(".notifications-menu").addEventListener("click",(function(e){var t;null===(t=document.querySelector(".notification-balloon"))||void 0===t||t.remove()}));var n,o=document.getElementById("search"),a=document.getElementById("trend-history"),i=-1,r=e(a.options);try{var s=function(){var e=n.value;e.addEventListener("click",(function(){o.value=e.value,a.classList.remove("d-block")}))};for(r.s();!(n=r.n()).done;)s()}catch(e){r.e(e)}finally{r.f()}function d(e){if(!e)return!1;!function(e){for(var t=0;t<e.length;t++)e[t].classList.remove("active")}(e),i>=e.length&&(i=0),i<0&&(i=e.length-1),e[i].classList.add("active")}o.addEventListener("focus",(function(){o.classList.add("rounded-top-0","rounded-0"),a.classList.add("d-block")})),o.addEventListener("input",(function(){o.classList.add("rounded-top-0","rounded-0"),i=-1;var t,n=o.value.toUpperCase(),r=e(a.options);try{for(r.s();!(t=r.n()).done;){var s=t.value;s.value.toUpperCase().indexOf(n)>-1?s.classList.add("d-block"):s.classList.remove("d-block")}}catch(e){r.e(e)}finally{r.f()}})),o.addEventListener("keydown",(function(e){40===e.keyCode?(i++,d(a.options)):38===e.keyCode?(i--,d(a.options)):13===e.keyCode&&(e.preventDefault(),i>-1&&a.options&&a.options[i].click())})),o.addEventListener("focusout",(function(e){o.classList.remove("rounded-top-0","rounded-0"),setTimeout((function(e){return a.classList.remove("d-block")}),100)})),a.querySelectorAll("option").forEach((function(e){e.addEventListener("mouseover",(function(t){e.classList.remove("text-black","bg-white"),e.classList.add("bg-primary","text-white")})),e.addEventListener("mouseout",(function(t){e.classList.add("text-black","bg-white"),e.classList.remove("bg-primary","text-white")}))}));var l=document.querySelectorAll(".pagination .page-item");l.forEach((function(e){e.addEventListener("click",(function(t){l.forEach((function(e){return e.classList.remove("active")})),e.classList.add("active")}))})),document.getElementById("subscribe-newsletter-btn").addEventListener("click",(function(e){e.preventDefault();var t=document.getElementById("newsletter1");if(!t.checkValidity())return t.reportValidity();var n=document.createElement("template");n.innerHTML='\n        <div class="modal fade" id="subscribe-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">\n            <div class="modal-dialog">\n                <div class="modal-content">\n                    <div class="modal-header">\n                        <h1 class="modal-title fs-5" id="exampleModalLabel">Successfully Subscribed</h1>\n                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n                    </div>\n                    <div class="modal-body">\n                        You have subscribed to our newsletter. Check your email!\n                    </div>\n                    <div class="modal-footer">\n                        <button type="button" class="btn btn-success" data-bs-dismiss="modal"><i class="fa fa-check"></i> Close</button>\n                    </div>\n                </div>\n            </div>\n        </div>'.trim();var o=n.content.firstElementChild;document.body.append(o),o=document.getElementById("subscribe-modal"),new bootstrap.Modal(o,{}).show(),o.addEventListener("hidden.bs.modal",(function(e){o.remove()}))}));var c=document.querySelector(".layout-theme");c.addEventListener("click",(function(){var e=document.documentElement.dataset,t="dark",n='<i class="fa fa-moon me-2"></i> Theme: dark</a>';"light"!==e.bsTheme&&(t="light",n='<i class="fa fa-sun me-2"></i> Theme: light</a>'),e.bsTheme=t,c.innerHTML=n}))})();