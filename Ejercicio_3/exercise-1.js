//1.1 Basandote en el array siguiente, crea una lista ul > li
//dinámicamente en el html que imprima cada uno de los paises.
//const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const nUl = document.createElement('ul');
document.body.appendChild(nUl);
for (const element of countries) {
  const newLi = document.createElement('li');
  newLi.textContent = element;
  nUl.appendChild(newLi);
}

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const del = document.querySelector('.fn-remove-me');

del.remove();

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
//en el div de html con el atributo data-function="printHere".
//const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const newDiv = document.querySelector('div[data-function="printHere"]');
const newUl = document.createElement('ul');
newDiv.appendChild(newUl);

for (const element of cars) {
  const newLi = document.createElement('li');
  newLi.textContent = element;
  newUl.appendChild(newLi);
}

//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
//h4 para el titulo y otro elemento img para la imagen.
const countries_2 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

for (const element of countries_2) {
  var nDiv = document.createElement('div');
  const nh4 = document.createElement('h4');
  const nImg = document.createElement('img');
  nh4.textContent = element.title;
  nImg.src = element.imgUrl;

  document.body.appendChild(nDiv);
  nDiv.appendChild(nh4);
  nDiv.appendChild(nImg);
}

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
//elemento de la serie de divs.

function borrar() {
  nDiv.remove();
}

function eliminar(theDiv) {
  theDiv.remove();
}
const boton = document.createElement('button');
boton.textContent = 'Borrar';
document.body.appendChild(boton);
boton.addEventListener('click', borrar);

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
//divs que elimine ese mismo elemento del html.
const allDiv = document.querySelectorAll('div');
for (var element of allDiv) {
  var boton_2 = document.createElement('button');
  boton_2.textContent = 'Eliminar div';
  element.appendChild(boton_2);
}
boton_2.addEventListener('click', () => eliminar(element));
