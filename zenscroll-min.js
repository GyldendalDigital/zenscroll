!function(t,e){"function"==typeof define&&define.amd?define([],e()):"object"==typeof module&&module.exports?module.exports=e():function o(){document&&document.body?t.zenscroll=e():setTimeout(o,9)}()}(this,function(){"use strict";var t=function(t){return t&&"getComputedStyle"in window&&"smooth"===window.getComputedStyle(t)["scroll-behavior"]};if("undefined"==typeof window||!("document"in window))return{};var e=function(e,o,n){o=o||999,n||0===n||(n=9);var i,r=function(t){i=t},c=function(){clearTimeout(i),r(0)},u=function(t){return Math.max(0,e.getTopOf(t)-n)},s=function(n,i,u){if(c(),0===i||i&&i<0||t(e.body))e.toY(n),u&&u();else{var s=e.getY(),a=Math.max(0,n)-s,f=(new Date).getTime();i=i||Math.min(Math.abs(a),o),function t(){r(setTimeout(function(){var o=Math.min(1,((new Date).getTime()-f)/i),n=Math.max(0,Math.floor(s+a*(o<.5?2*o*o:o*(4-2*o)-1)));e.toY(n),o<1&&e.getHeight()+n<e.body.scrollHeight?t():(setTimeout(c,99),u&&u())},9))}()}},a=function(t,e,o){s(u(t),e,o)},f=function(t,o,i){var r=t.getBoundingClientRect().height,c=e.getTopOf(t)+r,f=e.getHeight(),l=e.getY(),d=l+f;u(t)<l||r+n>f?a(t,o,i):c+n>d?s(c-f+n,o,i):i&&i()},l=function(t,o,n,i){s(Math.max(0,e.getTopOf(t)-e.getHeight()/2+(n||t.getBoundingClientRect().height/2)),o,i)};return{setup:function(t,e){return(0===t||t)&&(o=t),(0===e||e)&&(n=e),{defaultDuration:o,edgeOffset:n}},to:a,toY:s,intoView:f,center:l,stop:c,moving:function(){return!!i},getY:e.getY,getTopOf:e.getTopOf}},o=document.documentElement,n=function(){return window.scrollY||o.scrollTop},i=e({body:document.scrollingElement||document.body,toY:function(t){window.scrollTo(0,t)},getY:n,getHeight:function(){return window.innerHeight||o.clientHeight},getTopOf:function(t){return t.getBoundingClientRect().top+n()-o.offsetTop}});if(i.createScroller=function(t,n,i){return e({body:t,toY:function(e){t.scrollTop=e},getY:function(){return t.scrollTop},getHeight:function(){return Math.min(t.clientHeight,window.innerHeight||o.clientHeight)},getTopOf:function(t){return t.offsetTop}},n,i)},"addEventListener"in window&&!window.noZensmooth&&!t(document.body)){var r="history"in window&&"pushState"in history,c=r&&"scrollRestoration"in history;c&&(history.scrollRestoration="auto"),window.addEventListener("load",function(){c?(setTimeout(function(){history.scrollRestoration="manual"},9),window.addEventListener("popstate",function(t){console&&console.log("popstate event",t),t.state&&"zenscrollY"in t.state&&i.toY(t.state.zenscrollY)},!1)):console&&console.warn("scrollRestoration is not supported"),window.location.hash&&setTimeout(function(){var t=i.setup().edgeOffset;if(t){var e=document.getElementById(window.location.href.split("#")[1]);if(e){var o=Math.max(0,i.getTopOf(e)-t),n=i.getY()-o;0<=n&&n<9&&window.scrollTo(0,o)}}},9)},!1);var u=new RegExp("(^|\\s)noZensmooth(\\s|$)");window.addEventListener("click",function(t){for(var e=t.target;e&&"A"!==e.tagName;)e=e.parentNode;if(!(!e||1!==t.which||t.shiftKey||t.metaKey||t.ctrlKey||t.altKey)){if(c){var o=history.state&&"object"==typeof history.state?history.state:{};o.zenscrollY=i.getY();try{history.replaceState(o,"")}catch(t){}}var n=e.getAttribute("href")||"";if(0===n.indexOf("#")&&!u.test(e.className)){var s=0,a=document.getElementById(n.substring(1));if("#"!==n){if(!a)return;s=i.getTopOf(a)}t.preventDefault();var f=function(){window.location=n},l=i.setup().edgeOffset;l&&(s=Math.max(0,s-l),r&&(f=function(){history.pushState({},"",n)})),i.toY(s,null,f)}}},!1)}return i});