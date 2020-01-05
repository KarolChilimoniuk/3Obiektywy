"use strict";

const header = document.querySelector(".header-karol--js");
const nav = document.querySelector(".navigation--js");
const burgerIcon = document.querySelector(".menu__switcher--js");
const photographers = document.querySelector(".navigation__item--js");
const submenu = document.querySelector(".submenu--js");
const photoSection = document.querySelector(".section--photography--js");

function loadingElements() {
  burgerIcon.addEventListener("click", () => {
    burgerIcon.classList.toggle("no__active");
    nav.classList.toggle("mobileMove");
  });

  photographers.addEventListener("click", () => {
    submenu.classList.toggle("submenu--visible");
  });

  // setTimeout(() => {
  //   header.classList.add("header-karol--visible");
  // }, 10);

  setTimeout(() => {
    photoSection.classList.add("section--photography--visible");
    burgerIcon.classList.add("menu__switcher--visible");
  }, 13);
}

loadingElements();
module.exports = {
  karolSubPage: loadingElements
};
