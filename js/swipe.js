var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
 });
 

 
 var swiper = new Swiper(".logo-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
       450: {
          slidesPerView: 2,
        },
       640: {
         slidesPerView: 3,
       },
       768: {
         slidesPerView: 4,
       },
       1000: {
         slidesPerView: 5,
       },
    },
 });