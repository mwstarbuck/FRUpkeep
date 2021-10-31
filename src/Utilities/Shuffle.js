
function shuffle(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    console.log(Math.floor(Math.random(min, max) * (max - min + 1) + min));
}

shuffle(0, 15);