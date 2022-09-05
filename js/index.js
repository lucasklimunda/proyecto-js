
//Simulador interactivo : "Calcular tiempo de espera promedio en relación a la cantidad de turnos registrados."

function calcularTiempoEspera (espera){
  for (let i = 1;  i <= 11; i++){
      let tiempo = i * espera
      let nombre = prompt("Por orden de llegada se le dará un tiempo de espera estimado por favor ingrese su nombre")
      alert("Turno " + " " + i + " del paciente " + nombre + " tiempo de espera estimado " + tiempo + " minutos")
      if (i> 10 && i < 12){
      alert ("Se acabaron los turnos")
      } 
  }

}

calcularTiempoEspera (5)




