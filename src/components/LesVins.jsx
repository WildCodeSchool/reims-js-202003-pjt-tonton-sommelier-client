import React, { useState } from 'react';
import Axios from 'axios';

function WineList() {
  const [boxes, setBoxes] = useState([]);

  function handleClick() {
    Axios.get('http://localhost:8000/boxes')
      .then((response) => response.data)
      .then((data) => {
        setBoxes({ boxes: data });
      });
  }

  return (
    <div>
      <h1> LES VINS ROUGES </h1>
      <button type="button" className="button" onClick={() => handleClick()}> play </button>
      <button type="button" className="button"> 1 </button>
      <button type="button" className="button"> 2 </button>
      <button type="button" className="button"> 3 </button>
      <button type="button" className="button"> 4 </button>
      <button type="button" className="button"> 5 </button>
      <button type="button" className="button"> 6 </button>
      <button type="button" className="button"> 7 </button>
      <button type="button" className="button"> 8 </button>
      <button type="button" className="button"> 9 </button>
      <hr />
      <button type="button" className="button"> 9 </button>
      <button type="button" className="button"> 9 </button>
      <button type="button" className="button"> 9 </button>
    </div>
  );
}

export default WineList;
