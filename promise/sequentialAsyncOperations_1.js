function sequentialAsyncOperations(tasks) {
  return tasks.reduce((promiseChain, currentTask) => {
    return promiseChain.then((chainResults) =>
      currentTask().then((currentResult) => [...chainResults, currentResult])
    );
  }, Promise.resolve([]));
}

// Пример использования:
function asyncTask(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Task executed with value:', value);
      resolve(value);
    }, Math.random() * 1000);
  });
}

const tasks = [() => asyncTask(1), () => asyncTask(2), () => asyncTask(3)];

sequentialAsyncOperations(tasks)
  .then((results) => {
    console.log('All tasks completed with results:', results); // All tasks completed with results: [ 1, 2, 3 ]
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
