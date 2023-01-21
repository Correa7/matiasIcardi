
Swal.fire({
    title: 'Bienvenido al único casino para "Monitos"',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  }) 
/* 
function aJugar(){
    
    let opciones = ["Piedra", "Papel", "Tijera"]
    let victorias = 0
    let derrotas = 0

    
    
    function batalla(jugador, pc){
        if(jugador == pc){
            alert("Empate, juega de nuevo")
        }else if((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)){
            victorias = victorias +1
            alert("Ganaste, felicitaciones 👌")
        }else{
            derrotas = derrotas + 1
            alert("Perdiste, mejor suerte la próxima")
        } 
    }
    
    
    while (victorias < 3 && derrotas < 3){
        
    //JUGADOR
        
    jugador =  prompt("Por favor elige: 1 para 🥌, 2 para 🧻 y 3 para ✂")
        
    // PC
    let pc = aleatorio(1, 3)
    
    alert ("Elegiste "+ eleccion(jugador))
    alert ("PC elegió "+ eleccion(pc))
    
    //COMBATE
    
    let combate = batalla(jugador, pc)
    
    if(derrotas === 3){
        Swal.fire("GAME OVER, INSERT COIN")  
      } else if(victorias === 3){
        Swal.fire("Felicitaciones, ganaste")
      }
    }
}
 

let button = document.getElementById("boton")
//console.log(boton.innerHTML)
button.addEventListener("click", aJugar)
 */