'use strict';

//// создание массива обьектов ///////

var iceCreamTitle = ['Сливочное с апельсиновым джемом и цитрусовой стружкой','Сливочно-кофейное с кусочками шоколада','Сливочно-клубничное с присыпкой из белого шоколада','Сливочное крем-брюле с карамельной подливкой','Сливочное с брусничным джемом','Сливочно-черничное с цельными ягодами черники','Сливочно-лимонное с карамельной присыпкой','Сливочное с шоколадной стружкой','Сливочно-ванильное с кусочками шоколада','Сливочноe с ментоловым сиропом','Сливочное с кусочками черного шоколада','Сливочное с мятным сиропом','Сливочное с апельсиновым джемом и цитрусовой стружкой','Сливочно-кофейное с кусочками шоколада','Сливочно-клубничное с присыпкой из белого шоколада','Сливочное крем-брюле с карамельной подливкой','Сливочное с брусничным джемом','Сливочно-черничное с цельными ягодами черники','Сливочно-лимонное с карамельной присыпкой','Сливочное с шоколадной стружкой','Сливочно-ванильное с кусочками шоколада','Сливочноe с ментоловым сиропом','Сливочное с кусочками черного шоколада','Сливочное с мятным сиропом'];
var iceCreamImg = ['img/catalog-ice-cream/ice-cream-1.png','img/catalog-ice-cream/ice-cream-2.png','img/catalog-ice-cream/ice-cream-3.png','img/catalog-ice-cream/ice-cream-4.png','img/catalog-ice-cream/ice-cream-5.png','img/catalog-ice-cream/ice-cream-6.png','img/catalog-ice-cream/ice-cream-7.png','img/catalog-ice-cream/ice-cream-8.png','img/catalog-ice-cream/ice-cream-9.png','img/catalog-ice-cream/ice-cream-10.png','img/catalog-ice-cream/ice-cream-11.png','img/catalog-ice-cream/ice-cream-12.png','img/catalog-ice-cream/ice-cream-1.png','img/catalog-ice-cream/ice-cream-2.png','img/catalog-ice-cream/ice-cream-3.png','img/catalog-ice-cream/ice-cream-4.png','img/catalog-ice-cream/ice-cream-5.png','img/catalog-ice-cream/ice-cream-6.png','img/catalog-ice-cream/ice-cream-7.png','img/catalog-ice-cream/ice-cream-8.png','img/catalog-ice-cream/ice-cream-9.png','img/catalog-ice-cream/ice-cream-10.png','img/catalog-ice-cream/ice-cream-11.png','img/catalog-ice-cream/ice-cream-12.png'];
var iceCreamPrice = [250,445,285,370,450,315,445,230,500,370,200,455,350,455,360,215,340,430,320,350,300,290,325,400];
var iceCreamFat = [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,0,5,10];

var iceCream = [];

iceCreamImg.forEach(function(img, i) {
	var iceCreamFor = {
		title: iceCreamTitle[i],
		img: iceCreamImg[i],
		price: iceCreamPrice[i],
		fat: iceCreamFat[i]
	};
	iceCream.push(iceCreamFor);
});

//// начальная отрисовка всего товара ///////

var catalogList = document.querySelector('.catalog__list');
var catalogTemplate = document.querySelector('#catalog-ice-cream').content.querySelector('.catalog__item');

var createdIceCream = function() {
  iceCream.forEach(function(it, i) {
	var catalogElement = catalogTemplate.cloneNode(true);
    catalogElement.querySelector('a').textContent = iceCream[i].title;
    catalogElement.querySelector('img').src = iceCream[i].img;
    catalogElement.querySelector('span').textContent = iceCream[i].price;
    catalogElement.querySelector('p').insertAdjacentHTML('beforeend', '<span>/кг</span>');
    catalogList.appendChild(catalogElement);
  });
}
createdIceCream();

////////////////////////////      кнопки заказа + Корзина		///////////////////////////////
window.catalogItemBtns = document.querySelectorAll('.catalog__btn');

