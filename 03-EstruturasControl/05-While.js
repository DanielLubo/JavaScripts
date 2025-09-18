const carros = ['MClaren', 'Mercedes', 'RedBull', 'Ferrari', 'Aston Martin'];
let i = 0;

// While - mientras la condición sea verdadera
// Undefine, null, false (Son condiciones falsas que harian que el while no funcione)
while( i < carros.length ){
    if( i === 1){
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
}

let contador = 0;
while (contador < 3) {
    console.log(contador);
    contador++;
}




// Do While - ejecuta al menos una vez
console.warn('Do While');
let x = 0;
do {
    console.log(carros[x]);
    x++;
} while ( carros[x]);


let num = 0;
do {
    console.log(num);
    num++;
} while (num < 3);