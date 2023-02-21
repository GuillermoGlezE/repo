import _ from 'underscore';


// export const miNombre = 'GUILLERMO';

/**
 * esta funcion crea un nuevo deck
 * @param {Array<string>} tiposDeCarta Ejemplo: ['C,D,H,S']
 * @param {Array<string>} tiposEspeciales Ejemplo:['A,J,Q,K']
 * @returns {Array} retorna una nueva baraja
 */

// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta|| tiposDeCarta.lenght === 0)
     throw new Error ('TiposDeCarta es obligatorio como un arreglode stream');


    let deck = [] ;//igual a arreglo bacio.

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    
    return deck;
}
// export default crearDeck;
