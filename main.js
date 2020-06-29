const menuElements = document.querySelectorAll('.hidden-menu__title');

for (let i = 0; i <menuElements.length; i++) {
    const menu = menuElements[i];

    menu.onclick = function () {
        this.parentNode.classList.toggle('hidden-menu__open');

    };
}