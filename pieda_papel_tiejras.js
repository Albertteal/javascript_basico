var j1="papel";
var j2="piedra";

function tirada(j1,j2){
       if(j1===j2){
       console.log("Es un empate");
           }

else if((j1 === "tijeras" && j2=== "papel") 
        || (j1==="piedra" && j2==="tijeras") 
        || (j1==="papel" && j2==="piedra")){
        console.log("Gana J1");
}

else if((j1==="tijeras" && j2==="piedra")
        ||(j1==="papel" && j2==="tijeras")
        ||(j1==="piedra" && j2==="papel")){
        console.log("Gana J2");
}
                      }

tirada(j1,j2);