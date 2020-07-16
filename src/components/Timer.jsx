import React, { useState, useEffect }  from "react";
import {
  useHistory,
} from 'react-router-dom';
import './timer.css';

function Timer(){
  const MAX_DURATION = 30;
  const [counter, setCounter] = useState(MAX_DURATION);
  const history = useHistory();

  useEffect(() => {
    if (counter > 0){
      setTimeout(() => setCounter(counter - 1), 1000);
    } else {
      history.push('/reponse');
    }
  }, [counter]);

  return(
    <progress className="timer" max={MAX_DURATION} value={counter}>{counter}%</progress>    
  );
}

export default Timer;
