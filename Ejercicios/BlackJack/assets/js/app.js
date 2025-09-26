const miModulo = (() => {
    'use strict'
    let deck         = [];
    const tipos      = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [0,0];

    //Referencias del html
    const btnAsk = document.querySelector('#btnAsk'),
          btnStop = document.querySelector('#btnStop'),
          btnNewGame = document.querySelector('#btnNewGame');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
          smalls = document.querySelectorAll('small');


    const inicializarJuego = ( numJugadores = 2 ) => {
        deck = creadDeck();
        puntosJugadores = [];
        for(let i = 0; i < numJugadores; i++){
            puntosJugadores.push(0);
        }

        smalls.forEach(elem => elem.innerText = 0);
        divCartasJugadores.forEach(elem => elem.innerHTML = '');

        btnAsk.disabled = false;
        btnStop.disabled = false;
    }

    //Esta funcion crea un nuevo Deck
    const creadDeck = () =>{

        deck = [];

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
        return _.shuffle(deck);
    }

    //Esta funcion es para tomar una carta
    const pedirCarta = () =>{
        if( deck.length === 0){
            throw 'No hay Cartas en el deck';
        } 
        return deck.pop();
    }

    // pedirCarta();
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);
        return (isNaN(valor) ) ?  
            (valor === 'A') ? 11 : 10 
            : valor * 1;
    }

    //turno: 0 = primer jugador y el ultimo la compu
    const acumularPuntos = ( carta, turno ) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        smalls[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    const crearCarta = ( carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('Card');
        divCartasJugadores[turno].append(imgCarta);
    }

    const determinarGanador = () => {

        const [puntosMinimos, puntosComputadora] = puntosJugadores;

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

    //Turno PCerda
    const turnoCompu = (puntosMinimos) => {
        let puntosComputadora = 0;
        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta(carta, puntosJugadores.length - 1);

            if(puntosMinimos > 21){
                break;
            }

        } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos < 21));
        determinarGanador();
    }

    //Eventos
    btnAsk.addEventListener('click', () => {

        const carta = pedirCarta();
        const puntosJugador = acumularPuntos( carta, 0);

        crearCarta(carta, 0);

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
        turnoCompu(puntosJugadores[0]);
    });

    // btnNewGame.addEventListener('click', () => {
    //     inicializarJuego();


    // });

    return {
        nuevoJuego : inicializarJuego
    };
    
})();