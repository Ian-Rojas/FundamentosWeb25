function bucleWhile() {
    let count = 10
    let array = [];
    while (count >= 1) {
        array.push(count); // Inserta un valor al final del array //
        count--;
    }
    alert(`Los números son: ${array.join(" - ")}`);
}

function bucleFor() {
    let array = [];
    for (let i = 10; i >= 1; i--) {
        array.push(i);
    }
    alert(`Los números son: ${array.join(" - ")}`);
}

// Esta función se llama "ejercicio1"
function ejercicio1() {
    
    // Pide al usuario un número entero con un cuadro de texto (prompt)
    // Y convierte ese valor a número con parseInt
    let n = parseInt(prompt("Ingrese un número entero: "));
    
    // Creamos una variable count para contar desde 1
    let count = 1;
    
    // Creamos un arreglo vacío para guardar los números
    let array = [];
    
    // Mientras count sea menor o igual que n (el número que el usuario ingresó)
    while (count <= n) {
        // Agrega el valor de count al arreglo
        array.push(count);
        
        // Aumenta count en 1 para seguir con el siguiente número
        count++;
    }
    
    // Muestra los números en una ventana emergente (alert)
    // .join(" - ") une los elementos del arreglo con guiones
    alert(`Los números son: ${array.join(" - ")}`);
}


function ejercicio2() {
    let n = parseInt(prompt("Ingrese un número entero: "));
    let count = 1;
    let array = [];
    while (count <= n) {
        array.push(n);
        n--;
    }
    alert(`Los números son: ${array.join(" - ")}`);
}

function ejercicio3() {
    let n = parseInt(prompt("Ingrese un número entero: "))
    let count = 0;
    let array = [];
    for(let i = 1; i <= n; i++) {
        count += i; // Sumamos el valor de i a count en cada iteración
        array.push(i); // Opcional: agregamos el número al array (si es necesario)
    }
    // Mostramos el resultado con el alert
    alert(`La suma de los primeros ${n} números es: ${array.join(" - ")}`);
}

// Definición de la función llamada 'ejercicio4'
function ejercicio4() {
    let n = parseInt(prompt("Ingrese un número entero: "))
    let array = [];
    for (let i = 2; i <= n; i += 2) {
        // Muestra cada valor de 'i' en un cuadro de alerta
        array.push(i);  
    }
    alert(`Los números son: ${array.join(" - ")}`);
}
