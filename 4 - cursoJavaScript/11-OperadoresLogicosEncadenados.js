const ciudadDestino = "Bogota";
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");

let edadPasajero = 18;
let estaAcompanado = true;
let tienePasaporte = true;
let estacasado = false;

console.log(`Verificando pasajes para ${ciudadDestino}`);

//A && B || C
if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0 &&
    edadPasajero >= 18 && 
    tienePasaporte &&
    !estacasado) { 
    console.log('Paquete para solteros Disponible para Venta');
} else {
    console.log('Ciudad no Disponible para Viajar o pasajero no Cumple las Reglas');
}