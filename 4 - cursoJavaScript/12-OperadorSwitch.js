const ciudadDestino = "Bogota";
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");

let valorPasaje = 0;

console.log(`Verificando pasajes para ${ciudadDestino}`);


/*
//condicion con if
if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0){
    if (ciudadDestino == "Bogota"){
        valorPasaje = 500;
    } else if (ciudadDestino == "Lima"){
        valorPasaje = 400;
    } else if (ciudadDestino == "Santiago"){
        valorPasaje = 380;
    } else if (ciudadDestino == "Montevideo"){
        valorPasaje = 200;
    }
    console.log(`El valor del pasaje es: ${valorPasaje}`);
} else {
    console.log('Ciudad no Disponible para Viajar');
}
*/

//condicion switch

    switch (ciudadDestino) {
        case "Bogota":
            valorPasaje = 500;
            break;
        case "Lima":
            valorPasaje = 400;
            break;
        case "Santiago":
            valorPasaje = 380;
            break;
        case "Montevideo":
            valorPasaje = 200;
            break;

        default:
            console.log('No hay Pasajes para la ciudad indicada');
            break;
    }
    if (valorPasaje > 0)
        console.log(`El valor del pasaje es: ${valorPasaje}`);

