const API_KEY = process.env.REACT_APP_EXCHANGE_API_KEY;
const BASE_URL = 'https://api.exchangerate.host';

export async function convertCurrency(from, to, amount) {
  const response = await fetch(
    `${BASE_URL}/convert?from=${from}&to=${to}&amount=${amount}&access_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch conversion data');
  }

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.error?.info || 'Conversion failed');
  }

  return data.result;
}