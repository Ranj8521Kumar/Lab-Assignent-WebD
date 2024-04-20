import React, { useState } from 'react';

function CurrencyConverter() {
  const [usdAmount, setUSDAmount] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState('');

  const exchangeRates = {
    EUR: 0.85,   
  };

  const handleUSDChange = (event) => {
    setUSDAmount(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const convertCurrency = () => {
    const rate = exchangeRates[selectedCurrency];
    const convertedAmount = parseFloat(usdAmount) * rate;
    setConvertedAmount(convertedAmount.toFixed(2)); 
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <div>
        <label>
          Enter amount in USD:
          <input type="number" value={usdAmount} onChange={handleUSDChange} />
        </label>
        <label>
          Select currency:
          <select value={selectedCurrency} onChange={handleCurrencyChange}>
            {Object.keys(exchangeRates).map(currency => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </label>
        <button onClick={convertCurrency}>Convert</button>
      </div>
      {convertedAmount && (
        <div>
          <p>Converted amount: {convertedAmount} {selectedCurrency}</p>
        </div>
      )}
    </div>
  );
}

export default CurrencyConverter;
