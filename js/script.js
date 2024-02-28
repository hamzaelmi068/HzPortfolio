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

/* toggle the navbar whenever its clicked
*/

const navBarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navBarLinks.length; i++){
    navBarLinks[i].addEventListener("click", function(){
        header.classList.toggle("nav-active");
        navToggleBtn.classList.toggle("active");
    });
}


// back to top and header

const backTopBtn = document.querySelector("[data-back-to-top]");


window.addEventListener("scroll", function () {
  if (window.scrollY >= 101) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});