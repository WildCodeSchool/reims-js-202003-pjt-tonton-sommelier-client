import React, { useState, useEffect } from 'react';
import { Progress } from 'reactstrap';
import './ProgressBar.css';
import { connect } from 'react-redux';
import { changeAnswer, anserIdChoosen, counterScore} from '../redux/Reducer';

const ProgressBarContainer = ({ dispatch, ...props }) => {
  const [value, setValue] = useState(0);

  useEffect(()=>{
    setValue(props.score)
  },[props.score]);

  return (
    <>
      <div className="progressBarReactStrap">
        <div className="text-center">
        </div>
        <Progress color="sucess" value={value*11} max="99"/>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  score: state.reducer.score,
});

const ProgressBar = connect(mapStateToProps)(ProgressBarContainer);
export default ProgressBar;
