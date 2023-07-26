var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768:{
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 5,
      }
    }
  });