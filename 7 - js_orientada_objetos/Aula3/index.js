/* DEFINICION DE CLASES */

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

    constructor(){
        this.saldo = 0;
    }

    depositoEnCuenta (valor){
        this.numero = '';
        this.agencia ='';
        this.saldo += valor;
    }

    retirarDeCuenta (valor){
        this.saldo -= valor;
    }
}

cuentaJulian = new cuentaCorriente();
//cuentaJulian.saldo = 0;

cuentaJulian.depositoEnCuenta(100);
console.log(cuentaJulian);
cuentaJulian.retirarDeCuenta(50);
console.log(cuentaJulian);


