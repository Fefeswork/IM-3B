// We ae declariong our variables in this piece of code
let slideIndex = 1;
showSlides(slideIndex);

//This function controls the next and previous buttons
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// This function controls the images stored in the container
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//The function below the transitioning of the images
//when the buttons are clicked
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myScreenshots");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}