console.log(xVar); // undefined
console.log(xLet); // ReferenceError: Cannot access 'xLet' before initialization
// console.log(xConst); // ReferenceError: Cannot access 'xConst' before initialization

var xVar = 10;
let xLet = 20;
const xConst = 30;
