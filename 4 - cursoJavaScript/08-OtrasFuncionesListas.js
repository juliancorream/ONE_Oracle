//Definicion de una lista con tipo de datos alfanumerico
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");
//console.log(ciudadesDisponibles);

//definicion de una lista abreviada
const paisesDisponibles = ["Colombia", "Peru", "Chile", "Brasil", "Argentina", "Uruguay", "Venezuela"];
//console.log(paisesDisponibles);

const cantidadDeCiudades = ciudadesDisponibles.length;
console.log(`En la Lista de ciudades tenemos ${cantidadDeCiudades} elementos`);
//abreviando para mostrar la canidad de elementos
console.log(`En la Lista de paises tenemos ${paisesDisponibles.length} elementos`);


//Eliminar el primer elemento del array
ciudadesDisponibles.shift();
console.log(ciudadesDisponibles);
console.log(`En la Lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);

//Eliminar el ultimo elemento del array
ciudadesDisponibles.pop();
console.log(ciudadesDisponibles);
console.log(`En la Lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);


//filtro de elementos de la lista

const paisesFiltrados = paisesDisponibles.filter((e)=> e.length > '6');
console.log(paisesFiltrados);

//unificar una lista para que me imprima los paises separados por un caracter especifico para el ejemplo un guion
console.log(paisesDisponibles.join('-'));

//para ordenar una lista
console.log(paisesDisponibles.sort());
console.log(paisesDisponibles);

//conocer la posicion de un elemento
console.log(`Peru esta en la posicion: ${paisesDisponibles.indexOf('Peru')}`);

//Unificar 2 listas
const listaPaisesYCiudades = paisesDisponibles.concat(ciudadesDisponibles);
console.log('lista de Paises Y Ciudades: ');
console.log(listaPaisesYCiudades);
console.log('lista de Paises: ');
console.log(paisesDisponibles);









