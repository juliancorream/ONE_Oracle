const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");
const precioCiudad = new Array("500","400","380","200");
const presupuestoDisponible = 210;

let i = 0;
//While... 0 o mas veces
//Do... 1 o mas veces

while(precioCiudad[i] > presupuestoDisponible && i < ciudadesDisponibles.length){
    i++;
}
if (i == ciudadesDisponibles.length)
    console.log("No Tenemos pasajes Disponibles");
else
    console.log("Puedes comprar pasajes para: " + ciudadesDisponibles[i]);