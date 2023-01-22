window.addEventListener("load", iniciaJuego)


let piedra = document.getElementById("piedra")
let papel = document.getElementById("papel")
let tijera = document.getElementById("tijera")
let botonEleccionJugador = document.getElementById ("eleccion-jugador")
piedra.addEventListener("click", eleccionJugador)
papel.addEventListener("click", eleccionJugador)
tijera.addEventListener("click", eleccionJugador)

let resultado = document.getElementById("resultado")
resultado.addEventListener("click",batalla)

let jugador = ""
let pc= ""
let derrotas= ""
let victorias=""
function iniciaJuego(){
    let botonEleccionJugador = document.getElementById ("eleccion-jugador")
    // botonEleccionJugador.addEventListener("click", eleccionJugador)
    
}

function eleccionJugador (e){
  
    if(e.target.value == 1){
        Swal.fire ({
            title:"Elegiste `La buena Piedra` 🥌",
            showConfirmButton: false,
            timer: 1000
        })
    } else if(e.target.value == 2){
        Swal.fire ({
            title:"Elegiste Papel 🧻",
            showConfirmButton: false,
            timer: 1000
        })
    } else if(e.target.value == 3){
        Swal.fire ({
            title:"Elegiste Tijera ✂",
            showConfirmButton: false,
            timer: 1000
    })
    } else{
    Swal.fire ("Recuerda seleccionar una opción")
    }
    setTimeout(eleccionPc, 1500)

   jugador = e.target.value
}

function eleccionPc (){
    let aleatorioPc = aleatorio (1, 3)
    if (aleatorioPc == 1){
       
        Swal.fire ({title:"PC seleccionó Piedra 🥌",
        showConfirmButton: false,
        timer: 1500
    })
    } else if (aleatorioPc == 2){
       
        Swal.fire ({
            title:"PC seleccionó Papel 🧻",
            showConfirmButton: false,
            timer: 1500
    })
    } else {
      
        Swal.fire ({
            title:"PC seleccionó Tijera ✂",
            showConfirmButton: false,
            timer: 1500
    })
}
    pc=aleatorioPc


}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+1)
}


function batalla(){

    if(jugador == pc){
        Swal.fire ({title:"Empate, juega de nuevo",
        showConfirmButton: false,
        timer: 1500
    })
        
    }else if((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)){
        victorias = victorias +1
        Swal.fire ({title:"Ganaste, felicitaciones 👌",
        showConfirmButton: false,
        timer: 1500
    })
       
    }else{
        derrotas = derrotas + 1
        Swal.fire ({title:"Perdiste, mejor suerte la próxima",
        showConfirmButton: false,
        timer: 1500
    })
    } 

}
