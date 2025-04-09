function multiplicar() {
        let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));
        let array = [];
        for (let i = 1; i <= 10; i++) {
            array.push(`${numero} x ${i} = ${numero * i}`);
        }
        alert(`Tabla del ${numero}:\n${array.join(" - ")}`);
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