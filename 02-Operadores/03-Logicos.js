// Operadores - Logicos

// AND && - ambas condiciones deben ser verdaderas

true && true;   // true
true && false;  // false

let mayor = true;
let suscrito = false;
console.log('Operador and', mayor && suscrito);

console.log(true && !false);
/* console.log(true && true);
console.log(false && true); */


// OR || - al menos una condición debe ser verdadera
true || false;  // true
false || false; // false

console.log('Operador or', mayor || suscrito);


// NOT ! - invierte el valor
!true;   // false
!false;  // true

console.log('Operador not', !mayor);
let catalogoInfantil = !mayor;
console.log(catalogoInfantil);