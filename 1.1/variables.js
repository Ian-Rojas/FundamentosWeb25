// Variables con let (modificables)
let numeroEntero = 42;
let numeroDecimal = 3.14;
let cadenaTexto = "Hola Mundo";
let booleano = true;
let arreglo = [1, "dos", false, 4.5];
let objeto = { 
    nombre: "Juan", 
    edad: 30, 
    ciudad: "Madrid",
    habilidades: ["JavaScript", "HTML", "CSS"]
};
let indefinida;
let nulo = null;

// Constante (no modificable)
const mes = "Octubre";

// Función que realiza una operación
function operacion(a, b) {
    return a + b;
}

// Funciones para mostrar cada variable
function mostrarNumeroEntero() {
    alert(`Número entero: ${numeroEntero}\nTipo: ${typeof numeroEntero}`);
}

function mostrarNumeroDecimal() {
    alert(`Número decimal: ${numeroDecimal}\nTipo: ${typeof numeroDecimal}`);
}

function mostrarCadenaTexto() {
    alert(`Cadena de texto: ${cadenaTexto}\nTipo: ${typeof cadenaTexto}`);
}

function mostrarBooleano() {
    alert(`Valor booleano: ${booleano}\nTipo: ${typeof booleano}`);
}

function mostrarArreglo() {
    alert(`Arreglo: ${JSON.stringify(arreglo)}\nTipo: ${typeof arreglo}\nLongitud: ${arreglo.length}`);
}

function mostrarObjeto() {
    alert(`Objeto: ${JSON.stringify(objeto)}\nTipo: ${typeof objeto}`);
}

function mostrarIndefinida() {
    alert(`Variable indefinida: ${indefinida}\nTipo: ${typeof indefinida}`);
}

function mostrarNulo() {
    alert(`Variable nulo: ${nulo}\nTipo: ${typeof nulo}`);
}

function mostrarMes() {
    alert(`Constante mes: ${mes}\nTipo: ${typeof mes}`);
}

function mostrarResultadoOperacion() {
    alert(`Resultado de operación (5 + 3): ${operacion(5, 3)}\nTipo del resultado: ${typeof operacion(5, 3)}`);
}

// Mostrar todas las variables en la página al cargar
function mostrarVariablesEnPagina() {
    const variables = [
        { nombre: "numeroEntero", valor: numeroEntero, tipo: typeof numeroEntero },
        { nombre: "numeroDecimal", valor: numeroDecimal, tipo: typeof numeroDecimal },
        { nombre: "cadenaTexto", valor: cadenaTexto, tipo: typeof cadenaTexto },
        { nombre: "booleano", valor: booleano, tipo: typeof booleano },
        { nombre: "arreglo", valor: JSON.stringify(arreglo), tipo: typeof arreglo },
        { nombre: "objeto", valor: JSON.stringify(objeto), tipo: typeof objeto },
        { nombre: "indefinida", valor: indefinida, tipo: typeof indefinida },
        { nombre: "nulo", valor: nulo, tipo: typeof nulo },
        { nombre: "mes (constante)", valor: mes, tipo: typeof mes },
        { nombre: "operacion(5, 3)", valor: operacion(5, 3), tipo: typeof operacion(5, 3) }
    ];

    let html = '';
    variables.forEach(variable => {
        html += `
        <div class="variable-card">
            <h3>${variable.nombre}</h3>
            <p>Valor: ${variable.valor}</p>
            <p>Tipo: ${variable.tipo}</p>
        </div>
        `;
    });

    document.getElementById("resultado").innerHTML = html;
}

// Ejecutar cuando se cargue la página
window.onload = mostrarVariablesEnPagina;