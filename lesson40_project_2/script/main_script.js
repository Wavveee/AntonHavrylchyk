
var swiperHeader = new Swiper(".header_mySwiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 4400,
  },

  loop: true,
});

var swiperNews = new Swiper(".latest-news_mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // autoplay: {
  //   delay: 4400,
  // },

  navigation: {
    nextEl: ".right-button",
    prevEl: ".left-button",
  },

  loop: true,

});

const emailInput = document.getElementById("email")
const errorMassage = document.querySelector(".error-message")

emailInput.onblur = function() {
  if (!emailInput.value.includes('@')) { 
    emailInput.classList.add('invalid');
    errorMassage.classList.toggle('hide')
  }
};

emailInput.onfocus = function() {
  if (this.classList.contains('invalid')) {
    this.classList.remove('invalid');
    errorMassage.classList.toggle('hide')
  }
};