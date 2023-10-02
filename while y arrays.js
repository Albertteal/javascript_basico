var estudiantes =["Maria", "Sergio", "Albert","Alexia"];

function saludarEstudiantes(estudiantes){
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}