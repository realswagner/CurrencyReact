import React from "react";

function ConverterCard() {
  return (
    <div style={styles.card}>
      <h2>Currency Converter</h2>

      {/* Currency selectors */}
      <div style={styles.row}>
        <select style={styles.select}>
          <option value="JPY">JPY</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>

        <select style={styles.select}>
          <option value="JPY">JPY</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>

      {/* Input amount */}
      <input
        type="number"
        placeholder="Enter amount"
        style={styles.input}
      />

      {/* Convert button */}
      <button style={styles.button}>Convert</button>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '12px',
    padding: '24px',
    maxWidth: '400px',
    margin: '40px auto',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '16px',
    gap: '12px',
  },
  select: {
    width: '48%',
    padding: '8px',
    fontSize: '16px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '16px',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default ConverterCard;
