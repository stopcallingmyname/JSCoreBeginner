function countVowels(str) {
    'use strict';
    const vowels = 'aeiouAEIOU';
    let count = 0;
    
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}

const str = "lorem ipsum dolor sit amet";
console.log(countVowels(str));