const estudiantes = [
    {nombre: 'Ana', edad: 20, nota: 8.5, carrera: 'Ingeniería'},
    {nombre: 'Luis', edad: 19, nota: 7.2, carrera: 'Medicina'},
    {nombre: 'María', edad: 21, nota: 9.1, carrera: 'Ingeniería'},
    {nombre: 'Carlos', edad: 18, nota: 6.8, carrera: 'Arte'},
    {nombre: 'Sofia', edad: 22, nota: 8.9, carrera: 'Medicina'}
];

const numeros = [1, 2, 3, 4, 5];
const frutas = ['manzana', 'banana', 'naranja'];


// 06-FILTER.js
// ¿QUÉ ES? Crea un NUEVO array con elementos que cumplen una condición
// ¿PARA QUÉ? Filtrar elementos según criterios específicos  
// RETORNA: Un nuevo array (puede ser más pequeño)
const estudiantesAprobados = estudiantes.filter(estudiante => estudiante.nota >= 7);
console.log('filter - Estudiantes aprobados:', estudiantesAprobados);

const numerosPares = numeros.filter(num => num % 2 === 0);
console.log('filter - Números pares:', numerosPares);