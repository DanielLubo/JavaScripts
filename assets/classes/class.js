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

const ana = new Persona('Ana Maria', 'Nose xd', 'Los huevos de pascua');
// const sofia = new Persona('Sara Sofia', 'Nose xd', 'Estudiante ingenieria');

// console.log(sofia);

ana.quienSoy();
// ana.miFrase();

ana.setComidaFavorita = 'La pizza';
// ana.comida = 'Musica';
console.log(ana.getComidaFavorita);
console.log(ana);


// Persona._conteo = 2;
console.log('Conteo estatico', Persona._conteo);
console.log(Persona.getConteo);
Persona.mensaje();



Persona.propiedadExterna = 'el pepe';

console.log(Persona.propiedadExterna);
console.log(Persona);