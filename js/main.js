"use strict";

// finder menu elementer
const burgerBtn = document.querySelector("#burgerBtn");
const closeBtn = document.querySelector("#closeBtn");
const menu = document.querySelector("#menu");

// åbner menuen
if (burgerBtn && closeBtn && menu) {
  burgerBtn.addEventListener("click", () => {
    menu.classList.add("active");
  });

  // lukker menuen
  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
  });
}

// finder kontaktformular og succesbesked
const contactForm = document.querySelector("#contactForm");
const contactSuccess = document.querySelector("#contactSuccess");

// viser succesbesked når formularen sendes
if (contactForm && contactSuccess) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    contactForm.style.display = "none";
    contactSuccess.classList.add("active");
  });
}