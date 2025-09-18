// For - cuando sabes cuántas iteraciones
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

const heroes = ['Yasuo', 'Mordekaiser', 'Warwick', 'Teemo'];

// For 
console.warn('For tradicional');

for(let i = 0; i < heroes.length ; i++){
    console.log(heroes[i]);
}


// For ... In - Sirve para recorrer Objetos obteniendo sus llaves
let persona = {nombre: "Ana", edad: 30};
for (let propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
}
console.warn('For In');

for(let i in heroes){
    console.log(heroes[i]);
}


// For...Of - Sirve para recorrer Arrays
let frutas = ["manzana", "banana", "naranja"];
for (let fruta of frutas) {
    console.log(fruta);
}

console.warn('For Of');
for(let heroe of heroes){
    console.log(heroe);
}