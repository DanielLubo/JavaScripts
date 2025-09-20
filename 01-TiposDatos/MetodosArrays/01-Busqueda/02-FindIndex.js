const estudiantes = [
    {nombre: 'Ana', edad: 20, nota: 8.5, carrera: 'Ingeniería'},
    {nombre: 'Luis', edad: 19, nota: 7.2, carrera: 'Medicina'},
    {nombre: 'María', edad: 21, nota: 9.1, carrera: 'Ingeniería'},
    {nombre: 'Carlos', edad: 18, nota: 6.8, carrera: 'Arte'},
    {nombre: 'Sofia', edad: 22, nota: 8.9, carrera: 'Medicina'}
];

const numeros = [1, 2, 3, 4, 5];
const frutas = ['manzana', 'banana', 'naranja'];

// 02-FINDINDEX.js  
// ¿QUÉ ES? Encuentra el ÍNDICE del primer elemento que cumple una condición
// ¿PARA QUÉ? Saber la posición de un elemento en el array
// RETORNA: El índice (número) o -1 si no lo encuentra
const indiceEstudiante = estudiantes.findIndex(estudiante => estudiante.nota > 9);
console.log('findIndex - Índice del estudiante con nota > 9:', indiceEstudiante);