console.log("Vinculado correctamente...")
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararVariables() {
    alert("Esto es una alerta");
    // Tu código aquí
    let ahora = new Date().getFullYear();
    let fecha_nac = parseInt(prompt("¿En qué año naciste? (ej: 1990)"));
    
    if (isNaN(fecha_nac)) {
        alert("¡Debes ingresar un año válido!");
        return;
    }
    let edad = ahora - fecha_nac;
    alert(`¡Tienes ${edad} años en ${ahora}!`);
    }
    
    // Ejercicio 2: Asignación de valores
    // Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
    function asignarValores() {
    // Tu código aquí
        let var1 = prompt("Ingresa un valor para var1:");
        let var2 = var1;  // Asignación directa
        
        alert(`El valor de var2 es: ${var2}`);
    }
    
    // Ejercicio 3: Operaciones matemáticas
    // Instrucciones: Completa la función para realizar las siguientes operaciones:
    // Suma 'num1','num2' y 'num3', resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
    // Muestra los resultados en un mensaje.
    function realizarOperaciones() {
    // Solicitar valores al usuario
    let num1 = parseFloat(prompt("Ingrese el valor para num1:"));
    let num2 = parseFloat(prompt("Ingrese el valor para num2:"));
    let num3 = parseFloat(prompt("Ingrese el valor para num3:"));
    
    // Validar que los valores sean números
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Por favor ingrese valores numéricos válidos");
        return;
    }
    
    // Realizar operaciones
    let suma = num1 + num2 + num3;
    let resta = num3 - num1;
    let multiplicacion = num2 * num3;
    let division = num1 / 120;
    
    alert(`Resultados:
    Suma: ${suma}
    Resta: ${resta}
    Multiplicación: ${multiplicacion}
    División: ${division}`);
    alert( );
    // Tu código aquí
    }
    
    // Ejercicio 4: Manipulación de cadenas
    // Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'n_casa'.
    // Luego, muestra la longitud del mensaje y el antepenultimo en el mensaje. (.length)
    function manipularCadenas() {
    // Tu código aquí
    let direccion = prompt("Ingrese la direccion de su casa");
    let n_casa = prompt("Ingrese el numero que identifica su casa");
    let mensaje = `La dirección es: ${direccion} ${n_casa}`;
    let longitud = mensaje.length;
    let antepenultimo = mensaje[mensaje.length - 3]; 
    alert(`Mensaje completo: ${mensaje}
    Longitud del mensaje: ${longitud} caracteres
    Antepenúltimo carácter: '${antepenultimo}'`);
    }