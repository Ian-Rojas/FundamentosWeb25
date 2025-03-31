function bucleWhile() {
    let count = 10
    let array = [];
    while (count >= 1) {
        array.push(count);
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
    let count = 1;
    let array = [];
    while (count <= 5) {
        array.push(count);
        count++;
    }
    alert(`Los números son: ${array.join(" - ")}`);
}

function ejercicio2() {
    let count = 10
    let array = [];
    while (count >= 1) {
        array.push(count);
        count--;
    }
    alert(`Los números son: ${array.join(" - ")}`);
}

function ejercicio3() {
    let count = 0;
    let array = [];
    for(let i = 1; i<=5; i++) {
        count += i; // Sumamos el valor de i a count en cada iteración
        array.push(i); // Opcional: agregamos el número al array (si es necesario)
    }
    // Mostramos el resultado con el alert
    alert(count);
}

// Definición de la función llamada 'ejercicio4'
function ejercicio4() {
    // Bucle 'for' que empieza en 2, termina en 10 y avanza de 2 en 2
    let array = [];
    for (let i = 2; i <= 10; i += 2) {
        // Muestra cada valor de 'i' en un cuadro de alerta
        array.push(i);  
    }
    alert(`Los números son: ${array.join(" - ")}`);
}
