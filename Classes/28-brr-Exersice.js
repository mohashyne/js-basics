//Write a function that takes two numbers and returns the maximum of the two numbers.

// let number = max(1, 2);
// console.log(number);


// function max(a, b) {
//     if (a > b) return a;
//     else return b;
// };


//not recommened to use a and b.  ALWAYS test your functions with diff possible values.

let number = max(1, 2);
console.log(number);


function max(a, b) {
    // if (a > b) return a;
    // return b;
    return (a > b) ? a : b;
};

//Above is a cleaner way of writing the code.