import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ConverterCard from './components/ConverterCard';
import ResultCard from './components/ResultCard';
import { convertCurrency } from './API/CurrencyApi';

function App() {
  const [fromCurrency, setFromCurrency] = useState('JPY');
  const [toCurrency, setToCurrency] = useState('USD');
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [error, setError] = useState(null);

  const handleConvert = async () => {
  try {
    const result = await convertCurrency(fromCurrency, toCurrency, amount);
    setConvertedAmount(result);
    setError(null);
  } catch (err) {
    setError(err.message);
  }
};




  return (
    <div>
      <ConverterCard
        amount={amount}
        setAmount={setAmount}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        setFromCurrency={setFromCurrency}
        setToCurrency={setToCurrency}
        onConvert={handleConvert}
      />
      <ResultCard
        amount={amount}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        convertedAmount={convertedAmount}
        error={error}
      />
    </div>
  );
}

export default App;
