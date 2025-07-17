
import React from 'react';

function ResultCard({ amount, fromCurrency, toCurrency, convertedAmount, error }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.heading}>Conversion Result</h3>
      {error ? (
        <p style={styles.errorText}>{error}</p>
      ) : (
        <p style={styles.resultText}>
          {amount && convertedAmount
            ? `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`
            : "Enter amount and convert to see result"}
        </p>
      )}
    </div>
  );
}

const styles = {
  card: {
    maxWidth: "420px",
    margin: "0 auto 40px",
    padding: "28px",
    borderRadius: "16px",
    backgroundColor: "#fff",
    boxShadow:
      "0 10px 30px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    fontSize: "1.6rem",
    marginBottom: "20px",
    color: "#333",
    fontWeight: "700",
  },
  resultText: {
    fontSize: "1.4rem",
    color: "#222",
    fontWeight: "600",
  },
  errorText: {
    fontSize: "1.2rem",
    color: "#e74c3c",
    fontWeight: "700",
  },
};

export default ResultCard;
