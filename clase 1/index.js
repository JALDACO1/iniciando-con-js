//codigo que le pida al usuario su edad y si es mayor de edad, 
//le pregunte su nombre y apelldio y lo salude en el dom "hola juan"
//si no, le ponga en el DOME, ¡lo siento no eres mayor de edad!

let edad = prompt('ingresa tu edad');
let nombre = prompt('nombre');
    if (edad >= 18) {
        document.write('Hola '+ nombre);
    } 
    else {
        document.write('lo siento, eres menor de edad');
    }



