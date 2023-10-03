function moto(MARCA, MODELO, ANNIO){ //Template de los nuevos objetos
    this.marca= MARCA;
    this.modelo= MODELO;
    this.annio= ANNIO;
}

var motoNuevo = new moto("Bajaj", "Domionar", 2022);
var motoNuevo2 = new moto("BMW", "GS 850", 2018);
var motoNuevo2 = new moto("Honda", "African twin", 2023);

console.log(motoNuevo);
