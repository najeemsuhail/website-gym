$(document).ready(function(){
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000, // Delay between slide transitions (in milliseconds)
      disableOnInteraction: false, // Enable autoplay even when user interacts with the carousel
    },
  });
});
