function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
        if(seconds == -1) {
            alert("Time's up!");
        }
    }
    tick();
}


// slideshow code for Challenge 12 below 
var slideIndex = 1;
showSlides(slideIndex);
// function called when clicking on the ">" and "<" arrows
function plusSlides(n) {
  showSlides(slideIndex += n);
}
//function called when clicking on the dots at the bottom of the slide show
function currentSlide(n) {
  showSlides(slideIndex = n);
}
//function showing the appropriate slide, based on value received
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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