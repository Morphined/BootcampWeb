var nombreApellido = document.getElementById("nombreApellido");
var telefono = document.getElementById("telefono");
var email = document.getElementById("email");
var fechaHoy = document.getElementById("fecha");

var mango = "Mango x 1kg";
var precioMango = parseInt(800);
var cantidadMango = document.getElementById("cantidadMango");

var banano = "Banano x 1kg";
var precioBanano = parseInt(500);
var cantidadBanano = document.getElementById("cantidadBanano");

var pera = "Pera x 2kg";
var precioPera = parseInt(1200);
var cantidadPera = document.getElementById("cantidadPera");

var pina = "Piña x 1kg";
var precioPina = parseInt(900);
var cantidadPina = document.getElementById("cantidadPina");

var mostrarTotal = document.getElementById("mostratTotal");
var datosCliente = document.getElementById("datosCliente");

var boton = document.getElementById("generar");

function calcular() {
    var total;

    var totalMango = cantidadMango.value * precioMango;
    var totalBanano = cantidadBanano.value * precioBanano;
    var totalPera = cantidadPera.value * precioPera;
    var totalPina = cantidadPina.value * precioPina;
    total = totalMango + totalBanano + totalPera + totalPina;

    mostrarTotal.value = "Total a pagar de: " + total + ". Sus mangos costaron: " + totalMango + ", y sus bananos costaron: " + totalBanano + ", sus peras costaron: " + totalPera + ", y sus piñas le costaron: " + totalPina + ".";
    datosCliente.value = "Gracias " + nombreApellido.value + " por comprar en FrutiMax de la sábana. Su correo es: " + email.value + ". Su teléfono es: " + telefono.value + " y la fecha es: " + fechaHoy.value;
    cantidadBanano.value = "";
    cantidadMango.value = "";
    cantidadPera.value = "";
    cantidadPina.value = "";
    nombreApellido.value = "";
    telefono.value = "";
    email.value = "";
    fechaHoy.value = "";
    return total;
}

boton.addEventListener("click", function() {

    calcular();
});