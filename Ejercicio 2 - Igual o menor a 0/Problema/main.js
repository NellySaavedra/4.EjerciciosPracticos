//Ejercicio #2: Igual o menos a 0	

var Rango = prompt("¿Cuántos números se valorarán?")

// Contador de Positivos:
var P = 0

//Contador de Negativos:
var N = 0

for (var i = 1; i <= Rango; i++) {
	
	var Numeros = prompt("Ingrese cantidades a valorar");
// El if va a funcionar como un  contador que tiene dos opciones de "almacenamiento", el contador positivo (P) y el negativo (N)

    if (Numeros > 0) {
    	P = P + 1 
    }
	else {
		N = N + 1
	}
}

alert("Los números positivos son: " +  P)
alert("Los números iguales o menores a 0 son: " + N)