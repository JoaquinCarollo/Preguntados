document.body.innerHTML = `    <section>
      <div id="pregunta"><center>Pregunta</center></div>
      <div id="opciones">
        <button class="opcion" id="opcionUno">OPCION</button>
        <button class="opcion" id="opcionDos">OPCION</button>
        <button class="opcion" id="opcionTres">OPCION</button>
        <button class="opcion" id="opcionCuatro">OPCION</button>
      </div>
      <div id="numeroDeIntentos">0/10</div>
    </section>`;
const opciones = document.getElementById("opciones");
const pregunta = document.getElementById("pregunta");
const opcionUno = document.getElementById("opcionUno");
const opcionDos = document.getElementById("opcionDos");
const opcionTres = document.getElementById("opcionTres");
const opcionCuatro = document.getElementById("opcionCuatro");
const numeroDeIntentos = document.getElementById("numeroDeIntentos");
