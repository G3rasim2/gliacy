'use strict';

var link = document.querySelector(".btn-feedback");
var popup = document.querySelector(".feedback-form");
var popupOverlay = document.querySelector(".overlay");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var user = popup.querySelector("[name=user]");
var email = popup.querySelector("[name=email]");
var comment = popup.querySelector("[name=comment]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("feedback-form-show");
  popupOverlay.classList.add("overlay-show");
  user.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("feedback-form-show");
  popupOverlay.classList.remove("overlay-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value || !comment.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});  

window.addEventListener("keydown", function (evt) {
  if (popup.classList.contains("feedback-form-show")) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      popup.classList.remove("feedback-form-show");
      popupOverlay.classList.remove("overlay-show");
    }
  }
});

var catalogList = document.querySelector('.catalog__list');
var catalogTemplate = document.querySelector('#ice-cream-hit').content.querySelector('.catalog__item');
var iceCreamTitle = ['Сливочное с апельсиновым джемом и цитрусовой стружкой',
          'Сливочно-кофейное с кусочками шоколада',
          'Сливочно-клубничное с присыпкой из белого шоколада',
          'Сливочное крем-брюле с карамельной подливкой'];
var iceCreamImg = ['img/catalog-ice-cream/ice-cream-1.png',
          'img/catalog-ice-cream/ice-cream-2.png',
          'img/catalog-ice-cream/ice-cream-3.png',
          'img/catalog-ice-cream/ice-cream-4.png'];
var iceCreamPrice = ['310 ₽',
          '380 ₽',
          '355 ₽',
          '415 ₽'];

for ( var i = 0; i < iceCreamTitle.length; i++ ) {
  var catalogElement = catalogTemplate.cloneNode(true);
  catalogElement.querySelector('a').textContent = iceCreamTitle[i];
  catalogElement.querySelector('img').src = iceCreamImg[i];
  catalogElement.querySelector('p').textContent = iceCreamPrice[i];
  catalogElement.querySelector('p').insertAdjacentHTML('beforeend', '<span>/кг</span>');
  catalogList.appendChild(catalogElement);
}