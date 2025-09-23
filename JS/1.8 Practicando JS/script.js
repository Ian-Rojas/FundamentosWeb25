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

function calcularOperacion() {
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    let opcion = prompt(
        "Elige una opción:\n" +
        "1. Sumar\n" +
        "2. Restar\n" +
        "3. Multiplicar\n" +
        "4. Dividir"
    );
    let resultado;
    if (opcion === "1") {
        resultado = num1 + num2;
        alert(`Resultado de la suma: ${resultado}`);
    } else if (opcion === "2") {
        resultado = num1 - num2;
        alert(`Resultado de la resta: ${resultado}`);
    } else if (opcion === "3") {
        resultado = num1 * num2;
        alert(`Resultado de la multiplicación: ${resultado}`);
    } else if (opcion === "4") {
        if (num2 !== 0) {
            resultado = num1 / num2;
            alert(`Resultado de la división: ${resultado}`);
        } else {
            alert("Error: No se puede dividir por cero.");
        }
    } else {
        alert("Opción no válida. Intenta de nuevo.");
    }
}

function sumarNumerosPares() {
    let n = parseInt(prompt("¿Cuántos números pares quieres sumar?"));
    let suma = 0;
    let pares = [];
    for (let i = 1; i <= n; i++) {
        let par = i * 2; // Genera el i-ésimo número par
        pares.push(par);
        suma += par;
    }
    alert(`Números pares: ${pares.join(" + ")}\nSuma total = ${suma}`);
}

function sumarPrimerosPares() {
    let n = parseInt(prompt("¿Cuántos números pares quieres sumar?"));
    let suma = 0;
    let pares = [];
    for (let i = 1; i <= n; i++) {
        let par = i * 2;
        pares.push(par);
        suma += par;
    }
    alert(`Los ${n} primeros números pares son: ${pares.join(" + ")}\nSuma total = ${suma}`);
}

function sumarNumerosImpares() {
    let n = parseInt(prompt("¿Cuántos números impares quieres sumar?"));
    let suma = 0;
    let impares = [];
    for (let i = 0; i < n; i++) {
        let impar = i * 2 + 1;
        impares.push(impar);
        suma += impar;
    }
    alert(`Los ${n} primeros números impares son: ${impares.join(" + ")}\nSuma total = ${suma}`);
}

function sumarNPrimerosImpares() {
    let n = parseInt(prompt("¿Cuántos números impares quieres sumar?"));
    let suma = 0;
    let impares = [];
    for (let i = 0; i < n; i++) {
        let impar = i * 2 + 1;
        impares.push(impar);
        suma += impar;
    }
    alert(`Los ${n} primeros impares son: ${impares.join(" + ")}\nSuma total = ${suma}`);
}

function sumarNMultiplosDe3() {
    let n = parseInt(prompt("¿Cuántos múltiplos de 3 quieres sumar?"));
    let suma = 0;
    let multiplos = [];
    for (let i = 1; i <= n; i++) {
        let multiplo = i * 3;
        multiplos.push(multiplo);
        suma += multiplo;
    }
    alert(`Los ${n} primeros múltiplos de 3 son: ${multiplos.join(" + ")}\nSuma total = ${suma}`);
}

function calcularFactorial() {
    let n = parseInt(prompt("Ingresa un número para calcular su factorial (N!)"));
    if (n < 0) {
        alert("El factorial no está definido para números negativos.");
        return;
    }
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i; // Multiplica factorial por i en cada paso
    }
    alert(`${n}! = ${factorial}`);
}

function convertirCelsiusAFahrenheit() {
    let celsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));
    let fahrenheit = (celsius * 9/5) + 32;
    alert(`${celsius}°C equivale a ${fahrenheit.toFixed(2)}°F`);
}

function palabraMasLarga() {
    let frase = prompt("Escribe una frase:");
    // Separa la frase en palabras
    let palabras = frase.split(" ");
    let masLarga = "";
    for (let i = 0; i < palabras.length; i++) {
        // Si la palabra actual es más larga que la guardada, se reemplaza
        if (palabras[i].length > masLarga.length) {
            masLarga = palabras[i];
        }
    }
    alert(`La palabra más larga es: "${masLarga}" con ${masLarga.length} letras.`);
}

function imprimirNumerosPrimos() {
    let n = parseInt(prompt("Ingresa un número:"));
    for (let num = 2; num <= n; num++) {
        let esPrimo = true;
        // Verifica si el número es divisible por algún número menor que él mismo
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                esPrimo = false;
                break;
            }
        }
        // Si es primo, lo imprime
        if (esPrimo) {
            console.log(num);
        }
    }
}

function contarCaracteres() {
    let input = prompt("Ingresa un texto:");
    // Verifica si el usuario cancela o no ingresa nada
    if (!input) {
        alert("No se ha ingresado un texto válido.");
        return;
    }
    let contador = {};
    // Recorre cada carácter del texto
    for (let i = 0; i < input.length; i++) {
        let caracter = input[i];
        // Si el carácter ya está en el objeto, incrementa su contador
        if (contador[caracter]) {
            contador[caracter]++;
        } else {
            // Si no está, lo inicializa con 1
            contador[caracter] = 1;
        }
    }
    // Crea un mensaje con el conteo de caracteres
    let resultado = "";
    for (let caracter in contador) {
        resultado += `${caracter}: ${contador[caracter]}\n`;
    }
    // Muestra el resultado con alert
    alert(`Conteo de caracteres:\n" ${resultado}`);
}

function imprimirPares() {
    let n = parseInt(prompt("¿Cuántos números deseas ingresar?"));
    let numeros = [];
    // Leer N números
    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt(`Ingresa el número ${i + 1}:`));
        numeros.push(num);
    }
    // Filtrar y mostrar solo los números pares
    let pares = numeros.filter(num => num % 2 === 0);
    // Mostrar el resultado
    alert("Los números pares son: " + pares.join(", "));
}
