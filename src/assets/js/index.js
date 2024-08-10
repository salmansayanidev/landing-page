import $ from "jquery";
import animationLottie from "./lottie-js/lottie";
// import Ourserlottie from '../lottie/footer-lottie.json'
import Ourserlottie from "../lottie/ourser-lottie.json";

animationLottie(Ourserlottie, ".our-ser-lottie");

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll <= 0) {
    $(".header").removeClass("header-active");
  } else {
    $(".header").addClass("header-active");
  }
});

var swiper = new Swiper(".hd-slider", {
  autoplay: {
    delay: 0,
  },
  speed: 10000,
  loop: true,
});

var swiper = new Swiper(".bnner-slider", {
  spaceBetween: 30,
  speed: 300,
  effect: "fade",
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".logo-slider", {
  slidesPerView: 6,
  speed: 700,
  spaceBetween: 60,
  autoplay: {
    delay: 2000,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 6,
    },
  },
});

const detailTabs = document.querySelectorAll("[data-view]");

detailTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    detailTabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    $("[data-content]").removeClass("active");
    $(`[data-content="${tab.dataset.view}"]`).addClass("active");
    tab.classList.add("active");
  });
});
