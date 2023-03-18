//Palabra reservada const
//Espacio de memoria que luego de asignar su valor no cambia en el tiempo
const valorPasaje = 1650;

console.log(valorPasaje);

const nombrePasajero = ("Leonardo");
const apellidoPasajero = ("Lacruz");

console.log(nombrePasajero);
console.log(apellidoPasajero);


//bloque
{
    //Palabra reservada var
    //Epacio de memoria que puede cambiar en la ejecucion del programa
    //El alcance de la variable 
    var nombreCompletoDelPasajero = nombrePasajero + " " + apellidoPasajero;


    //Palabra reservada let
    //Epacio de memoria que puede cambiar en la ejecucion del programa
    let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;
    console.log("Variable con let: " + nombreCompletoPasajero);
    console.log("Variable con var: " + nombreCompletoDelPasajero);
}

//console.log("Variable con let: " + nombreCompletoPasajero); // ya no encuentra la variable let por que salio del entono del bloque.
console.log("Variable con var: " + nombreCompletoDelPasajero);