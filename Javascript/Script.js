let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlides() {

    slides.forEach(slide => {
        slide.style.opacity = 0;
    });

    slides[slideIndex].style.opacity = 1;


    slideIndex = (slideIndex + 1) % totalSlides;

    setTimeout(showSlides, 4000);
}

let position = 0;

function moveLeft() {
    if (position > 0) {
        position -= 1;
        updateCarousel();
    }
}

function moveRight() {
    if (position < document.querySelectorAll('.carousel-images img').length - 5) {
        position += 1;
        updateCarousel();
    }
}

function updateCarousel() {
    const carouselImages = document.querySelector('.carousel-images');
    const imageWidth = carouselImages.querySelector('img').clientWidth;
    carouselImages.style.transform = `translateX(-${position * imageWidth}px)`;
}
