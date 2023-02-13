function converter() {
    let celsisus = document.getElementById("celsius").ariaValueMax;

    farenheit = celsisus * 1.8 +32;

    document.getElementById("farenheit").value = farenheit;
}