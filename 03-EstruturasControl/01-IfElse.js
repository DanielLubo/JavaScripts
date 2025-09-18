// if, else if, else
let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else if (edad >= 13) {
    console.log("Eres adolescente");
} else {
    console.log("Eres menor de edad");
}




let a = 10;
if( a >= 10){
    console.log('A es mayor o igual que el tal');
} else {
    console.log('Cagaste');
}
// console.log('Ya es toda wey');

const hoy = new Date();
let dia = hoy.getDay();

console.log({dia});

if(dia === 1){
    console.log('Felicidades hoy es lunes')
} else {
    console.log("Hoy no es lunes");
} console.log("Ya se acabo");


let day = 9;

const diasSemana = {
    0 : 'domingo', 
    1 : 'lunes', 
    2 : 'martes', 
    3 : 'miercoles', 
    4 : 'jueves', 
    5 : 'viernes', 
    6 : 'sabado',
}

console.log(diasSemana[day] || 'Dia no es valido');



