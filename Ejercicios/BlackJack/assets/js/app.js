/**
 * 2C = Two of Clubs (Treboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Heart (Corazones)
 * 2S = Two of Spades (Espadas)
 */


let deck         = [];
const tipos      = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
let puntosComputadora = 0;

//Referencias del html
const btnAsk = document.querySelector('#btnAsk');
const btnStop = document.querySelector('#btnStop');
const btnNewGame = document.querySelector('#btnNewGame');
const divCartasJugador = document.querySelector('#player-cards');
const divCartasPc = document.querySelector('#pc-cards');


const smalls = document.querySelectorAll('small');

//Esta funcion crea un nuevo Deck
const creadDeck = () =>{
    for(let i = 2; i <= 10; i++){
        for(let tipo of tipos){
            deck.push(i + tipo);
        }
    }

    for(let tipo of tipos){
        for(let especial of especiales){
            deck.push(especial + tipo);
        }
    }
    deck = _.shuffle(deck);
    return deck;
}

creadDeck();

//Esta funcion es para tomar una carta
const pedirCarta = () =>{
    if( deck.length === 0){
        throw 'No hay Cartas en el deck';
    } 
    const carta = deck.pop();
    return carta;    
}

// pedirCarta();



const valorCarta = (carta) =>{

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor) ) ?  
           (valor === 'A') ? 11 : 10 
           : valor * 1;

    // if( isNaN(valor) ){
    //     puntos = (valor === 'A') ? 11 :10;
    // } else {
    //     puntos = valor * 1;
    // }

    // console.log(puntos);
}

//Turno PCerda
const turnoCompu = (puntosMinimos) => {
    do {
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta(carta);
        smalls[1].innerText = puntosComputadora;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('Card');
        divCartasPc.append(imgCarta);

        if(puntosMinimos > 21){
            break;
        }

    } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos < 21));

    setTimeout(() => {
        if(puntosComputadora === puntosMinimos){
            alert('Nadie Gana');
        } else if (puntosMinimos > 21){
            alert('Has perdido mucho gey');
        } else if (puntosComputadora > 21){
            alert('El Jugador Gana');
        } else if(puntosJugador === 21){
            alert('Felicidades Has ganado');
        } else if (puntosComputadora === 21 && puntosMinimos < 21) {
            alert('La computadora gana');
        } else if (puntosComputadora > puntosMinimos && puntosComputadora < 21) {
            alert('La computadora gana');
        } else if (puntosMinimos > puntosComputadora && puntosMinimos < 21) {
            alert('El jugador gana');
        }
    }, 200);
    
}




//Eventos
btnAsk.addEventListener('click', () => {

    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    smalls[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('Card');
    divCartasJugador.append(imgCarta);

    if(puntosJugador > 21){
        console.warn('Ya es toda wey');
        btnAsk.disabled = true;
        btnStop.disabled = true;
        turnoCompu(puntosJugador);

    } else if (puntosJugador === 21){
        console.warn('Ganaste papu');
        
        btnAsk.disabled = true;
        btnStop.disabled = true;
        turnoCompu(puntosJugador);

    }
});


btnStop.addEventListener('click', () => {
    btnAsk.disabled = true;
    btnStop.disabled = true;
    turnoCompu(puntosJugador);
});

btnNewGame.addEventListener('click', () => {

    console.clear();
    
    deck = [];
    deck = creadDeck();

    puntosJugador = 0;
    puntosComputadora = 0;

    divCartasJugador.innerHTML = '';
    divCartasPc.innerHTML = '';

    smalls[0].innerText = 0;
    smalls[1].innerText = 0;

    btnAsk.disabled = false;
    btnStop.disabled = false;
});
