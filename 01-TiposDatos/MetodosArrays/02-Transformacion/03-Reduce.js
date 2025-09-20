const estudiantes = [
    {nombre: 'Ana', edad: 20, nota: 8.5, carrera: 'Ingeniería'},
    {nombre: 'Luis', edad: 19, nota: 7.2, carrera: 'Medicina'},
    {nombre: 'María', edad: 21, nota: 9.1, carrera: 'Ingeniería'},
    {nombre: 'Carlos', edad: 18, nota: 6.8, carrera: 'Arte'},
    {nombre: 'Sofia', edad: 22, nota: 8.9, carrera: 'Medicina'}
];

const numeros = [1, 2, 3, 4, 5];
const frutas = ['manzana', 'banana', 'naranja'];

// 07-REDUCE.js
// ¿QUÉ ES? Reduce todo el array a UN SOLO valor
// ¿PARA QUÉ? Sumar, contar, encontrar máximo/mínimo, agrupar
// RETORNA: Un solo valor (número, string, objeto, etc.)
const sumaNumeros = numeros.reduce((suma, num) => suma + num, 0);
console.log('reduce - Suma de números:', sumaNumeros);

const promedioNotas = estudiantes.reduce((suma, estudiante) => suma + estudiante.nota, 0) / estudiantes.length;
console.log('reduce - Promedio de notas:', promedioNotas.toFixed(2));