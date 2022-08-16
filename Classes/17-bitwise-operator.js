// bitwise talk in computer number/decimal
//e.g 1 = 00000001 ( we have 8 digits and each digit is called a bit)
//  2 = 00000010

//bitwise are similar to logical operators but they work on the individual bits of a number


// console.log(1 | 2); // Bitwise OR

// 1 = 00000001
// 2 = 00000010
// R = 00000011

// the bitwise result will be 3 (3 = 00000011 bcoz the binary has been coverted to decimal)

// console.log(1 & 2); // Bitwise AND

// R = 00000000


// Read ,     write,     Execute
// 00000100
//            00000110
//                       00000111


const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let    myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

console.log(myPermission);

let message = (myPermission & readPermission) ? 'yes': 'no';

console.log(message);