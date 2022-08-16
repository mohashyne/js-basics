// RECAP // Strict Equality (Type + Value) ensures that the type and value must match.
// console.log(1 === 1);
// console.log('1' === 1);



// // Lose Equality (dosen't care about the types matching , if the types don't match, it will convert type of what we have in rigth side to match what we have on the left side and it will only check if the values are equal )
// console.log(1 == 1);
// console.log('1' == 1);
// console.log(true == 1);


// // Most of the time We should be using the STRICT equality , because its more precise and accurate.

                



                         //MAIN CASE


let role = 'guest'; //let imagine this represents the role of the current user


//if the role is not defined ' let role = 'guest'; ' it will give us an 'unknow user'

//we want to se if this user is a guest, a moderator or an Admin.

//we can use a bunch if 'if' and 'else' , but we can also use 'case'

//we will add one or more case statement inside the curlyBraces , each case statement is used to compare the  value of this varialble 'role' with something

switch (role) {
    case 'guest':
    console.log('Guest User');
    break;  //the break statement is added so as to jump out of this switch statement, otherwise it will combine with the other statements.


    case 'moderator':
        console.log('Moderate User');
        break;

    default:
        console.log('Unknown User');    

}

//At the end of a stetement you dont need a 'break;' because that is the ennd of the statement.                 


             // ALTERNATIVELY YOU CAN USE 'IF' & 'ELSE' WHICH IS MORE CLEANER AND RECOMMENED.




if (role === 'guest')
console.log('Guest User');

else if (role === 'moderator')
console.log('Moderator User');

else
 console.log('Unknown User');


 //Extra example 
 if (role === 'guest' && hour > 12)
console.log('Guest User');
