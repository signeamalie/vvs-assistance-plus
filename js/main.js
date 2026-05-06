"use strict";

// finder menu elementer
const burgerBtn = document.querySelector("#burgerBtn");
const closeBtn = document.querySelector("#closeBtn");
const menu = document.querySelector("#menu");

// åbner menuen
burgerBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

// lukker menuen
closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});