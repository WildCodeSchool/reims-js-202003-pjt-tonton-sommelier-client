import React from 'react';
import './App.css';
import TypeWines from './components/TypeWines';
import BorderTopCard from './components/BorderTop/BorderTopCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TypeWines />
        <BorderTopCard />
      </header>
    </div>
  );
}

export default App;
