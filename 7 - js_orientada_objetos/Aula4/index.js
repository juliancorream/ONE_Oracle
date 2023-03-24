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
    #saldo;
    agencia;

    constructor(){
        this.#saldo = 0;
        this.numero = '';
        this.agencia ='';
    }

    depositoEnCuenta (valor){
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta (valor){
        if (valor <= this.#saldo)
            this.#saldo -= valor;
            return this.#saldo;
    }

    verSaldo(){
        return this.#saldo;
    }
}

cuentaJulian = new cuentaCorriente();

let saldo = cuentaJulian.verSaldo();
console.log(`El saldo Actual es ${saldo}`)

saldo = cuentaJulian.depositoEnCuenta(100);
console.log(`El saldo Actual es ${saldo}`)

saldo = cuentaJulian.retirarDeCuenta(100);
console.log(`El saldo Actual es ${saldo}`)

saldo = cuentaJulian.depositoEnCuenta(10);
console.log(`El saldo Actual es ${saldo}`)




