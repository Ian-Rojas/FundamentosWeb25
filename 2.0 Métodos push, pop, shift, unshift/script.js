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