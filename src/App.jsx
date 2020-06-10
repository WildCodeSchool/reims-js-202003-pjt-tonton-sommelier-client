import React from 'react';
import './App.css';
import PageScan from './components/PageScan';
import TypeWines from './components/TypeWines';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PageScan />
        <TypeWines />
      </header>
    </div>
  );
}

export default App;
