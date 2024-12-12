//for slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

// Automatic slideshow
let autoSlideIndex = 0;
autoShowSlides();

function autoShowSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    autoSlideIndex++;
    if (autoSlideIndex > slides.length) {autoSlideIndex = 1}
    slides[autoSlideIndex-1].style.display = "block";
    setTimeout(autoShowSlides, 2000); // Change image every 2 seconds
}