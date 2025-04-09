function sumaNumeros() {
    let n = parseInt(prompt("Ingresa un número"));
    let suma = 0;
    let array = [];
    for (let i = 1; i <= n; i++) {
        let num = parseFloat(prompt(`Ingrese el número ${i} de ${n}: `));
        array.push(num);
        suma += num;
    }
    alert(`Números ingresados: ${array.join(" + ")}\nTotal = ${suma}`);
}

function numerosPares() {
    let n = parseFloat(prompt("Ingresa un número par: "));
    let array = [];
    for (let i = 1; i <= n; i++) {
        array.push(i * 2);
    }
    alert(`Los primeros ${n} números pares son:\n` + array.join(", "));
}

function numerosImpares() {
    let n = parseFloat(prompt("Ingresa un número: "));
    let array = [];
    for (let i = 1; i <= n; i++) {
        array.push(i * 2 + 1);
    }
    alert(`Los primeros ${n} números pares son:\n` + array.join(", "));
}

function sumarCincoNumeros() {
    let suma = parseInt(prompt("Ingrese Cinco Números: "));
    let numeros = [];

    for (let i = 1; i <= 5; i++) {
        let num = parseFloat(prompt(`Ingresa el número ${i} de 5:`));
        numeros.push(num);
        suma += num;
    }

    alert(`Números ingresados: ${numeros.join(" + ")}\nSuma total = ${suma}`);
}

function sumarMasNumeros() {
    let n = parseInt(prompt("¿Cuántos números quieres sumar?"));
    let suma = 0;
    let numeros = [];

    for (let i = 1; i <= n; i++) {
        let num = parseFloat(prompt(`Ingresa el número ${i} de ${n}:`));
        numeros.push(num);
        suma += num;
    }

    alert(`Números ingresados: ${numeros.join(" + ")}\nSuma total = ${suma}`);
}

