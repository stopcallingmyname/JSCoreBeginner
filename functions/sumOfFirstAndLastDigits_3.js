function sumOfFirstAndLastDigits(number) {
  const strNumber = number.toString();
  const firstDigit = parseInt(strNumber[0]);
  const lastDigit = parseInt(strNumber[strNumber.length - 1]);
  const sum = firstDigit + lastDigit;
  console.log('result', number, ':', sum);
}

const number = 12345;
sumOfFirstAndLastDigits(number); // 6
