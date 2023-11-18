
function sumar() {

    let a = parseFloat(document.querySelector("#num1").value);
    let b = parseFloat(document.querySelector("#num2").value);
    document.querySelector("#suma").innerHTML=("El resultado de la suma es: " + (a + b));
}
function restar() {

    let a = parseFloat(document.querySelector("#num1").value);
    let b = parseFloat(document.querySelector("#num2").value);
    document.querySelector("#resta").innerHTML=("El resultado de la resta es: " + (a - b));
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

// Función que maneja el evento click
//? = operador ternario
let boton = document.querySelector("#boton");
                        //Evento que va a escuchar, función que se va a ejecutar
boton.addEventListener("click",function(){
    console.log("Dimos Click en el boton");
    
    boton.classList.toggle('verde');
});

boton.addEventListener("mouseover",function(){
    document.querySelector("#over").innerHTML = ("Estamos sobre el boton");
});

boton.addEventListener("mouseout",function(){
    document.querySelector("#over").innerHTML = ("Salí del boton");
});

window.addEventListener("keydown" , (e) => {
    document.querySelector("#a").innerHTML = ("Pulso una tecla");
    document.querySelector("#teclas").innerHTML = (String.fromCharCode (e.keyCode));
} );

window.addEventListener("keyup" , (e) => {
    document.querySelector("#a").innerHTML = ("Deje de presionar una tecla");
} );

window.addEventListener("load", (e) => {
    document.querySelector("#cargue").innerHTML = ("Termine de cargar la página");
});
    


    
