import { cuenta } from "./cuenta.js"

export class cuentaNomina extends cuenta{
    constructor(cliente, numero, agencia, saldo) {
        super(cliente, numero, agencia, saldo);
    }

    retirarDeCuenta(valor) {
        super._retirarDeCuenta(valor, 1);
    }
}