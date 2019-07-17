const hamburger = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.navigation__menu');
const navLinks = document.querySelectorAll('.navigation__menu li');
const open = document.querySelector('.open');
const close = document.querySelector('.close');

const navSlide = () => {
    nav.classList.toggle('nav-hamburger');
    open.classList.toggle('hidden');
    close.classList.toggle('hidden');
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `navLinksFade 0.5s ease forwards ${index / 8 + 0.3}s`
        }
    });

}

hamburger.addEventListener('click', navSlide);