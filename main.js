import 'normalize.css'
import './style.scss'
import 'swiper/css';
import Swiper from 'swiper';



const swiperThumbnails = new Swiper(".product-slider-thumbnails", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

new Swiper(".product-slider_main", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".product-arror_next",
    prevEl: ".product-arror_prev",
  },
  thumbs: {
    swiper: swiperThumbnails,
  },
});