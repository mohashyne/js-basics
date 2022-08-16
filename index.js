//Write a function called showNumbers that takes a parameter called limit , pass a number like 10 for showNumbers, and when we call the function , we should see all the numbers from 0 - 10 or the number we supplied as the limit, if the number is "EVEN" it should display the EVEN otherwise "ODD".


//showNumbers(10);

// function showNumbers(limit){
//     for (let i = 0; i <= limit; i++) {
//  if (i % 2 === 0) console.log(i, 'EVEN');
//  else console.log(i, 'ODD');
//     }

// }


 // INSTEAD WE CAN DEFINE IT LIKE THIS.

function showNumbers(limit){
    for (let i = 0; i <= limit; i++) {
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    
    }
    
   
    
} showNumbers(10);