!function(n){var c={};function e(l){if(c[l])return c[l].exports;var t=c[l]={i:l,l:!1,exports:{}};return n[l].call(t.exports,t,t.exports,e),t.l=!0,t.exports}e.m=n,e.c=c,e.d=function(n,c,l){e.o(n,c)||Object.defineProperty(n,c,{enumerable:!0,get:l})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,c){if(1&c&&(n=e(n)),8&c)return n;if(4&c&&"object"==typeof n&&n&&n.__esModule)return n;var l=Object.create(null);if(e.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:n}),2&c&&"string"!=typeof n)for(var t in n)e.d(l,t,function(c){return n[c]}.bind(null,t));return l},e.n=function(n){var c=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(c,"a",c),c},e.o=function(n,c){return Object.prototype.hasOwnProperty.call(n,c)},e.p="",e(e.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\nconst mainPage = __webpack_require__(1);\r\nconst karolSubPage = __webpack_require__(2);\r\n\r\nmainPage.mainPage();\r\nkarolSubPage.loadingElements();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViLGlCQUFpQixtQkFBTyxDQUFDLENBQVk7QUFDckMscUJBQXFCLG1CQUFPLENBQUMsQ0FBZ0I7O0FBRTdDO0FBQ0EiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgbWFpblBhZ2UgPSByZXF1aXJlKFwiLi9tYWluUGFnZVwiKTtcclxuY29uc3Qga2Fyb2xTdWJQYWdlID0gcmVxdWlyZShcIi4va2Fyb2xTdWJQYWdlXCIpO1xyXG5cclxubWFpblBhZ2UubWFpblBhZ2UoKTtcclxua2Fyb2xTdWJQYWdlLmxvYWRpbmdFbGVtZW50cygpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")},function(module,exports,__webpack_require__){"use strict";eval('\r\n\r\nconst nav = document.querySelector(".navigation--js");\r\nconst burgerIcon = document.querySelector(".menu__switcher--js");\r\nconst loaderContainer = document.querySelector(".loader");\r\nconst header = document.querySelector(".header");\r\nconst introduction = document.querySelector(".introduction--js");\r\nconst photographers = document.querySelector(".navigation__item--js");\r\nconst submenu = document.querySelector(".submenu--js");\r\n\r\nconst mainPage = () => {\r\n  burgerIcon.addEventListener("click", () => {\r\n    burgerIcon.classList.toggle("no__active");\r\n    nav.classList.toggle("mobileMove");\r\n  });\r\n\r\n  photographers.addEventListener("click", () => {\r\n    submenu.classList.toggle("submenu--visible");\r\n  });\r\n\r\n  setTimeout(() => {\r\n    loaderContainer.classList.add("loader--hidden");\r\n    header.classList.add("header--visible");\r\n    burgerIcon.classList.add("menu__switcher--visible");\r\n    if (window.innerWidth >= 1024) {\r\n      nav.classList.add("navigation--visible");\r\n    }\r\n  }, 2000);\r\n\r\n  setTimeout(() => {\r\n    introduction.classList.add("introduction--visible");\r\n  }, 1500);\r\n};\r\n\r\nmodule.exports = {\r\n  mainPage: mainPage\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpblBhZ2UuanM/NzFjZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbi0tanNcIik7XHJcbmNvbnN0IGJ1cmdlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVfX3N3aXRjaGVyLS1qc1wiKTtcclxuY29uc3QgbG9hZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkZXJcIik7XHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xyXG5jb25zdCBpbnRyb2R1Y3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmludHJvZHVjdGlvbi0tanNcIik7XHJcbmNvbnN0IHBob3RvZ3JhcGhlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX2l0ZW0tLWpzXCIpO1xyXG5jb25zdCBzdWJtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtZW51LS1qc1wiKTtcclxuXHJcbmNvbnN0IG1haW5QYWdlID0gKCkgPT4ge1xyXG4gIGJ1cmdlckljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGJ1cmdlckljb24uY2xhc3NMaXN0LnRvZ2dsZShcIm5vX19hY3RpdmVcIik7XHJcbiAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcIm1vYmlsZU1vdmVcIik7XHJcbiAgfSk7XHJcblxyXG4gIHBob3RvZ3JhcGhlcnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHN1Ym1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcInN1Ym1lbnUtLXZpc2libGVcIik7XHJcbiAgfSk7XHJcblxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgbG9hZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsb2FkZXItLWhpZGRlblwiKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLS12aXNpYmxlXCIpO1xyXG4gICAgYnVyZ2VySWNvbi5jbGFzc0xpc3QuYWRkKFwibWVudV9fc3dpdGNoZXItLXZpc2libGVcIik7XHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gMTAyNCkge1xyXG4gICAgICBuYXYuY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb24tLXZpc2libGVcIik7XHJcbiAgICB9XHJcbiAgfSwgMjAwMCk7XHJcblxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgaW50cm9kdWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJpbnRyb2R1Y3Rpb24tLXZpc2libGVcIik7XHJcbiAgfSwgMTUwMCk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBtYWluUGFnZTogbWFpblBhZ2VcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n')},function(module,exports,__webpack_require__){"use strict";eval('\r\n\r\nconst header = document.querySelector(".header-karol--js");\r\nconst nav = document.querySelector(".navigation--js");\r\nconst burgerIcon = document.querySelector(".menu__switcher--js");\r\nconst photographers = document.querySelector(".navigation__item--js");\r\nconst submenu = document.querySelector(".submenu--js");\r\n\r\nfunction loadingElements() {\r\n  burgerIcon.addEventListener("click", () => {\r\n    burgerIcon.classList.toggle("no__active");\r\n    nav.classList.toggle("mobileMove");\r\n  });\r\n\r\n  photographers.addEventListener("click", () => {\r\n    submenu.classList.toggle("submenu--visible");\r\n  });\r\n\r\n  setTimeout(() => {\r\n    header.classList.add("header-karol--visible");\r\n  }, 10);\r\n}\r\n\r\nloadingElements();\r\nmodule.exports = {\r\n  loadingElements: loadingElements\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMva2Fyb2xTdWJQYWdlLmpzP2NhOTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1rYXJvbC0tanNcIik7XHJcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbi0tanNcIik7XHJcbmNvbnN0IGJ1cmdlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVfX3N3aXRjaGVyLS1qc1wiKTtcclxuY29uc3QgcGhvdG9ncmFwaGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9faXRlbS0tanNcIik7XHJcbmNvbnN0IHN1Ym1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1lbnUtLWpzXCIpO1xyXG5cclxuZnVuY3Rpb24gbG9hZGluZ0VsZW1lbnRzKCkge1xyXG4gIGJ1cmdlckljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGJ1cmdlckljb24uY2xhc3NMaXN0LnRvZ2dsZShcIm5vX19hY3RpdmVcIik7XHJcbiAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcIm1vYmlsZU1vdmVcIik7XHJcbiAgfSk7XHJcblxyXG4gIHBob3RvZ3JhcGhlcnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHN1Ym1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcInN1Ym1lbnUtLXZpc2libGVcIik7XHJcbiAgfSk7XHJcblxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXIta2Fyb2wtLXZpc2libGVcIik7XHJcbiAgfSwgMTApO1xyXG59XHJcblxyXG5sb2FkaW5nRWxlbWVudHMoKTtcclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgbG9hZGluZ0VsZW1lbnRzOiBsb2FkaW5nRWxlbWVudHNcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n')}]);