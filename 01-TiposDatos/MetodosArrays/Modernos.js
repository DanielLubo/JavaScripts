const estudiantes = [
    {nombre: 'Ana', edad: 20, nota: 8.5, carrera: 'Ingeniería'},
    {nombre: 'Luis', edad: 19, nota: 7.2, carrera: 'Medicina'},
    {nombre: 'María', edad: 21, nota: 9.1, carrera: 'Ingeniería'},
    {nombre: 'Carlos', edad: 18, nota: 6.8, carrera: 'Arte'},
    {nombre: 'Sofia', edad: 22, nota: 8.9, carrera: 'Medicina'}
];

const numeros = [1, 2, 3, 4, 5];
const frutas = ['manzana', 'banana', 'naranja'];


// 21-FLAT.js
// ¿QUÉ ES? Aplana arrays anidados (quita niveles de anidamiento)
// ¿PARA QUÉ? Convertir arrays multidimensionales en unidimensionales  
// RETORNA: Un nuevo array aplanado
const arrayAnidado = [1, [2, 3], [4, [5, 6]]];
const arrayAplanado = arrayAnidado.flat(); // Aplana 1 nivel
console.log('flat - Array aplanado 1 nivel:', arrayAplanado);

const arrayMuyAplanado = arrayAnidado.flat(2); // Aplana 2 niveles
console.log('flat - Array aplanado 2 niveles:', arrayMuyAplanado);

// 22-FLATMAP.js  
// ¿QUÉ ES? Combina map() + flat() en una sola operación
// ¿PARA QUÉ? Transformar y aplanar al mismo tiempo
// RETORNA: Un nuevo array transformado y aplanado
const palabras = ['hola mundo', 'javascript es genial'];
const todasLasPalabras = palabras.flatMap(frase => frase.split(' '));
console.log('flatMap - Todas las palabras:', todasLasPalabras);





// Ejemplo 1: Pipeline de transformación  
const estudiantesIngenieria = estudiantes
    .filter(est => est.carrera === 'Ingeniería')
    .map(est => ({ nombre: est.nombre, nota: est.nota }))
    .sort((a, b) => b.nota - a.nota);

console.log('Pipeline - Ingenieros ordenados por nota:', estudiantesIngenieria);

// Ejemplo 2: Estadísticas completas
const estadisticas = {
    total: estudiantes.length,
    aprobados: estudiantes.filter(est => est.nota >= 7).length,
    promedio: estudiantes.reduce((sum, est) => sum + est.nota, 0) / estudiantes.length,
    notaMasAlta: Math.max(...estudiantes.map(est => est.nota)),
    hayExcelentes: estudiantes.some(est => est.nota >= 9)
};

console.log('Estadísticas completas:', estadisticas);