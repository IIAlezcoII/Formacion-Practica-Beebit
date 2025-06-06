let citas = [
  {
    'autor': 'Maya Angelou',
    'texto': 'He aprendido que la gente olvidará lo que dijiste, olvidará lo que hiciste, pero nunca olvidará cómo los hiciste sentir.'
  },
  {
    'autor': 'Steve Jobs',
    'texto': 'La innovación es lo que distingue a un líder de los demás.'
  },
  {
    'autor': 'Marie Curie',
    'texto': 'Nada en la vida debe ser temido, solo comprendido.'
  },
  {
    'autor': 'Nelson Mandela',
    'texto': 'La educación es el arma más poderosa que puedes usar para cambiar el mundo.'
  },
  {
    'autor': 'Confucio',
    'texto': 'Elige un trabajo que te guste y no tendrás que trabajar ni un día de tu vida.'
  },
  {
    'autor': 'Oscar Wilde',
    'texto': 'Sé tú mismo; todos los demás ya están ocupados.'
  },
  {
    'autor': 'Helen Keller',
    'texto': 'La vida es una aventura atrevida o no es nada.'
  },
  {
    'autor': 'Friedrich Nietzsche',
    'texto': 'Lo que no me mata, me hace más fuerte.'
  },
  {
    'autor': 'Malala Yousafzai',
    'texto': 'Un niño, un profesor, un libro y un bolígrafo pueden cambiar el mundo.'
  },
  {
    'autor': 'Leonardo da Vinci',
    'texto': 'La simplicidad es la máxima sofisticación.'
  }
];

let botonElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

function generarEnteroAleatorio(minimo, maximo) {
  minimo = Math.ceil(minimo);
  maximo = Math.floor(maximo);
  return Math.floor(Math.random() * (maximo - minimo) + minimo);
}

function cambiarCita() {
  let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
  citaElem.textContent = `"${citas[indiceAleatorio].texto}"`;
  autorElem.textContent = citas[indiceAleatorio].autor;
}

let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
cambiarCita();

botonElem.addEventListener('click', cambiarCita);