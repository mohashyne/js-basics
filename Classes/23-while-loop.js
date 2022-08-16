//in the 'for' loop variable is part of the loop itself.
//but in while-loop we have to declare this variable externally.

for(let i = 0;  i <= 5; i++) {
    if (i % 2 !== 0) console.log(i);
 }



 let i = 0;
 while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
 }
         // if change the value of i to 9 for example , nothing will be displayed on  the console because it has returned 'False'

