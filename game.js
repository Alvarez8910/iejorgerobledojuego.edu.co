let nivelActual = 1;
let temaActual = "Números de oxidación";
let preguntaIndice = 0;
let puntaje = 0;

// Cargar pregunta actual
function cargarPregunta() {
    const temaPreguntas = preguntas[`nivel${nivelActual}`][temaActual];
    const preguntaObj = temaPreguntas[preguntaIndice];
    
    document.getElementById("nivel").innerText = `Nivel: ${nivelActual}`;
    document.getElementById("tema").innerText = `Tema: ${temaActual}`;
    document.getElementById("pregunta").innerText = preguntaObj.pregunta;
    
    const opcionesContainer = document.getElementById("opciones-container");
    opcionesContainer.innerHTML = ""; // Limpiar opciones anteriores

    // Mostrar opciones
    preguntaObj.opciones.forEach(opcion => {
        const botonOpcion = document.createElement("button");
        botonOpcion.innerText = opcion.texto;
        botonOpcion.onclick = () => seleccionarOpcion(opcion.correcta);
        opcionesContainer.appendChild(botonOpcion);
    });
}

// Verificar respuesta y puntuar
function seleccionarOpcion(correcta) {
    if (correcta) {
        puntaje += 10;
        document.getElementById("puntaje").innerText = `Puntaje: ${puntaje}`;
    }
    siguientePregunta();
}

// Cargar siguiente pregunta o avanzar nivel
function siguientePregunta() {
    preguntaIndice++;
    const temaPreguntas = preguntas[`nivel${nivelActual}`][temaActual];
    
    if (preguntaIndice >= temaPreguntas.length) {
        preguntaIndice = 0; // Reiniciar índice de preguntas del tema
        avanzarNivel();     // Avanzar al siguiente nivel
    } else {
        cargarPregunta();
    }
}

// Avanzar de nivel o finalizar el juego si se completaron todos
function avanzarNivel() {
    nivelActual++;

    if (nivelActual > 3) { // Si se completan todos los niveles, reiniciar juego
        alert("¡Has completado todos los niveles!");
        reiniciarJuego();
        return;
    }
    
    temaActual = obtenerNuevoTema(); // Obtener tema del nuevo nivel
    cargarPregunta();
}

// Obtener un nuevo tema aleatorio para el nivel actual
function obtenerNuevoTema() {
    const temas = Object.keys(preguntas[`nivel${nivelActual}`]);
    return temas[Math.floor(Math.random() * temas.length)];
}

// Reiniciar el juego al completar todos los niveles
function reiniciarJuego() {
    nivelActual = 1;
    temaActual = "Números de oxidación";
    preguntaIndice = 0;
    puntaje = 0;
    document.getElementById("puntaje").innerText = `Puntaje: ${puntaje}`;
    cargarPregunta();
}

// Iniciar juego
cargarPregunta();
