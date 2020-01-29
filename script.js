let slideIndex = 1, click,  cart, amount, icons, content, i, fio, email, message, str;
let lang = document.getElementById("language").onclick =  show_hide_language;
let currency = document.getElementById("currency").onclick =  show_hide_currency;
let eng = document.getElementById("eng").onclick = change_language_english;
let other = document.getElementById("other").onclick = change_language_other;
let usd = document.getElementById("usd").onclick = change_currency_USD;
let eur = document.getElementById("eur").onclick = change_currency_EUR;
let next = document.getElementById("next").onclick = plusSlide;
let previous = document.getElementById("previous").onclick = minusSlide;
let form = document.getElementById("form").onclick = show_form;
let items = document.getElementById("items").onclick = show_items;
let dot1 = document.getElementById("first").onclick = current1;
let dot2 = document.getElementById("second").onclick = current2;
let dot3 = document.getElementById("third").onclick = current3;
let dots = document.getElementsByClassName("dot");
let slides = document.getElementsByClassName("main__about-slide");
let slide = document.getElementsByClassName("banner__carousel-slide");

document.addEventListener("DOMContentLoaded", function(){})





function show_hide_language(){
  click = document.getElementById("drop__content-language");
  if(click.style.display == "none"){
    click.style.display = "block";
  }else{
    click.style.display = "none";
  }
}

function show_hide_currency(){
  click = document.getElementById("drop__content-currency");
  if(click.style.display == "none"){
    click.style.display = "block";
  }else{
    click.style.display = "none";
  }
}

function change_language_english(){
  document.getElementById("language").innerHTML="English";
  click = document.getElementById("drop__content-language");
  click.style.display = "none";
}

function change_language_other(){
  document.getElementById("language").innerHTML="Other";
  click = document.getElementById("drop__content-language");
  click.style.display = "none";
}

function change_currency_USD(){
  document.getElementById("currency").innerHTML="USD";
  click = document.getElementById("drop__content-currency");
  click.style.display = "none";
  content = document.getElementsByClassName("currency");
  for (i = 0; i < content.length; i++) {
        content[i].textContent= "$";
    }
}

function change_currency_EUR(){
  document.getElementById("currency").innerHTML="EUR";
  click = document.getElementById("drop__content-currency");
  click.style.display = "none";
  content = document.getElementsByClassName("currency");
  for (i = 0; i < content.length; i++) {
        content[i].textContent= "€";
    }
}

function add(i){
  cart = document.getElementById("cart");
  amount = parseInt(cart.innerHTML);
  amount+=1;
  cart.innerHTML=amount;
  icons = document.getElementsByClassName("inside-image__cart");
  icons[i].style.backgroundColor = '#4cb1ca';
  images = document.getElementsByClassName("product__cart");
  images[i].src="resources/added.svg"
}

function show_form(){
  click = document.getElementById("contact");
  if(click.style.display == "none"){
    click.style.display = "block";
  }else{
    click.style.display = "none";
  }
}

function show_items(){
  fio = document.getElementById("contact__fio").value;
  email = document.getElementById("contact__email").value;
  message = document.getElementById("contact__message").value;
  str = fio+"\n"+email+"\n"+message;
  alert (str);
  click = document.getElementById("contact");
  click.style.display = "none";
}

showSlide(slideIndex);

function current1(){
  currentSlide(1);
}
function current2(){
  currentSlide(2);
}

function current3(){
  currentSlide(3);
}

function currentSlide(n) {
  showSlide2(slideIndex = n);
 }
 showSlide2(slideIndex);
 
function plusSlide(){
    showSlide(slideIndex += 1);
}

function minusSlide(){
  showSlide(slideIndex -= 1);
}

function showSlide(n) {
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
function showSlide2(n) {
    
    
    if (n > slide.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slide.length}
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
   for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slide[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }