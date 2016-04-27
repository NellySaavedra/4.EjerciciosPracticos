//Ejercicio #3: Sucesión de Fibonacci

var C1=1
var C2=1

var Contador=prompt("Cuántas veces correrá la sucesión")

 	alert(C1) // Base para correr la sucesión
 	alert(C2) // Base para correr la sucesión
 	
 	C3=C1+C2
 	alert(C3) // Base para correr la sucesión
 	
 	
 // Ya teniendo la primer suma comienza a correr el ciclo que marca el "Contador"
 for(var i = 3; i<=Contador; i++){ // "i" comienza en 3 porque 2 es el resultado de C1+C2 
 
 	C1=C2 //(C1=C2) (2) (3) (5)  (8)         
 	C2=C3 //(C2=2)  (3) (5) (8)  (13)  
 C3=C1+C2 //(C3=3)  (5) (8) (13) (21)    
 		
 	if(C3<=Contador)
	alert("La sucesión es la siguiente: " + C3)
 }