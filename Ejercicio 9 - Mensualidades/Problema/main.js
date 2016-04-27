//Ejercicio #9: Mensualidades


// Se inicia con 5 porque se empezará a multiplicar por 2 desde el primer pago (el primer pago debe ser 10)
var PAGOS = 5 

// Veces que se ejecutará la multiplicación, en este caso: 20 meses. 
var T = 20 //meses

//i comienza en 1 porque de lo contrario el proceso correría 21 veces, no 20.
for (i=1; i<=20; i=i+1) {
	
	PAGOS = (PAGOS*2) // PAGOS = (5*2); asi obtenemos el primer pago que debe ser 10.
         alert(PAGOS) // Indicación para que el proceso se vaya mostrando en pantalla.  
	  T = (T + PAGOS) // Caja donde se va guardado la suma de pagos para mostrarla terminado el ciclo.
}

alert ("el pago total es " + "$" + T + " transcurridos los 20 meses")