async function main() {
  async function fetchDataWithTimeout(url, timeout) {
    const controller = new AbortController();
    const {signal} = controller;

    const timeoutId = setTimeout(() => {
      controller.abort();
    }, timeout);

    try {
      const response = await fetch(url, {signal});

      clearTimeout(timeoutId);
      return response.json();
    } catch (error) {
      if (error.name === 'AbortError') {
        throw new Error('Request timed out');
      }

      throw error;
    }
  }

  const apiUrl = 'https://api.coinbase.com/v2/prices/ETH-USD/buy';
  const timeout = 5000;

  try {
    const data = await fetchDataWithTimeout(apiUrl, timeout);
    console.log('Data:', data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
