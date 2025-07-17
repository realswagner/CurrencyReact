import { convertCurrency } from '../API/CurrencyApi';

import React from "react";

function ConverterCard({
  fromCurrency,
  toCurrency,
  amount,
  setFromCurrency,
  setToCurrency,
  setAmount,
  onConvert,
}) {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>💱 Currency Converter</h2>

      <div style={styles.row}>
        <select
          style={styles.select}
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="JPY">JPY - Japanese Yen</option>
          <option value="USD">USD - US Dollar</option>
          <option value="EUR">EUR - Euro</option>
        </select>

        <select
          style={styles.select}
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value="JPY">JPY - Japanese Yen</option>
          <option value="USD">USD - US Dollar</option>
          <option value="EUR">EUR - Euro</option>
        </select>
      </div>

      <input
        type="number"
        placeholder="Enter amount"
        style={styles.input}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button style={styles.button} onClick={onConvert}>
        Convert Now
      </button>
    </div>
  );
}

const styles = {
  card: {
    maxWidth: "420px",
    margin: "40px auto",
    padding: "30px",
    borderRadius: "16px",
    boxShadow:
      "0 10px 25px rgba(0, 0, 0, 0.12), 0 6px 8px rgba(0, 0, 0, 0.08)",
    background:
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#fff",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "24px",
    fontWeight: "700",
    fontSize: "1.8rem",
    letterSpacing: "1.2px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: "15px",
    marginBottom: "22px",
  },
  select: {
    flex: "1",
    padding: "12px 14px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    cursor: "pointer",
    backgroundColor: "rgba(255,255,255,0.9)",
    color: "#333",
    fontWeight: "600",
    transition: "box-shadow 0.3s ease",
  },
  input: {
    width: "100%",
    padding: "14px 16px",
    fontSize: "1.1rem",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    marginBottom: "26px",
    fontWeight: "600",
    boxSizing: 'border-box',
  },
  button: {
    width: "100%",
    padding: "14px 0",
    backgroundColor: "#f6a821",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    fontWeight: "700",
    fontSize: "1.2rem",
    cursor: "pointer",
    boxShadow:
      "0 4px 15px rgba(246, 168, 33, 0.7)",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
  },
};

// Add hover effect with inline style trick:
styles.button[':hover'] = {
  backgroundColor: "#f39c12",
  boxShadow: "0 6px 20px rgba(243, 156, 18, 0.9)",
};

export default ConverterCard;
