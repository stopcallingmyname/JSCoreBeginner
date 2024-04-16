function validateInteger(number) {
  if (!Number.isInteger(number)) {
    throw new Error('The parameter must be an integer');
  }
}

try {
  validateInteger(3);
  validateInteger(3.5);
} catch (error) {
  console.error(error.message); // The parameter must be an integer
}
