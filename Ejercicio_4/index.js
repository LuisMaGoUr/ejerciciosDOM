//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
//evento click que ejecute un console log con la información del evento del click

const boton = document.createElement('button');
boton.id = 'btnToClick';
boton.textContent = 'Enviar';
document.body.appendChild(boton);

boton.addEventListener('click', (event) => {
  console.log('La información del envento es:', event);
});

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  input.addEventListener('focus', () => {
    console.log(input.value);
  });
});

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const valores = document.querySelector('input');

valores.addEventListener('input', (evento) => {
  console.log(evento);
});
