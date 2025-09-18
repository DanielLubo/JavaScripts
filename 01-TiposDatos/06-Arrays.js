// Crear arrays
let numeros = [1, 2, 3, 4, 5];
let mixto = [1, "texto", true, null];
let vacio = [];


let animales = ['Gato', 'Leopardo de las Nieves', 'Pinguino'];
console.log(animales);

// Acceder a elementos (índice empieza en 0)
console.log(animales[1]); //Se usa [] con el numero adentro para saber que hay en esa posicion

// Modificar elementos
animales[3] = 'Ballena'; //De esta forma se puede asignar o agregar un nuevo dato al array

console.log(animales);
console.log(typeof animales); //TypeOf sirve para saber que tipo de "dato" es cierta cosa
console.log(animales.length); // .Length sirve para saber la longitud del array


//const arr = new Array(10);
//console.log(arr);

let videoJuegos = ['Devil May Cry', 'Silent Hill', 'CS2', 'Death Stranding']
console.log(videoJuegos[0]);

let arrayCosas = [
    true,
    123,
    'Yo',
    1 + 2,
    function(){},
    ()=>{},
    {a: 1},
    ['Dante', 'Vergil', 'el tal', 'lady'],
];

//console.log(arrayCosas);
console.log(arrayCosas[7]);
console.log(arrayCosas[7][3]);