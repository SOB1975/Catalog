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
      // console.log('Klik');
      // console.log(this);
      // subMenu.classList.toggle('_active');

      // item.classList.toggle('_active');
    });
  });
  // });
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


      console.log('Кликаю');
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