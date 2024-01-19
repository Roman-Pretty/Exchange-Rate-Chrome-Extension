
/**
 * Calculates the exchange rate and displays the result.
 */
const amount = document.getElementById('input');
const currency = document.getElementById('currency-from');
const currencyTo = document.getElementById('currency-to');
const convert = document.getElementById('convert');
const result = document.getElementById('result');
const output = document.getElementById('output');

const API_KEY="keTLRgak3n8l3wgjJDw2cw==KwaVDPWysGP5zOKZ"
const API_URL = `https://api.api-ninjas.com/v1/exchangerate?pair=`;

function calculate() {

  document.getElementById('output').innerHTML = 'Loading...';
  const amountTotal = amount.value;
  const currencyTotal = currency.value;
  const currencyToTotal = currencyTo.value;
  const url = API_URL + currencyTotal + '_' + currencyToTotal;

fetch(url, {
    headers: {
      'X-API-KEY': API_KEY,
    }
})
.then((response) => response.json())
.then((data) => {
    const rate = data.exchange_rate;
    const resultPrice = rate * amountTotal;
    //result.innerHTML = amountTotal + ' ' + currencyTotal + ' = ' + resultPrice + ' ' + currencyToTotal;
    document.getElementById('output').innerHTML = resultPrice;
})
.catch((error) => {
    console.log(error);
    result.innerHTML = 'Something went wrong';
});
}

amount.addEventListener('keydown', () => {
  if (event.keyCode === 13) {
    calculate();
  }
  
});

convert.addEventListener('click', () => {
  calculate();
}); 