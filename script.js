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