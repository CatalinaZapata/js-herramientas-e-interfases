export class Cliente
{
    nombreCliente;//atributos
    dniCliente;
    rutCliente;
    #clave;

    constructor(nombreCliente, dniCliente, rutCliente) {
        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        this.rutCliente = rutCliente;
        this.#clave = '';
    }

    asignarClave(clave){//funciones
        this.#clave = clave;
    }

    autenticable(clave){
        return true;
    }
}