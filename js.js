const padA = document.getElementById("PADA");
const padS = document.getElementById("PADS");
const padZ = document.getElementById("PADZ");
const padX = document.getElementById("PADX");
const boton1 = document.getElementById("botonComenzar");
const status = document.querySelector("#status");
let secuenciaMaquina = []
let secuenciaJugador = []
let ronda = 1;


boton1.onclick = function () {
    actualizarDisplay();
    cambiarBoton("reset");
    iniciarRonda(ronda);

}
function actualizarDisplay() {
    const status = document.querySelector("#status");
    const nombre = status.lastElementChild.value;
    const display = document.getElementById("status");
    display.innerText = `Muy bien, ${nombre}! Presta atención al orden en el que aprieta la computadora!`;
}
function iniciarRonda(ronda) {
    const array = generarRandom(ronda)
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
    for (ronda; ronda > 0; ronda--) {
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
        setTimeout(iniciarRonda, 1000, ronda + 1);
    }
}


/*
funcion que cree un array con las puezas a tocar.
//function*/