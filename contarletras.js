
let nombre = "Alvaro Osuna FIMBRES";


function contarLetras(nombre) {

    let nombreSinEspacios = nombre.replace(/\s+/g, '');
    return nombreSinEspacios.length;
}

console.log("Número de letras en el nombre:", contarLetras(nombre));              