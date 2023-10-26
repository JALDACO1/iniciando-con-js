//condicionales en programacion son el IF, IF ELSE, SWITCH
//anidar: tener un proceso dentro de otro
//identacion: espacio hacia adentrro que te marca la posicion de cada operacion 

//let numero1 = 23;
//let numero2= 20;

//if(numero1 > numero2) {
    //console.log('El numero : '+numero1 + ' es mayor que el numero '+numero2);
//}else{
    //console.log('El numero : '+numero1 + ' es mayor que el numero '+numero2);
//}

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
let dia = prompt('dame el dia de la semana').toLowerCase();


switch (dia) {
    case 'lunes':
        console.log('el dia que seleccionaste es lunes');
        break;
    case 'martes':
        console.log('el dia que seleccionaste es martes');
        break;
    case 'miercoles':
        console.log('el dia que seleccionaste es miercoles');
        break;
    case 'jueves':
        console.log('el dia que seleccionaste es jueves');
        break;
    case 'viernes':
        console.log('el dia que seleccionaste es viernes');
        break;
    case 'sabado':
        console.log('el dia que seleccionaste es sabado');
        break;
    case 'domingo':
        console.log('el dia que seleccionaste es domingo');
        break;
    default:
        console.log('no se reconoce el dia');
        break;
}