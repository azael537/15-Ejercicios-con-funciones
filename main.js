// R E C O N O C E R

function palindromo(palabra) {
    let palabraVolteada = palabra.split("").reverse().join("");

    if (palabra == palabraVolteada) {
        return true;
    }
    else {
        return false;
    }
}

const paises = ["México", "Colombia", "Peru", "El Salvador"];
function paisMasLargo(arregloDePaises) {
    let paisLargo = "";
    for (let index = 0; index < arregloDePaises.length; index++) {
        if (paisMasLargo[index].length > paisLargo.length){
            paisLargo = arregloDePaises[index];
        } 
    }
    return paisLargo;
}