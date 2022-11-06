"use strict" //обрабатываем код в строгом режиме
import {
  asd
} from './func.js';
asd();
// import Swiper JS
import Swiper, {
  Navigation,
  Pagination,
  Thumbs
} from 'swiper';
// import htmlmin from 'gulp-htmlmin';

//Pagination
const swiper = new Swiper('.product-slider2', {
  modules: [Navigation, Pagination, Thumbs],
  spaceBetween: 20,
  slidesPerView: 1,
  cssMode: true,

  // loop: false,
  // freeMode: true,
  // watchSlidesProgress: true,

});

const swiper2 = new Swiper(".product-slider", {
  modules: [Navigation, Pagination, Thumbs],
  spaceBetween: 0,
  cssMode: true,
  slidesPerView: 1,

  // navigation: {
  // nextEl: ".swiper-button-next",
  // prevEl: ".swiper-button-prev",
  // },
  thumbs: {
    swiper: swiper,
  },
});

// Изменяем border thumbs
// const slide2 = document.querySelectorAll('.product-slider2__slide');

// if (slide2) {
//   slide2.forEach(function (item) {
//     item.addEventListener('click', function () {

//       console.log(item);
//       onchange = function () {
//         console.log('klik');
//         item.classList.toggle('_bg');
//       }
//       // item.classList.remove('_bg');

//       // slide2[index].classList.remove('_bg');
//     });
//   });
// }


// Код определяет на каком устройстве запущен сайт

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
    // dropDownCoins.classList.remove('_active');
    iconClose.classList.toggle('_hidden');
    iconBurger.classList.toggle('_hidden');
  });
}
//Подменю Монеты
// const navCoins = document.querySelector('#nav-coins');
// const dropDownCoins = document.querySelector('#dropdown-coins');
// const arrow = document.querySelector('.arrow');
// console.log(menuBurger);
// console.log(dropDownCoins);
// Проверим что есть объект
// if (navCoins) {
// Слушаем событие пункта меню Монеты
// navCoins.addEventListener('click', function () {
// console.log('Test');
// dropDownCoins.classList.toggle('_active');
// arrow.classList.toggle('_arrow-rotate');
// });
// console.log(menuBurger);
// }
const arrowAll = document.querySelectorAll('.arrow');
const allMenuItem = document.querySelectorAll('.nav__item');
const subMenu = document.querySelectorAll('.submenu');
console.log(allMenuItem);
if (allMenuItem) {
  console.log('Test');
  allMenuItem.forEach(function (item, index) {
    console.log(index);
    item.addEventListener('click', function (e) {
      arrowAll.forEach(function (item, i) {
        if (index == i) {
          item.classList.toggle('_arrow-rotate');
        } else {
          item.classList.remove('_arrow-rotate');
        }
      });

      subMenu.forEach(function (item, i) {
        if (index == i + 1) {
          item.classList.toggle('_active');
        } else {
          item.classList.remove('_active');
        }
      });
    });
  });
}

//меню фильтров
const menuFiltr = document.querySelectorAll('.menu-sidebar__dropdown');
const menuFiltrIcon = document.querySelectorAll('.menu-sidebar__icon');
const menuFiltrSubmenu = document.querySelectorAll('.menu-sidebar__submenu');
console.log(menuFiltr);
console.log(menuFiltrSubmenu);

if (menuFiltr) {
  // перебираем по очереди пункты меню фильтров
  menuFiltr.forEach(function (item, index) {
    console.log(item);
    // слушаем выбраный пункт меню
    item.addEventListener('click', function (element) {

      menuFiltrIcon.forEach(function (item, i) {
        if (index == i) {
          item.classList.toggle('_rotate');
        }
      });

      menuFiltrSubmenu.forEach(function (item, i) {
        if (index == i) {
          item.classList.toggle('_active');
        }
      })
    })
  })
}

