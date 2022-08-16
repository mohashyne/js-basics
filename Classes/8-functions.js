// Functions are one of the fundamental building blocks in javascript, a function is basically a set of statements that performs set of task or calculate a value

function greet(name, lastName) {
    //inside the curly brace refers to as body of the function, and this is where we add statements to define a kind of logic in our application. fuction declaration dose not need ';' at the end of the curly braces , but inside it.
    console.log('Hello ' + name + ' ' + lastName); //use the + concatenation operator to merge multiple strings.

}

greet('Muhammad', 'Salihu', ''); // Muhammad is argument to the 'greet' fuction and 'name' is parameter of the 'greet' fuction
greet('Hauwa'); 




// function commend(name, attitude) {
//     console.log('Perfect job ' + name + ' ' + attitude);
// }

// commend('Umar,', 'Your work is improving');