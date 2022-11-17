export class sistemaAutenticacion{
    static login(usuario, clave){
        if ('autenticable' in usuario 
            && usuario.autenticable instanceof Function)//ayuda a proteger el codigo a pesar de que la funcion se hizo atributo
            return usuario.autenticable(clave);
        else 
            return false;
    }
} 