const estudiantes = [
    {nombre: 'Ana', edad: 20, nota: 8.5, carrera: 'Ingeniería'},
    {nombre: 'Luis', edad: 19, nota: 7.2, carrera: 'Medicina'},
    {nombre: 'María', edad: 21, nota: 9.1, carrera: 'Ingeniería'},
    {nombre: 'Carlos', edad: 18, nota: 6.8, carrera: 'Arte'},
    {nombre: 'Sofia', edad: 22, nota: 8.9, carrera: 'Medicina'}
];

const numeros = [1, 2, 3, 4, 5];
const frutas = ['manzana', 'banana', 'naranja'];


// 13-PUSH.js
// ¿QUÉ ES? Agrega elementos al FINAL del array
// ¿PARA QUÉ? Añadir nuevos elementos
// RETORNA: La nueva longitud del array (MUTA el original)
const frutasCopia1 = [...frutas];
const nuevaLongitud = frutasCopia1.push('uva', 'pera');
console.log('push - Frutas después:', frutasCopia1);
console.log('push - Nueva longitud:', nuevaLongitud);