var buyList = document.querySelector('.buy-section__list');
var buyItem = document.querySelectorAll('.buy-section__item');
var buyTemplate = document.querySelector('#buy-icecream').content.querySelector('.buy-section__item');
var allBuyElement = document.querySelectorAll('#icecream-price-kg');
var basketEmpty = document.querySelector('#basketEmpty');
var basketText = document.querySelector('#basket');
var createdTotalPrice = document.querySelector('#total-price');

var kgUpBtn = document.querySelector('#kg-up');
var kgDownBtn = document.querySelector('#kg-down');

basketEmpty.textContent = 'Нет товаров';
basketText.textContent = 'Пусто';

var totalPrice = [];
var sumTotalPrice = 0;

createdTotalPrice.textContent = sumTotalPrice;

var clickBtnItem = function(button) {
	button.addEventListener('click', function(evt) {
		var functionTotalPrice = function() {
			sumTotalPrice += Number(evt.path[2].querySelector('span').textContent);
			createdTotalPrice.textContent = sumTotalPrice;
		};
		var buyElement = buyTemplate.cloneNode(true);
		buyElement.querySelector('img').src = evt.path[2].querySelector('img').src;
		buyElement.querySelector('.buy-section__descr').textContent = evt.path[2].querySelector('a').text;
		buyElement.querySelector('#icecream-price').textContent = evt.path[2].querySelector('span').textContent;
		var kgElem = buyElement.querySelector('#buy-kg').textContent = 1;
		buyElement.querySelector('#icecream-price-kg').textContent = evt.path[2].querySelector('span').textContent;
		buyElement.querySelector('#kg-up').addEventListener('click', function(evt) {
			if (kgElem < 10) {
				kgElem += 0.5;
				evt.path[2].querySelector('#buy-kg').textContent = kgElem;
				evt.path[3].querySelector('#icecream-price-kg').textContent = evt.path[2].querySelector('#icecream-price').textContent * kgElem;
				sumTotalPrice += Number(evt.path[2].querySelector('#icecream-price').textContent) / 2;
				createdTotalPrice.textContent = sumTotalPrice;
				evt.path[2].querySelector('#kg-down').style.display = 'block';
			}
			if (kgElem === 10) {
				evt.path[2].querySelector('#kg-up').style.display = 'none';
			}
		});
		buyElement.querySelector('#kg-down').addEventListener('click', function(evt) {
			if (kgElem > 0.5) {
				kgElem -= 0.5;
				evt.path[2].querySelector('#buy-kg').textContent = kgElem;
				evt.path[3].querySelector('#icecream-price-kg').textContent = evt.path[2].querySelector('#icecream-price').textContent * kgElem;
				sumTotalPrice -= Number(evt.path[2].querySelector('#icecream-price').textContent) / 2;
				createdTotalPrice.textContent = sumTotalPrice;
				evt.path[2].querySelector('#kg-up').style.display = 'block';
			}
			if (kgElem === 0.5) {
				evt.path[2].querySelector('#kg-down').style.display = 'none';
			}
		});
		buyElement.querySelector('#buy-button-close').addEventListener('click', function(evt) {
			buyList.removeChild(evt.path[2]);
			sumTotalPrice -= Number(evt.path[2].querySelector('#icecream-price-kg').textContent);
			createdTotalPrice.textContent = sumTotalPrice;
			functionTextBasket();
			button.classList.remove('catalog__btn--active');
			button.style.padding = '13px 80px';
			button.textContent = 'Заказать';
			button.disabled = false;
		});
		buyList.appendChild(buyElement);
		functionTotalPrice();
		var functionTextBasket = function() {
			var colBasketItems = document.querySelectorAll('#icecream-price-kg').length;
			if (colBasketItems <= 0) {
				basketEmpty.textContent = 'Нет товаров';
				basketText.textContent = 'Пусто';
			} else if (colBasketItems === 1) {
				basketEmpty.textContent = 'Вы выбрали';
				basketText.textContent = colBasketItems + ' товар';
			} else if (colBasketItems <= 4) {
				basketText.textContent = colBasketItems + ' товара';
			} else if (colBasketItems >= 5) {
				basketText.textContent = colBasketItems + ' товаров';
			}
		};
		functionTextBasket();
		button.classList.add('catalog__btn--active');
		button.style.padding = '13px 55px';
		button.textContent = 'Уже в корзине';
		button.disabled = true;
	});
};

