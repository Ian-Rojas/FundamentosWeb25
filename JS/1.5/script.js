function verificar() {
    let edad = prompt("Ingrese su edad");
    let aceptaTerminos = confirm("Deseas aceptar terminos y condiciones?");
    if (edad >= 18 && aceptaTerminos === true) {
        alert("Acceso permitido");
    } else {
        alert("Acceso denegado");
    }
}

function verificarDescuento() {
    let edad = prompt("Ingrese su edad")
    let esEstudiante = confirm("¿Eres un estudiante?")
    if (edad >= 60 || esEstudiante === true) {
        alert("Descuento Aplicado");
    } else {
        alert("No tienes descuento");
    }
}

function Validacion() {
    let usuario = prompt("Ingrese su nombre de usuario")
    let contraseña = prompt("Ingrese su contraseña")
    if (!usuario || !contraseña) {
        alert("Error: Debes ingresar usuario y contraseña");
    } else {
        alert("Inicio de sesión exitoso");
    }
}

function Encender() {
    let energiaSuficiente = confirm("El dispositivo tiene la energia suficiente?")
    let interruptorEncendido = confirm("El interruptor esta encendido?")
    if (energiaSuficiente === true && interruptorEncendido === true) { 
        alert("Maquina Encendida");
    } else {
        alert("No se puede encender la maquina");
    }
}

function zonadeAcceso() {
    let bloqueado = confirm("Esta la entrada bloqueada?")
    let tieneCredenciales = confirm("Tiene las credenciales para acceder al estacionamiento?")
    if (bloqueado || !tieneCredenciales) {
        alert("Acceso Permitido");
    } else {
        alert("Acceso Denegado");
    }
}