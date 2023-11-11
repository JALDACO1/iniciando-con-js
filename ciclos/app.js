//estructura de control= condiciones y ciclos
//condicionales=if, if else, switch
//ciclos=for, while, do while, foreach

//DOS TIPOS DE CICLOS= definidos y indefinidos
//definidos= for, foreach Indefinidos= while, do while

//Los ciclos tienen repeticiones o iteraciones
//repeticion = iteracion

//variable asignada(contador) - condicion - paso(icrementento o decremento)
//  for (let index = 0; index < 10; index++) {
//      console.log(index);
//  }

//  let contador =1;

//  while (contador <= 10) {
//     document.write('1x' + contador+'='+(1*contador)+'<br>');
//     document.write('<br>');
//      contador++;
//  }
// let contador2 = 0;

//  do{
//     console.log('el valor de mi contador en ciclo dowhile es'+contador2)
//      contador++
//  }while (contador2 < 10);

// let index = 0;
// do {
//     console.log('1x'+index+'='+ index);
//     index++
//     index*1
// } while (index < 11);

// let hora1 = prompt('¿Cuantas horas trabajaste el lunes?');
// let hora2 = prompt('¿Cuantas horas trabajaste el martes?');
// let hora3 = prompt('¿Cuantas horas trabajaste el miercoles?');
// let hora4 = prompt('¿Cuantas horas trabajaste el jueves?');
// let hora5 = prompt('¿Cuantas horas trabajaste el viernes?');
// document.write('El lunes trabajaste:   '+ hora1('<br>'));
// document.write('El martes trabajaste:    '+ hora2);
// document.write('El miercoles trabajaste:  '+ hora3);
// document.write('El jueves trabajaste:   '+ hora4);
// document.write('El viernes trabajaste:   '+ hora5);

 let array=[]
 for (let dia = 1; dia <= 5; dia++) {
 let horasTrabajadas =prompt ('¿Cuantas horas trabajste el dia' + dia);
 array.push(horasTrabajadas);
 document.write('<br></br>');
 document.write('Trabajaste '+ horasTrabajadas + ' horas el dia'+ dia);    
 }

let sueldo=0;

for (let contador = 0; contador < array.length; contador++) {
     sueldo = sueldo + (15 * array [contador]);
    
}
document.write('Tu sueldo que recibiras en la semana es:'+ sueldo);

