var nombreApellido = document.getElementById("nombreApellido");
var telefono = document.getElementById("telefono");
var email = document.getElementById("email");
var fechaHoy = document.getElementById("fecha");
var total = document.getElementById("total");

var arrayNombreProducto = [];
var arrayCantidad = [];
var arrayPrecio = [];
var contador = 0;

var nombreProducto = document.getElementById("nombreProducto");
var cantidadProducto = document.getElementById("cantidadProducto");
var precioProducto = document.getElementById("precioProducto");

var anadirProducto = document.getElementById("anadir");
var generar = document.getElementById("generar");

var nombreLista = document.getElementById("nombreLista");
var telefonoLista = document.getElementById("telefonoLista");
var emailLista = document.getElementById("emailLista");
var fechaLista = document.getElementById("fechaLista");

var nProducto = document.getElementById("nProducto");

var totalFactura = 0;

anadirProducto.addEventListener("click", function() {

    arrayNombreProducto[contador] = nombreProducto.value;
    arrayCantidad[contador] = cantidadProducto.value;
    arrayPrecio[contador] = precioProducto.value;

    nProducto.value = nProducto.value + "\n" + arrayNombreProducto[contador];
    nCantidad.value = nCantidad.value + "\n" + arrayCantidad[contador];
    nPrecio.value = nPrecio.value + "\n" + arrayPrecio[contador];


    var precio = precioProducto.value;
    var cantidad = cantidadProducto.value;
    var totalActual = precio * cantidad;
    totalFactura = totalActual + totalFactura;

    nombreProducto.value = "";
    cantidadProducto.value = "";
    precioProducto.value = "";


    contador++;


});

generar.addEventListener("click", function() {

    nombreLista.value = nombreApellido.value;
    telefonoLista.value = telefono.value;
    emailLista.value = email.value;
    fechaLista.value = fechaHoy.value;
    total.value = totalFactura;

});