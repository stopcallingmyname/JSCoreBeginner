function isValueInArray(arr, value) {
    'use strict';
    return arr.includes(value);
}

const array = [1, 2, 3, 4, 5];
const value = 3;

console.log(isValueInArray(array, value)); 
