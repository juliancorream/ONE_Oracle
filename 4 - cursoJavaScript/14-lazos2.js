//Para definir un Mapa
const datos = [
    {
        'ciudad':'Bogota', 'precio':500
    },
    {
        'ciudad':'Lima', 'precio':400
    },
    {
        'ciudad':'Santiago', 'precio':380
    },
    {
        'ciudad':'Montevideo', 'precio':200
    },
];

const presupuestoDisponible = 400;

//Correcto funciona se comenta para hacer la prueba con el Do While

/*
let i = 0;
//While... 0 o mas veces
//Do... 1 o mas veces

while(i < datos.length && datos[i].precio > presupuestoDisponible){
    i++;
}
if (i == datos.length)
    console.log("No Tenemos pasajes Disponibles");
else
    console.log("Puedes comprar pasajes para: " + datos[i].ciudad);
*/



let i = 0;
//While... 0 o mas veces
//Do... 1 o mas vecesz
let ciudadSeleccionada = "";

do{
    if (datos[i].precio <= presupuestoDisponible){
        ciudadSeleccionada = datos[i].ciudad;
        break;
    }    
    i++;
} while(i < datos.length && ciudadSeleccionada == '')
    if (ciudadSeleccionada == '')
        console.log("No Tenemos pasajes Disponibles");
else
    console.log("Puedes comprar pasajes para: " + ciudadSeleccionada);