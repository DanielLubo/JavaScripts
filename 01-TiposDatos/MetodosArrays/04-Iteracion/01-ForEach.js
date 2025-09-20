const estudiantes = [
    {nombre: 'Ana', edad: 20, nota: 8.5, carrera: 'Ingeniería'},
    {nombre: 'Luis', edad: 19, nota: 7.2, carrera: 'Medicina'},
    {nombre: 'María', edad: 21, nota: 9.1, carrera: 'Ingeniería'},
    {nombre: 'Carlos', edad: 18, nota: 6.8, carrera: 'Arte'},
    {nombre: 'Sofia', edad: 22, nota: 8.9, carrera: 'Medicina'}
];

const numeros = [1, 2, 3, 4, 5];
const frutas = ['manzana', 'banana', 'naranja'];


// 10-FOREACH.js
// ¿QUÉ ES? Ejecuta una función para cada elemento
// ¿PARA QUÉ? Realizar acciones con cada elemento (imprimir, modificar)
// RETORNA: undefined (no devuelve nada)
console.log('forEach - Lista de estudiantes:');
estudiantes.forEach((estudiante, indice) => {
    console.log(`${indice + 1}. ${estudiante.nombre} - Nota: ${estudiante.nota}`);
});