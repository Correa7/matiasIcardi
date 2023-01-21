window.addEventListener("load", iniciaJuego)


let piedra = document.getElementById("piedra")
let papel = document.getElementById("papel")
let tijera = document.getElementById("tijera")
let botonEleccionJugador = document.getElementById ("eleccion-jugador")
piedra.addEventListener("click", eleccionJugador)
papel.addEventListener("click", eleccionJugador)
tijera.addEventListener("click", eleccionJugador)

function iniciaJuego(){
    let botonEleccionJugador = document.getElementById ("eleccion-jugador")
    // botonEleccionJugador.addEventListener("click", eleccionJugador)
    
}

function eleccionJugador (e){
  
    console.log(e.target.value)
    
    if(e.target.value == "piedra"){
        Swal.fire ({
            title:"Elegiste `La buena Piedra` 🥌",
            showConfirmButton: false,
            timer: 1000
        })
    } else if(e.target.value == "papel"){
        Swal.fire ({title:"Elegiste Papel 🧻",
        showConfirmButton: false,
        timer: 1000
    })
    } else if(e.target.value == "tijera"){
        Swal.fire ({title:"Elegiste Tijera ✂",
        showConfirmButton: false,
        timer: 1000
    })
    } else{
        Swal.fire ("Recuerda seleccionar una opción")
    }
    setTimeout(eleccionPc, 1500)
  
}

function eleccionPc (){
    let aleatorioPc = aleatorio (1, 3)

    if (aleatorioPc == 1){
        Swal.fire ({title:"PC seleccionó Piedra 🥌",
        showConfirmButton: false,
        timer: 1500
    })
    } else if (aleatorioPc == 2){
        Swal.fire ({title:"PC seleccionó Papel 🧻",
        showConfirmButton: false,
        timer: 1500
    })
    } else {
        Swal.fire ({title:"PC seleccionó Tijera ✂",
        showConfirmButton: false,
        timer: 1500
    })
    }
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+1)
}

/* function batalla(jugador, pc){
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
 */ 

