// 1 Crea un array con 5 nombres de frutas y muestra cada fruta en la consola usando un bucle
// 2 Crea un array con los números [10, 20, 30, 40, 50] y calcula la suma de todos los elementos.
// 3 Dado el array [15, 8, 23, 4, 42, 16], encuentra e imprime el número mayor usando un bucle.
// 4 Crea un array con varios nombres (algunos repetidos) y cuenta cuántas veces aparece un nombre específico.
// 5 Crea un array con números del 1 al 5 y crea otro array con los elementos en orden inverso (sin usar reverse()).

// 6 Crea un array con 3 objetos "estudiante" (nombre, edad, nota). Imprime el nombre del estudiante con la nota más alta.
// 7 Usando el array del ejercicio anterior, crea un nuevo array solo con estudiantes mayores de 18 años.
// 8 Crea un array de objetos "producto" (nombre, precio, cantidad). Calcula el valor total del inventario (precio × cantidad de cada producto).
// 9 Crea una función que reciba un array de personas y un nombre, y retorne el objeto completo de esa persona.
// 10 Dado un array de objetos "empleado" (nombre, departamento, salario), cuenta cuántos empleados hay en cada departamento.





// 1 --------------------------->
const fruitShop = ['Watermelon', 'Apple', 'coconut', 'strawberry', 'blackberry',];
for (let i = 0; i < fruitShop.length; i++){
    console.log(fruitShop[i]);
}




// 2 --------------------------->
const numberList = [10, 20, 30, 40, 50];
let addition = 0;

for (let i = 0; i < numberList.length; i++){
    console.log(`La suma de ${addition} + ${numberList[i]}`);
    addition += numberList[i];
    console.log(`= ${addition}`);
}
    // // Usando el metodo Reduce()
    // const suma = numberList.reduce((acumulador, valorActual) => {
    //     return acumulador + valorActual;
    // }, 0);
    // console.log(suma);




// 3 --------------------------->
const randomArray = [15, 8, 23, 4, 42, 16];
let greaterNumber = randomArray[0];

for(let i = 0; i < randomArray.length; i++){
    if(randomArray[i] > greaterNumber){
        greaterNumber = randomArray[i];
    }
}
console.log(greaterNumber);




// 4 --------------------------->
const names = ['Daniel', 'ElPepe', 'Sofia', 'ElPepe', 'Laura', 'Ana', 'GermanCat', 'Ana', 'Ana', 'Ana', 'Ana', 'Ana'];
const searchedName = 'Daniel';
let counter = 0;


for(let i = 0; i < names.length; i++){
    if(searchedName === names[i]){
        counter += 1;
    }
}

if(counter === 0){
    console.log(`El nombre: ${searchedName}, no se encuentra`);
} else if(counter === 1){
    console.log(`El nombre: ${searchedName}, se encuentra solo una vez, No se repite`);
} else if(counter > 1){
    console.log(`El nombre: ${searchedName}, se repite ${counter} veces`);
} 




// 5 --------------------------->
const numberList2 = [1, 2, 3, 4, 5];
let inverseNumbers = [];
let number;

for(let i = 0; i < numberList2.length; i++){
    number = numberList2[i];
    inverseNumbers.unshift(number);
}

console.log(inverseNumbers);




// 6 --------------------------->
const classroom = [
    { name : 'Sofia', age : 21, subject : 'Fisica', average : 4.7, },
    { name : 'Ana Maria', age : 23, subject : 'Fisica', average : 4.2, },
    { name : 'Tulip', age : 20, subject : 'Fisica', average : 5, },
    { name : 'Sara', age : 17, subject : 'Fisica', average : 4.1, },
    { name : 'Detonante Cosmico', age : 16, subject : 'Fisica', average : 4, },
]

let majorNote = classroom[0];

for(let obj of classroom){
    if(obj.average > majorNote.average){
        majorNote = obj;
    }
}

console.log(`El estudiante con la nota mas alta es: ${majorNote.name}, nota: ${majorNote.average}`);




// 7 --------------------------->
let adultStudents = [];

for(let obj of classroom){
    if(obj.age >= 18){
        adultStudents.push(obj);
    }
}
console.log(adultStudents);

    // con el metodo .filter()
    // const adult = classroom.filter(obj => obj.age >= 18);
    // console.log(adult);




// 8 --------------------------->
 const products = [
    { name : 'Ryzen 5 9600x', price : 949000, amount : 15, },
    { name : 'Ryzen 7 9700x', price : 1245000, amount : 6, },
    { name : 'Ryzen 5 7600x', price : 678000, amount : 51, },
    { name : 'Intel 9 Ultra', price : 7899000, amount : 6, },
    { name : 'Monitor Asus', price : 549000, amount : 20, },
    { name : 'Monitor LG', price : 654900, amount : 17, },
];

let inventoryValue = 0;

// const suma = (pre, cant) =>{
//     return pre * cant;
// }

// Forma eficiente de la funcion :
const suma = (pre, cant) => pre * cant;

for(let obj of products){
    const productValue = suma(obj.price, obj.amount);
    console.log(`${obj.name}, valor es: ${productValue.toLocaleString('es-CO')}`);

    inventoryValue += productValue;
}
    // Con el metodo reduce
    // const inventoryValue2 = products.reduce((acc, obj) => acc + (obj.price * obj.amount), 0);
    // const inventoryValue2 = products.reduce((acc, obj) =>{
    //     const valorProducto = obj.price * obj.amount;
    //     console.log(`${obj.name}, valor es: ${valorProducto.toLocaleString('es-CO')}`);
    //     return acc + valorProducto;
    // }, 0);

    // console.log(`Valor total del inventario: ${inventoryValue2.toLocaleString('es-CO')}`);
console.log(`Valor total del inventario: ${inventoryValue.toLocaleString('es-CO')}`);




// 9 --------------------------->
const person = [
    { name: 'Sofia', age: 21, },
    { name: 'Ana', age: 23, },
    { name: 'Laura', age: 20, },
]

const filter = (arr, nom) =>{
    for(let key of arr){
        if(key.name === nom){
            console.log(`Se encontro a:`);
            console.log(key);
            return key;
        }
    }
    console.log('No se encontro a la persona')
    return null;
}

filter(person, 'Laura');




// 10 --------------------------->
const empleados = [
    { nombre: 'Ana', departamento: 'Finanzas', salario: 1450000},
    { nombre: 'Sofia', departamento: 'Marketing', salario: 1000000},
    { nombre: 'Laura', departamento: 'Gerencia', salario: 3000000},
    { nombre: 'Angela', departamento: 'Contabilidad', salario: 2645000},
    { nombre: 'Isabela', departamento: 'Contabilidad', salario: 2645000},
    { nombre: 'Daniela', departamento: 'Contabilidad', salario: 2645000},
    { nombre: 'Valeria', departamento: 'Marketing', salario: 1200000},
    { nombre: 'Lia', departamento: 'IT', salario: 4200000},
]
const departamentos = [];

const empleadoDepartamento = () => {
    for(let key of empleados){
        if(departamentos[key.departamento]){
            departamentos[key.departamento] += 1;
        } else {
            departamentos[key.departamento] = 1;
        }   
    }
    return departamentos;
}

console.log(empleadoDepartamento(empleados));