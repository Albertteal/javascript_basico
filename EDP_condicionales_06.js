//Pedir una calificación  de 0 a 10 y mostrar de la siguiente manera: Insuficiente, Suficiente, Bien, Excelente
var cal = prompt("Ingrese su calificación");

if(cal<6){
    console.log("Insuficiente");
}
else if(cal>=6 || cal<=7){
    console.log("Suficiente");
}
else if (cal>7 || cal <=8){
    console.log("bien");
}
else{
    console.log("Excelente");
}