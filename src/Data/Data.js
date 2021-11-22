
import { shuffle, mix } from '../Utilities/Shuffle';

export const ROULEUR_SETUP = [
  {
    number: 3,
    riderType: 'rouleur',
    movement: '3'
  },
  {
    number: 3,
    riderType: 'rouleur',
    movement: '4'
  },
  {
    number: 3,
    riderType: 'rouleur',
    movement: '5'
  },
  {
    number: 3,
    riderType: 'rouleur',
    movement: '6'
  },
  {
    number: 3,
    riderType: 'rouleur',
    movement: '7'
  }
];

export const SPRINTER_SETUP = [
  {
    number: 3,
    riderType: 'sprinter',
    movement: '2'
  },
  {
    number: 3,
    riderType: 'sprinter',
    movement: '3'
  },
  {
    number: 3,
    riderType: 'sprinter',
    movement: '4'
  },
  {
    number: 3,
    riderType: 'sprinter',
    movement: '5'
  },
  {
    number: 3,
    riderType: 'sprinter',
    movement: '9'
  }
];

export const ATTACK_CARD = {
  number: 2,
  riderType: 'rouleur',
  movement: '2 > 9'
}

export const MUSCLE_CARD = {
  number: 1,
  riderType: 'sprinter',
  movement: '5'
}

let rouleurCards = [];
let sprinterCards = [];

export function createDeckOfCards(setup, type) {
  let tempSet = [...setup];
  let deck = [];
  if (type === 'peloton') {
    tempSet.push(ATTACK_CARD);
  }
  else {
    tempSet.push(MUSCLE_CARD);
  }
  tempSet.forEach(c => {
    for (let i = 0; i < c.number; i++) {
      let card = new Object();
      card.movement = c.movement;
      card.type = c.riderType;
      deck.push(card);
    }
  })
  tempSet = [];
  deck = mix(deck);
  // deck = [...tempSet];

  // for (let i = 0; i < 7; i++) {
  //   deck = shuffle(deck);
  // }
  return deck;
};
rouleurCards = createDeckOfCards(ROULEUR_SETUP);
sprinterCards = createDeckOfCards(SPRINTER_SETUP);

// let shuffledDeck = [];
// let redRouleurCards = [...rouleurCards];
// mix(redRouleurCards, shuffledDeck)
// redRouleurCards = [...shuffledDeck];
// shuffledDeck = [];
// let blueRouleurCards = [...rouleurCards];
// mix(blueRouleurCards, shuffledDeck)
// blueRouleurCards = [...shuffledDeck];
// console.log(redRouleurCards);
// console.log(blueRouleurCards);
// console.log(rouleurCards);
// for (let i = 0; i < 7; i++) {
//   redRouleurCards = shuffle(redRouleurCards);
// }

