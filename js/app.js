let backtop = document.querySelector(".back-top");
let header = document.querySelector(".header");
let body = document.querySelector("body");
let darkMode = document.querySelector(".header__nav__right__btns__dark-mode");
let headerList = document.querySelector(".header__nav__right__list");
let hamburger = document.querySelector(".header__nav__right__btns__hamburger");
console.log(headerList);
window.addEventListener("scroll", function () {
  showBacTop();
  showHeaderShrink();
});

darkMode.addEventListener("click", function () {
  body.classList.toggle("dark");
});

hamburger.addEventListener("click", function () {
  headerList.classList.toggle("show__header__nav__list");
});

function showBacTop() {
  if (scrollY > 200) {
    backtop.classList.add("show__back-top");
  } else {
    backtop.classList.remove("show__back-top");
  }
}

function showHeaderShrink() {
  if (scrollY > 0) {
    header.classList.add("show__header__shrink");
  } else {
    header.classList.remove("show__header__shrink");
  }
}
