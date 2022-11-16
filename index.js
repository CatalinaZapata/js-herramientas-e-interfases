import {Cliente} from './Cliente.js';

import { Empleado} from './empleados/Empleado.js';
import { Director } from './empleados/director.js';
import { Gerente } from './empleados/gerente.js';

import { sistemaAutenticacion } from './sitemaAutenticacion.js';

const empleado = new Empleado ('Juan Perez', '1234321', 10000);
const gerente = new Gerente ('Pedro Rivas', '567432', 12000);
//const director = new Director ('Elena Moreno', '987656789', 15000);

    empleado.asignarClave('12345');
    gerente.asignarClave('12345');

    console.log(sistemaAutenticacion.login(empleado, '12345')); 
    console.log(sistemaAutenticacion.login(gerente, '12345')); 

const cliente = new Cliente('Leonardo','13804050','123224');
cliente.asignarClave('01111');
console.log(sistemaAutenticacion.login(cliente, '01111'));
