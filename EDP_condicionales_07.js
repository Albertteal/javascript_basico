//pedir una hora, minuto y segundo y mostrar la hora en el segundo siguiente
var hora = prompt("Ingrese la hora");
var minuto = prompt("Ingrese los minutos");
var segundos = prompt("Ingrese los segundos");

segundos ++

if (segundos>=60){
    segundos =0;
    minuto++;
}




if (minuto>=60){
    hora++;
    minuto = 0
}


if(hora>24 && minuto === 60){
    hora = 0;

}
else if(hora<24){

}
console.log(`La nueva hora son las ${hora}:${minuto}:${segundos}`);