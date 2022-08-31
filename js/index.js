/*
let nombre = prompt ("Inserte su nombre")

let resultado = console.log (nombre)
*/
/*
let nombre = "lucas"
let edad = 24
const PI = 3.1416


let calificacionUno = 10
let calificacionDos = 5
let calificacionTres = 8

const SUMA = calificacionUno + calificacionDos + calificacionTres
console.log (SUMA)

const RESTA = calificacionUno - calificacionDos - calificacionTres
console.log (RESTA)

const MULTIPLICACION = calificacionUno * calificacionDos * calificacionTres
console.log (MULTIPLICACION)

const DIVISION = SUMA / 3
console.log (DIVISION)
*/

//Pedir un número por prompt, repetir la salida del mensaje "Hola" la cantidad de veces ingresada:
/*
let numero = prompt("Ingrese número de las veces que desea que se repita el mensaje")

for (let i = 1; i <= numero; i++){
  alert ("Hola " + i)

}
*/

//Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingrese "ESC"

const BOOLEANO = true
const SEPARADOR= " "
let i = 1

while (BOOLEANO){
let mensaje= prompt ("introduzca un texto (ESC para salir del programa)")
 if (mensaje== "ESC"){
alert ("Ha finalizado el programa")    
break
}
let concatenar = alert (mensaje + SEPARADOR + i++)
}


