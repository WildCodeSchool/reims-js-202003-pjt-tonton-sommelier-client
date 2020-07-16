import React, { useState, useEffect } from 'react';
import {
  useHistory,
} from 'react-router-dom';
import './timer.css';

function Timer() {
  const MAX_DURATION = 30;
  const [counter, setCounter] = useState(MAX_DURATION);
  const history = useHistory();

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    } else {
      history.push('/reponse');
    }
  }, [counter]);

  return (
    <div className="progressBarReactStrap">
      <progress className="Timer" max={MAX_DURATION} value={counter} />
    </div>
  );
}

export default Timer;
