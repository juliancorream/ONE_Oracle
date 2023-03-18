const ciudadDestino = "Lima";
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");
let edadPasajero = 17;
let estaAcompanado = false;

console.log(`Verificando pasajes para ${ciudadDestino}`);
//verificamos si el pasajero cumple las reglas
if (edadPasajero >= 18 || estaAcompanado){
    //Evaluamos si la ciudad esta disponible para viajar
    if (ciudadesDisponibles.indexOf(ciudadDestino) > -1) {
        console.log('Pasaje Disponible para Venta');
    } else {
        console.log('Ciudad no Disponible para Viajar');
    }
} else {
    if (edadPasajero >= 16 && ciudadDestino == 'Lima'){
        console.log('Pasaje Disponible para Venta');
    } else {
        console.log('Pasajero no Cumple las Reglas')
    }
}
