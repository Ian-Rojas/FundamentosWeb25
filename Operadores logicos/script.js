function verificarPar() {
    let numero = parseInt(prompt("Ingrese un número"));
    if (numero % 2 == 0) {
        alert("El número es par")
    } else {
        alert("El número es impar")
    }
}

function calcularIMC() {
    let peso = parseFloat(prompt("Ingrese su peso"))
    let altura = parseFloat(prompt("Ingrese su altura"))
    altura = altura / 100;
    let imc = peso / (altura * altura);
    if (imc < 18.5) {
        alert("Bajo peso")
    } else if (imc >= 18.5 && imc <= 24.9) {
        alert("Peso Normal")
    } else {
        alert("Sobrepeso")
    }
}

function calcularPromedio() {
    let nota1 = parseFloat(prompt("Ingresa tu primera nota"))
    let nota2 = parseFloat(prompt("Ingresa tu segunda nota"))
    let nota3 = parseFloat(prompt("ingresa tu tercera nota"))
    let promedio = (nota1 + nota2 + nota3) / 3;
    if (promedio < 4.0) {
        alert("Reprobado")
    } else {
        alert("Aprobado")
    }
}