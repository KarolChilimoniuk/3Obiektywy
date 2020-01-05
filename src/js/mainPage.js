"use strict";

const nav = document.querySelector(".navigation--js");
const burgerIcon = document.querySelector(".menu__switcher--js");
const loaderContainer = document.querySelector(".loader");
const header = document.querySelector(".header");
const introduction = document.querySelector(".introduction--js");
const photographers = document.querySelector(".navigation__item--js");
const submenu = document.querySelector(".submenu--js");

const mainPage = () => {
  burgerIcon.addEventListener("click", () => {
    burgerIcon.classList.toggle("no__active");
    nav.classList.toggle("mobileMove");
  });

  photographers.addEventListener("click", () => {
    submenu.classList.toggle("submenu--visible");
  });

  setTimeout(() => {
    loaderContainer.classList.add("loader--hidden");
    header.classList.add("header--visible");
    burgerIcon.classList.add("menu__switcher--visible");
    if (window.innerWidth >= 1024) {
      nav.classList.add("navigation--visible");
    }
  }, 2000);

  setTimeout(() => {
    introduction.classList.add("introduction--visible");
  }, 1500);
};

module.exports = {
  mainPage: mainPage
};
