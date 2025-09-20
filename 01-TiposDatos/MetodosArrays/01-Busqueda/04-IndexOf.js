const estudiantes = [
    {nombre: 'Ana', edad: 20, nota: 8.5, carrera: 'Ingeniería'},
    {nombre: 'Luis', edad: 19, nota: 7.2, carrera: 'Medicina'},
    {nombre: 'María', edad: 21, nota: 9.1, carrera: 'Ingeniería'},
    {nombre: 'Carlos', edad: 18, nota: 6.8, carrera: 'Arte'},
    {nombre: 'Sofia', edad: 22, nota: 8.9, carrera: 'Medicina'}
];

const numeros = [1, 2, 3, 4, 5];
const frutas = ['manzana', 'banana', 'naranja'];

// 04-INDEXOF.js
// ¿QUÉ ES? Busca la posición de un elemento específico
// ¿PARA QUÉ? Encontrar el índice de un valor primitivo
// RETORNA: El índice o -1 si no existe
const posicionNaranja = frutas.indexOf('naranja');
console.log('indexOf - Posición de naranja:', posicionNaranja);