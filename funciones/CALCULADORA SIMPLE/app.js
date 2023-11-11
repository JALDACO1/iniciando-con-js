
function sumar() {

    let a = parseFloat(document.querySelector("#num1").value);
    let b = parseFloat(document.querySelector("#num2").value);
    document.querySelector("#suma").innerHTML=("El resultado de la suma es: " + (a + b));
}
function restar() {

    let a = parseFloat(document.querySelector("#num1").value);
    let b = parseFloat(document.querySelector("#num2").value);
    document.querySelector("#resta").innerHTML=("El resultado de la resta es: " + (a + b));
}
function multiplicar() {

    let a = parseFloat(document.querySelector("#num1").value);
    let b = parseFloat(document.querySelector("#num2").value);
    document.querySelector("#multiplicacion").innerHTML=("El resultado de la multiplicación es: " + (a * b));
}

function dividir() {
    let a = parseFloat(document.querySelector("#num1").value);
    let b = parseFloat(document.querySelector("#num2").value);
    document.querySelector("#division").innerHTML=("El resultado de la división es: " + (a / b));
}
