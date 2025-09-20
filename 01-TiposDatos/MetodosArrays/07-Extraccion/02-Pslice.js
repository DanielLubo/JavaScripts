const estudiantes = [
    {nombre: 'Ana', edad: 20, nota: 8.5, carrera: 'Ingeniería'},
    {nombre: 'Luis', edad: 19, nota: 7.2, carrera: 'Medicina'},
    {nombre: 'María', edad: 21, nota: 9.1, carrera: 'Ingeniería'},
    {nombre: 'Carlos', edad: 18, nota: 6.8, carrera: 'Arte'},
    {nombre: 'Sofia', edad: 22, nota: 8.9, carrera: 'Medicina'}
];

const numeros = [1, 2, 3, 4, 5];
const frutas = ['manzana', 'banana', 'naranja'];


// 18-SPLICE.js
// ¿QUÉ ES? Elimina, reemplaza o agrega elementos en posiciones específicas
// ¿PARA QUÉ? Modificar el array en posiciones exactas
// RETORNA: Array con elementos eliminados (MUTA el original)
const numerosCopia3 = [...numeros];
const eliminados = numerosCopia3.splice(2, 1, 10); // En posición 2, elimina 1, agrega 10
console.log('splice - Elementos eliminados:', eliminados);
console.log('splice - Array modificado:', numerosCopia3);