"use strict";

const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");

navToggle.addEventListener("click", function () {
  navMenu.classList.toggle("open");
});

navMenu.addEventListener("click", function (event) {
  if (!event.target.classList.contains("nav__link")) {
    return;
  }
  navMenu.classList.remove("open");
});
