import React from 'react';

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//shuffle(0, 14);
export function mix(set, shuffledCards) {
    let len = set.length;
    for (let i = 0; i < len; i++) {

        let r = getRandom(0, set.length - 1);
        shuffledCards.push(set[r]);
        set.splice(r, 1);
    }   
}

export function shuffle(cards) {
    let uneven = getRandom(-3, 3);
    console.log('Uneven = ' + uneven);
    let half = Math.ceil(cards.length / 2);
    let top = cards.splice(0, half);
    let bottom = cards.splice(-half)
    //cards = [];
    let c;
    
    while(top.length != 0 && bottom.length != 0) {
        let check = getRandom(0,1);
        if (getRandom(0,1)){
            c = top.pop();
            console.log('Removed: ' + c.movement + ' fron top half.');
            cards.unshift(c);
            console.log('Adding ' + c.movement  + ' to shffled deck.');
            console.log(cards);
        }
        else {
            c = bottom.pop();
            console.log('Removed: ' + c.movement  + ' fron bottom half.');
            cards.unshift(c);
            console.log('Adding ' + c.movement  + ' to shffled deck.');
            console.log(cards);
        }
    }

    if (top.length === 0) {
        console.log('Top half of deck is empty.');
        cards = bottom.concat(cards);
    }
    else {
        console.log('Bottom half of deck is empty.');
        cards = top.concat(cards);
    }

    console.log(cards);
    return cards;
}