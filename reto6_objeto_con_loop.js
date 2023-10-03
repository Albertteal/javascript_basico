var MARCA = [
    "BMW",
    "BAJAJ",
    "SUZUKI",
    "KAWASAKI"
]

var MODELO = [
    "GS",
    "DOMINAR",
    "VSTROM",
    "VERSYS"
]

var ANIIO = [
    2018,
    2019,
    2020,
    2021,
]


function Motos(MARCA,MODELO,ANIIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.aniio = ANIIO;
}

var motos = [];

for (var i = 0; MARCA.length > i && MODELO.length > i &&
    ANIIO.length > i; i++){
        var NuevaMoto = new Motos(MARCA[i], MODELO[i], ANIIO[i]);
            console.log(NuevaMoto);
    }

