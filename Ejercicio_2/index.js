//1.1 Inserta dinamicamente en un html un div vacio con javascript.
let nuevoElemento = document.createElement('div');
document.body.appendChild(nuevoElemento);

//1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const newDiv = document.createElement('div');
const newP = document.createElement('p');
document.body.appendChild(newDiv);
newDiv.appendChild(newP);

//1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let i = 0;
const otherDiv = document.createElement('div');
document.body.appendChild(otherDiv);

while (i < 6) {
  const otherP = document.createElement('p');
  otherDiv.appendChild(otherP);
  i++;
}

//1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const dinamicP = document.createElement('p');
dinamicP.textContent = 'Soy dinámico';
document.body.appendChild(dinamicP);

//1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const newH2 = document.querySelector('h2');
newH2.textContent = 'Wubba Lubba dub dub';

//1.6 Basandote en el siguiente array crea una lista ul > li
//con los textos del array.const apps =
// ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement('ul');
document.body.appendChild(ul);

for (const element of apps) {
  let newLi = document.createElement('li');
  newLi.textContent = element;
  ul.appendChild(newLi);
}

//1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const nodos = document.querySelectorAll('.fn-remove-me');
nodos.forEach((nodo) => {
  nodo.remove();
});

//1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
//Recuerda que no solo puedes insertar elementos con .appendChild.
let box2 = document.querySelector('div.fn-insert-here');
box2.insertAdjacentHTML('afterend', '<p>Voy en medio!.</p>');

//1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const allDiv = document.querySelectorAll('div.fn-insert-here');
for (let i = 0; i < allDiv.length; i++) {
  var allP = document.createElement('p');
  allP.textContent = 'Voy dentro!';
  allDiv[i].appendChild(allP);
}
