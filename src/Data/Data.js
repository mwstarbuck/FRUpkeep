
import {shuffle, mix} from '../Utilities/Shuffle';

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
let redRouleurCards = [...rouleurCards];
mix(redRouleurCards, shuffledDeck)
redRouleurCards = [...shuffledDeck];
shuffledDeck = [];
let blueRouleurCards = [...rouleurCards];
mix(blueRouleurCards, shuffledDeck)
blueRouleurCards = [...shuffledDeck];
console.log(redRouleurCards);
console.log(blueRouleurCards);
console.log(rouleurCards);
for (let i = 0; i < 7; i++) {
    redRouleurCards = shuffle(redRouleurCards);
}

