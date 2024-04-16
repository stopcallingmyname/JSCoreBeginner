function generateRandomNumber() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    setTimeout(() => {
      if (randomNumber <= 5) {
        resolve(randomNumber); // Успешно выполненный промис
      } else {
        reject(new Error(`Generated number ${randomNumber} is greater than 5`));
      }
    }, randomNumber * 1000);
  });
}

generateRandomNumber()
  .then((number) => {
    console.log('Generated number:', number); // Generated number: 1
  })
  .catch((error) => {
    console.error('Error:', error.message); // Error: Generated number 7 is greater than 5 another test 
  });
