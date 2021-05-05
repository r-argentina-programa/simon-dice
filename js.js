const padA = document.getElementById("PADA");
const padS = document.getElementById("PADS");
const padZ = document.getElementById("PADZ");
const padX = document.getElementById("PADX");
const boton1 = document.getElementById("botonComenzar");
const status = document.querySelector("#status");

boton1.onclick = function(event){
    //tomar nombre usuario
    const status = document.querySelector("#status");
    const nombre = status.lastElementChild.value;
    const display = document.getElementById("status");
    display.innerText = `Muy bien, ${nombre}! Presta atención al orden en el que aprieta la computadora!`;
    //mostrar boton reset
    cambiarBoton("reset")
    //llamar comenzarjuego
    event.preventDefault();
}
function comenzarJuego(){
    let ronda = 1;
    //generar random
    //mostrarrandom con 1 segundo entre elemento y elemento
    //cambiar display a "la computadora esta jugando o algo asi"
    //escucharAlUsuario
    //if pierde display perdiste!
    //if gana ejecutar generar random con + dificultad
}

function generarRandom(input){
    const array = [];
    const ronda = input;
    while(ronda>0){
    const random = Math.random()*4;
    array.push(random)
    ronda=ronda-1
    };
    return array
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
function cambiarBoton(nombre){
    const contenedorDisplaysYBoton = document.querySelector("#DisplaysYBoton");
    const botonAnterior = document.querySelector("#botonComenzar");    
    contenedorDisplaysYBoton.removeChild(botonAnterior);
    const boton = document.createElement("button");
    boton.id = nombre;
    boton.className = "col-md-4 p-4 button";    
//<--- arreglar
    contenedorDisplaysYBoton.appendChild(boton);
    countdown(["1", "2", "3", "YA!", "Reiniciar"])
}

function countdown(texto){
    //esta funcion tiene que ser mejorada cuando tenga mejores conocimientos de async/await.
    const boton = document.getElementById("reset");
    texto.forEach((text) => {        
        setTimeout(() => {
        boton.textContent = text;
    }, 750);})}
/*
const iniciarJuego = document.querySelector("#iniciarJuego");
iniciarJuego.onclick = function (event){
    const inputNombre = document.querySelector("nombre").value;
    console.log(inputNombre)
    event.preventDefault();
}

//funcion que cree un array con las puezas a tocar.
//function*/