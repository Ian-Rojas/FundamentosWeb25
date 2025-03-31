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

function ejercicio1() {
    let n = parseInt(prompt("Ingrese un número entero: "));
    let count = 1;
    let array = [];
    while (count <= n) {
        array.push(count);
        count++;
    }
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
