// create a function called sum and the function will return the sum of all multiples of 3 and 5 of 0 - limit, e.g 10
//Multiples of 3: 3, 6, 9
// multiples of 5: 5, 10   
//and the sum of both 3 and 5 is  33

console.log(sum(10));

function sum(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++)
    if (i % 3 === 0 || i % 5 === 0)
    sum += i;

    return sum;
}