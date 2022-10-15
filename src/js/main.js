import {
  asd
} from './func.js';
asd();
// import Swiper JS
import Swiper, {
  Navigation,
  Pagination
} from 'swiper';
// import Swiper styles
// import 'swiper/css';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Код определяет на каком устройстве запущен сайт
"use strict" //обрабатываем код в строгом режиме
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone[iPad]iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  }
};

if (isMobile.any()) {
  document.body.classList.add('_touch');
  let menuArrows = document.querySelectorAll('.menu__arrow');
  if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
      const menuArrow = menuArrows[index];
      menuArrow.addEventListener('click', function (e) {
        menuArrow.parentElement.classList.toggle('_active');
      });
    }
  }
} else {
  document.body.classList.add('_pc');
}

// Меню бургер
const navBurger = document.querySelector('.nav__burger');
const navMenu = document.querySelector('.nav__menu');
const iconClose = document.querySelector('.nav__icon-close')
const iconBurger = document.querySelector('.nav__icon-burger')
if (navBurger) {
  navBurger.addEventListener('click', function () {
    // console.log('Test');
    navMenu.classList.toggle('_active');
    dropDownCoins.classList.remove('_active');
    iconClose.classList.toggle('_hidden');
    iconBurger.classList.toggle('_hidden');
  });
}
//Подменю
const navCoins = document.querySelector('#nav-coins');
const dropDownCoins = document.querySelector('#dropdown-coins');
// console.log(menuBurger);
// console.log(dropDownCoins);
// Проверим что есть объект
if (navCoins) {
  // Слушаем событие пункта меню Монеты
  navCoins.addEventListener('click', function () {
    // console.log('Test');
    dropDownCoins.classList.toggle('_active');
  });
  // console.log(menuBurger);
}