// In your browser console, if your try the operations below , you will see the result and the reason you get the results will beexpalained.
// false || true, Result will be  "true"  : because our second operands is 'true' thats why we get true as the result.

//false || 'boy', Result is will be "boy" which is a string : because our second operands is string thats why we get "boy" as the result. ("boy" is truthy)

//false || 1 = 1 ,Result is will be "1" : because our second operands is number  thats why we get 1 as the result.

// When our javascript engine tries to evaluate this expression, it looks at each operand, if that operand is not a boolean 'true' or 'false', it will try to interprete it as what we call 'Truthy' of 'falsy'

// false || 1 || 2, result will be 1 because as soon a the javascript engine finds a true value it returns it without going to the next value. This is what we call short Circuting
 
// The result of a logical expression is NOT neccessarily a true or false. that depends on the value of the operands we have.

//Falsy (false like a boolean value but not the same) includes:

//undefined
// null
//0
//false
//''
//NaN

//Anything that is not Falsy -> Truthy


let userColor = undefined;
let defaultColor = 'blue';
let currentcolor = userColor || defaultColor;

console.log(currentcolor);