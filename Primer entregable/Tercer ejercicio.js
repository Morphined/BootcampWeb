//3) El usuario ingresa un número, se pide crear la siguiente pirámide (console.log) hasta dicho número ingresado

var numUsuario = prompt("Ingrese un numero");
var numero = parseInt(numUsuario);
var astericos = "*";
var piramide = "";

for (var i = 0; i < numero; i++) {
    piramide += astericos;
    console.log(piramide + "\n");

}
for (var i = 0; i < numero; i++) {
    piramide = piramide.slice(1);
    console.log(piramide + "\n");

}