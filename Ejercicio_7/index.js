//Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor'];

let nDiv = document.querySelector('div[data-function="printHere"]');
let ul = document.createElement('ul');
nDiv.appendChild(ul);
for (const element of places) {
  const li = document.createElement('li');
  li.textContent = element;
  ul.appendChild(li);
}
