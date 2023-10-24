//codigo que le pida al usuario su edad y si es mayor de edad, 
//le pregunte su nombre y apelldio y lo salude en el dom "hola juan"
//si no, le ponga en el DOME, ¡lo siento no eres mayor de edad!

let Edad = prompt ("Dame tu edad");
    Number (edad);
if (edad >= 18) {
    let nombre= ("Dame tu nombre");
    let apellido= ("Dame tu apellido");
    document.write ("hola " + nombre + " "+ apellido )

} else {
    document.write ("lo siento, no eres mayor de edad");
    
}