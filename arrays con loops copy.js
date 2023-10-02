var Estudiantes = ["Albert", "Eduardo", "Nuñez", "Nieto"];

function saludarEstudiantes(Estudiantes){
    console.log( `Hola, ${Estudiantes}`);
}

for(var estudiante of Estudiantes){
    saludarEstudiantes(estudiante);
}