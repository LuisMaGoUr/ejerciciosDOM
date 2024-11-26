//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const boton = document.querySelector('.showme');
console.log(boton);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const h1 = document.querySelector('#pillado');
console.log(h1);

//1.3 Usa querySelector para mostrar por consola todos los p
const ps = document.querySelectorAll('p');
console.log(ps);

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const poke = document.querySelectorAll('.pokemon');
console.log(poke);
//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const test = document.querySelectorAll('[data-function="testMe"]');
console.log(test);

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
const tercerPersonaje = test[2];
console.log(tercerPersonaje);
