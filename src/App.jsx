import React from 'react';
import './App.css';
import TypeWines from './components/WineSelector/TypeWines';
import BorderTopCard from './components/BorderTop/BorderTopCard';
import HomePage from './components/HomePage/Home';

function App() {
  return (
    <div className="App">
      <BorderTopCard />
      <TypeWines />
      <HomePage />
    </div>
  );
}

export default App;
