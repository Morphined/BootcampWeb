// Capturar los elementos del HTML en variables JS
var teclaUno = document.getElementById("teclaUno");
var teclaDos = document.getElementById("teclaDos");
var teclaTres = document.getElementById("teclaTres");
var teclaCuatro = document.getElementById("teclaCuatro");
var teclaCinco = document.getElementById("teclaCinco");
var teclaSeis = document.getElementById("teclaSeis");
var teclaSiete = document.getElementById("teclaSiete");
var teclaOcho = document.getElementById("teclaOcho");
var teclaNueve = document.getElementById("teclaNueve");
var teclaCero = document.getElementById("teclaCero");
var teclaPunto = document.getElementById("teclaPunto");
var teclaLimpiar = document.getElementById("teclaLimpiar");
var teclaIgual = document.getElementById("teclaIgual");
var pantallaCalculadora = document.getElementById("pantallaCalculadora");
var teclaSuma = document.getElementById("botonSuma");
var teclaResta = document.getElementById("botonResta");
var teclaMultiplicar = document.getElementById("botonMultiplicar");
var teclaDividir = document.getElementById("botonDividir");
var teclaIgual = document.getElementById("teclaIgual");
var historialPantalla = document.getElementById("historialCalculadora");
var historialOperaciones = document.getElementById("historialOperaciones");
var contador = 0;
var primerDigito;
var segundoDigito;
var auxDividir = 0;
var auxMultiplicar = 0;
var auxSuma = 0;
var auxResta = 0;
var operacionHecha = 0;

function operacion() {



};

teclaDos.addEventListener("click", function() {

    if (operacionHecha == 1) {
        pantallaCalculadora.value = null;
        operacionHecha++;
    }


    pantallaCalculadora.value = pantallaCalculadora.value + teclaDos.value;

});

teclaUno.addEventListener("click", function() {
    if (operacionHecha == 1) {
        pantallaCalculadora.value = null;
        operacionHecha++;
    }


    pantallaCalculadora.value = pantallaCalculadora.value + teclaUno.value;

});

teclaTres.addEventListener("click", function() {
    if (operacionHecha == 1) {
        pantallaCalculadora.value = null;
        operacionHecha++;
    }

    pantallaCalculadora.value = pantallaCalculadora.value + teclaTres.value;

});
teclaCuatro.addEventListener("click", function() {
    if (operacionHecha == 1) {
        pantallaCalculadora.value = null;
        operacionHecha++;
    }

    pantallaCalculadora.value = pantallaCalculadora.value + teclaCuatro.value;

});
teclaCinco.addEventListener("click", function() {
    if (operacionHecha == 1) {
        pantallaCalculadora.value = null;
        operacionHecha++;
    }

    pantallaCalculadora.value = pantallaCalculadora.value + teclaCinco.value;

});
teclaSeis.addEventListener("click", function() {
    if (operacionHecha == 1) {
        pantallaCalculadora.value = null;
        operacionHecha++;
    }

    pantallaCalculadora.value = pantallaCalculadora.value + teclaSeis.value;

});
teclaSiete.addEventListener("click", function() {
    if (operacionHecha == 1) {
        pantallaCalculadora.value = null;
        operacionHecha++;
    }

    pantallaCalculadora.value = pantallaCalculadora.value + teclaSiete.value;

});
teclaOcho.addEventListener("click", function() {
    if (operacionHecha == 1) {
        pantallaCalculadora.value = null;
        operacionHecha++;
    }

    pantallaCalculadora.value = pantallaCalculadora.value + teclaOcho.value;

});
teclaNueve.addEventListener("click", function() {
    if (operacionHecha == 1) {
        pantallaCalculadora.value = null;
        operacionHecha++;
    }

    pantallaCalculadora.value = pantallaCalculadora.value + teclaNueve.value;

});
teclaCero.addEventListener("click", function() {
    if (operacionHecha == 1) {
        pantallaCalculadora.value = null;
        operacionHecha++;
    }

    pantallaCalculadora.value = pantallaCalculadora.value + teclaCero.value;



});

teclaLimpiar.addEventListener("click", function() {

    pantallaCalculadora.value = null;
    auxDividir = 0;
    auxMultiplicar = 0;
    auxResta = 0;
    auxSuma = 0;
    historialPantalla.value = null;
    historialOperaciones.value = null;

});

teclaPunto.addEventListener("click", function() {

    pantallaCalculadora.value = pantallaCalculadora.value + ".";
});

teclaDividir.addEventListener("click", function() {



    if (auxDividir == 0) {
        primerDigito = pantallaCalculadora.value;
        pantallaCalculadora.value = null;
        auxDividir++;

    }

});

teclaMultiplicar.addEventListener("click", function() {

    if (auxMultiplicar == 0) {
        primerDigito = pantallaCalculadora.value;
        pantallaCalculadora.value = null;
        auxMultiplicar++;
    }

});

teclaSuma.addEventListener("click", function() {

    if (auxSuma == 0) {
        primerDigito = pantallaCalculadora.value;
        pantallaCalculadora.value = null;
        auxSuma++;
    }

});

teclaResta.addEventListener("click", function() {

    if (auxResta == 0) {
        primerDigito = pantallaCalculadora.value;
        pantallaCalculadora.value = null;
        auxResta++;
    }

});

teclaIgual.addEventListener("click", function() {
    var resultado;

    if (auxDividir == 1) {
        segundoDigito = pantallaCalculadora.value;
        resultado = primerDigito / segundoDigito;
        if (segundoDigito == 0) {
            resultado = "Error";
        }
        pantallaCalculadora.value = resultado;
        auxDividir = 0;
        operacionHecha = 1;
        historialOperaciones.value = historialOperaciones.value + " " + primerDigito + " / " + segundoDigito + " , ";

    }
    if (auxMultiplicar == 1) {
        segundoDigito = pantallaCalculadora.value;
        resultado = primerDigito * segundoDigito;
        pantallaCalculadora.value = resultado;
        auxMultiplicar = 0;
        operacionHecha = 1;
        console.log(operacionHecha);
        historialOperaciones.value = historialOperaciones.value + " " + primerDigito + " * " + segundoDigito + " , ";
    }

    if (auxSuma == 1) {
        segundoDigito = pantallaCalculadora.value;
        resultado = parseFloat(primerDigito) + parseFloat(segundoDigito);
        pantallaCalculadora.value = resultado;
        auxSuma = 0;
        operacionHecha = 1;
        console.log(operacionHecha);
        historialOperaciones.value = historialOperaciones.value + " " + primerDigito + " + " + segundoDigito + " , ";
    }

    if (auxResta == 1) {
        segundoDigito = pantallaCalculadora.value;
        resultado = primerDigito - segundoDigito;
        pantallaCalculadora.value = resultado;
        auxResta = 0;
        operacionHecha = 1;
        console.log(operacionHecha);
        historialOperaciones.value = historialOperaciones.value + " " + primerDigito + " - " + segundoDigito + " , ";
    }

    historialPantalla.value = historialPantalla.value + resultado + ", ";

});