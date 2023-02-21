
import {pedirCarta,valorCarta}  from './';
import { crearCartaHTML } from './crear-carta-html';

/**
 * turno de la computadora
 * @param {number} puntosMinimos puntos minimos de la pc necesitra para ganar
 * @param { HTLMEement } puntosHTMAL para mostrar los puntos
 * @param {HTLMElement} divCartasComputadora elemento HTLM para mostrar las cartas
 * @param {Array<String>} deck
 */


//turno de la computadora
export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora, deck =[] ) => {

    if ( !puntosMinimos ) throw new Error ('puntos minimos son necesarios');
    if (!puntosHTML) throw new Error ('argumento puntosHTLM es necesario');

    let puntosComputadora = 0 ;

    do {
        const carta = pedirCarta( deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
// TODO: crear carta
const imgCarta = crearCartaHTML (carta);

        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}