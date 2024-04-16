async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Error while fetching data from ${url}: ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const apiUrl = 'https://api.coinbase.com/v2/prices/ETH-USD/buy';
fetchData(apiUrl)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error('Failed to fetch data:', error.message);
  });
