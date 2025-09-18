// clg => crea un console.log
/**
 * Las variables se puden crear de 3 formas
 * Let nombre = 'Daniel';   Esta es la forma correcta de crear una variable, el cual se le puede cambiar su valor
 * var nombre = 'Daniel;    Esta es otra forma pero es la menos comun o menos recomendada
 * const nombre = 'Daniel'  Esta es una forma de crear un Constante es decir su valor no puede ser cambiado
 */

// Var
var nombre = "Juan";

//Let 
let edad = 25;
edad = 26; // ✅ Permitido - Porque a Let se le puede cambiar o actualizar su valor

//Const
const PI = 3.14159;
// PI = 3.14; // ❌ Error - Mienstras que con const al ser una constante no se le puede cambiar o reasignar su valor

let a = 10;
let b = 12;
let c = "hola";
let d = "ete sech";
let f = 2;
let g = 3, 
    h = 4, 
    j = 5;

const saludo = c + d;
console.log(saludo);


// console.log(d);
// console.log('%c Mis variables', 'color:#F0F2F2; font-weight:bold')
// console.log({a});
// console.log({f});
// console.warn('alerta');
// console.error('error');

// console.table({a, d, f, g});

c = 'Hola de nuevo';

let nombre = "Mi Nombre";
let nombreCompleto = "Usuario Don Juan 217";

const fruta = "Manzana";

console.log(fruta, nombreCompleto);