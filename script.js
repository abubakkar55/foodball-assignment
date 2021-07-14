// for burger navbar toggle

const header  = document.querySelector('.header');
const burgerBtn  = document.querySelector('.header__hamburger');
const navLink  = document.querySelectorAll('.navbar__link');
burgerBtn.addEventListener('click', function () {
    header.classList.toggle('open');
})

