const estudiantes = [
    {nombre: 'Ana', edad: 20, nota: 8.5, carrera: 'Ingeniería'},
    {nombre: 'Luis', edad: 19, nota: 7.2, carrera: 'Medicina'},
    {nombre: 'María', edad: 21, nota: 9.1, carrera: 'Ingeniería'},
    {nombre: 'Carlos', edad: 18, nota: 6.8, carrera: 'Arte'},
    {nombre: 'Sofia', edad: 22, nota: 8.9, carrera: 'Medicina'}
];

const numeros = [1, 2, 3, 4, 5];
const frutas = ['manzana', 'banana', 'naranja'];


// 14-POP.js  
// ¿QUÉ ES? Elimina el ÚLTIMO elemento
// ¿PARA QUÉ? Quitar el último elemento  
// RETORNA: El elemento eliminado (MUTA el original)
const frutasCopia2 = [...frutas];
const elementoEliminado = frutasCopia2.pop();
console.log('pop - Elemento eliminado:', elementoEliminado);
console.log('pop - Frutas restantes:', frutasCopia2);