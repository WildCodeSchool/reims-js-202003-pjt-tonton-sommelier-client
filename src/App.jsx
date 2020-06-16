import React from 'react';
import './App.css';
import TypeWines from './components/TypeWines';
import BorderTopCard from './components/BorderTop/BorderTopCard';
import CreateCoffret from './components/CreateCofret/CreateCoffret';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BorderTopCard />
        <TypeWines />
        <CreateCoffret />
      </header>
    </div>
  );
}

export default App;
