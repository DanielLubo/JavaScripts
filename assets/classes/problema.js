const fher = {
    nombre: 'fernando',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre}, edad: ${this.edad}`);
    }
}

const pedro = {
    nombre: 'el pepe',
    edad: 15,
}

fher.imprimir();

// const ana = {
//     nombre: 'ana',
//     edad: 15,

// }

function Persona ( nombre, edad) {
    console.log('Se ejecuto la linea');
    this.nobre = nombre;
    this.edad = edad;
    
    this.imprimir = function () {
        console.log(`Nombre: ${this.nombre}, edad: ${this.edad}`);
    }
}

const maria = new Persona('Maria', 18);
const tuvieja = new Persona('uy', 99);
console.log(maria);
console.log(tuvieja);
maria.imprimir();