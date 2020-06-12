import React, { useState } from 'react';
import Axios from 'axios';

function TypeWines() {
  const [boxes, setBoxes] = useState([]);

  function handleClick() {
    Axios.get('http://localhost:8000/boxes')
      .then((response) => response.data)
      .then((data) => {
        setBoxes({ data });
      });
  }

  return (
    <div>
      <h1> LES VINS ROUGES </h1>
      <button className="button" type="button" onClick={() => handleClick()}> play </button>
      {boxes.map((box) => <p>{box.name}</p>)}
      <hr />
      <button className="button" type="button"> 1 </button>
      <button className="button" type="button"> 2 </button>
      <button className="button" type="button"> 3 </button>
      <button className="button" type="button"> 4 </button>
      <button className="button" type="button"> 5 </button>
      <button className="button" type="button"> 6 </button>
      <button className="button" type="button"> 7 </button>
      <button className="button" type="button"> 8 </button>
      <button className="button" type="button"> 9 </button>
      <hr />
      <button className="button" type="button"> oeuil </button>
      <button className="button" type="button"> nez </button>
      <button className="button" type="button"> gout </button>
    </div>
  );
}

export default TypeWines;
