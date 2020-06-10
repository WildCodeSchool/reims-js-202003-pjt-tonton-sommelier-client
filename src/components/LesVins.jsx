import React, { useState } from 'react';
import Axios from 'axios';

function LesVins() {
  const [boxes, setapi] = useState([]);

  function handleClick() {
    Axios.get('http://localhost:8000/boxes')
      .then((response) => response.data)
      .then((data) => {
        setapi({ boxes: data });
      });
  }

  return (
    <div>
      <p>button from wines</p>

      <button type="button" className="button" onClick={() => handleClick}> play </button>
      <p>
        {boxes.map((box) => box.name) }
      </p>
    </div>
  );
}

export default LesVins;
