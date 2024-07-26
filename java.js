document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.gallery-slides');
    const totalSlides = document.querySelectorAll('.gallery-slide').length;
    let index = 0;

    function showNextSlide() {
        index = (index + 1) % totalSlides;
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(showNextSlide, 3000); // Change slide every 3 seconds
});

// scripts.js

let index = 0;

function showSlide(n) {
    const slides = document.querySelector('.services-wrapper');
    const totalSlides = document.querySelectorAll('.service').length;
    if (n >= totalSlides) { index = 0; }
    if (n < 0) { index = totalSlides - 1; }
    slides.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    index++;
    showSlide(index);
}

function prevSlide() {
    index--;
    showSlide(index);
}

// Initialize the slider
showSlide(index);
