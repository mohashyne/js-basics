//in the 'for' loop variable is part of the loop itself.
//but in while-loop we have to declare this variable externally.

for(let i = 0;  i <= 5; i++) {
    if (i % 2 !== 0) console.log(i);
 }


//while loop

//  let i = 0;
//  while (i <= 5) {
//     if (i % 2 !== 0) console.log(i);
//     i++;
//  }
         // if change the value of i to 9 for example (it will not be executed), nothing will be displayed on  the console because it has returned 'False'

 //do-while loop
 //they are always executed atleast once.

 let i = 9;
 do {
    if (i % 2 !== 0) console.log(i);
    i++;

 } while (i <= 5);


 // But in this case above it will display the result that 9 is a odd number and show blank below because it returned the false action.




 //IN REAL WORLD PROJECTS MOST OF THE TIME YOU WILL BE USING THE 'FOR' OR 'WHILE' LOOP.

