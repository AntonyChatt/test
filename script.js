document.addEventListener("DOMContentLoaded", tmain);

function tmain(){
  let slideIndex = 1, click, cart, amount, content, i, fio, email, message, str, fileAmount=0;
  document.getElementById("language").onclick =  show_hide_language;
  document.getElementById("currency").onclick =  show_hide_currency;
  document.getElementById("eng").onclick = change_language_english;
  document.getElementById("other").onclick = change_language_other;
  document.getElementById("usd").onclick = change_currency_USD;
  document.getElementById("eur").onclick = change_currency_EUR;
  document.getElementById("next").onclick = plusSlide;
  document.getElementById("previous").onclick = minusSlide;
  document.getElementById("form").onclick = show_form;
  document.getElementById("items").onclick = show_items;
  document.getElementById("first").onclick = current1;
  document.getElementById("second").onclick = current2;
  document.getElementById("third").onclick = current3;
  let dots = document.getElementsByClassName("dot");
  let slides = document.getElementsByClassName("main__about-slide");
  let slide = document.getElementsByClassName("banner__carousel-slide");
  let carts = document.getElementsByClassName("inside-image__cart");

  [].forEach.call( carts, function(elem) {
    elem.onclick = function() {
      cart = document.getElementById("cart");
      amount = parseInt(cart.innerHTML);
      amount+=1;
      cart.innerHTML=amount;
      elem.style.backgroundColor = '#4cb1ca';
      elem.childNodes[0].src="resources/added.svg";
    }
  });

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

let dropZone = document.getElementById("drop-area");
let maxSize = 1000000;

if (typeof(window.FileReader) == 'undefined') {
  dropZone.innerHTML='Upgrade your browser';
  dropZone.classList.add('error');
}

;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropZone.addEventListener(eventName, preventDefaults, false)
})
function preventDefaults (e) {
  e.preventDefault()
  e.stopPropagation()
}

dropZone.addEventListener('dragenter', activate, false)
dropZone.addEventListener('dragleave', deactivate, false)
dropZone.addEventListener('drop', droped, false)

function activate(){
  dropZone.classList.add('hover');
}

function deactivate(){
  dropZone.classList.remove('hover');
}

function droped(){
 dropZone.classList.remove('hover');

 let files = event.dataTransfer.files;

 [].forEach.call( files, function(elem) {
   if(elem.name.indexOf('.psd') + 1){
      alert("This file havent been uoloaded. Wrong type of file.");
   }
   else{
     fileAmount++;
     let div = document.createElement('div');
     div.className = "file";
     let canc = document.createElement('span');
     canc.className = "cancel";
     canc.innerHTML = ("x");
     if (elem.size > maxSize) {
      alert("Oversize file! No more than 1mb");
      div.classList.add("error");
     }
     
     canc.onclick = cancel;
     function cancel(){
      div.parentNode.removeChild(div);
      fileAmount--;
      if(fileAmount>10){
        buf = document.getElementsByClassName("error");
        buf[0].classList.remove("error");
      }
     }
     let name = elem.name;
     div.innerHTML = (name);
     dropZone.append(div);
     div.append(canc);
     if(fileAmount > 10){
     alert("Too many files!");
     div.classList.add("error");
     }
   }
 });







}




}