let nivelActual = 1;
let temaActual = "Números de oxidación";
let preguntaIndice = 0;
let puntaje = 0;

function cargarPregunta() {
    const temaPreguntas = preguntas[`nivel${nivelActual}`][temaActual];
    const preguntaObj = temaPreguntas[preguntaIndice];
    
    document.getElementById("nivel").innerText = `Nivel: ${nivelActual}`;
    document.getElementById("tema").innerText = `Tema: ${temaActual}`;
    document.getElementById("pregunta").innerText = preguntaObj.pregunta;
    
    const opcionesContainer = document.getElementById("opciones-container");
    opcionesContainer.innerHTML = ""; // Limpiar opciones

    // Mostrar opciones
    preguntaObj.opciones.forEach(opcion => {
        const botonOpcion = document.createElement("button");
        botonOpcion.innerText = opcion.texto;
        botonOpcion.onclick = () => seleccionarOpcion(opcion.correcta);
        opcionesContainer.appendChild(botonOpcion);
    });
}

function seleccionarOpcion(correcta) {
    if (correcta) {
        puntaje += 10;
        document.getElementById("puntaje").innerText = `Puntaje: ${puntaje}`;
    }
    siguientePregunta();
}

function siguientePregunta() {
    preguntaIndice++;
    const temaPreguntas = preguntas[`nivel${nivelActual}`][temaActual];
    
    if (preguntaIndice >= temaPreguntas.length) {
        preguntaIndice = 0; // Reiniciar índice de preguntas
        avanzarNivel();
    } else {
        cargarPregunta();
    }
}

function avanzarNivel() {
    nivelActual++;
    temaActual = obtenerNuevoTema();
    if (nivelActual > 3) {
        alert("¡Has completado todos los niveles!");
        nivelActual = 1;
        temaActual = "Números de oxidación";
        puntaje = 0;
    }
    cargarPregunta();
}

function obtenerNuevoTema() {
    const temas = Object.keys(preguntas[`nivel${nivelActual}`]);
    return temas[Math.floor(Math.random() * temas.length)];
}

// Iniciar juego
cargarPregunta();
