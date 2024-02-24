/**
 * @copyright Hz 2024
 * @author Sadee <hamzaelmi067@gmail.com>
 */

"use strict";

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});