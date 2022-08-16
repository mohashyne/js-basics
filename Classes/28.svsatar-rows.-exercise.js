showStars(10);

function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++)  //this is called a nested loop.
        pattern += '*';
        console.log(pattern);
    }
}