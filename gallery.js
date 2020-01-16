
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let galleryDisplayBig = document.querySelector("#gallery-display-container img");
    // if n is bigger than slides.length, the slider has come to the end and must restart.
    // setting slideindex to 1 (= initial slideindex).
    if (n > slides.length) {
      slideIndex = 1
    }
    // if n is smaller than 1, the slider has come to the start and must restart from the end.
    // setting slideindex to the arrays length.
    if (n < 1) {
      slideIndex = slides.length
    }
    // looping the slides and hidning them all.
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // displaying this specific slide, with slideindex -1
    let slideImage = slides[slideIndex-1].querySelector("img");
    console.log(slideImage);
    slides[slideIndex-1].style.display = "block";
    galleryDisplayBig.src = slideImage.src;
}



