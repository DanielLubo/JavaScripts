const estudiantes = [
    {nombre: 'Ana', edad: 20, nota: 8.5, carrera: 'Ingeniería'},
    {nombre: 'Luis', edad: 19, nota: 7.2, carrera: 'Medicina'},
    {nombre: 'María', edad: 21, nota: 9.1, carrera: 'Ingeniería'},
    {nombre: 'Carlos', edad: 18, nota: 6.8, carrera: 'Arte'},
    {nombre: 'Sofia', edad: 22, nota: 8.9, carrera: 'Medicina'}
];

const numeros = [1, 2, 3, 4, 5];
const frutas = ['manzana', 'banana', 'naranja'];

// 17-SLICE.js  
// ¿QUÉ ES? Extrae una porción del array SIN modificar el original
// ¿PARA QUÉ? Obtener una copia de una parte específica
// RETORNA: Un nuevo array con la porción seleccionada
const primerasTresFrutas = frutas.slice(0, 2); // Del índice 0 al 1 (2 no incluido)
console.log('slice - Primeras dos frutas:', primerasTresFrutas);
console.log('slice - Frutas original sin cambios:', frutas);