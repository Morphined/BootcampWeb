// 2) Dado un número ingresado por el usuario, crear la serie de Fibonacci.
var techo = parseInt(prompt("Ingrese el numero del techo al que quiere llegar: "));
var semilla = 0;
var serie = 1;
var valorAux;

console.log("La serie de Fibonacci hasta el término " + techo + " es: ");

for (var i = 1; i <= techo; i++) {
    console.log(semilla);
    valorAux = semilla + serie;
    semilla = serie;
    serie = valorAux;
}