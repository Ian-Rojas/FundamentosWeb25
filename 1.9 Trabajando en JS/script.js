console.log("Vinculado Correctamente...")

function registroP() {
    let ingresar = prompt("Quiere ingresar el nombre de un participante? (Si/No)")
    let participantes = []
    while (ingresar != "no") {
        let user_n = prompt("Ingrese un nuevo nombre")
        participantes.push(user_n)
        ingresar = prompt("Quiere ingresar el nombre de un participante? (Si/No)")
    }
    if (participantes.length < 5) {
        console.log(participantes.length)
        console.log(participantes)
    } else {
        console.log(`Hay mas de 5 participantes en ${participantes}`)
    }
}