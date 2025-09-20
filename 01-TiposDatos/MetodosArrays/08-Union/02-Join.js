const estudiantes = [
    {nombre: 'Ana', edad: 20, nota: 8.5, carrera: 'Ingeniería'},
    {nombre: 'Luis', edad: 19, nota: 7.2, carrera: 'Medicina'},
    {nombre: 'María', edad: 21, nota: 9.1, carrera: 'Ingeniería'},
    {nombre: 'Carlos', edad: 18, nota: 6.8, carrera: 'Arte'},
    {nombre: 'Sofia', edad: 22, nota: 8.9, carrera: 'Medicina'}
];

const numeros = [1, 2, 3, 4, 5];
const frutas = ['manzana', 'banana', 'naranja'];



// 20-JOIN.js
// ¿QUÉ ES? Convierte el array en un string  
// ¿PARA QUÉ? Crear texto a partir de elementos del array
// RETORNA: Un string
const frutasTexto = frutas.join(' - ');
console.log('join - Frutas como texto:', frutasTexto);

const numerosTexto = numeros.join(', ');
console.log('join - Números como texto:', numerosTexto);