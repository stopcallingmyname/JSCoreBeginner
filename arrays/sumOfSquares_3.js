function sumOfSquares(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num * num, 0);
  return sum;
}

const numbers = [1, 2, 3, 4, 5];
const result = sumOfSquares(numbers);
console.log(result); // 55
