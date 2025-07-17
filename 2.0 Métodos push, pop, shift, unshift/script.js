const resultado = document.getElementById("resultado");

function agregarElementoCompra() {
    let elemento = document.getElementById("lista").value;
    // Crear un elemento html --> CreateElement
    let item = document.createElement("li"); 
    // Inner texto es lo que va a estar dentro del elemento "li"
    item.innerText = elemento;
    //appendChild inserta un valor en el elemento padre "resultado"
    resultado.appendChild(item);
}

let carrito = [];

function mostrarListaCompra() {
    const lista = document.getElementById("resultado2");
    lista.innerHTML = ""; // Limpiar antes de mostrar

    for (let i = 0; i < carrito.length; i++){
        const li = document.createElement("li")
        li.className = "list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `${carrito[i]}`;
        lista.appendChild(li);
    }
}

function agregarElemento2() {
    const input = document.getElementById("lista2");
    const valor = input.value.trim(); // Guarda valor sin espacios extras

    if (valor === "") return;
    carrito.push(valor) // Agregar valor al final

    input.value = "";
    input.focus(); // Agrega foco hacia input
    mostrarListaCompra()
}

function eliminarUltimoElemento() {
    if (carrito.length > 0) {
        carrito.pop();
    }
    mostrarListaCompra()
}

let colores = [];

function mostrarListaColores() {
    const input = document.getElementById("lista3");
    const lista = document.getElementById("resultado3");
    const nuevoColor = input.value.trim();

    if (nuevoColor !== "") {
        colores.unshift(nuevoColor);
    }
    lista.innerHTML = "";
    for (let i = 0; i < colores.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = colores[i];
        lista.appendChild(li);
    }
    input.value = "";
    input.focus();
}

function eliminarPrimero() {
    const eliminado = colores.shift();
    const lista = document.getElementById("resultado4");
    const mensaje = document.getElementById("colorEliminado");

    lista.innerHTML = "";
    for (let i = 0; i < colores.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = colores[i];
        lista.appendChild(li);
    }
}
function mostrarLista() {
    const input = document.getElementById("lista4");
    const lista = document.getElementById("resultado4");
    const nuevoColor = input.value.trim();

    if (nuevoColor !== "") {
        colores.unshift(nuevoColor);
    }
    lista.innerHTML = "";
    for (let i = 0; i < colores.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = colores[i];
        lista.appendChild(li);
    }
    input.value = "";
    input.focus();
}

let numeros = [10, 20, 30]

function mostrarListaNumeros(){
    const lista = document.getElementById("resultado5");
    lista.innerHTML = ""; // Limpiar antes de mostrar

    for (let i = 0; i < numeros.length; i++){
        const li = document.createElement("li")
        li.className = "list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `${numeros[i]}`; // <li>texContent</li>
        lista.appendChild(li);
    }
}

function agregar_inicio_ej5(){  
    const input = document.getElementById("lista5");
    const valor = input.value.trim(); // Guarda valor sin espacios extras

    if (valor === "") return;
    numeros.unshift(valor) // Agregar valor al final

    input.value = "";
    input.focus();
    mostrarListaNumeros()
}

function agregar_ultimo_ej5(){
    const input = document.getElementById("lista5");
    const valor = input.value.trim(); // Guarda valor sin espacios extras

    if (valor === "") return;
    numeros.push(valor) // Agregar valor al final

    input.value = "";
    input.focus(); // Agrega foco hacia input
    mostrarListaNumeros()
}

function eliminar_primer_ej5(){
        if (numeros.length > 0) {
        numeros.shift();
    }
    mostrarListaNumeros()
}

function eliminar_ultimo_ej5(){
    if (numeros.length > 0) {
    numeros.pop();
    }
    mostrarListaNumeros()
}