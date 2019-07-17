//Page section
const startBtn = document.querySelector('nav li:nth-of-type(1)');
const menuBtn = document.querySelector('nav li:nth-of-type(2)');
const aboutBtn = document.querySelector('nav li:nth-of-type(3)');
const galleryBtn = document.querySelector('nav li:nth-of-type(4)');
const contactBtn = document.querySelector('nav li:nth-of-type(5)');

//Smooth Scroll function
const smoothScroll = (section, duration) => {
    const target = document.querySelector(section);
    const targetPosition = target.getBoundingClientRect().top - 98;
    const startPosition = window.pageYOffset;
    let stratTime = null;

    const animation = (currentTime) => {
        if (stratTime === null) stratTime = currentTime;
        const timeElapsed = currentTime - stratTime;
        const run = linear(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) window.requestAnimationFrame(animation);
    }

    const linear = (t, b, c, d) => {
        return c * t / d + b;
    };

    window.requestAnimationFrame(animation);
}

//Scroll menu
startBtn.addEventListener('click', function () {
    smoothScroll('.page-home', 1000);
})

menuBtn.addEventListener('click', function () {
    smoothScroll('.page-restaurant-menu', 1000);
})

aboutBtn.addEventListener('click', function () {
    smoothScroll('.page-about', 1000);
})

galleryBtn.addEventListener('click', function () {
    smoothScroll('.page-gallery', 1000);
})

contactBtn.addEventListener('click', function () {
    smoothScroll('.page-contact', 1000);
})