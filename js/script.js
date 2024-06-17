// Header

function headerFixer() {
  const header = document.querySelector("header");

  if (window.scrollY > 10) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

window.addEventListener("scroll", headerFixer);

function menuCenter() {
  const left = document.querySelector("header .logo");
  const right = document.querySelector("header .cv");
  const nav = document.querySelector("header nav");
  let leftWidth = 0;
  let rightWidth = 0;

  if (left) {
    leftWidth = parseInt(window.getComputedStyle(left).width);
  }

  if (right) {
    rightWidth = parseInt(window.getComputedStyle(right).width);
  }

  if (leftWidth < rightWidth) {
    nav.style.paddingLeft = rightWidth - leftWidth + "px";
  } else {
    nav.style.paddingRight = leftWidth - rightWidth + "px";
  }
}

menuCenter();

// Navigation responsive

const hamburgerButton = document.querySelector(".hamburger_menu");
const nav = document.querySelector("nav");
const main = document.querySelector("main");

hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("active");
  nav.classList.toggle("active");
  main.classList.toggle("active");
});

// Competences

function compSlider() {
  const swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },

    pagination: {
      el: '.swiper-pagination',
      type: "bullets",
      clickable: true
    }
  });
}

compSlider();