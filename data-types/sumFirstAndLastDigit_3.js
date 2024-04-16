function sumFirstAndLastDigit(number) {
  const numberStr = number.toString();
  const firstDigit = parseInt(numberStr.charAt(0));
  const lastDigit = parseInt(numberStr.charAt(numberStr.length - 1));
  const sum = firstDigit + lastDigit;
  console.log('result:', sum);
}

sumFirstAndLastDigit(12345); // 6
