console.log("Funcionando correctamente");

function temperaturaC(){
    let temp = 16;
    if (temp <= 0) {
        alert("Hace frío");
    } else if (temp) {
        alert("La temperatura es agradable");
    }
}

function Productopares(){
    let array = [2,4,6,7,10,12];
    let mult = array[0] * array[1] * array[2] * array[4] * array[5];
    alert(`El arreglo es ${array.join(" - ")}:\nResultado ${mult} `)
}