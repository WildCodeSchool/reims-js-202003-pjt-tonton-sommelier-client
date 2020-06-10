import React from 'react';
import './App.css';
import PageScan from './components/PageScan';
import LesVins from './components/LesVins';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PageScan />
        <LesVins />
      </header>
    </div>
  );
}

export default App;
