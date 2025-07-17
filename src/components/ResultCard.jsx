
import React from 'react';

function ResultCard({ amount, fromCurrency, toCurrency, convertedAmount, error }) {
  return (
    <div style={styles.card}>
      <h3>Conversion Result</h3>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <p style={styles.resultText}>
          {amount && convertedAmount
            ? `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`
            : 'Enter amount and convert to see result'}
        </p>
      )}
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '12px',
    padding: '20px',
    maxWidth: '400px',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#fdfdfd',
    textAlign: 'center',
  },
  resultText: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: '10px',
  },
};

export default ResultCard;