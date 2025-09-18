// 1 Crea un objeto que represente a una persona con propiedades: nombre, edad, ciudad. Imprime cada propiedad.
// 2 Crea un objeto "producto" con propiedades: nombre, precio, stock. Luego modifica el precio y añade una nueva propiedad "categoria".
// 3 Crea un objeto "calculadora" que tenga propiedades a, b y un método "sumar" que retorne la suma de a y b.
// 4 Crea un objeto con al menos 5 propiedades y cuenta cuántas propiedades tiene usando un bucle.
// 5 Crea una función que reciba un objeto y una propiedad, y retorne true si la propiedad existe en el objeto.



// 1 --------------------------->
const person = {
    name : 'Ana',
    lastName : 'Sofia',
    lirthday : '12-10-2004',
    city : 'Ohio',
}

for(let key in person){
    console.log(`${key}: ${person[key]}`);
}




// 2 --------------------------->
const products = {
    name: 'Monitor LG',
    price: '960.000',
    stock: 21,
}

console.log(products);
products.price = '450.000';
products['location'] = 'Ohio';
console.log(products);




// 3 --------------------------->
const calculator = {
    a : 13,
    b : 2,
    sumar() {
        return this.a + this.b;
    }
}

console.log(calculator.sumar());




// 4 --------------------------->
const car = {
    color : 'red',
    brand: 'MClaren',
    model: 'F1',
    wheels: 4,
    random: true,
}

let counter = 0;

for( let key in car){
    counter++;
}

console.log(counter);




// 5 --------------------------->
const player = {
    name: 'Dante',
    ability: 'Royal Guard',
    age: 32,
}

const question = (obj, prop) => {
    if(prop in obj) {
        if(!obj[prop]){ // esta esta forma me ahorro el tener que escribir toda esta condicion
            /**
             * player[ability] === '' || 
             * player[ability] === 0 || 
             * player[ability] === false || 
             * player[ability] === null || 
             * player[ability] === undefined ||
             * player[ability] === NaN
             */
            console.log('Aun no ha desbloqueado alguna habilidad especial');
            return false;
        } else{
            console.log('Si tiene habilidad especial');
            return true;
        }
    } else{
        console.log('Esa propiedad no existe');
        return false;
    }
}

question(player, 'ability');