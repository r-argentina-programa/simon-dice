const padA = document.getElementById("PADA");
const padS = document.getElementById("PADS");
const padZ = document.getElementById("PADZ");
const padX = document.getElementById("PADX");
const boton1 = document.getElementById("botonComenzar");
const status = document.querySelector("#status");

boton1.onclick = function (event) {
    //tomar nombre usuario
    const status = document.querySelector("#status");
    const nombre = status.lastElementChild.value;
    const display = document.getElementById("status");
    display.innerText = `Muy bien, ${nombre}! Presta atención al orden en el que aprieta la computadora!`;
    //mostrar boton reset
    cambiarBoton("reset")
    //llamar comenzarjuego
    comenzarJuego();
    event.preventDefault();
}
function comenzarJuego() {
    let ronda = 1;
    //generar random
    const array = generarRandom(ronda)
    jugadaComputadora(array)
    //mostrarrandom con 1 segundo entre elemento y elemento
    //cambiar display a "la computadora esta jugando o algo asi"
    //escucharAlUsuario
    //if pierde display perdiste!
    //if gana ejecutar generar random con + dificultad
}

function generarRandom(input) {
    const array = [];
    let ronda = input;
    for (ronda; ronda > 0; ronda--) {
        const numero = Math.floor(Math.random() * 4);
        switch (numero) {
            case 1:
                array.push("padA")
                break;
            case 2:
                array.push("padS")
                break;
            case 3:
                array.push("padZ")
                break;
            default:
                array.push("padX")
        }
    };
    console.log(array);
    return array
}

function jugadaComputadora(array) {
    array.forEach((e) => {
        window.setTimeout(() => {
            resaltar(e)
        }, 750 * 4);
    })
}
function resaltar(e){
    const pulsado = e.toString().toUpperCase();
    const pad = document.getElementById(pulsado);
    pad.className = "col-sm cuadro pulsado"
    window.setTimeout(() => {
        pad.className = "col-sm cuadro"
    }, 750);
}
/*boton1.onclick = function (event) {
    const display = document.getElementById("status");
    display.textContent = "Ingresa tu nombre!";
    const inputNombre = document.createElement("input");
    inputNombre.type = "text"
    inputNombre.placeholder = "Jugador";
    inputNombre.name = "nombre";
    cambiarBoton("iniciarJuego", "Estoy listo")
    display.appendChild(inputNombre);
    event.preventDefault();
};
*/
function cambiarBoton(nombre) {
    const contenedorDisplaysYBoton = document.querySelector("#DisplaysYBoton");
    const botonAnterior = document.querySelector("#botonComenzar");
    contenedorDisplaysYBoton.removeChild(botonAnterior);
    const boton = document.createElement("button");
    boton.id = nombre;
    boton.className = "col-md-4 p-4 button";
    contenedorDisplaysYBoton.appendChild(boton);
    countdown(["1", "2", "3", "YA!", "Reiniciar"])
}

function countdown(texto) {
    const boton = document.getElementById("reset");
    texto.forEach((text, i) => {
        window.setTimeout(() => {
            boton.textContent = text;
        }, 750 * i + 1);
    })
}
/*
const iniciarJuego = document.querySelector("#iniciarJuego");
iniciarJuego.onclick = function (event){
    const inputNombre = document.querySelector("nombre").value;
    console.log(inputNombre)
    event.preventDefault();
}

//funcion que cree un array con las puezas a tocar.
//function*/