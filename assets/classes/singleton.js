class Singleton{
    static instancia;
    nombre = '';

    constructor(nombre = ''){

        // const a = undefined;

        // console.log(a);
        // console.log(!a);
        // console.log(!!a);

        if(!!Singleton.instancia){
            return Singleton.instancia
        }
        Singleton.instancia = this;
        this.nombre = nombre;
    }
}

const instanciaUno = new Singleton('Sara Sofia');
const instanciaDos = new Singleton('Ana Maria');

console.log(`Nombre de la instancia es: ${instanciaUno.nombre}`);
console.log(`Nombre de la instancia es: ${instanciaDos.nombre}`);