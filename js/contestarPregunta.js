let numeroAlAzar = Math.ceil(Math.random() * 20);
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
  numeroAlAzar = Math.ceil(Math.random() * 20);
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
    } else {
      Swal.fire({
        title: "Incorrecto!",
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
    } else {
      Swal.fire({
        title: "Incorrecto!",
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
    } else {
      Swal.fire({
        title: "Incorrecto!",
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
    } else {
      Swal.fire({
        title: "Incorrecto!",
        icon: "error",
      });
    }
    cambiarPregunta();
  }
}
opcionUno.onclick = () => {
  contestarPregunta(1);
};
opcionDos.onclick = () => {
  contestarPregunta(2);
};
opcionTres.onclick = () => {
  contestarPregunta(3);
};
opcionCuatro.onclick = () => {
  contestarPregunta(4);
};
