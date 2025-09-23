console.log("Funcionando correctamente");

function temperaturaC(){
    let temp = prompt("Ingrese la temperatura");
    if (temp <= 0) {
        alert("Hace frío");
    } else if (temp >= 0 && temp <= 25) {
        alert("La temperatura es agradable");
    } else (temp >= 25)
    alert("Hace calor.") 
}

function nombreUsuario(){
    let nombreUsuario = prompt("Ingrese su usuario.");
    let password = prompt("Ingrese su contraseña.");
    if (nombreUsuario === "usuario123" && password === "secreto") {
        alert("Acceso Concedido")
    }   else {
        alert("Acceso Denegado")
    }
}

function num() {
    let numero = prompt("Ingrese un número");
    if (numero > 0) {
        alert("El numero es positivo")
    } else if (numero < 0) {
        alert("El numero es negativo")
    } else {
        alert("El numero es cero")
    }
}

function puntajeJuego() {
    let puntaje = prompt("Ingrese su puntaje");
    if (puntaje > 90) {
        alert("Excelente!")
    } else if (puntaje >= 70 && puntaje <= 89) {
        alert("Buen trabajo!")
    } else {
        alert("Necesitas mejorar.")
    }
}