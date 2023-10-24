"use strict"
//Declarar variables en JS 
//"var" variable global
//"let" variable
//"const"constante
//let y const nacen por que son variables con alcance o scope{}
//ECMASCRIPT 6
//let edad = prompt("Dame tu edad");
//Number(edad);
//let edadmenos = edad-5;
//console.log(edad +5);
//console.log(typeof(edad));
//console.log(nombre);
//document.write(nombre);

//tipos de texto
//let texto = 'Mi nombre es Jorge "otro texto"';
//let numero = 5;

//TIPOS DE DATOS PRIMITIVO
//String(numero);
//Number(numero) (float o integer)entero o decimal;
//Boolean(true or false)
//fecha

//let suma = true;

//let menor = (10==='10');
//console.log(menor);

//let fecha = new Date()
//operadores aritmeticos
//let suma = 1 + 2;
//let resta = 1 - 2;
//let multiplicacion = 1 * 2;
//let division = 1 / 2;
//let mod = 10 % 5;//residuo

//let uno = 1;
//uno ++   
//console.log(uno); //increment

//let dos = 2;
//dos ++   //decremento en uno
//console.log(dos); 

//operaciones racionales

//let mayor = 5 > 3;
//let menorr = 3 < 5;
//let mayorigualque = 20 >= 10;
//let menorigualque = 20 <= 10;
//let igual = 10=='10';
//let exactamenteigual = 10 === 10;
//let diferente = 10 != 30;
//console.log(diferente);

//tipos de datos especiales o compuestos

//Arrays - vectores-conjunto de datos y pueden ser diferente tipo

let frutas = ['pera', 'manzana', 'platano', null];
let numeros = ['cinco', 6, 23,'veinte'];

//Objetos

let persona = { nombre: 'jorge',edad: 18, correo:'jaldaco1@ucol.mx'}

//objeto JSON (Javascript Object Notation) - formato de intercambio de datos ligeros y descriptivos

let personas = [ 
    { nombre: 'jorge',edad: 18, correo:'jaldaco1@ucol.mx'},
    { nombre: 'luis',edad: 45, correo:'laldaco1@ucol.mx'},
    { nombre: 'karla',edad: 44, correo:'kaldaco1@ucol.mx'},
    persona, 

]
//operadores logicos o boolean (true o false)

let numero1= 10;
let numero2= 14;
//AND O Y 
let and =(numero1 >10 && numero2> 10);
//Para que un "and" tenga resultado "true" rodas las condiciones se deben de cumplir o ser verdaderas, SI una es falsa el resultado es false
//OR O O
let or= (numero1 >10 || numero2> 10);
//Para que un "or" tenga resultado "true" se debe de cumplir una sola condicion
//NOT O NEGACION
let negacion = !(numero1 > 10); true