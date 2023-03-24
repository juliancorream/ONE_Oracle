/* PARA DEFINIR UNA CLASE EJM: */

class Cliente
{
    nombreCliente;
    dniCliente;
    rutCliente;
}

class cuentaCorriente
{
    numero;
    saldo;
    agencia;

    depositoEnCuenta (valor){
        this.saldo += valor;
    }
}


/* para crear pieza a partir de la clase, y referenciarlo*/
const cliente1 = new Cliente();
/* ya instanciado se pueden asignara al cliente los atributos de la clase Cliente */
cliente1.nombreCliente = "Claudia";
cliente1.dniCliente = "43841376";
cliente1.rutCliente = "RUT43841376"

const cuentaCorriente1 = new cuentaCorriente();
cuentaCorriente1.numero = "987654321";
cuentaCorriente1.saldo = 2000;
cuentaCorriente1.agencia = "1002"

/* ya este seria el modelo para crear clientes se crea la instancia y lugo se llama con el . y nos muestra los atributos*/
const cliente2 =new Cliente();
cliente2.nombreCliente = "Julian";
cliente2.dniCliente = "71367545";
cliente2.rutCliente = "RUT71367545";

const cuentaCorriente2 = new cuentaCorriente();
cuentaCorriente2.numero = "123456789";
cuentaCorriente2.saldo = 1000;
cuentaCorriente2.agencia = "1002"


console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(100);
console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(200);
console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(500);
console.log(cuentaCorriente2.saldo);

