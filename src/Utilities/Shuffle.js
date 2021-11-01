import React from 'react';

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random(min, max) * (max - min + 1) + min);
}

//shuffle(0, 14);
export function shuffle(set, shuffledCards) {
    let len = set.length;
    for (let i = 0; i < len; i++) {

        let r = getRandom(0, set.length - 1);
        shuffledCards.push(set[r]);
        set.splice(r, 1);
    }   
}
