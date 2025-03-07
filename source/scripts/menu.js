const headerMenuButton = document.querySelector('.page__header-menu');
const navigationMenu = document.querySelector('.navigation');

const TIME_DELAY = {
  MENU_SHOW: 100,
  MENU_HIDE: 500
};

// функция закрытия меню
const closesMenu = () => {
  navigationMenu.classList.add('navigation--close');
  headerMenuButton.classList.remove('page__header-menu--close');
  setTimeout(() => {
    navigationMenu.style.display = 'none';
  }, TIME_DELAY.MENU_HIDE);
  document.removeEventListener('click', closesMenu);
};

// функция открытия меню
const opensMenu = () => {
  navigationMenu.style.display = 'flex';
  headerMenuButton.classList.add('page__header-menu--close');
  setTimeout(() => {
    navigationMenu.classList.remove('navigation--close');
    document.addEventListener('click', closesMenu);
  }, TIME_DELAY.MENU_SHOW);


};

// открытие/закрытие меню
headerMenuButton.addEventListener('click', () => {
  if (navigationMenu.classList.contains('navigation--close')) {
    opensMenu();
  } else {
    closesMenu();
  }
});

closesMenu();
