let mainMenuElem = document.getElementById('mainMenu');
let titleMenuElem = mainMenuElem.querySelector('.hidden-menu__title');

titleMenuElem.onclick = function() {
    mainMenuElem.classList.toggle('open');
};

let resourcesElem = document.getElementById('resources');
let titleResourcesElem = resourcesElem.querySelector('.hidden-resources__title');

titleResourcesElem.onclick = function() {
    resourcesElem.classList.toggle('open');
};