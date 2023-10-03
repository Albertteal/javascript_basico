var articulos = [
    {nombre:"Bici", costo: 3000},
    {nombre:"Tv", costo: 2500},
    {nombre:"Libro", costo: 320},
    {nombre:"Celular", costo: 10000},
    {nombre:"Laptop", costo: 20000},
    {nombre:"Teclado", costo: 2500},
    {nombre:"Audífonos", costo: 1700}
];

var articulosFiltrados = articulos.filter(function(articulo){ //me agrega a un nuevo
                                                              //array los que 
                                                              //cumplan con 
                                                              //el filtro
    return articulo.costo <= 500;
});