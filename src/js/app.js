// ========  Webp  ========================================================
import * as saFunctions from './modules/functions.js';
saFunctions.isWebp();

// ========  BURGER  ========================================================
import './modules/burger.js';

// ========  PLAYER  ========================================================
// import './modules/player.js';

// ========  SWIPER  ========================================================
// import Swiper, { Autoplay, Keyboard, Navigation } from 'swiper';
// import './modules/mySwiper.js';

// document.querySelector('.prev').onclick = () => {
// 	swiper.slidePrev();
// }
// document.querySelector('.next').onclick = () => {
// 	swiper.slideNext();
// }

// ========  Header Scroll  ========================================================
import { headerScroll } from './modules/headerScroll.js';
headerScroll(100); // param: headerHight

// ========  Links Decoration ========================================================
import { linksDecoration } from './modules/linksDecoration.js';
linksDecoration()

// ========  Scroll Animation ========================================================
import { scrollAnimation } from './modules/scrollAnimation.js';
scrollAnimation()