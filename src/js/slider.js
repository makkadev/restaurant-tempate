const image = document.querySelector('.page-home img');
let activeElement = 0;
const timeChange = 5000;

const images = ['pizza', 'pizza-home'];

const slide = () => {
    image.src = `images/${images[activeElement]}.jpg`
    activeElement++;
    if (activeElement === images.length) activeElement = 0;
}

// setInterval(slide, timeChange);