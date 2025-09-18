// let a = 10;
// let b = a;

// a = 30;

// console.log({a, b});


let juan = {nombre: 'Juan'};
let ana  = {...juan};  // Operador spread
ana.nombre = 'ana';

console.log({juan, ana});


const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Daniel';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);

console.log({peter, tony});




//Array
const frutas = ['Manazana', 'Pera', 'Pina'];

// console.time('slice');
// const otrasFrutasSilce = frutas.slice();
// console.timeEnd('slice');

console.time('spread');
const otrasFrutasSpread = [...frutas];
console.timeEnd('spread');

otrasFrutasSilce.push('Mango');

console.table({frutas, otrasFrutasSilce});