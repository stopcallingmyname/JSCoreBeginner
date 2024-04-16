function factorial(n) {
    'use strict';
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const number = 5;
console.log(factorial(number)); 
