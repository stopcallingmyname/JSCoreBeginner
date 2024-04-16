function fetchURLs(urls) {
  const promises = urls.map((url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            reject(new Error(`Error while loading URL: ${url}`));
          }
          return response.text();
        })
        .then((data) => {
          resolve({url: url, content: data});
        })
        .catch((error) => {
          reject(error);
        });
    });
  });

  return Promise.all(promises);
}

const urls1 = [
  'https://napster2210.github.io/ngx-spinner/',
  'https://github.com/stopcallingmyname/JSCoreBeginner',
];
fetchURLs(urls1)
  .then((results) => {
    results.forEach((result) => {
      console.log(
        `URL: ${result.url}, Content Length: ${result.content.length}`
      );
    });
  })
  .catch((error) => {
    console.error(error.message);
  });
