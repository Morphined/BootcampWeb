/*

//	- Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.
var arreglo = [1,2,3,4,5,6];
var j=0;

while (j<arreglo.length){
    console.log(arreglo[j]);
    j++;

}
*/


// 	- Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.
/*
for (i=0; i<arreglo.length; i++)
{
    alert(arreglo[i]);
}
*/


// 	- Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
/*
var aux;

for(i=0; i<arreglo.length; i++){
    
    aux = arreglo[i]+1;
    console.log(aux);
}

*/


// 	- Generar una copia de un array pero con todos los elementos incrementado en 12.

var arreglo = [1, 2, 3, 4, 5, 6];
var nuevoArreglo = [0, 0, 0, 0, 0, 0];

for (i = 0; i < arreglo.length; i++) {
    nuevoArreglo[i] = arreglo[i];
    console.log("Copia del arreglo es: " + nuevoArreglo[i]);
    nuevoArreglo[i] = nuevoArreglo[i] + 12;
    console.log("Nuevo arreglo es: " + nuevoArreglo[i]);
}

// Calcular el promedio de la copia

var almacen = 0;
var promedio;
for (i = 0; i < nuevoArreglo.length; i++) {

    almacen = almacen + nuevoArreglo[i];
    console.log("El almacen tiene " + almacen);
}

promedio = almacen / nuevoArreglo.length;
console.log("El promedio de los elementos del array es: " + promedio);