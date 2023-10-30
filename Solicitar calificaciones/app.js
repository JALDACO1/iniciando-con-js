function promedio(){
    let cali1 = parseFloat (document.getElementById("calificacion1").value);
    let cali2 = parseFloat(document.getElementById("calificacion2").value);
    let cali3 = parseFloat(document.getElementById("calificacion3").value);
    promedio = ((cali1+cali2+cali3)/(3));
    document.write ('Tu promedio es de: '+promedio+' ')
    if (promedio >= 8) {
        document.write ('¡Felicidades, lo lograste!')
     } else {
        document.write ('¡Lo siento, tienes ordinario!')
     }
}