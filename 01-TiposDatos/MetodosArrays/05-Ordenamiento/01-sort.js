const estudiantes = [
    {nombre: 'Ana', edad: 20, nota: 8.5, carrera: 'Ingeniería'},
    {nombre: 'Luis', edad: 19, nota: 7.2, carrera: 'Medicina'},
    {nombre: 'María', edad: 21, nota: 9.1, carrera: 'Ingeniería'},
    {nombre: 'Carlos', edad: 18, nota: 6.8, carrera: 'Arte'},
    {nombre: 'Sofia', edad: 22, nota: 8.9, carrera: 'Medicina'}
];

const numeros = [1, 2, 3, 4, 5];
const frutas = ['manzana', 'banana', 'naranja'];


// 11-SORT.js
// ¿QUÉ ES? Ordena los elementos del array  
// ¿PARA QUÉ? Organizar datos alfabéticamente o numéricamente
// RETORNA: El mismo array modificado (MUTA el original)
const frutasOrdenadas = [...frutas].sort(); // Copia para no mutar el original
console.log('sort - Frutas ordenadas:', frutasOrdenadas);

// Para números necesitas función de comparación
const numerosOrdenados = [...numeros].sort((a, b) => b - a); // Descendente
console.log('sort - Números descendente:', numerosOrdenados);

// Ordenar objetos
const estudiantesPorNota = [...estudiantes].sort((a, b) => b.nota - a.nota);
console.log('sort - Estudiantes por nota:', estudiantesPorNota.map(e => `${e.nombre}: ${e.nota}`));