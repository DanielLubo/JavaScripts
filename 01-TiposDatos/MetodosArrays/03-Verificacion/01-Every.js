const estudiantes = [
    {nombre: 'Ana', edad: 20, nota: 8.5, carrera: 'Ingeniería'},
    {nombre: 'Luis', edad: 19, nota: 7.2, carrera: 'Medicina'},
    {nombre: 'María', edad: 21, nota: 9.1, carrera: 'Ingeniería'},
    {nombre: 'Carlos', edad: 18, nota: 6.8, carrera: 'Arte'},
    {nombre: 'Sofia', edad: 22, nota: 8.9, carrera: 'Medicina'}
];

const numeros = [1, 2, 3, 4, 5];
const frutas = ['manzana', 'banana', 'naranja'];


// 08-EVERY.js
// ¿QUÉ ES? Verifica si TODOS los elementos cumplen una condición
// ¿PARA QUÉ? Validar que todo el array cumpla un criterio
// RETORNA: true o false
const todosAprobados = estudiantes.every(estudiante => estudiante.nota >= 6);
console.log('every - ¿Todos aprobados?', todosAprobados);