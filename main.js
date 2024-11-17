let btnRe = document.getElementById("btnReserva")
btnRe.addEventListener("click", ()=>{
    funcionReserva()
})
let btnProto = document.getElementById("prototipo")
btnProto.addEventListener("click", ()=>{
    alert("Aun no contamos con esta funcion :c estamos en proceso")
})

function funcionReserva(){
    let dia = Number(prompt("Elija dia que desea viajar"))
    if(dia>=32 || dia==0){
        alert("numero invalido, por favor intente de nuevo")
        window.location.reload()
    }
    let mes = Number(prompt("Elija mes que desea viajar"))
    if(mes>=13 || mes==0){
        alert("numero invalido, por favor intente de nuevo")
        window.location.reload()
    }
    alert("Felicidades! Reserva de vuelo concretada para el dia: " + dia + " del mes: " + mes)
}