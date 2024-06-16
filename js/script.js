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

const hamburgerButton = document.querySelector(".hamburger_menu");
const nav = document.querySelector("nav");
const main = document.querySelector("main");

hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("active");
  nav.classList.toggle("active");
  main.classList.toggle("active");
});
