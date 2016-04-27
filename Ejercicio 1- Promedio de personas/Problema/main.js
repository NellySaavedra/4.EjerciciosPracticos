//Ejercicio #1: Promedio de personas

var nSujetos = prompt("¿Cuántos miembros tiene el grupo?")
var s = 0


for (var i = 1; i <= nSujetos; i++) {
	var Estatura = prompt("Ingrese la estatura de cada uno");
    s = parseFloat(s) + parseFloat(Estatura);
	var Promedio = s / nSujetos;
	}
alert("La edad promedio de estatura por " + nSujetos + " personas es " + Promedio)