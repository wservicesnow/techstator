(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{49:function(n,t,o){"use strict";o.r(t),o.d(t,"mount",function(){return c});var c=function(){var n=document.querySelector(".ct-back-to-top");if(n){var t=!1,o=function(){window.scrollY>500?n.classList.add("ct-show"):n.classList.remove("ct-show")};o(),window.addEventListener("scroll",function(){t||(t=!0,requestAnimationFrame(function(){o(),t=!1}))}),n.addEventListener("click",function(n){n.preventDefault();var t=window.scrollY,o=null;requestAnimationFrame(function n(c){o||(o=c);var e,i,r,a=c-o,s=Math.max((e=a,i=t,r=-t,(e/=350)<1?r/2*e*e+i:-r/2*(--e*(e-2)-1)+i),0);scrollTo(0,s),a<700&&requestAnimationFrame(n)})})}};ctEvents.on("ct:back-to-top:mount",function(){c()})}}]);