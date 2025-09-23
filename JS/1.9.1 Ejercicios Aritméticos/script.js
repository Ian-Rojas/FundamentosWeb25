
function calcularP() {
let notas = [];

for (let i = 1; i <= 5; i++) {
    let nota = parseFloat(prompt(`Ingresa la nota ${i}:`));
    if (!isNaN(nota)) {
        notas.push(nota);
    } else {
        alert("Por favor, ingresa un número válido.");
        i--;
    }
}

let suma = 0;
for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
}
let promedio = suma / notas.length;
alert(`El promedio de las notas es: ${promedio.toFixed(2)}`);
if (promedio >= 4.0) {
    alert("¡Aprobado!");
} else {
    alert("Reprobado.");
}
}

function separarN() {
let numeros = [];
let pares = [];
let impares = [];

for (let i = 1; i <= 6; i++) {
    let num = parseInt(prompt(`Ingresa el número ${i}:`));
    if (!isNaN(num)) {
        numeros.push(num);
    } else {
        alert("Por favor, ingresa un número válido.");
        i--; 
    }
}

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
    } else {
        impares.push(numeros[i]);
    }
}

console.log("Números pares:", pares);
console.log("Números impares:", impares);
}