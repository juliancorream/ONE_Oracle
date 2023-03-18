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

//for... valor inicial para un valor final
let ciudadSeleccionada = '';

for (let i = 0; i < datos.length /*&& ciudadSeleccionada == ''*/ ; i++) {
    if (datos[i].precio <= presupuestoDisponible){
        ciudadSeleccionada = datos[i].ciudad;
        break;
    } 
    
}

if (ciudadSeleccionada == '')
    console.log("No Tenemos pasajes Disponibles");
else
    console.log("Puedes comprar pasajes para: " + ciudadSeleccionada);