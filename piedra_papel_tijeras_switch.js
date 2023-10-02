var j1 = "papel";
var j2 = "piedra";


function tirada(j1,j2){
switch(true){
    case (j1===j2):
    console.log("Es un empate");
    break;

    case((j1 === "tijeras" && j2=== "papel") 
        || (j1==="piedra" && j2==="tijeras") 
        || (j1==="papel" && j2==="piedra")):
        console.log("Gana J1");
        break;
    
    case((j1==="tijeras" && j2==="piedra")
        ||(j1==="papel" && j2==="tijeras")
        ||(j1==="piedra" && j2==="papel")):
        console.log("Gana J2");
        break;

        default:
            console.log("Nadie gana, opción incorrecta");
}
}

tirada(j1,j2);