//Главное меню sidebar
const menuSbMainDrop = document.querySelectorAll('.menu-sb-main__dropdown');
const menuSbMain = document.querySelectorAll('.menu-sb-main__category');
const menuSbIcon = document.querySelectorAll('.menu-sb-main__icon');
const menuSbItem = document.querySelectorAll('.menu-sb-main__item');
// console.log(menuSbMain);
if (menuSbMainDrop) {

  menuSbMainDrop.forEach(function (item, index) {
    item.addEventListener('click', function () {

      menuSbItem.forEach(function (item, i) {
        if (index == i) {
          item.classList.toggle('_bg');
        }

      });
      console.log('Click');
      item.classList.toggle('_bg');
      menuSbIcon.forEach(function (item, i) {
        if (index == i) {
          item.classList.toggle('_rotate');
        }
      });

      menuSbMain.forEach(function (item, i) {
        if (index == i) {
          item.classList.toggle('_active');

        }

      });
    });
  });

}
// Подменю главного меню sidebar
const menuSbMainSubCat = document.querySelectorAll('.menu-sb-main__subcategory');
const menuSbMainCatDrop = document.querySelectorAll('.menu-sb-main__category-dropdown');
const menuSbMainIcon = document.querySelectorAll('.menu-sb-main__category-icon');
console.log(menuSbMainCatDrop);
if (menuSbMainCatDrop) {

  menuSbMainCatDrop.forEach(function (item, index) {
    console.log(index);
    item.addEventListener('click', function (e) {

      menuSbMainIcon.forEach(function (item, i) {

        if (index == i) {
          item.classList.toggle('_rotate');
        }

      });

      console.log('Click');

      menuSbMainSubCat.forEach(function (item, i) {
        console.log(index);
        console.log(i);
        if (index == i) {
          item.classList.toggle('_active');
        }
      });
    });
  });
}

//Переключение между сеткой и списком
const srtList = document.getElementById('srt-list');
const srtGrid = document.getElementById('srt-grid');
const product = document.querySelectorAll('.product');
const productLink = document.querySelectorAll('.product__link');
const productImage = document.querySelectorAll('.product__image');
const productContainer = document.querySelectorAll('.product__container');
const productName = document.querySelectorAll('.product__name');
const productBody = document.querySelectorAll('.product__body');
const productText = document.querySelectorAll('.product__text');
const productCount = document.querySelectorAll('.product__count');
const productPrice = document.querySelectorAll('.product__price');
if (srtList) {
  srtList.addEventListener('change', function (e) {
    onchange = function (e) {

      product.forEach(function (item) {
        item.classList.add('_row');
      });

      productLink.forEach(function (item) {
        item.classList.add('_row');
      });

      productImage.forEach(function (item) {
        item.classList.add('_row');
      });

      productContainer.forEach(function (item) {
        item.classList.add('_row');
      });

      productName.forEach(function (item) {
        item.classList.add('_row');
      });

      productBody.forEach(function (item) {
        item.classList.add('_row');
      });

      productText.forEach(function (item) {
        item.classList.add('_row');
      });

      productCount.forEach(function (item) {
        item.classList.add('_row');
      });

      productPrice.forEach(function (item) {
        item.classList.add('_row');
      });

    };

    if (srtGrid) {
      srtGrid.addEventListener('change', function (e) {
        onchange = function (e) {
          console.log('Tect');
          product.forEach(function (item) {
            item.classList.remove('_row');
          });

          productLink.forEach(function (item) {
            item.classList.remove('_row');
          });

          productImage.forEach(function (item) {
            item.classList.remove('_row');
          });

          productContainer.forEach(function (item) {
            item.classList.remove('_row');
          });

          productName.forEach(function (item) {
            item.classList.remove('_row');
          });

          productBody.forEach(function (item) {
            item.classList.remove('_row');
          });

          productText.forEach(function (item) {
            item.classList.remove('_row');
          });

          productCount.forEach(function (item) {
            item.classList.remove('_row');
          });

          productPrice.forEach(function (item) {
            item.classList.remove('_row');
          });
        };
      });
    }
    // console.log(list.checked);
    // console.log(onchange);
    // if (list.checked == true) {
    //   product.forEach(function (item) {
    //     item.classList.add('_row');
    //   });
    //   productLink.forEach(function (item) {
    //     item.classList.add('_row');
    //   });
    //   productImage.forEach(function (item) {
    //     item.classList.add('_row');
    //   });
    //   productContainer.forEach(function (item) {
    //     item.classList.add('_row');
    //   });
    //   productName.forEach(function (item) {
    //     item.classList.add('_row');
    //   });
    //   productBody.forEach(function (item) {
    //     item.classList.add('_row');
    //   });
    //   productText.forEach(function (item) {
    //     item.classList.add('_row');
    //   });
    //   productCount.forEach(function (item) {
    //     item.classList.add('_row');
    //   });
    //   productPrice.forEach(function (item) {
    //     item.classList.add('_row');
    //   });
    // } else {
    //   product.forEach(function (item) {
    //     item.classList.remove('_row');
    //   });
    //   productLink.forEach(function (item) {
    //     item.classList.remove('_row');
    //   });
    //   productImage.forEach(function (item) {
    //     item.classList.remove('_row');
    //   });
    //   productContainer.forEach(function (item) {
    //     item.classList.remove('_row');
    //   });
    //   productName.forEach(function (item) {
    //     item.classList.remove('_row');
    //   });
    //   productBody.forEach(function (item) {
    //     item.classList.remove('_row');
    //   });
    //   productText.forEach(function (item) {
    //     item.classList.remove('_row');
    //   });
    //   productCount.forEach(function (item) {
    //     item.classList.remove('_row');
    //   });
    //   productPrice.forEach(function (item) {
    //     item.classList.remove('_row');
    //   });
    // }

  });
}

