//Primera entrega del Proyecto Final: Simulador de turnos

class persona{
  constructor(nombre, apellido, edad){
    this.nombre = nombre.toUpperCase(); 
    this.apellido = apellido
    this.edad = edad.parseInt()
    
  }
  
  calcularTiempoEspera (espera){
    for (let i = 1;  i <= 11; i++){
        let tiempo = i * espera
        let nombre = prompt("Por orden de llegada se le dará un tiempo de espera estimado por favor ingrese su nombre")
        alert("Turno " + " " + i + " del paciente " + nombre + " tiempo de espera estimado " + tiempo + " minutos")
        if (i> 10 && i < 12){
        alert ("Se acabaron los turnos")
        } 
    }
  
  }
}


function agregarPersonas (){
  let personas = []
  let numeroPersonas = parseInt(prompt ("Cuantas personas se van a registrar?")) 
  for(let index = 0; index < numeroPersonas; index++){
    let nombre = prompt ("Ingrese el nombre")
    let apellido = parseFloat(prompt("Ingrese el apellido"))
    let edad = parseInt (prompt ("Ingrese edad"))
   
    let turnos = new persona (nombre, apellido,edad)

    personas.push(turnos)
    return turnos

  }
}

function mostrarPersonas (personas){
  for (let persona of personas){
    console.log (persona)
    console.log (personas.nombre)
  }
}


function main (){
  let personas = agregarPersonas ()
  agregarPersonas(turnos)
  console.log (turnos)
 }
 
 main ()



