// Header

const header = document.querySelector("header");

window.addEventListener("scroll", headerFixer);

function headerFixer() {
  if (window.scrollY > 10) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

// Navigation responsive

var hamburgerButton = document.querySelector(".hamburger_menu");
var nav = document.querySelector("nav");

hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("active");
  nav.classList.toggle("active");
});
