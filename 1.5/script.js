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
    if (edad > 60 || esEstudiante === true) {
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
    let energiaSuficiente = confirm("")
}