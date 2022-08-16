//if the number we get is Divisible by 3 --> Fizz
//if the number we get is Divisible by 5 --> Buzz
//if the number we get is Divisible by both 3 and 5 --> Fizzbuzz
//if the number is NOT Divisible by both 3 or 5 --> input 
//Not a number --> 'Not a Number.
// if we don't pass a number e.g we passed a string '7' or anything that (not a number is written in javascript as NaN


const output = fizzBuzz("7");
console.log(output);

function fizzBuzz(input) {
if (typeof input !== 'number')
    return 'NaN'; //if its scale-through that means its a number.
    
    if ((input % 3 === 0) && (input % 5 === 0)) 
    // use () to separate when dealing with complex expression.
    return 'FizzBuzz';

    if (input % 3 === 0)
     return 'Fizz';

     if (input % 5 === 0)
      return 'Buzz';

     // so once wwe get to this point that means the number is not divisible by both  3 and 5. then

      return input;

}