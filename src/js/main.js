"use strict";

const mobileNav = document.querySelector(".navigation--js");
const burgerIcon = document.querySelector(".menu__switcher--js")
''
burgerIcon.addEventListener("click", () => {
  burgerIcon.classList.toggle("no__active");
  mobileNav.classList.toggle("mobileMove");
});