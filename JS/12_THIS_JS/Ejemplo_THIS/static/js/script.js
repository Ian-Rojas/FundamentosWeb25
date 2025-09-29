let contador1 = 13;
function sumarLikes() {
    document.getElementById('contadorLikes-1').textContent = contador1;
    contador1++;
}

let contador2 = 37;
function sumarLikes2() {
    document.getElementById('contadorLikes-2').textContent = contador2;
    contador2++;
}

function login(element) {
    element.innerText = "Logout";
}

function hide(element) {
    element.remove();
}