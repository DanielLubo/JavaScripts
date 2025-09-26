






class Persona {


    static proObjeto ( {nombre, apellido, pais} ){
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo (){
        console.log(`Info: ${this.nombre} apellido: ${this.apellido}, Nacionalidad: ${this.pais}`);
    }
}

const nombreUno = 'Ana',
    apellidoUno = 'Sofia',
    pais = 'Cochabamba';


const angela = {
    nombre : 'Angela',
    apellido : 'Maria',
    pais: 'Colombia',
}

const personaUno = new Persona(nombreUno, apellidoUno, pais);
const personaDos = Persona.proObjeto(angela);
personaUno.getInfo();

personaDos.getInfo();