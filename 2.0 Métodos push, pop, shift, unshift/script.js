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

let colores = ["rojo", "azul"];

function mostrar_lista_colores() {
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