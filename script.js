let slideIndex = 1;

showSlide(slideIndex);

function currentSlide(n) {
  showSlide2(slideIndex = n);
 }
 showSlide2(slideIndex);
 
function plusSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName("main__about-slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
function showSlide2(n) {
    let i;
    let slides = document.getElementsByClassName("banner__carousel-slide");
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


  let menuElement1 = document.getElementById('currency');
  let titleElement1 = menuElement1.querySelector('.drop-down__currency');

  titleElement1.onclick = function() {
    menuElement1.classList.toggle('open');
  };

  let menuElement2 = document.getElementById('language');
  let titleElement2 = menuElement2.querySelector('.drop-down__language');

  titleElement2.onclick = function() {
    menuElement2.classList.toggle('open');
  };