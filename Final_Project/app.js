var slides = document.getElementsByClassName("slide");
var currentSlide = 0;

function showSlide(n) {
  if (n >= slides.length) {
    currentSlide = 0;
  } else if (n < 0) {
    currentSlide = slides.length - 1;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  slides[currentSlide].classList.add("active");
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function previousSlide() {
  showSlide(currentSlide - 1);
}

// Automatically advance the slideshow every 3 seconds
setInterval(nextSlide, 3000);

// Show the initial slide
showSlide(currentSlide);
