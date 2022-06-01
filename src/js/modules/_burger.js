const burgerMenu = document.querySelector('.menu-burger__list'),
      burgerLinks = burgerMenu.getElementsByTagName('A');

document.body.addEventListener('click', () => {
    if(event.target.closest('.menu-burger__button_open')) {
        burgerMenu.classList.add('active');
    } else if(event.target.closest('.menu-burger__button_close')) {
        burgerMenu.classList.remove('active');
    } else if ([...burgerLinks].includes(event.target)) {
        burgerMenu.classList.remove('active');
    } else if (!event.target.closest('.menu-burger__list')) {
        burgerMenu.classList.remove('active');
    }
});