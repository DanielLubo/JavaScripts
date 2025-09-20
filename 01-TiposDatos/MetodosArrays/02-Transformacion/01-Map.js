const estudiantes = [
    {nombre: 'Ana', edad: 20, nota: 8.5, carrera: 'Ingeniería'},
    {nombre: 'Luis', edad: 19, nota: 7.2, carrera: 'Medicina'},
    {nombre: 'María', edad: 21, nota: 9.1, carrera: 'Ingeniería'},
    {nombre: 'Carlos', edad: 18, nota: 6.8, carrera: 'Arte'},
    {nombre: 'Sofia', edad: 22, nota: 8.9, carrera: 'Medicina'}
];

const numeros = [1, 2, 3, 4, 5];
const frutas = ['manzana', 'banana', 'naranja'];

// 05-MAP.js
// ¿QUÉ ES? Crea un NUEVO array transformando cada elemento
// ¿PARA QUÉ? Modificar todos los elementos sin cambiar el original
// RETORNA: Un nuevo array del mismo tamaño
const nombresEstudiantes = estudiantes.map(estudiante => estudiante.nombre);
console.log('map - Solo nombres:', nombresEstudiantes);

const numerosDobles = numeros.map(num => num * 2);
console.log('map - Números duplicados:', numerosDobles);