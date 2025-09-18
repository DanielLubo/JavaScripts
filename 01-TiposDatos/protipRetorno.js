// function crearPersona(nombre, apellido){
//     return{ nombre, apellido,}
// }

const crearPersona = (nombre, apellido) => ({nombre, apellido});

const persona = crearPersona('Daniel', 'Lubo');
console.log(persona);


function imprimeArgumentos (){
    console.log(arguments);
}

const impresion = (edad, ...args) =>{
    // console.log({edad, args});
    return args;
}

imprimeArgumentos(10, true, false, 'hola');

const argumentos = impresion(12, false, "true");;

console.log({argumentos});

const [casado, vivo, nombre, saludo] = impresion(90, true, false, 'daniel', 'hola');
console.log({casado, vivo, nombre, saludo});


const {apellido} = crearPersona('Larua', 'Sofia');
console.log({apellido});


const Yo = {
    nombre: 'Daniel',
    apellido: 'Lubo',
    edad: 20,
    ubicacion: 'Platanera',
    pc: true,
    celular: true,
    estudios : {
        tecnico: 'Nomina y prestaciones Sociales',
        tecnologo: 'ADSO',
    },
    gustos : [
        'Aviacion',
        'Ingenieria de Software',
        'Ingenieria Aeroespacial',
        'Tecnologia',
        'Videojuegos',
    ],
    memesFav : {
        germanCat: true,
        chiniseCat: true,
        cheems: true,
        alelealellas: false,
    },
}


const imprimePersonaje = ({nombre, apellido, edad, ubicacion, pc, celular = false, estudios, gustos, memesFav}) => {
    console.log({nombre, apellido, edad, ubicacion, pc, celular, estudios, gustos, memesFav});
}

imprimePersonaje(Yo);