var functionCatalogItemBtns = function(){
	catalogItemBtns.forEach(function(it,i) {
		var buttonBuyItem = catalogItemBtns[i];
		clickBtnItem(buttonBuyItem);
	});
}
functionCatalogItemBtns();

/////////////  range input /////////////////
var minPrice = document.querySelector('#min-price');
var maxPrice = document.querySelector('#max-price');

var rowPricebBarMin = document.querySelector('.bar-min');
var rowPricebBarMax = document.querySelector('.bar-max');
var togglePriceMin = document.querySelector('.range-min');
var togglePriceMax = document.querySelector('.range-max');
var rowPrice = document.querySelector('.scale');
var rowPriceWidth = rowPrice.clientWidth - 20;

minPrice.textContent = 200;
maxPrice.textContent = 500;

togglePriceMin.addEventListener('mousedown', function(evt){
	evt.preventDefault();

	var startCoords = {
		x: evt.clientX
	};

	var onMouseMove = function(moveEvt){
		evt.preventDefault();

		var shift = {
			x: startCoords.x - moveEvt.clientX
		};

		startCoords = {
			x: moveEvt.clientX
		};

		togglePriceMin.style.left = (togglePriceMin.offsetLeft - shift.x) + 'px';
		rowPricebBarMin.style.width = togglePriceMin.offsetLeft + 'px';
		minPrice.textContent = 200 + (togglePriceMin.offsetLeft * 2);
		if (togglePriceMin.offsetLeft <= 0) {
			togglePriceMin.style.left = 0 + 'px';
			rowPricebBarMin.style.width = 0;
			minPrice.textContent = 200;
		}
		if (togglePriceMin.offsetLeft >= rowPriceWidth) {
			togglePriceMin.style.left = rowPriceWidth + 'px';
			rowPricebBarMin.style.width = 100 + '%';
			minPrice.textContent = 500;
		}
		if (togglePriceMin.offsetLeft >= (togglePriceMax.offsetLeft - 20))	 {
			togglePriceMin.style.left = (togglePriceMax.offsetLeft - 20) + 'px';
			rowPricebBarMin.style.width = togglePriceMin.offsetLeft + 'px';
			minPrice.textContent = 500 - ((150 - togglePriceMin.offsetLeft) * 2);
		}
	};

	var onMouseUp = function(upEvt){
		evt.preventDefault();

		document.removeEventListener('mousemove', onMouseMove);
		document.removeEventListener('mouseup', onMouseUp);
	};

	document.addEventListener('mousemove', onMouseMove);
	document.addEventListener('mouseup', onMouseUp);
});

togglePriceMax.addEventListener('mousedown', function(evt){
	evt.preventDefault();

	var startCoords = {
		x: evt.clientX
	};

	var onMouseMove = function(moveEvt){
		evt.preventDefault();

		var shift = {
			x: startCoords.x - moveEvt.clientX
		};

		startCoords = {
			x: moveEvt.clientX
		};

		togglePriceMax.style.left = (togglePriceMax.offsetLeft - shift.x) + 'px';
		rowPricebBarMax.style.width = 160 - togglePriceMax.offsetLeft + 'px';
		maxPrice.textContent = 500 - ((150 - togglePriceMax.offsetLeft) * 2);
		if (togglePriceMax.offsetLeft <= 0) {
			togglePriceMax.style.left = 0 + 'px';
			rowPricebBarMax.style.width = 100 + '%';
			maxPrice.textContent = 200;
		}
		if (togglePriceMax.offsetLeft >= rowPriceWidth) {
			togglePriceMax.style.left = rowPriceWidth + 'px';
			rowPricebBarMax.style.width = 0;
			maxPrice.textContent = 500;
		}
		if (togglePriceMax.offsetLeft <= (togglePriceMin.offsetLeft + 20)) {
			togglePriceMax.style.left = (togglePriceMin.offsetLeft + 20) + 'px';
			rowPricebBarMax.style.width = 160 - togglePriceMax.offsetLeft + 'px';
			maxPrice.textContent = 500 - ((150 - togglePriceMax.offsetLeft) * 2);
		}
	};

	var onMouseUp = function(upEvt){
		evt.preventDefault();

		document.removeEventListener('mousemove', onMouseMove);
		document.removeEventListener('mouseup', onMouseUp);
	};

	document.addEventListener('mousemove', onMouseMove);
	document.addEventListener('mouseup', onMouseUp);
});

