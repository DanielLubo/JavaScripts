const estudiantes = [
    {nombre: 'Ana', edad: 20, nota: 8.5, carrera: 'Ingeniería'},
    {nombre: 'Luis', edad: 19, nota: 7.2, carrera: 'Medicina'},
    {nombre: 'María', edad: 21, nota: 9.1, carrera: 'Ingeniería'},
    {nombre: 'Carlos', edad: 18, nota: 6.8, carrera: 'Arte'},
    {nombre: 'Sofia', edad: 22, nota: 8.9, carrera: 'Medicina'}
];

const numeros = [1, 2, 3, 4, 5];
const frutas = ['manzana', 'banana', 'naranja'];


// 16-UNSHIFT.js
// ¿QUÉ ES? Agrega elementos al INICIO del array
// ¿PARA QUÉ? Añadir elementos al principio
// RETORNA: La nueva longitud (MUTA el original)
const numerosCopia2 = [...numeros];
const longitudNueva = numerosCopia2.unshift(0, -1);
console.log('unshift - Números con nuevos al inicio:', numerosCopia2);
console.log('unshift - Nueva longitud:', longitudNueva);