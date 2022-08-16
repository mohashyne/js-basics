//e.g list of product in a shopping cart for a user to select, in this case we use an array to store the list.
// [] This is called the array literal, and its called the empty array.

let selectedColors = ['red', 'blue', 'yellow'];
selectedColors[3] = 'green';
selectedColors[3] = 2;
console.log(selectedColors); // the arrays use index to specify number to each property starting from 0, 1, e.t.c. to specify a property you can put [0] inside the bracket

console.log(selectedColors[0]);
console.log(selectedColors[2]);
console.log(selectedColors.length);
