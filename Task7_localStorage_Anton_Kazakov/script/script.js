"use strict";
const menu = [
	{
	image: "img/calcone.png", 
	name: "Кальцоне", 
	ingr: "Сыр, колбаса, грибы, помидоры, лук, зелень",
	calor: "180 Ккал",
	price: "150 грн."
	}, 
	{
	image: "img/hawaiian.png", 
	name: "Гавайская", 
	ingr: "Ананас, маслины, ветчина, оливки, сыр",
	calor: "223 Ккал",
	price: "130 грн."
	},
	{
	image: "img/margarita.png", 
	name: "Маргарита", 
	ingr: "Сыр, помидоры, чеснок, перец, зелень",
	calor: "215 Ккал",
	price: "120 грн."
	},
	{
	image: "img/pepperoni.png", 
	name: "Пепперони", 
	ingr: "Сыр, колбаса, помидоры, лук, чеснок, орегано, зелень",
	calor: "865 Ккал",
	price: "160 грн."
	},
	{
	image: "img/tandoori.png", 
	name: "Тандури", 
	ingr: "Куриное филе, сыр, паста тандури, сок лимона, красный лук",
	calor: "530 Ккал",
	price: "230 грн."
	},
	{
	image: "img/vegetarian.png", 
	name: "Вегетарианская", 
	ingr: "Сыр, перец, грибы, помидоры, лук, зелень",
	calor: "140 Ккал",
	price: "150 грн."
	}
];
const menusort = menu.concat();
let pizzaItems = [];
function tablegrid() {
var wrapper = document.getElementById('wrapper');
wrapper.innerHTML = "";
	for (var i = 0; i < menu.length; i++) {
			pizzaItems[i] = document.createElement('div');
			pizzaItems[i].className = "pizza-item";
			wrapper.appendChild(pizzaItems[i]);
			var img = document.createElement('img');
			img.src = menu[i].image;
			img.className = "img-item";
			img.width = "200";
			img.height = "200";
			pizzaItems[i].appendChild(img);
			var name = document.createElement('p');
			name.innerHTML = menu[i].name;
			name.className = "desc";
			pizzaItems[i].appendChild(name);
			var ingr = document.createElement('p');
			ingr.innerHTML = menu[i].ingr;
			ingr.className = "desc";
			pizzaItems[i].appendChild(ingr);
			var calor = document.createElement('p');
			calor.innerHTML = menu[i].calor;
			calor.className = "desc";
			pizzaItems[i].appendChild(calor);
			var price = document.createElement('p');
			price.innerHTML = menu[i].price;
			price.className = "desc";
			pizzaItems[i].appendChild(price);
			var buy = document.createElement('input');
			buy.className = "buy";
			buy.setAttribute("onclick", "buy()");
			buy.value = "Купить";
			pizzaItems[i].appendChild(buy);
	}
}

function sortprice() {
	wrapper.innerHTML = "";
	for (var el in menusort) {
	var prices = menusort[el].price.split(' ');
	menusort[el].prices = prices[0];
	}
var ascprices = menusort.sort((a, b) => Number(a.prices) - Number(b.prices));
for (var i = 0; i < menusort.length; i++) {
			pizzaItems[i] = document.createElement('div');
			pizzaItems[i].className = "pizza-item";
			wrapper.appendChild(pizzaItems[i]);
			var img = document.createElement('img');
			img.src = menusort[i].image;
			img.className = "img-item";
			img.width = "200";
			img.height = "200";
			pizzaItems[i].appendChild(img);
			var name = document.createElement('p');
			name.innerHTML = menusort[i].name;
			name.className = "desc";
			pizzaItems[i].appendChild(name);
			var ingr = document.createElement('p');
			ingr.innerHTML = menusort[i].ingr;
			ingr.className = "desc";
			pizzaItems[i].appendChild(ingr);
			var calor = document.createElement('p');
			calor.innerHTML = menusort[i].calor;
			calor.className = "desc";
			pizzaItems[i].appendChild(calor);
			var price = document.createElement('p');
			price.innerHTML = menusort[i].price;
			price.className = "desc";
			pizzaItems[i].appendChild(price);
			var buy = document.createElement('input');
			buy.className = "buy";
			buy.setAttribute("onclick", "buy()");
			buy.value = "Купить";
			pizzaItems[i].appendChild(buy);
	}
}

