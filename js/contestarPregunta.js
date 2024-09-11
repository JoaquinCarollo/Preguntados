let intentos = 1;
let correctas = 0;
let numeroAlAzar = Math.round(Math.random() * 101);
console.log(numeroAlAzar);
let preguntaElegida = preguntasYRespuestas.find(
  (response) => response.id === numeroAlAzar
);
console.log(preguntaElegida);
pregunta.innerText = preguntaElegida.pregunta;
opcionUno.innerText = preguntaElegida.opcion1;
opcionDos.innerText = preguntaElegida.opcion2;
opcionTres.innerText = preguntaElegida.opcion3;
opcionCuatro.innerText = preguntaElegida.opcion4;
function cambiarPregunta() {
  numeroAlAzar = Math.round(Math.random() * 101);
  console.log(numeroAlAzar);
  preguntaElegida = preguntasYRespuestas.find(
    (response) => response.id === numeroAlAzar
  );
  console.log(preguntaElegida);
  pregunta.innerText = preguntaElegida.pregunta;
  opcionUno.innerText = preguntaElegida.opcion1;
  opcionDos.innerText = preguntaElegida.opcion2;
  opcionTres.innerText = preguntaElegida.opcion3;
  opcionCuatro.innerText = preguntaElegida.opcion4;
}
function contestarPregunta(eleccion) {
  if (eleccion == 1) {
    if (opcionUno.innerText == preguntaElegida.respuestaCorrecta) {
      Swal.fire({
        title: "Correcto!",
        icon: "success",
      });
      correctas++;
    } else {
      Swal.fire({
        title: "Incorrecto!",
        text: "Respuesta: " + preguntaElegida.respuestaCorrecta,
        icon: "error",
      });
    }
    cambiarPregunta();
  } else if (eleccion == 2) {
    if (opcionDos.innerText == preguntaElegida.respuestaCorrecta) {
      Swal.fire({
        title: "Correcto!",
        icon: "success",
      });
      correctas++;
    } else {
      Swal.fire({
        title: "Incorrecto!",
        text: "Respuesta: " + preguntaElegida.respuestaCorrecta,
        icon: "error",
      });
    }
    cambiarPregunta();
  } else if (eleccion == 3) {
    if (opcionTres.innerText == preguntaElegida.respuestaCorrecta) {
      Swal.fire({
        title: "Correcto!",
        icon: "success",
      });
      correctas++;
    } else {
      Swal.fire({
        title: "Incorrecto!",
        text: "Respuesta: " + preguntaElegida.respuestaCorrecta,
        icon: "error",
      });
    }
    cambiarPregunta();
  } else if (eleccion == 4) {
    if (opcionCuatro.innerText == preguntaElegida.respuestaCorrecta) {
      Swal.fire({
        title: "Correcto!",
        icon: "success",
      });
      correctas++;
    } else {
      Swal.fire({
        title: "Incorrecto!",
        text: "Respuesta: " + preguntaElegida.respuestaCorrecta,
        icon: "error",
      });
    }
    cambiarPregunta();
  }
}
function finDelJuego() {
  setTimeout(() => {
    intentos++;
    if (intentos == 11) {
      document.body.innerHTML = `    <section>
        <div id="resultadoFinal">
          <h1>Se acabo el juego</h1>
          <h2>Puntaje: ${correctas}/10</h2>
        </div>
      </section>`;
    }
  }, 1000);
}
opcionUno.onclick = () => {
  contestarPregunta(1);
  numeroDeIntentos.innerText = intentos + "/10";
  finDelJuego();
};
opcionDos.onclick = () => {
  contestarPregunta(2);
  numeroDeIntentos.innerText = intentos + "/10";
  finDelJuego();
};
opcionTres.onclick = () => {
  contestarPregunta(3);
  numeroDeIntentos.innerText = intentos + "/10";
  finDelJuego();
};
opcionCuatro.onclick = () => {
  contestarPregunta(4);
  numeroDeIntentos.innerText = intentos + "/10";
  finDelJuego();
};
