import Navigo from 'navigo';
import 'normalize.css'
import { Footer } from './modules/Footer/Footer';
import { Header } from './modules/Header/Header';
import { Main } from './modules/Main/Main';
import './style.scss'



const productSlider = () => {
  Promise.all([
    import('swiper/modules'),
    import('swiper'),
    import('swiper/css')
  ]).then(([{Navigation, Thumbs}, Swiper]) => {
    const swiperThumbnails = new Swiper.default(".product__slider-thumbnails", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });

    new Swiper.default(".product__slider-main", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".product__arrow_next",
        prevEl: ".product__arrow_prev",
      },
      modules: [Navigation, Thumbs],
      thumbs: {
        swiper: swiperThumbnails,
      },
    });
  }) 
}

const init = () => {
  new Header().mount()
  new Main().mount()
  //new Order().mount()
  new Footer().mount()
  productSlider()

  const router = new Navigo("/", { linksSelector: 'a[href^="/"]' });
  router
  .on("/", () => {})
  .on("/category", () => {})
  .on("/favorite", () => {})
  .on("/search", () => {})
  .on("/product/:id", () => {})
  .on("/cart", () => {})
  .on("/order", () => {

  })
  .notFound(() => {})

  router.resolve()
}

init()