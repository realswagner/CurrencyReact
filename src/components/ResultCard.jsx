
import React from 'react';

function ResultCard() {
  return (
    <div style={styles.card}>
      <h3>Conversion Result</h3>
      <p style={styles.resultText}>100 JPY = 0.69 USD</p>
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