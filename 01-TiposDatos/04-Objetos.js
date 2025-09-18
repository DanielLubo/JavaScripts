let jugador = {
    nombre: "Juan",
    userName: "Don Juan 217",
    edad: 24,
    email: "weboxd@gmail.com", 
}

console.log(jugador);
console.log(jugador.userName); //Se usa de esta manera para obtener el valor de ese atributo
console.log(jugador['edad']);


jugador.edad = 13;
jugador['edad'] = 16;

console.log( jugador);