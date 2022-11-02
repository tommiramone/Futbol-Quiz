//Captura el boton de JUGAR el cual servirá como un submit
let enviar = document.querySelector("#botonJugar");

//Array que envuelve todas las respuestas correctas a cada pregunta
let respuestasCorrectas = [
  "Martin Palermo",
  "Belgrano de Córdoba",
  "Cinco",
  "Racing Club",
  "Hernan Crespo",
  "Miguel Ángel Bustos",
  "Newell's Old Boys",
  "1991-2013",
  "Carlos Salvador Bilardo",
  "Argentinos Juniors",
];

//Contador de respuestas correctas
let contador = 0;

//Evento al clickear en el boton JUGAR
enviar.addEventListener("click", () => {
  //Toma el resultado seleccionado del radio input
  let opcion = document.querySelector('input[name="opcion1"]:checked').value;
  let opcion2 = document.querySelector('input[name="opcion2"]:checked').value;
  let opcion3 = document.querySelector('input[name="opcion3"]:checked').value;
  let opcion4 = document.querySelector('input[name="opcion4"]:checked').value;
  let opcion5 = document.querySelector('input[name="opcion5"]:checked').value;
  let opcion6 = document.querySelector('input[name="opcion6"]:checked').value;
  let opcion7 = document.querySelector('input[name="opcion7"]:checked').value;
  let opcion8 = document.querySelector('input[name="opcion8"]:checked').value;
  let opcion9 = document.querySelector('input[name="opcion9"]:checked').value;
  let opcion10 = document.querySelector('input[name="opcion10"]:checked').value;

  //compara el valor de opcion con el valor indicado. Idealmente habría que comprar con un ARRAY con las respuestas correctas e ir sumando por cada similitud
  for (x in respuestasCorrectas) {
    if (
      opcion === respuestasCorrectas[x] ||
      opcion2 === respuestasCorrectas[x] ||
      opcion3 === respuestasCorrectas[x] ||
      opcion4 === respuestasCorrectas[x] ||
      opcion5 === respuestasCorrectas[x] ||
      opcion6 === respuestasCorrectas[x] ||
      opcion7 === respuestasCorrectas[x] ||
      opcion8 === respuestasCorrectas[x] ||
      opcion9 === respuestasCorrectas[x] ||
      opcion10 === respuestasCorrectas[x]
    ) {
      contador += 1;
    }
  }

  // Captura el div con id resultado
  let divResultado = document.querySelector("#resultado");
  // Crea un parrafo para poner dentro del div
  const parrafo = document.createElement("p");
  // Le agregar el texto de respuestas para el usuaruio
  parrafo.innerHTML =
    "Usted ha respondido correctamente " + contador + "respuestas";
  // Agregar el parrafo al div
  divResultado.appendChild(parrafo);
  // Agrega al body el div
  document.body.appendChild(div);
});
