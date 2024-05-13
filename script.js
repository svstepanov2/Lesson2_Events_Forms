var currentSlide = 0;
var interval;
function createSlideshow() {
  var i, j, slides, dots, current, next;
  slides = document.getElementsByClassName("slider-item");
  dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[0].style.display = "block";
  currentSlide = 0;
  dots[0].classList.add("active");
  showSlides(currentSlide);
  interval = setInterval(showSlides, 300000);
}

function showSlides(n) {
  var i, slides, dots, current, next, slideshowContainer, prevBtn, nextBtn, currentDot, nextDot;
  slideshowContainer = document.querySelector(".slider-container");
  prevBtn = document.querySelector(".prev-btn");
  nextBtn = document.querySelector(".next-btn");

  slides = document.getElementsByClassName("slider-item");
  dots = document.getElementsByClassName("dot");

  if (n > slides.length - 1) {
    currentSlide = 0;
  } else if (n < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = n;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[currentSlide].style.display = "block";
  dots[currentSlide].classList.add("active");
}

function plusSlides(n) {
  showSlides(currentSlide + n);
}

function currentSlide(n) {
  showSlides(n);
}

function showNextSlide() {
  plusSlides(1);
}

function showPreviousSlide() {
  plusSlides(-1);
}

function showDot(n) {
  currentSlide(n);
}

createSlideshow();

document.querySelector(".next-btn").addEventListener("click", showNextSlide);
document.querySelector(".prev-btn").addEventListener("click", showPreviousSlide);

for (var i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function() {
    showDot(this.textContent - 1);
  });
}


function showSlides(n) {
    var i, slides, dots, current, next, slideshowContainer, prevBtn, nextBtn, currentDot, nextDot;
    slideshowContainer = document.querySelector(".slider-container");
    prevBtn = document.querySelector(".prev-btn");
    nextBtn = document.querySelector(".next-btn");
  
    slides = document.getElementsByClassName("slider-item");
    dots = document.getElementsByClassName("dot");
  
    if (n > slides.length - 1) {
      currentSlide = 0;
    } else if (n < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = n;
    }
  
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }
  
    slides[currentSlide].style.display = "block";
    dots[currentSlide].classList.add("active");
  }