//write a function to display/count the number of truthy in a list of arrays


const array = [0, null, 2, 3, 4, undefined, 5, '']

console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array)
    if(value)
    count++;
    return count;
}