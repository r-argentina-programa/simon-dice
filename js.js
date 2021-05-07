const padA = document.getElementById("PADA");
const padS = document.getElementById("PADS");
const padZ = document.getElementById("PADZ");
const padX = document.getElementById("PADX");
const boton1 = document.getElementById("botonComenzar");
const status = document.querySelector("#status");
let secuenciaMaquina = []
let secuenciaJugador = []

boton1.onclick = function () {
    let nombre = obtenerNombre();
    actualizarDisplay(nombre);
    actualizarContadorConNombre(nombre);
    cambiarBoton("reset");
    iniciarRonda();
}
function obtenerNombre() {
    const status = document.querySelector("#status");
    const nombre = status.lastElementChild.value;
    return nombre
}

function actualizarDisplay(nombre) {
    const display = document.getElementById("status");
    display.innerText = `Muy bien, ${nombre}! Presta atención al orden en el que aprieta la computadora!`;
}

function actualizarContadorConNombre(nombre) {
    const display = document.getElementById("puntajeNombre");
    display.innerText = `${nombre}`;
}

function actualizarContadorConRondas(rondaActual) {
    const display = document.getElementById("puntajeRonda");
    display.innerText = ` está en la ronda número ${rondaActual}`;
}

function iniciarRonda() {
    let rondaActual = secuenciaMaquina.length + 1;
    secuenciaJugador = [];
    actualizarContadorConRondas(rondaActual)
    const array = generarRandom(rondaActual);
    jugadaComputadora(array);
    setTimeout(() => {
        escucharUsuario();
        const display = document.getElementById("status");
        display.innerText = `Ahora es tu turno!`;
    }, 1000 * (array.length + 4));
    //escucharAlUsuario
    //if pierde display perdiste!
    //if gana ejecutar generar random con + dificultad
}

function generarRandom(input) {
    const array = [];
    let ronda = input;
    for (input; input > 0; input--) {
        const numero = Math.floor(Math.random() * 4);
        switch (numero) {
            case 1:
                array.push("PADA")
                break;
            case 2:
                array.push("PADS")
                break;
            case 3:
                array.push("PADZ")
                break;
            default:
                array.push("PADX")
        }
    };
    console.log(array);
    secuenciaMaquina = array;
    return array
}

function jugadaComputadora(array) {
    array.forEach((cuadro, i) => {
        window.setTimeout(() => {
            resaltar(cuadro);
        }, 750 * (i + 4));
    })
    const display = document.getElementById("status");
    display.innerText = `Ahora es tu turno de la computadora!`;
}

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
function resaltar(cuadro) {
    const pulsado = cuadro;
    const pad = document.getElementById(pulsado);
    pad.className = "col-sm cuadro pulsado"
    window.setTimeout(() => {
        pad.className = "col-sm cuadro"
    }, 750);
}
function manejarInput(e) {
    const cuadro = e.target;
    const cuadroID = cuadro.id
    resaltar(cuadroID);
    e.preventDefault;
    secuenciaJugador.push(cuadroID);
    checkearIgualdad(cuadroID);
}
function escucharUsuario() {
    document.querySelectorAll('.cuadro').forEach(function (cuadro) {
        cuadro.onclick = manejarInput;
    }
    )
}
function checkearIgualdad(cuadroID) {
    const cuadroMaquina = secuenciaMaquina[secuenciaJugador.length - 1];
    if (cuadroID !== cuadroMaquina) {
        console.log("perdiste");
        return;
    }
    if (secuenciaJugador.length === secuenciaMaquina.length) {
        setTimeout(iniciarRonda, 1000);
    }
}


/*
hay que hacer una funcionq ue avise que perdiste y corte todo el juego
hacer una funcion de reinicio con el boton de reinicio

ver lo de los puntajes maximos???
//function*/