// modal - status
// находим модальное окно
const modalStatus = document.querySelector('.modal-status');
const htmlTeg = document.querySelector('.html');
// console.log(htmlTeg);
//находим кнопку открытия модального окна
const btnOpen = document.querySelector('.accordion__list-btn');
// console.log(htmlTeg);
// находим кнопки закрытия модального окна 
const btnClose = document.querySelectorAll('.btn-close');
//проверяем наличие кнопки
if (btnOpen) {
  // слушаем найденную кнопку
  btnOpen.addEventListener('click', function () {
    //убираем прокруту
    htmlTeg.classList.add('_overflow');
    // открываем модальное окно
    modalStatus.classList.remove('_hidden');

  });
}
//проверяем наличие кнопок
if (btnClose) {
  //перебираем и находим конкретную кнопку
  btnClose.forEach(function (item) {
    // слушаем найденную кнопку
    item.addEventListener('click', function () {
      // скрываем модальное окно
      modalStatus.classList.add('_hidden');
      //возвращаем прокрутку
      htmlTeg.classList.remove('_overflow');
    });
  });
}
if (modalStatus) {
  modalStatus.addEventListener('click', function () {
    // скрываем модальное окно
    modalStatus.classList.add('_hidden');
    //возвращаем прокрутку
    htmlTeg.classList.remove('_overflow');
  });
}

// modal-slider

