// In javaScript we have 3 types of Logical operators
// logical "And" (&&)
// logical "Or"   (||)
// logical "Not"   (!)


// Logical AND (&&)
// Returns TRUE if both operands are TRUE, if not we get false if one of the condition is not fulfilled.
// console.log(true && true);
// console.log(false && true);
// console.log(true && false);

//e.g

// let highIncome = true;
// let goodCreditScore = true;

// let eligbleForLoan  = highIncome && goodCreditScore;


// console.log(eligbleForLoan);





// Logical OR (||)
// Returns TRUE if one of the  operands is TRUE
//e.g

// let highIncome = false;
// let goodCreditScore = true;

// let eligbleForLoan  = highIncome || goodCreditScore;


// console.log(eligbleForLoan);



// Logical NOT (!)
// Returns TRUE if both operands are TRUE


let highIncome = false;
let goodCreditScore = false;

let eligbleForLoan  = highIncome || goodCreditScore;
console.log('Eligible', eligbleForLoan);

let applicationRefused = !eligbleForLoan
console.log('Application Refused', applicationRefused);