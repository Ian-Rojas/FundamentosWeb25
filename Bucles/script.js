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