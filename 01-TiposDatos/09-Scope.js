// Scope (alcance)
let global = "Variable global";

function miFuncion() {
    let local = "Variable local";
    console.log(global); // ✅ Acceso a variable global
    console.log(local);  // ✅ Acceso a variable local
}

// console.log(local); // ❌ Error, no existe fuera de la función

// Función que retorna función (closure básico)
function crearContador() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

let contador = crearContador();
console.log(contador()); // 1
console.log(contador()); // 2