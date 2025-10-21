function showLoading(city) {
    document.getElementById("loading-message").innerText = "Cargando informe meteorológico...";
    document.getElementById("city-name").innerText = city;
    setTimeout(() => {
        document.getElementById("loading-message").innerText = "";
    }, 2000);
}

function acceptCookies() {
    document.getElementById("cookie-banner").style.display = "none";
}

function convertTemps() {
    const select = document.getElementById("tempSelect");
    const isFahrenheit = select.value === "F";

    const highs = document.querySelectorAll(".temp-high");
    const lows = document.querySelectorAll(".temp-low");

    highs.forEach(span => {
        const c = parseInt(span.dataset.c);
        span.textContent = isFahrenheit ? `${Math.round(c * 9/5 + 32)}°` : `${c}°`;
    });

    lows.forEach(span => {
        const c = parseInt(span.dataset.c);
        span.textContent = isFahrenheit ? `${Math.round(c * 9/5 + 32)}°` : `${c}°`;
    });
}
