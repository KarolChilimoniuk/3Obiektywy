"use strict";

const nav = document.querySelector(".navigation--js");
const burgerIcon = document.querySelector(".menu__switcher--js");
const photographers = document.querySelector(".navigation__item--js");
const submenu = document.querySelector(".submenu--js");
const iconsContainer = document.querySelector(".header-author__icons--js");

function loadingElements() {
  burgerIcon.addEventListener("click", () => {
    burgerIcon.classList.toggle("no__active");
    nav.classList.toggle("mobileMove");
  });

  photographers.addEventListener("click", () => {
    submenu.classList.toggle("submenu--visible");
  });

  window.addEventListener("scroll", function() {
    if (window.pageYOffset >= 100) {
      iconsContainer.classList.add("header-author__icons--bcg");
    } else {
      iconsContainer.classList.remove("header-author__icons--bcg");
    }
  });
}

loadingElements();
module.exports = {
  authorsSubPages: loadingElements
};