function sortcals() {
	wrapper.innerHTML = "";
	for (var el in menusort) {
	var cals = menusort[el].calor.split(' ');
	menusort[el].cals = cals[0];
	}
var cals = menusort.sort((a, b) => Number(a.cals) - Number(b.cals));
for (var i = 0; i < menusort.length; i++) {
			pizzaItems[i] = document.createElement('div');
			pizzaItems[i].className = "pizza-item";
			wrapper.appendChild(pizzaItems[i]);
			var img = document.createElement('img');
			img.src = menusort[i].image;
			img.className = "img-item";
			img.width = "200";
			img.height = "200";
			pizzaItems[i].appendChild(img);
			var name = document.createElement('p');
			name.innerHTML = menusort[i].name;
			name.className = "desc";
			pizzaItems[i].appendChild(name);
			var ingr = document.createElement('p');
			ingr.innerHTML = menusort[i].ingr;
			ingr.className = "desc";
			pizzaItems[i].appendChild(ingr);
			var calor = document.createElement('p');
			calor.innerHTML = menusort[i].calor;
			calor.className = "desc";
			pizzaItems[i].appendChild(calor);
			var price = document.createElement('p');
			price.innerHTML = menusort[i].price;
			price.className = "desc";
			pizzaItems[i].appendChild(price);
			var buy = document.createElement('input');
			buy.className = "buy";
			buy.setAttribute("onclick", "buy()");
			buy.value = "Купить";
			pizzaItems[i].appendChild(buy);
	}
}

function listitem() {
var wrapper_list = document.getElementById('wrapper');
wrapper_list.innerHTML = "";
var ul = document.getElementById('menu-list');
if (ul != null) {
	wrapper_list.appendChild(ul);
}
	for (var i = 0; i < menu.length; i++) {
			pizzaItems[i] = document.createElement('li');
			pizzaItems[i].className = "menu-it";
			wrapper_list.appendChild(pizzaItems[i]);
			var img = document.createElement('img');
			img.src = menu[i].image;
			img.className = "img-list";
			img.width = "50";
			img.height = "50";
			pizzaItems[i].appendChild(img);
			var name = document.createElement('p');
			name.innerHTML = menu[i].name;
			name.className = "desc-list";
			pizzaItems[i].appendChild(name);
			var price = document.createElement('p');
			price.innerHTML = menu[i].price;
			price.className = "desc-list";
			pizzaItems[i].appendChild(price);
	}
}

function search() {
	wrapper.innerHTML = "";
	var search = document.getElementById('search').value;
	for (var i = 0; i < menu.length; i++) {
		var tmp = menu[i].ingr.toLowerCase();
		if (tmp.includes(search.toLowerCase())) {
			pizzaItems[i] = document.createElement('div');
			pizzaItems[i].className = "pizza-item";
			wrapper.appendChild(pizzaItems[i]);
			var img = document.createElement('img');
			img.src = menu[i].image;
			img.className = "img-item";
			img.width = "200";
			img.height = "200";
			pizzaItems[i].appendChild(img);
			var name = document.createElement('p');
			name.innerHTML = menu[i].name;
			name.className = "desc";
			pizzaItems[i].appendChild(name);
			var ingr = document.createElement('p');
			ingr.innerHTML = menu[i].ingr;
			ingr.className = "desc";
			pizzaItems[i].appendChild(ingr);
			var calor = document.createElement('p');
			calor.innerHTML = menu[i].calor;
			calor.className = "desc";
			pizzaItems[i].appendChild(calor);
			var price = document.createElement('p');
			price.innerHTML = menu[i].price;
			price.className = "desc";
			pizzaItems[i].appendChild(price);
			var buy = document.createElement('input');
			buy.className = "buy";
			buy.setAttribute("onclick", "buy()");
			buy.value = "Купить";
			pizzaItems[i].appendChild(buy);
		}
	}
}

function addnew() {
	var name = document.getElementById('name');
	var chk_1 = document.getElementById('cheese');
	const newitem = {
	image: "img/calcone.png", 
	name: namef.value, 
	ingr: '',
	calor: "180 Ккал",
	price: "150 грн."
	};
	menu.push(newitem);
	tablegrid();
	for (var i = 0; i < newitem.length; i++) {
		pizzaItems[i] = document.createElement('div');
		pizzaItems[i].className = "pizza-item";
		wrapper.appendChild(pizzaItems[i]);
		var name = document.createElement('p');
		name.innerHTML = menu[i].name;
		name.className = "desc";
		pizzaItems[i].appendChild(name);
	if (chk_1.checked) {
		var ingr = document.createElement('p');
		menu[i].ingr = chk_1.value.toString();
		console.log(menu[i].ingr);
		ingr.innerHTML = menu[i].ingr;
		ingr.className = "desc";
		pizzaItems[i].appendChild(ingr);
		}
	}
}

function makeCounter() {
  var currentCount = 1;
  return function() {
    return currentCount++;
    if (currentCount > 1) {
    	for (var i = 0; i < menu.length; i++) {
    		console.log(menu[i]);
    }
  }
}
}
var counter = makeCounter();

function buy() {
	var count = document.getElementById('count');
	count.innerHTML = counter();
}
