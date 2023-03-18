const ciudad1 = "Bogota";
const ciudad2 = "Lima";
const ciudad3 = "Snatiago";


//Definicion de una lista con tipo de datos alfanumerico
const ciudadesDisponibles = new Array("Bogota","Lima","Snatiago");
//console.log(ciudadesDisponibles);

//definicion de una lista abreviada
const paisesDisponibles = ["Colombia", "Peru", "Chile", "Brasil", "Argentina"];
//console.log(paisesDisponibles);


//al llamar la variable el array con el .push es para agregar un elemento al final del array
paisesDisponibles.push('Uruguay');
ciudadesDisponibles.push('Montevideo');

//al llamar la variable el array con el .unshift es para agregar un elemento al inicio del array
paisesDisponibles.unshift('Ecuador');
ciudadesDisponibles.unshift('Quito');
//imprimir ejemplo anterior encima

console.log(ciudadesDisponibles);
console.log(paisesDisponibles);

//instruccion para imprimir el primer campo del array ya que la priemra posicion de un array es la 0
console.log(paisesDisponibles[0]);
console.log(ciudadesDisponibles[0]);

//Para eliminar 2 campos del array de paises y agregar 2 nuevos en su lugar es:
paisesDisponibles.splice(1,2,"Venezuela", "Paraguay");
console.log(paisesDisponibles);







