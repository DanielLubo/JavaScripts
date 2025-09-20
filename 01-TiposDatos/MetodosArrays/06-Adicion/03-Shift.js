const estudiantes = [
    {nombre: 'Ana', edad: 20, nota: 8.5, carrera: 'Ingeniería'},
    {nombre: 'Luis', edad: 19, nota: 7.2, carrera: 'Medicina'},
    {nombre: 'María', edad: 21, nota: 9.1, carrera: 'Ingeniería'},
    {nombre: 'Carlos', edad: 18, nota: 6.8, carrera: 'Arte'},
    {nombre: 'Sofia', edad: 22, nota: 8.9, carrera: 'Medicina'}
];

const numeros = [1, 2, 3, 4, 5];
const frutas = ['manzana', 'banana', 'naranja'];


// 15-SHIFT.js
// ¿QUÉ ES? Elimina el PRIMER elemento
// ¿PARA QUÉ? Quitar el primer elemento
// RETORNA: El elemento eliminado (MUTA el original)  
const numerosCopia1 = [...numeros];
const primerNumero = numerosCopia1.shift();
console.log('shift - Primer número eliminado:', primerNumero);
console.log('shift - Números restantes:', numerosCopia1);
