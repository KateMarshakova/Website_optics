let menuElem = document.getElementById('sweeties');
let titleElem = menuElem.querySelector('.hidden-menu__title');

titleElem.onclick = function() {
  menuElem.classList.toggle('open');
};