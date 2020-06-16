import React, { useState } from 'react';
import Axios from 'axios';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import BorderTopCard from '../BorderTop/BorderTopCard';

function TypeWines() {
  const [boxes, setBoxes] = useState([]);

  function handleClick() {
    Axios.get('http://localhost:8000/boxes')
      .then((response) => response.data)
      .then((data) => {
        setBoxes(data);
      });
  }

  return (
    <div>
      <Link to="/">
        <BorderTopCard />
      </Link>
      <h1> LES VINS ROUGES </h1>

      <Link to="raisin">
        <button className="button" type="button">Raisin</button>
      </Link>
      <Link to="tonneau">
        <button className="button" type="button">Tonneau</button>
      </Link>
      <Link to="couverts">
        <button className="button" type="button">couverts</button>
      </Link>
      <Link to="histoire">
        <button className="button" type="button">Histoire</button>
      </Link>
      <Link to="region">
        <button className="button" type="button">Region</button>
      </Link>
      <Link to="tannin">
        <button className="button" type="button">Tannin</button>
      </Link>
      <hr />
      <Link to="vue">
        <button className="button" type="button">Vue</button>
      </Link>
      <Link to="nez">
        <button className="button" type="button">Nez</button>
      </Link>
      <Link to="gout">
        <button className="button" type="button">Goût</button>
      </Link>
      <hr />
      <button className="button" type="button" onClick={() => handleClick()}> Test </button>

      {boxes.map((box) => <p>{ box.name }</p>)}
    </div>
  );
}

export default TypeWines;
