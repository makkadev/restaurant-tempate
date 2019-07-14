const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs-thumb img');
const opacity = 0.4;

imgs.forEach(img => img.addEventListener('click', imgClick));

// Opacity first image
imgs[0].style.opacity = opacity;

function imgClick(e) {
    // Reset opacity
    imgs.forEach(img => (img.style.opacity = 1));

    // Change current images
    current.src = e.target.src;

    // Add fadeIn effect
    current.classList.add('fade-in');

    // Rewmove fadeIn class
    setTimeout(() => (current.classList.remove('fade-in')), 500);

    // Change opacity
    e.target.style.opacity = opacity;
}