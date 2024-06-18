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

if (window.innerWidth >= 1024) {
  menuCenter();
}

// Navigation responsive

const hamburgerButton = document.querySelector(".hamburger_menu");
const nav = document.querySelector("nav");
const main = document.querySelector("main");

hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("active");
  nav.classList.toggle("active");
});

// Competences

function compSlider() {
  const transform = "X";
  const direction = "horizontal";
  const interleaveOffset = 0.5;
  const rate = document.body.classList.contains("rtl") ? -1 : 1;

  const swiper = new Swiper(".swiper", {
    loop: true,
    speed: 1500,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: '.swiper-pagination',
      type: "bullets",
      clickable: true
    },

    slidesPerView: 1,
    direction: direction,
    watchSlidesProgress: true,

    on: {
      progress: function (swiper) {
        for (let i = 0; i < swiper.slides.length; i++) {
          let slideProgress = swiper.slides[i].progress;
          let innerOffset = swiper.width * interleaveOffset;
          let innerTranslate = slideProgress * innerOffset * rate;
          swiper.slides[i].querySelector(
            ".abs_img"
          ).style.transform = `translate${transform}(${innerTranslate}px)`;
        }
      },
      touchStart: function (swiper) {
        for (let i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = "";
        }
      },
      setTransition: function (swiper, speed) {
        for (let i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = `${speed}ms`;
          swiper.slides[i].querySelector(
            ".abs_img"
          ).style.transition = `${speed}ms`;
        }
      },
    },
  });
}

compSlider();

function divideWord() {
  const buttons = document.querySelectorAll(".view_more");

  buttons.forEach((button) => {
    const text = button.textContent;
    button.innerHTML = "";

    for (let char of text) {
      let span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      button.appendChild(span);
    }

    const spans = button.querySelectorAll("span");

    button.addEventListener("mouseenter", () => {
      spans.forEach((span, index) => {
        setTimeout(() => {
          span.classList.add("hover");
        }, index * 50);
      });
    });
    button.addEventListener("mouseleave", () => {
      spans.forEach((span, index) => {
        setTimeout(() => {
          span.classList.remove("hover");
        }, index * 50);
      });
    });
  });
}

divideWord();
