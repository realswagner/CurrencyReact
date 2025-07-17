import logo from './logo.svg';
import './App.css';
import React from 'react';
import ConverterCard from './components/ConverterCard';


function App() {
  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '40px' }}>
      <ConverterCard />
    </div>
  );

}

export default App;
