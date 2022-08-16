//Break - we breakout of a loop.

// let i = 0;
// while (i <= 10) {
//     if (i === 5) break;
//     console.log(i);
//     i++;
// }



//Continue - we jump  to the next itterration.
let i = 0;
while (i <= 10) {
    // if (i === 5) break;
    if (i % 2 === 0) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}