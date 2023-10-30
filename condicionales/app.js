//condicionales en programacion son el IF, IF ELSE, SWITCH
//anidar: tener un proceso dentro de otro
//identacion: espacio hacia adentrro que te marca la posicion de cada operacion 

// let numero1 = 23;
// let numero2= 20;

// if(numero1 > numero2) {
//     console.log('El numero : '+numero1 + ' es mayor que el numero '+numero2);
// }else{
//     console.log('El numero : '+numero1 + ' es mayor que el numero '+numero2);
// }

//pedir la edad del usuario decirle si es mayor de edad siempre y cuando te de un valor mayor a cero

//let edad = prompt('Dame tu edad');

// if(edad> 0){
//     if (edad >= 18){
//         document.write("eres mayor de edad");
//     }else {
//         document.write("eres menor de edad");
//     }
// }else {
//     document.write("edad no valida");
// }
// let dia = prompt('dame el dia de la semana').toLowerCase();


// switch (dia) {
//     case 'lunes':
//         console.log('el dia que seleccionaste es lunes');
//         break;
//     case 'martes':
//         console.log('el dia que seleccionaste es martes');
//         break;
//     case 'miercoles':
//         console.log('el dia que seleccionaste es miercoles');
//         break;
//     case 'jueves':
//         console.log('el dia que seleccionaste es jueves');
//         break;
//     case 'viernes':
//         console.log('el dia que seleccionaste es viernes');
//         break;
//     case 'sabado':
//         console.log('el dia que seleccionaste es sabado');
//         break;
//     case 'domingo':
//         console.log('el dia que seleccionaste es domingo');
//         break;
//     default:
//         console.log('no se reconoce el dia');
//         break;
// }

//operador ternario

// let numero1 = 25;
// let numero2 = 20;
//                     //condicion ? true : false
// //los dos puntos dividen en true or false
// let valor = (numero1 > numero2) ? 'el numero1 es mayor':'el numero2 es mayor';
// console.log(valor);

//PEDIR DOS NUMEROS Y QUE EL PROGRAMA NOS DIGA CUAL ES EL MAYOR, CUAL ES EL MENOR Y SI SON IGUALES
//  let numero1 = prompt('Dame el primer numero');
//  let numero2 = prompt('Dame el segundo numero');

// if (numero1 < numero2){
//      document.write('el numero 1 es mayor que el numero2');
//     }else if (numero1 > numero2) {
//         document.write('el numero 2 es mayor que el numero1');
//     }else {
//                 document.write('los numero son iguales');
//      }

    //PEDIR UN NUMERO Y QUE ME DIGA SI ES PAR O IMPAR EN CONSOLA  EN EL NUMERO MOD 2 O NUMERO % 2 = RESIDUO
//       let num = prompt ('dame un numero');
//       if (num%2==0){
//            console.log('el numero es par');   
//      } else {
//          console.log('el numero es impar')
//   }

    //PEDIR DOS NUMERO ENTEROS Y DEVOLVER EL COCIENTE O SEA EL RESULTADO DE DIVIDIR EL NUMERO 1 ENTRE EL 2, PERO SI UNO DE LOS NUMEROS ES 0 NO HACER NADA Y MANDAR 
//    let numero1 = prompt('dame el primer numero');
//    let numero2 = prompt('dame el segundo numero');
//   let operacion = numero1 / numero2
//    if (numero1==0) {
//       document.write('ERROR');
//    } else if (numero2==0){
//           document.write('ERROR');
//       }else {
//      document.write('El resultado= '+ operacion);
//   }
//Programa que pida dos números y pregunte cuál operación quiere hacer con los números, sumar, restar, multiplicar o dividir.
 function operaciones(num1, num2, operacion) {
     let resultado;
     switch (operacion) {
         case 'sumar':
             resultado = num1 + num2;
             break;
         case 'restar':
             resultado = num1 - num2;
             break;
         case 'multiplicar':
             resultado = num1 * num2;
             break;
         case 'dividir':
             if (num2 === 0) {
                 return 'No se puede dividir por cero';
             }
             resultado = num1 / num2;
             break;
         default:
     }
     return resultado;
 }
 let num1 = parseFloat(prompt('Ingrese el primer número:', '0'));
 let num2 = parseFloat(prompt('Ingrese el segundo número:', '0'));
 let operacion = prompt('Ingrese la operación que desea realizar (sumar, restar, multiplicar, dividir):');

 let resultado = operaciones(num1, num2, operacion);s
     document.write('El resultado de la operación es: ' + resultado);
 

