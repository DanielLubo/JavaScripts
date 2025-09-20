const estudiantes = [
    {nombre: 'Ana', edad: 20, nota: 8.5, carrera: 'Ingeniería'},
    {nombre: 'Luis', edad: 19, nota: 7.2, carrera: 'Medicina'},
    {nombre: 'María', edad: 21, nota: 9.1, carrera: 'Ingeniería'},
    {nombre: 'Carlos', edad: 18, nota: 6.8, carrera: 'Arte'},
    {nombre: 'Sofia', edad: 22, nota: 8.9, carrera: 'Medicina'}
];

const numeros = [1, 2, 3, 4, 5];
const frutas = ['manzana', 'banana', 'naranja'];


// 19-CONCAT.js
// ¿QUÉ ES? Une dos o más arrays SIN modificar los originales  
// ¿PARA QUÉ? Combinar arrays
// RETORNA: Un nuevo array con todos los elementos
const masNumeros = [6, 7, 8];
const todosLosNumeros = numeros.concat(masNumeros);
console.log('concat - Números unidos:', todosLosNumeros);
console.log('concat - Originales sin cambio:', numeros, masNumeros);