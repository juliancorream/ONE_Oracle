//Tipos de datos

//Alfanumerico
let nombrePasajero = "Pedro Silva";
nombrePasajero = "Ramon Silva";
//console.log(nombrePasajero);

//Numerico
let valorBoleto = 1000;
let tasaEmbarque = 60;
const impuestoAeropuerto = 100;
const porcentajeTasaEmbarque = 60/100;
var gestionAgencia = 100;
//console.log(valorBoleto);

//Logicos (true, false)
let boletoActivo = true;
//console.log(boletoActivo);

//Operaciones aritmeticas

//suma
let totalBoletos = valorBoleto + tasaEmbarque + gestionAgencia;
//console.log(totalBoletos);

//Orden de Precedencia
//1 - ()
//2 - * y /
//3 - + y -

let totalBoletosForma2 = (valorBoleto + impuestoAeropuerto) * (valorBoleto + porcentajeTasaEmbarque) + gestionAgencia;
//console.log(totalBoletosForma2);


//concatenacion de textos
let nombrePasajeros = "Leonardo";
let apellidopPasajeros = "Correa";

let nombreCompleto = nombrePasajeros + apellidopPasajeros;
let pasaporte = parseFloat('1000') + parseInt('12');
let multiplicacion = parseInt('1000') / parseFloat('10');
console.log(nombreCompleto);
console.log(pasaporte);
console.log(multiplicacion);


let noEsUnNumero = parseInt('AASASA');
console.log(noEsUnNumero);






