// in Object instead of declaring two or more variable that are inter-related seperately , we can put them inside an object. e.g A person has a Name, Age , address and so on, this are the properties of a person.

let person = {
    name: 'Muhammad',
    age: 30

};

//Dot Notation (to change the name of the person) (PREFFERED)
person.name = 'Umar';

//Bracket notation (this is use to access and object property too)
person['name'] = 'Hauwa';
//e.g incase the variable is 
//let selection = 'name';
//person[selection] = 'Hauwa';

//console.log(person);
console.log(person.name);