const swiper3 = new Swiper(".modal-swiper", {
  modules: [Navigation, Pagination, Thumbs],
  spaceBetween: 0,
  slidesPerView: 1,
  autoHeight: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Закрываем модальное окно со слайдером
const modalSliderClose = document.querySelector('.modal-slider__close');
const modalSlider = document.querySelector('.modal-slider');
const modalSliderSlide = document.querySelectorAll('.modal-slider__slide');
if (modalSliderClose) {
  modalSliderClose.addEventListener('click', function () {
    console.log('test');
    // console.log(modalSliderSlide[index]);
    modalSlider.classList.toggle('_hidden');
  });
}
// открываем модальное окно со слайдером
const slide = document.querySelectorAll('.product-slider__slide');
if (slide) {
  slide.forEach(function (item, index) {
    item.addEventListener('click', function () {
      modalSlider.classList.remove('_hidden');
      // log();
      modalSliderSlide.forEach(function (item, i) {

      });
      // console.log(index);
    });
  });
}

// ZOOM Увелечительное стекло
function magnify(imgID, zoom) {
  let img, glass, w, h, bw;
  // img = document.querySelector(imgID);
  img = imgID;

  /* Создать увеличительное стекло: */
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");
  /* Вставить увеличительное стекло: */
  img.parentElement.insertBefore(glass, img);

  /* Установите свойства фона для стекла лупы: */
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  /* Выполните функцию, когда кто-то перемещает лупу по изображению: */
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  /* а также для сенсорных экранов: */
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  glass.addEventListener("click", function () {
    glass.setAttribute("class", "_hidden");
  });


  function moveMagnifier(e) {
    var pos, x, y;
    /* Предотвратите любые другие действия, которые могут возникнуть при перемещении по изображению */
    e.preventDefault();
    /* Получить позиции курсора x и y: */
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /* Не допускайте, чтобы лупа находилась вне изображения: */
    if (x > img.width - (w / zoom)) {
      x = img.width - (w / zoom);
    }
    if (x < w / zoom) {
      x = w / zoom;
    }
    if (y > img.height - (h / zoom)) {
      y = img.height - (h / zoom);
    }
    if (y < h / zoom) {
      y = h / zoom;
    }
    /* Установите положение стекла лупы: */
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /* Покажите, что такое увеличительное стекло "смотреть": */
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a, x = 0,
      y = 0;
    e = e || window.event;
    /* Получить x и y позиции изображения: */
    a = img.getBoundingClientRect();
    /* Вычислите координаты курсора x и y относительно изображения: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {
      x: x,
      y: y
    };
  }
}

const myImg = document.querySelectorAll('.modal-slider__img');
// let loupe = document.querySelector('.modal-slider__loupe');


myImg.forEach(function (item) {
  item.addEventListener('click', function () {
    // magnify(item, 2);
    // item.classList.toggle('_active');
    item.classList.toggle('_active');
    magnify(item, 3);

  });
  // item.addEventListener('mouseout', function () {
  //   const boolean = item.classList.toggle('_active');
  //   console.log('TEST');
  //   // magnify(item, 0);
  // });
});
const yes = true;
const no = false;
// console.log(loupe);
// const myGlass = document.querySelector('.img-magnifier-glass');
// loupe.addEventListener('click', function () {
// const glass = document.createElement("DIV");
// myImg.forEach(function (item) {
// console.log(item);
// loupe.addEventListener('click', function glass() {
// console.log(loupe.classList.toggle('_active'));
// if (loupe.classList.toggle('_active')) {
// magnify(item, 2, yes);
// console.log('ДА');
// loupe.removeEventListener('click', glass);
// } else {
// console.log('НЕТ');

// magnify(item, 2, no);
// const hidden = '_hidden';
// magnify(item, 2);
// }
// loupe.classList.toggle('_active');
// console.log(item);
// console.log(glass);
// glass.setAttribute("class", "img-magnifier-glass");
// magnify(item, 2);
// item.addEventListener('mouseout', function () {
//   console.log('TEST');
//   // magnify(item, 2, active);
// });
// console.log(myGlass);
// loupe.removeEventListener('click', glasss);
// });
// });
// console.log('Test');
// glass.classList.toggle('_active');
// });

// loupe.addEventListener('click', function glass() {
// console.log(loupe.classList.toggle('_active'));
// if (loupe.classList.toggle('_active')) {
// myImg.forEach(function (item, i) {
// console.log(item);
// if (i == 0) {
// magnify(item, 2);
// } else if (i == 1) {
// magnify(item, 2);
// }
// magnify(item, 2)
// });
// magnify(item, 2, yes);
// console.log('ДА');
// loupe.removeEventListener('click', glass);
// } else {
// console.log('НЕТ');

// magnify(item, 2, no);
// const hidden = '_hidden';
// magnify(item, 2);
// }
// });