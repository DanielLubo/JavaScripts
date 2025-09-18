// Operador ternario (condicional corto)
let mensajePro = edad >= 18 ? "Mayor" : "Menor";

const dia = 0;
const horaActual = 7;

let horaApertura;
let mensaje; //Esta abierto, Esta cerrado, hoy abrimos a las XX

// if(dia === 0 || dia === 6){

// if([0,6].includes( dia )){
//     console.log("Fin de semana");
//     horaApertura = 9;
// } else {
//     console.log("Dia de semana");
//     horaApertura = 11;
// } 
horaApertura = ( [0,6].includes(dia) ) ? 9 : 11;

// if( horaActual >= horaApertura){
//     mensaje = 'Esta abierto';
// } else {
//     mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
// }
mensaje = ( horaActual >= horaApertura ) ? 'Esta abiero' : `Esta cerrado, hoy abrimos a las ${horaApertura}`;

console.log( `La hora actual es: ${horaActual}`,{ mensaje});