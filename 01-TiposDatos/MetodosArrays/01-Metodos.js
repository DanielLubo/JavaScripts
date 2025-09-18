let frutas = ["manzana", "banana"];

// Agregar elementos
frutas.push("naranja");    // Agrega al final: ["manzana", "banana", "naranja"]
frutas.unshift("uva");     // Agrega al inicio: ["uva", "manzana", "banana", "naranja"]

// Eliminar elementos
frutas.pop();              // Elimina el último: ["uva", "manzana", "banana"]
frutas.shift();            // Elimina el primero: ["manzana", "banana"]

// Encontrar elementos
let indice = frutas.indexOf("banana"); // 1
let incluye = frutas.includes("manzana"); // true

// Convertir a string
let texto = frutas.join(", "); // "manzana, banana"


let numeros = [1, 2, 3, 4, 5];
let palabras = ["hola", "mundo", "javascript"];

// Transformar (map) - crea nuevo array
let dobles = numeros.map(num => num * 2); // [2, 4, 6, 8, 10]

// Filtrar (filter) - crea nuevo array con elementos que pasan condición
//.filter() = recorre el array, aplica la condición, y te devuelve un nuevo array solo con los que cumplen.
let pares = numeros.filter(num => num % 2 === 0); // [2, 4]

// Encontrar (find) - devuelve primer elemento que cumple condición
let encontrado = numeros.find(num => num > 3); // 4

// Reducir (reduce) - recorre todo el array y va acumulando un valor en una variable especial llamada acumulador.
let suma = numeros.reduce((acc, num) => acc + num, 0); // 15

// Verificar (some/every)
let hayPares = numeros.some(num => num % 2 === 0);     // true
let todosPares = numeros.every(num => num % 2 === 0);  // false

// Iterar (forEach) - ejecuta función para cada elemento
numeros.forEach(num => console.log(num));

// Ordenar (sort)
palabras.sort(); // ["hola", "javascript", "mundo"] (alfabético)
numeros.sort((a, b) => b - a); // [5, 4, 3, 2, 1] (descendente)







let juegos = ['Devil May Cry', 'CS2', 'LOL', 'Minecraft', 'Roblox'];
console.log('Largo:', juegos.length);

let primero = juegos[1];
console.log('Primer item:', primero);

let ultimo = juegos[juegos.length - 1]; //de esta forma puedo saber que item se encuentra al final del array sin saber su "longitud o largo del array"
console.log('Ultimo item:',ultimo);

juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});


//.Push
//De esta forma puedo agregar un nuevo item al array usando el metodo .Push pero este solo lo agrega siempre a la ultima posicion
let nuevoLargo = juegos.push('El pepe');
console.log(nuevoLargo, juegos);

//.Unshift
//Con el metodo .Unshift puedo agregar nuevos items al array posicionandolos al inicio del array
let nuevoInicio = juegos.unshift('Ete secth');
console.log(nuevoInicio, juegos);

let juegoBorrado = juegos.pop();
console.log('Este es el juego borrado: ',juegoBorrado, juegos);


//.Splice
// Con este metodo puedo borrar uno o varios elementos especificos que se encuentran en el array, 
// la forma en como funciona es que primero recibe "como parametro" el indice desde donde quiere comenzar a eliminar lo demas items, 
// y luego la cantidad de items que se desean eliminar desde el infice indicado
let posicion = 1;
console.log(juegos);
let juegosBorrados = juegos.splice( posicion, 2);
console.log('Estos juegos fueron borrados: ', juegosBorrados, juegos);

//.IndexOf
//Este metodo sirve para buscar o saber en que indice se encuentra un item en especifico
let minecraftIndex = juegos.indexOf('Minecraft');
console.log(minecraftIndex);