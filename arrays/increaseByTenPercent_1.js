function increaseByTenPercent(numbers) {
  const result = numbers.map((number) => number * 1.1);
  return result;
}

const numbers = [5, 10, 13, 40];
const increasedNumbers = increaseByTenPercent(numbers);
console.log(increasedNumbers); // [ 5.5, 11, 14.3, 44 ]
