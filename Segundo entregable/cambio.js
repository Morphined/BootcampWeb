var cadenaCambio = document.getElementById("cadenaCambio");
var botonCambioMayusMinus = document.getElementById("botonCambio");
var botonCambioMinus = document.getElementById("botonCambioMinus");
var botonCambioMayus = document.getElementById("botonCambioMayus");
var reiniciarCampos = document.getElementById("reiniciar");
var textoMayus = document.getElementById("mayus");
var textoMinus = document.getElementById("minus");
var botonCalcularCar = document.getElementById("botonCalcularCar");
var textoCar = document.getElementById("cantidadCar");


botonCambioMayusMinus.addEventListener("click", function() {

    var cadena = cadenaCambio.value;
    textoMayus.value = cadena.toUpperCase();
    textoMinus.value = cadena.toLowerCase();

});

botonCambioMinus.addEventListener("click", function() {
    var cadena = cadenaCambio.value;
    textoMinus.value = cadena.toLowerCase();
});

botonCambioMayus.addEventListener("click", function() {
    var cadena = cadenaCambio.value;
    textoMayus.value = cadena.toUpperCase();
});
reiniciarCampos.addEventListener("click", function() {
    cadenaCambio.value = null;
    textoMayus.value = null;
    textoMinus.value = null;
    textoCar.value = null;
});

botonCalcularCar.addEventListener("click", function() {

    var cadena = cadenaCambio.value;
    var caracteres = cadena.length;
    textoCar.value = caracteres;

});