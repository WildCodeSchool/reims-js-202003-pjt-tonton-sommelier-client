import React, { useState, useEffect } from 'react';
import { Progress } from 'reactstrap';
import './ProgressBar.css';
import { connect } from 'react-redux';

const ProgressBarContainer = ({ dispatch, ...props }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(props.score);
  },
  [props.score]);

  return (
    <>
      <div className="progressBarReactStrap">
        <div className="text-center" />
        <Progress color="sucess" value={value} max="99" />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  score: state.reducer.score,
});

const ProgressBar = connect(mapStateToProps)(ProgressBarContainer);
export default ProgressBar;
