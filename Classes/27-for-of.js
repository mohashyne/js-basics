// for-in loop - we use it to itterate over the properties of an object. we can also use this to ittrate ove an Array but is not an ideal way.

const person = {
    name: 'Muhammad',
    age: 30
};

for (let key in person)
console.log(key, person[key]); 
//we cannot use person.key because we don't have property called 'key' in the person object, that why we have to use the bracket.


// if you want to view the properties of an object , there are two ways:
// the Dot notation e.g person.name and the Bracket notation e.g person['name'] :- we use the bracket notation when we don't know ahead of time, at the time of writing a code what property we are going to access. perharps the name of the target property is calculated at runtime


// const colors = ['red', 'green', 'blue'];

// for (let index in colors)
// // console.log(index);
// console.log(index, colors[index]);




// for-of
//we use it to itterate over the elements or items in an array
//THIS IS THEE IDEAL WAY
const colors = ['red', 'green', 'blue'];

for (let color of colors)
console.log(color);
