var Estudiantes = ["Albert", "Eduardo", "Nuñez", "Nieto"];

function saludarEstudiantes(Estudiantes){
    console.log( `Hola, ${Estudiantes}`);
}

for (var i=0; i<Estudiantes.length; i++){
    saludarEstudiantes(Estudiantes[i]);
}