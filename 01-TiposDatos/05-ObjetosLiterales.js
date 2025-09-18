// Crear objeto literal
let persona = {
    nombre: "Juan",
    edad: 30,
    esEstudiante: true,
    hobbies: ["leer", "nadar"]
};

// Acceder a propiedades
console.log(persona.nombre);        // "Juan" (notación punto)
console.log(persona["edad"]);       // 30 (notación corchetes)

// Agregar/modificar propiedades
persona.apellido = "Pérez";         // Agregar
persona.edad = 31;                  // Modificar
persona["trabajo"] = "Desarrollador"; // Agregar con corchetes

// Eliminar propiedades
delete persona.esEstudiante;

// Verificar si existe propiedad
console.log("nombre" in persona);     // true
console.log(persona.hasOwnProperty("edad")); // true




let personaje = {
    nombre: 'Mi cara cuando',
    edad: 23,
    vivo : true,
    logros: {
        elFin: 'Es el fin?',
        granjero: true,
        noEsHierronico: false,
    },
    activa: 'Royal Guard',
    pasiva: 'Vacio Inconmensurable',
    gatos: ['German Cat', 'Chinise Cat', 'Huh', 'oiiaioiiai'],
    direccion:{
        ip: '27.1289.23.189',
        ubicacion: 'La casa de tu vieja',
    }
};

console.log(personaje);
console.log('Nombre', personaje.nombre);

console.log(personaje['activa']);
console.log('Edada: ',personaje.edad);

console.log('Logro_Granjero: ',personaje.logros.granjero);


console.log(personaje.nombre, 'Tiene', personaje.gatos.length, 'Gatos');
console.log('Ultimo gato Adquirido: ', personaje.gatos[personaje.gatos.length - 1 ]);


const x = "vivo";
console.log("Vivo", personaje[x]);

delete personaje.edad;
console.log(personaje);

personaje.casado = true;


const entriesPares = Object.entries(personaje);
console.log(entriesPares);

//con esta forma se congela el objeto como estaba al momento de esta instruccion 
//y no me permite mutar alguno de los elementos, mas no a los objetos dentro del objeto
Object.freeze(personaje);

personaje.dinero = 1000000000;
console.log(personaje);


const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({propiedades});
console.log({valores});