///////////////////////  Фильтр  /////////////////////

var filterBtn = document.querySelector('.filter__btn');

var filterType = document.querySelectorAll('.filter__type option');
var filterFat = document.querySelectorAll('.filter__fat input');
var filterTopping = document.querySelectorAll('.filter__checkbox input');

filterBtn.addEventListener("click", function (evt) {
	evt.preventDefault();
//// форматирование каталога ///////
	var catalogSortItem = document.querySelectorAll('.catalog__item');
		for ( var i = 0; i < catalogSortItem.length; i++ ) {
		catalogList.removeChild(catalogSortItem[i]);
	}
	var iceCreamClone = iceCream.slice();
	var filter = {
		type: '',
		fat: '',
		topping: []
	};
//// определение типов фильтра ///////  
	filterType.forEach(function (it) {
		if (it.selected) {
			filter.type = it.value;
		}
	});
	filterFat.forEach(function (it) {
		if (it.checked) {
			filter.fat = it.value;
		}
	});
	filterTopping.forEach(function (it, i) {
		if (it.checked) {
			filter.topping[i] = it.name;
		}
	});
//// Отрисовка отфильтрованного товара ///////
	var filtredIceCream = function() {
		iceCreamClone.forEach(function(it, i) {
			var catalogElement = catalogTemplate.cloneNode(true);
			catalogElement.querySelector('a').textContent = iceCreamClone[i].title;
			catalogElement.querySelector('img').src = iceCreamClone[i].img;
			catalogElement.querySelector('span').textContent = iceCreamClone[i].price;
			catalogElement.querySelector('p').insertAdjacentHTML('beforeend', '<span>/кг</span>');
			clickBtnItem(catalogElement.querySelector('button'));
			catalogList.appendChild(catalogElement);
		});
	}

//// фильтрация ///////
	iceCreamClone = iceCream.filter(function(it){
		if (filter.fat === '0%') {
			return it.fat === 0;
		} else if (filter.fat === 'to 30%') {
			return it.fat <= 30;
		} else if (filter.fat === 'above 30%') {
			return it.fat >= 30;
		} else {
			return it.fat >= 0;
		} 
	}).filter(function(it){
		return it.price >= minPrice.textContent && it.price <= maxPrice.textContent;
		});

	if (filter.type === 'by popularity') {
		filtredIceCream();
	} else if (filter.type === 'first cheap') {
		iceCreamClone.sort(function (left, right){
		return left.price - right.price;
		});
		filtredIceCream();
	} else if (filter.type === 'first dear') {
		iceCreamClone.sort(function (left, right){
		return right.price - left.price;
		});
		filtredIceCream();
	} else {
		iceCreamClone.sort(function (left, right){
		return left.fat - right.fat;
		});
		filtredIceCream();
	}
});


///////////////////////    Вывод информации о заказе    //////////////////////
var buyBtnForm = document.querySelector('#buy-btn-form');

buyBtnForm.addEventListener('click', function(evt){
	var buyItemForm = evt.path[1].querySelectorAll('.buy-section__item');
	var buySumTotalForm = evt.path[1].querySelector('#total-price').textContent;
	var buyStrock = 'Вы заказали мороженое :\n';
	var j = 1;
	for (var i = 0; i <= buyItemForm.length; i++) {
		 if (buyItemForm.length > i) {
			var buyItemDescrForm = buyItemForm[i].querySelector('.buy-section__descr').textContent;
			var buyItemKgForm = buyItemForm[i].querySelector('#buy-kg').textContent;
			var buyItemSumForm = buyItemForm[i].querySelector('#icecream-price-kg').textContent;
			buyStrock += j + ') ' + buyItemKgForm + ' кг ' + buyItemDescrForm  + ' на сумму ' + buyItemSumForm + ' руб.\n';
			j += 1;
		}
	}
	if (buyItemForm.length <= 0) {
		buyStrock = 'Корзина пуста';
	} else {
		buyStrock +='Общая сумма к оплате ' + buySumTotalForm + ' руб.';
	}
	alert(buyStrock);
});
