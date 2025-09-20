const estudiantes = [
    {nombre: 'Ana', edad: 20, nota: 8.5, carrera: 'Ingeniería'},
    {nombre: 'Luis', edad: 19, nota: 7.2, carrera: 'Medicina'},
    {nombre: 'María', edad: 21, nota: 9.1, carrera: 'Ingeniería'},
    {nombre: 'Carlos', edad: 18, nota: 6.8, carrera: 'Arte'},
    {nombre: 'Sofia', edad: 22, nota: 8.9, carrera: 'Medicina'}
];

const numeros = [1, 2, 3, 4, 5];
const frutas = ['manzana', 'banana', 'naranja'];

// 12-REVERSE.js
// ¿QUÉ ES? Invierte el orden de los elementos
// ¿PARA QUÉ? Cambiar el orden de mayor a menor o viceversa  
// RETORNA: El mismo array modificado (MUTA el original)
const numerosInvertidos = [...numeros].reverse();
console.log('reverse - Números invertidos:', numerosInvertidos);