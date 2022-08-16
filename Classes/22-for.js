//LOOPs is used to repeat an action number of times
// We have:
//'for'  loops
// 'while' loops
// 'do.. while' loops
// 'for in' loops
// 'for of' loops



// for(initialExpression; condition; incrementExpresion) {
//     statement
// }
// 'i' is a short form for 'index'
// to show the output of i on the console you need to declear it in the console.log function

// for(let i = 0;  i < 5; i++) {
//     console.log('Hello World', );
// }

for(let i = 0;  i < 5; i++) {
    console.log('Hello World', i);
}

         //OR

         for(let i = 1;  i <= 5; i++) {
            console.log('Hello World', i);
        }

// the loop will execute as long as this expression 'i < 5' is true, after the first itteration 'i' is incremented by 1 , then the same condition will be evaluated again and 'i' will be incremented by 1 again, it will continue till 5 times is exhausted by the end of the itteration 5 it will be executed to false , so we have 0 ,1, 2, 3, and 4.




//TO DISPLAY ODD NUMBERS  ONLY/ Increment
//e.g let diplay the odd numbers between 1-5

for(let i = 1;  i <= 5; i++) {
   if (i % 2 !== 0) console.log(i);
}


// Revesrsal or decrement

for(let i = 5;  i >= 1; i--) {
    if (i % 2 !== 0) console.log(i);
 }


 //its more common to use the increment method rather than the decrement, but in certain situations you will want to use the decrement method.