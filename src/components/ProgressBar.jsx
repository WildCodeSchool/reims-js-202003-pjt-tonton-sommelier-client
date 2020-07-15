import React, { useState } from 'react';
import { Progress } from 'reactstrap';
import './ProgressBar.css';

const ProgressBar = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <div className="progressBarContainer">
        <progress className="progessBar" max="100" value={value} />
      </div> 
      <div className="progressBarReactStrap">
        <div className="text-center">
          {value}
          %
        </div>
        <Progress color="sucess" value={value} />
      </div>
    </>
  );
};

export default ProgressBar;
