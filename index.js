//import { cuentaAhorro } from './cuentaAhorro.js';
import {Cliente} from './Cliente.js'
//import {CuentaCorriente} from './CuentaCorriente.js';
import { cuenta } from './cuenta.js';

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new cuenta(cliente, '1', '001', 0);
const cuentaDeMaria = new cuenta(cliente2,'2','002', 0);

const cuentaAhorroLeonardo = new cuenta(cliente, '9985', '001', 0);

    console.log(cuentaDeLeonardo);
    cuentaDeLeonardo.depositoEnCuenta(150);
    console.log(cuentaDeLeonardo.verSaldo());
    cuentaDeLeonardo.retirarDeCuenta(70);
    console.log(cuentaDeLeonardo.verSaldo());

    console.log(cuentaAhorroLeonardo);
    cuentaAhorroLeonardo.depositoEnCuenta(200);
    console.log(cuentaAhorroLeonardo.verSaldo());
    cuentaAhorroLeonardo.retirarDeCuenta(120);
    console.log(cuentaAhorroLeonardo.verSaldo());