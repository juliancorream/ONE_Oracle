//Operadores de comparacion

const ciudadDestino = "Santiago";
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");

//Palabra reservada if Evalua una condicion

//la comparcion del triple 0 valida tanto el valor como el dato del campo que sea numero o string etc.....
const valorPasaje = 1000;

if (valorPasaje === 1000){
    console.log('El pasaje vale 1000');
}

//Operadores Logicos 
//Opreador AND que significa (Y) y se representa && se deben cumplir las 2 condiciones
//Operador OR que significa (O) y se representa || se debe cumplir 1 condcion al menos
//Operador NOT que significa (NO) y se representa ! no se cumple la condicion
let edadPasajero = 17;
let estaAcompanado = true;


console.log(`Verificando pasajes para ${ciudadDestino}`);
if (!((ciudadesDisponibles.indexOf(ciudadDestino) >= 0) &&
    (edadPasajero >= 18 || estaAcompanado))) { 
        console.log('Pasaje Disponible para Venta');
} else {
    console.log('Ciudad no Disponible para Viajar o pasajero no Cumple las Reglas');
}

//Aplicando la Logica Negativa
edadPasajero = 17;
estaAcompanado = false;


console.log(`Verificando pasajes para ${ciudadDestino}`);
if (!((ciudadesDisponibles.indexOf(ciudadDestino) >= 0) &&
    (edadPasajero >= 18 || estaAcompanado))) { 
        console.log('Ciudad no Disponible para Viajar o pasajero no Cumple las Reglas');
} else {
    console.log('Pasaje Disponible para Venta');
    
}