(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{15:function(e,t,n){"use strict";n.d(t,"b",function(){return d}),n.d(t,"a",function(){return u});var o=0,c=!1;try{var i=Object.defineProperty({},"passive",{get:function(){c=!0}});window.addEventListener("test",null,i)}catch(e){}var r=function(e){var t=e.target,n=window.innerWidth/window.document.documentElement.clientWidth;if(!(e.touches.length>1||1!==n)){for(;t!==document.body&&t!==document;){var c=window.getComputedStyle(t);if(!c)break;if("INPUT"===t.nodeName&&"range"===t.getAttribute("type"))return;var i=c.getPropertyValue("-webkit-overflow-scrolling"),r=c.getPropertyValue("overflow-y"),a=parseInt(c.getPropertyValue("height"),10),s="touch"===i&&("auto"===r||"scroll"===r),d=t.scrollHeight>t.offsetHeight;if(s&&d){var u=e.touches?e.touches[0].screenY:e.screenY,l=o<=u&&0===t.scrollTop,v=o>=u&&t.scrollHeight-t.scrollTop===a;return void((l||v)&&e.preventDefault())}t=t.parentNode}e.preventDefault()}},a=function(e){o=e.touches?e.touches[0].screenY:e.screenY},s=function(){var e=document.createElement("div");document.documentElement.appendChild(e),e.style.WebkitOverflowScrolling="touch";var t="getComputedStyle"in window&&"touch"===window.getComputedStyle(e)["-webkit-overflow-scrolling"];return document.documentElement.removeChild(e),t},d=function(){s()&&(window.addEventListener("touchstart",a,!!c&&{passive:!1}),window.addEventListener("touchmove",r,!!c&&{passive:!1}),!0)},u=function(){s()&&(window.removeEventListener("touchstart",a,!1),window.removeEventListener("touchmove",r,!1),!1)}},47:function(e,t,n){"use strict";n.r(t),n.d(t,"handleClick",function(){return i});var o=n(15),c=function(){document.body.classList.remove("ct-offcanvas-active"),document.body.classList.add("ct-offcanvas"),document.body.classList.add("ct-offcanvas-hiding"),setTimeout(function(){document.body.classList.remove("ct-offcanvas-hiding")},250),document.querySelector(".mobile-menu-toggle").firstElementChild.classList.remove("close"),Object(o.a)()},i=function(e){document.body.classList.contains("ct-offcanvas-active")?c():function(){document.body.classList.add("ct-offcanvas-active"),document.body.classList.remove("ct-offcanvas");var e=navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPhone/)?"touchend":"click";window.addEventListener(e,function(){document.body.classList.contains("ct-offcanvas-active")&&c()},{once:!0}),document.querySelector(".ct-offcanvas-menu .ct-bag-close").addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),c()},{once:!0}),Object(o.b)()}()}}}]);