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

function cajaR() {
let productos = ["manzana", "pan", "leche"];
for (let i = 1; i <= 5; i++) {
    console.log(`Cliente ${i}:`);
    if (productos.length > 0) {
        let productoVendido = productos.pop();
        console.log(`Producto vendido: ${productoVendido}`);
    } else {
        console.log("Sin stock");
    }
    console.log("------------------------");
}

console.log("Reposición de productos...");
productos.push("huevos");
productos.push("jugo");
productos.push("queso");
console.log("Productos actuales:", productos);
}
