class Persona {

    static _conteo = 0;
    static get getConteo(){
        return Persona._conteo + ' instancia';
    }
    static mensaje (){
        console.log(this.nombre);
        console.log('Hola a todos soy un metodo estatico');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor( nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase'){
        // if(!nombre) throw Error ('Necesario el nombre');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }


    set setComidaFavorita( comida ){
        this.comida = comida.toUpperCase() ;
    }

    get getComidaFavorita(){
        return `La comida favoria de ${this.nombre} es: ${this.comida}`;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi tal: ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.nombre} dice: ${this.frase}`);
    }
}

class Player extends Persona {
    clan = 'Sin clan';
    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);
        this.clan = 'Los papus';
    }
    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
}

// const ana = new Persona('Ana Maria', 'Nose xd', 'Los huevos de pascua');
// const sofia = new Persona('Sara Sofia', 'Nose xd', 'Estudiante ingenieria');

const yo = new Player('Sara Sofia', 'Nose xd', 'Estudiante ingenieria');
console.log(yo);
yo.quienSoy();


