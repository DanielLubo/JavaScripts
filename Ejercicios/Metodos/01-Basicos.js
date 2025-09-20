const estudiantes = [
    { nombre: "Ana", edad: 20, nota: 85 },
    { nombre: "Luis", edad: 22, nota: 78 },
    { nombre: "María", edad: 19, nota: 92 },
    { nombre: "Carlos", edad: 21, nota: 88 }
];

/**
 * Encuentra el primer estudiante mayor de 20 años
 * Encuentra el índice del estudiante con nota mayor a 90
 * Busca un estudiante que no existe (edad > 25) y observa qué devuelve
 * Encuentra el estudiante llamado "Luis"
 */


console.log('Metodos find y findIndex');

const estudianteMayor = estudiantes.find(estudiante => estudiante.edad > 20);
console.log(`El estudiante mayor a 20 anios es:`, estudianteMayor);

const mayorNota = estudiantes.findIndex(estudiante => estudiante.nota > 90);
console.log(`El indice es: ${mayorNota}`);

const estudianteUndefine = estudiantes.find(estudiante => estudiante.edad > 25);
console.log(estudianteUndefine);

const estudianteNombre = estudiantes.find(estudiante => estudiante.nombre === 'Luis');
console.log(estudianteNombre);

console.log('-------------------------');

//=====================================================================================




const numeros = [2, 4, 6, 8, 10];
const edades = [16, 18, 20, 15, 22];

/**
 * Verifica si TODOS los números son pares
 * Verifica si ALGÚN número es mayor a 8
 * Verifica si TODOS los estudiantes son mayores de edad (>= 18)
 * Verifica si ALGÚN estudiante es menor de edad
 */

console.log('Metodos some y every');

const numerosPares = numeros.every(numeros => numeros % 2 === 0);
console.log(numerosPares);

const numeroMayor = numeros.some(numeros => numeros > 8);
console.log(numeroMayor);

const todoMayores = edades.every(estudiantes => estudiantes >= 18);
console.log(todoMayores);

const menorEdad = edades.some(estudiante => estudiante < 18);
console.log(menorEdad);

console.log('-------------------------');

//======================================================================================




const frutas = ["manzana", "banana", "naranja", "uva"];
const colores = ["rojo", "azul", "verde"];

/**
 * Verifica si existe "banana" en el array
 * Verifica si existe "sandía" en el array
 * Crea una función que verifique si un color está disponible
 */


console.log('Metodo Includes');

const existeBanana = frutas.includes('banana');
console.log(existeBanana);

const existeSandia = frutas.includes('sandia');
console.log(existeSandia);


const verificacion = ( nombre ) => {
    const color = colores.includes( nombre );
    console.log(color);
    return color;
}

verificacion('rojo');