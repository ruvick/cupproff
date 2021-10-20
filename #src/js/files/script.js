// 'use strict';
// document.addEventListener('DOMContentLoaded', () => {
// });

// const iconMenu = document.querySelector(".icon-menu");
const iconMenuOpen = document.querySelector(".icon-menu-open");
const iconMenuClose = document.querySelector(".icon-menu-close");
const body = document.querySelector("body");
const menuBody = document.querySelector(".menu");
const menuListItemElems = document.querySelector(".menu__list-item");
const mobsearch = document.querySelector(".mob-search");
const headsearch = document.querySelector(".header__search-mob");

//BURGER
if (iconMenuOpen) {
  iconMenuOpen.addEventListener("click", function () {
    body.classList.add("_lock");
    menuBody.classList.add("active");
  });
}

if (iconMenuClose) {
  iconMenuClose.addEventListener("click", function () {
    body.classList.remove("_lock");
    menuBody.classList.remove("active");
  });
}

// Закрытие моб меню при клике на якорную ссылку
if (menuListItemElems) {
  menuListItemElems.addEventListener("click", function () {
    iconMenuOpen.classList.remove('active');
    body.classList.remove("_lock");
    menuBody.classList.remove("active");
  });
}

// Строка поиска на мобилках 
if (mobsearch) {
  mobsearch.addEventListener("click", function () {
    headsearch.classList.toggle("_active");
  });
}

// Закрытие моб меню при клике вне области меню 
window.addEventListener('click', e => { // при клике в любом месте окна браузера
  const target = e.target // находим элемент, на котором был клик
  if (!target.closest('.icon-menu') && !target.closest('.menu') && !target.closest('.mob-search') && !target.closest('.header__search-mob') && !target.closest('._popup-link') && !target.closest('.popup')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
    iconMenuOpen.classList.remove('active') // то закрываем окно навигации, удаляя активный класс
    menuBody.classList.remove('active')
    body.classList.remove('_lock')
    // headsearch.classList.remove('_active')
  }
})

// Плавная прокрутка
const smotScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

smotScrollElems.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log(event);

    const id = link.getAttribute('href').substring(1)
    console.log('id : ', id);

    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    });
  })
});


// Полоса прокрутки в шапке
const scrollProgress = document.getElementById('scroll-progress');
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
});


// Ползунок выбора цены
const priceEl = document.querySelector(".price");

function changePrice(price) {
  priceEl.innerText = price;
  console.log(price);
};


// Подсказки
tippy('._tippy', {
  content: "Подсказка",
});


// Поочередное открытие нескольких блоков меню, табы, либо что то еще
const BarIconElems = document.querySelectorAll('.sidebar__menu-open');
const BarLinkIconElems = document.querySelectorAll('.sidebar__menu-icon');
const BarSubMenuElems = document.querySelectorAll('.sidebar__submenu');

BarIconElems.forEach((btn, index) => {
  btn.addEventListener('click', () => {

    if (!btn.classList.contains('sidebar__menu-icon_active')) {

      BarSubMenuElems.forEach((BarSubMenuElem) => {
        BarSubMenuElem.classList.remove('active')
      });
      BarIconElems.forEach((BarIconElem) => {
        BarIconElem.classList.remove('sidebar__menu-icon_active')
      });
      BarLinkIconElems.forEach((BarLinkIconElem) => {
        BarLinkIconElem.classList.remove('sidebar__menu-icon_active')
      });

      BarSubMenuElems[index].classList.add('active')
      BarLinkIconElems[index].classList.add('sidebar__menu-icon_active')
      btn.classList.add('sidebar__menu-icon_active')
    } else {
      BarSubMenuElems[index].classList.remove('active')
      BarLinkIconElems[index].classList.remove('sidebar__menu-icon_active')
      btn.classList.remove('sidebar__menu-icon_active')
    }
  })
})

