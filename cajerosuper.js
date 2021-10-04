//document.write("hola");

var listaArticulos = [];
var btnAgregar = document.getElementById("btn-add");
btnAgregar.onclick = agregarArticulo;
document.getElementById("btn-send").onclick = enviarCuenta;

function agregarArticulo() {
    let nombre = document.getElementById("nombre").value;
    let cantidad = document.getElementById("cantidad").value;
    let precio = document.getElementById("precio").value;

    document.getElementById("nombre").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";
    
    let articulo = {
        name: nombre,
        cant: cantidad,
        prec: precio
    }
//console.log(articulo);
listaArticulos.push(articulo);
//console.log(listaArticulos);
}

function enviarCuenta(){
    let total = 0;
    for (let index = 0; index < listaArticulos.length; index++) {
        total += Number(listaArticulos[index].prec) * parseInt(listaArticulos[index].cant);
    }

    /*let total2 = 0;
    listaArticulos.forEach(function(elemento){
        total += Number(elemento.cant) * Number(elemento.prec);
    })*/
    alert(`la cuanta es: $${total}.00 pesos`);
    
}