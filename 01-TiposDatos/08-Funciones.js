// Función tradicional
function saludar(nombre) {
    return "Hola " + nombre;
}

// Función expresión
let despedir = function(nombre) {
    return "Adiós " + nombre;
};

// Función flecha (Arrow Function)
let multiplicar = (a, b) => a * b;
let cuadrado = x => x * x; // Un solo parámetro
let saludarArrow = () => "¡Hola!"; // Sin parámetros

// Función con parámetros por defecto
function crear_mensaje(nombre = "Invitado", saludo = "Hola") {
    return `${saludo}, ${nombre}!`;
}



function saludar( nombre ){
    console.log(`Hola ${nombre}`);
    return 21;
}

//Esta es una funcion anonima
const elSaludo = function( name){
    console.log(`Hola ${name}`);
}

//Esta es una Arrow Function
const saludarFlecha = (youName) =>{
    console.log(`Bienvenida ${youName}`);
}

// const retornoSaludar = saludar('Daniel');
// console.log({retornoSaludar});
// elSaludo('El pepe');
// saludarFlecha('Sofia');


const suma = (a, b) => {
    return a + b;
}

// const sumaDos = (x, y) => x + y;

function getAleatorio(){
    return Math.random();
}

const numberAleatorio = () => Math.random();
console.log("Numero aleatorio flecha: ",numberAleatorio());

console.log(getAleatorio());
console.log(suma (2,3));