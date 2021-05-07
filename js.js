const padA = document.getElementById("PADA");
const padS = document.getElementById("PADS");
const padZ = document.getElementById("PADZ");
const padX = document.getElementById("PADX");
const boton = document.getElementById("Comenzar");
const status = document.querySelector("#status");
let secuenciaMaquina = []
let secuenciaJugador = []
let nombre = prompt("Ingresa tu nombre!");
insertarNombre(nombre)

boton.onclick = function () {
    actualizarDisplay(nombre);
    actualizarContadorConNombre(nombre);
    countdown(["1", "2", "3", "YA!", "Comenzar"]);
    iniciarRonda();
}

function insertarNombre(nombre) {
    const status = document.querySelector("#status");
    const display = document.createElement("p");
    display.innerText = `Bienvenido, ${nombre}. Vamos a jugar un poco a "Simón dice!"`
    status.appendChild(display)
}

function actualizarDisplay(nombre) {
    const display = document.getElementById("status");
    display.innerText = `Muy bien, ${nombre}! Presta atención al orden en el que aprieta la computadora!`;
}

function actualizarContadorConNombre(nombre) {
    const display = document.getElementById("puntajeNombre");
    display.innerText = `Vamos, ${nombre}!`;
}

function actualizarContadorConRondas(rondaActual) {
    const display = document.getElementById("puntajeRonda");
    display.textContent = "";
    display.textContent = ` Estás en la ronda número ${rondaActual}`;
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
function countdown(texto) {
    const boton = document.getElementById("Comenzar");
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
function escucharUsuario(perdio) {
    if (!perdio) {
        document.querySelectorAll('.cuadro').forEach(function (cuadro) {
            cuadro.onclick = manejarInput;
        })
    }
    if (perdio) {
        document.querySelectorAll('.cuadro').forEach(function (cuadro) {
            cuadro.onclick = "";
        })

    }
};

function checkearIgualdad(cuadroID) {
    const cuadroMaquina = secuenciaMaquina[secuenciaJugador.length - 1];
    if (cuadroID !== cuadroMaquina) {
        perdiste();
        return;
    }
    if (secuenciaJugador.length === secuenciaMaquina.length) {
        setTimeout(iniciarRonda, 1000);
    }
}

function perdiste() {
    secuenciaMaquina = [];
    secuenciaJugador = [];
    const display = document.getElementById("puntajeRonda");
    display.textContent = "";
    display.textContent = `Qué lástima! Has perdido! Clickea en "Comenzar" para jugar nuevamente!`;
    let perdio = 1;
    escucharUsuario(perdio);
}
