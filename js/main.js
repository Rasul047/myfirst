/** @format */

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
let modalDialog = document.getElementById("modalDialog");

function openDropDown() {
  let dropDown = document.getElementById("dropDown");
  dropDown.classList.toggle("opened");
}

let MYCARDBUTTONs = document.getElementsByClassName("MYCARDBUTTON");

for (let i of MYCARDBUTTONs) {
  i.addEventListener("click", addToBasket);
}
function addToBasket() {
  openModal();
}

function openModal() {
  modalDialog.classList.remove("d-none");
}

function closeModal() {
  modalDialog.classList.add("d-none");
}
var swiper = new Swiper(".fivelogo", {
  slidesPerView: "auto",
  freeMode: true,
  slideToClickedSlide: true,
  spaceBetween: 10,
  mousewheel: true,
});
