
/*

Posibles pruebas:
    ??

*/

function validarNumeroRandom() {
    //Con regex que entrege un valor que sea un solo numero y entre 1 y 4
    if (!/[1-4]{1}/.test(obtenerNumeroRandom())) {
        return 'Obtener numero random no generó un valor entre 1 y 4'
    }
}
