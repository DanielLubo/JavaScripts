// Short-Circuit

// Falso
// {false, 0, '', null, undefined, NaN} - Falsy
const falsos = {
    a : '',
    b : 0,
    c : false,
    d : null,
    e : undefined,
    f : NaN,
}

let nombre = '';
let userName = nombre || "Anonimo";
console.log(userName);

function fn1(){
    console.log('Soy funcion 1');
    return false;
}

function fn2(){
    console.log('Soy funcion 2');
    return true;
}

let x = fn1() && fn2();