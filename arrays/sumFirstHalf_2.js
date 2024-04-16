function sumFirstHalf(numbers) {
  const halfIndex = Math.ceil(numbers.length / 2);
  const firstHalf = numbers.slice(0, halfIndex);
  const sum = firstHalf.reduce((acc, curr) => acc + curr, 0);
  return sum;
}

// Пример использования:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = sumFirstHalf(numbers);
console.log(result); // 15
