function repeatOperation(operation, interval, repetitions) {
  let count = 0;
  const intervalId = setInterval(() => {
    operation();
    count++;
    if (count === repetitions) {
      clearInterval(intervalId);
    }
  }, interval);
}

function printMessage() {
  console.log('Operation executed');
}

repeatOperation(printMessage, 1000, 5); // Operation executed 5 times
