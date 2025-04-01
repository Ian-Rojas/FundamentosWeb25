function multiplicar() {
        let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));
        let array = [];
        for (let i = 1; i <= 10; i++) {
            array.push(`${numero} x ${i} = ${numero * i}`);
        }
        alert(`Tabla del ${numero}:\n${array.join(" - ")}`);
    }

function sumarNNumeros() {
    let cantidad = parseInt(prompt("¿Cuántos números deseas sumar?"));
    let suma = 0;
    let array = [];
    for (let i = 1; i <= cantidad; i++) {
        let num = parseFloat(prompt(`Ingrese el número ${i} de ${cantidad}:`));
        array.push(num);
        suma += num;
    }
    alert(`Números ingresados: ${array.join(" + ")}\nTotal = ${suma}`);
}

function paresEntreNumeros() {
    let inicio = parseInt(prompt("Ingrese el número inicial:"));
    let fin = parseInt(prompt("Ingrese el número final:"));
    let array = [];
    // Aseguramos que inicio sea el menor número
    if (inicio > fin) {
        [inicio, fin] = [fin, inicio]; // Intercambiamos valores
    }
    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            array.push(i);
        }
    }
    if (pares.length === 0) {
        alert(`No hay números pares entre ${inicio} y ${fin}`);
    } else {
        alert(`Números pares entre ${inicio} y ${fin}:\n${array.join(" - ")}`);
    }
}