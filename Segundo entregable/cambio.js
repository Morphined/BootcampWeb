var cadenaCambio = document.getElementById("cadenaCambio");
var botonCambioMayusMinus = document.getElementById("botonCambio");
var botonCambioMinus = document.getElementById("botonCambioMinus");
var botonCambioMayus = document.getElementById("botonCambioMayus");
var reiniciarCampos = document.getElementById("reiniciar");
var textoMayus = document.getElementById("mayus");
var textoMinus = document.getElementById("minus");


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
});