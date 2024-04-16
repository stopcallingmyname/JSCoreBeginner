function delayAndCall(callback) {
  setTimeout(callback, 2000);
}

function myCallback() {
  console.log('Callback function called after 2 seconds');
}

delayAndCall(myCallback); // Callback function called after 2 seconds
