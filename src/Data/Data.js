
import {shuffle} from '../Utilities/Shuffle';

const ROULEUR_SETUP = [
    {
        number: 3,
        ridertype: 'rouleur',
        movement: 3
    },
    {
        number: 3,
        ridertype: 'rouleur',
        movement: 4
    },
    {
        number: 3,
        ridertype: 'rouleur',
        movement: 5
    },
    {
        number: 3,
        ridertype: 'rouleur',
        movement: 6
    },
    {
        number: 3,
        ridertype: 'rouleur',
        movement: 7
    }
];

const SPRINTER_SETUP = [
    {
        number: 3,
        ridertype: 'sprinter',
        movement: 2
    },
    {
        number: 3,
        ridertype: 'sprinter',
        movement: 3
    },
    {
        number: 3,
        ridertype: 'sprinter',
        movement: 4
    },
    {
        number: 3,
        ridertype: 'sprinter',
        movement: 5
    },
    {
        number: 3,
        ridertype: 'sprinter',
        movement: 9
    }
];

let rouleurCards = [];
let sprinterCards = [];

function createCards(setup, cards){
    setup.forEach(c => {
        for (let i = 0; i < c.number; i++){
            let card = new Object();
            card.movement = c.movement;
            card.type = c.ridertype;
            cards.push(card);
        }
    })
};
createCards(ROULEUR_SETUP, rouleurCards);
createCards(SPRINTER_SETUP, sprinterCards);

let shuffledDeck = [];
shuffle(rouleurCards, shuffledDeck)

console.log(rouleurCards);
console.log(shuffledDeck);

