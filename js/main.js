!function(c){var n={};function e(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return c[t].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=c,e.c=n,e.d=function(c,n,t){e.o(c,n)||Object.defineProperty(c,n,{enumerable:!0,get:t})},e.r=function(c){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},e.t=function(c,n){if(1&n&&(c=e(c)),8&n)return c;if(4&n&&"object"==typeof c&&c&&c.__esModule)return c;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:c}),2&n&&"string"!=typeof c)for(var i in c)e.d(t,i,function(n){return c[n]}.bind(null,i));return t},e.n=function(c){var n=c&&c.__esModule?function(){return c.default}:function(){return c};return e.d(n,"a",n),n},e.o=function(c,n){return Object.prototype.hasOwnProperty.call(c,n)},e.p="",e(e.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\nconst mainPage = __webpack_require__(1);\r\nconst authorsSubPages = __webpack_require__(2);\r\n\r\nmainPage.mainPage();\r\nauthorsSubPages.authorsSubPages();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViLGlCQUFpQixtQkFBTyxDQUFDLENBQVk7QUFDckMsd0JBQXdCLG1CQUFPLENBQUMsQ0FBbUI7O0FBRW5EO0FBQ0EiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgbWFpblBhZ2UgPSByZXF1aXJlKFwiLi9tYWluUGFnZVwiKTtcclxuY29uc3QgYXV0aG9yc1N1YlBhZ2VzID0gcmVxdWlyZShcIi4vYXV0aG9yc1N1YlBhZ2VzXCIpO1xyXG5cclxubWFpblBhZ2UubWFpblBhZ2UoKTtcclxuYXV0aG9yc1N1YlBhZ2VzLmF1dGhvcnNTdWJQYWdlcygpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")},function(module,exports,__webpack_require__){"use strict";eval('\r\n\r\nconst nav = document.querySelector(".navigation--js");\r\nconst burgerIcon = document.querySelector(".menu__switcher--js");\r\nconst loaderContainer = document.querySelector(".loader");\r\nconst header = document.querySelector(".header");\r\nconst introduction = document.querySelector(".introduction--js");\r\nconst photographers = document.querySelector(".navigation__item--js");\r\nconst submenu = document.querySelector(".submenu--js");\r\n\r\nconst mainPage = () => {\r\n  burgerIcon.addEventListener("click", () => {\r\n    burgerIcon.classList.toggle("no__active");\r\n    nav.classList.toggle("mobileMove");\r\n  });\r\n\r\n  photographers.addEventListener("click", () => {\r\n    submenu.classList.toggle("submenu--visible");\r\n  });\r\n\r\n  setTimeout(() => {\r\n    loaderContainer.classList.add("loader--hidden");\r\n    header.classList.add("header--visible");\r\n    burgerIcon.classList.add("menu__switcher--visible");\r\n    if (window.innerWidth >= 1024) {\r\n      nav.classList.add("navigation--visible");\r\n    }\r\n  }, 2000);\r\n\r\n  setTimeout(() => {\r\n    introduction.classList.add("introduction--visible");\r\n  }, 1500);\r\n};\r\n\r\nmodule.exports = {\r\n  mainPage: mainPage\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpblBhZ2UuanM/NzFjZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbi0tanNcIik7XHJcbmNvbnN0IGJ1cmdlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVfX3N3aXRjaGVyLS1qc1wiKTtcclxuY29uc3QgbG9hZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkZXJcIik7XHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xyXG5jb25zdCBpbnRyb2R1Y3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmludHJvZHVjdGlvbi0tanNcIik7XHJcbmNvbnN0IHBob3RvZ3JhcGhlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX2l0ZW0tLWpzXCIpO1xyXG5jb25zdCBzdWJtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtZW51LS1qc1wiKTtcclxuXHJcbmNvbnN0IG1haW5QYWdlID0gKCkgPT4ge1xyXG4gIGJ1cmdlckljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGJ1cmdlckljb24uY2xhc3NMaXN0LnRvZ2dsZShcIm5vX19hY3RpdmVcIik7XHJcbiAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcIm1vYmlsZU1vdmVcIik7XHJcbiAgfSk7XHJcblxyXG4gIHBob3RvZ3JhcGhlcnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHN1Ym1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcInN1Ym1lbnUtLXZpc2libGVcIik7XHJcbiAgfSk7XHJcblxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgbG9hZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsb2FkZXItLWhpZGRlblwiKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLS12aXNpYmxlXCIpO1xyXG4gICAgYnVyZ2VySWNvbi5jbGFzc0xpc3QuYWRkKFwibWVudV9fc3dpdGNoZXItLXZpc2libGVcIik7XHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gMTAyNCkge1xyXG4gICAgICBuYXYuY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb24tLXZpc2libGVcIik7XHJcbiAgICB9XHJcbiAgfSwgMjAwMCk7XHJcblxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgaW50cm9kdWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJpbnRyb2R1Y3Rpb24tLXZpc2libGVcIik7XHJcbiAgfSwgMTUwMCk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBtYWluUGFnZTogbWFpblBhZ2VcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n')},function(module,exports,__webpack_require__){"use strict";eval('\r\n\r\nconst nav = document.querySelector(".navigation--js");\r\nconst burgerIcon = document.querySelector(".menu__switcher--js");\r\nconst photographers = document.querySelector(".navigation__item--js");\r\nconst submenu = document.querySelector(".submenu--js");\r\nconst iconsContainer = document.querySelector(".header-author__icons--js");\r\n\r\nfunction loadingElements() {\r\n  burgerIcon.addEventListener("click", () => {\r\n    burgerIcon.classList.toggle("no__active");\r\n    nav.classList.toggle("mobileMove");\r\n  });\r\n\r\n  photographers.addEventListener("click", () => {\r\n    submenu.classList.toggle("submenu--visible");\r\n  });\r\n\r\n  window.addEventListener("scroll", function() {\r\n    if (window.pageYOffset >= 100) {\r\n      iconsContainer.classList.add("header-author__icons--bcg");\r\n    } else {\r\n      iconsContainer.classList.remove("header-author__icons--bcg");\r\n    }\r\n  });\r\n}\r\n\r\nloadingElements();\r\nmodule.exports = {\r\n  authorsSubPages: loadingElements\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXV0aG9yc1N1YlBhZ2VzLmpzPzIwZWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uLS1qc1wiKTtcclxuY29uc3QgYnVyZ2VySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudV9fc3dpdGNoZXItLWpzXCIpO1xyXG5jb25zdCBwaG90b2dyYXBoZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX19pdGVtLS1qc1wiKTtcclxuY29uc3Qgc3VibWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWVudS0tanNcIik7XHJcbmNvbnN0IGljb25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXItYXV0aG9yX19pY29ucy0tanNcIik7XHJcblxyXG5mdW5jdGlvbiBsb2FkaW5nRWxlbWVudHMoKSB7XHJcbiAgYnVyZ2VySWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgYnVyZ2VySWNvbi5jbGFzc0xpc3QudG9nZ2xlKFwibm9fX2FjdGl2ZVwiKTtcclxuICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKFwibW9iaWxlTW92ZVwiKTtcclxuICB9KTtcclxuXHJcbiAgcGhvdG9ncmFwaGVycy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgc3VibWVudS5jbGFzc0xpc3QudG9nZ2xlKFwic3VibWVudS0tdmlzaWJsZVwiKTtcclxuICB9KTtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IDEwMCkge1xyXG4gICAgICBpY29uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWF1dGhvcl9faWNvbnMtLWJjZ1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGljb25zQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkZXItYXV0aG9yX19pY29ucy0tYmNnXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5sb2FkaW5nRWxlbWVudHMoKTtcclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgYXV0aG9yc1N1YlBhZ2VzOiBsb2FkaW5nRWxlbWVudHNcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n')}]);