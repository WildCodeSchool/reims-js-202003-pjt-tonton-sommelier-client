import React, { useState, useEffect } from 'react';
import { Input, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { NameSession } from '../redux/Reducer';

const SessionName = ({ dispatch }) => {
  const [result, setResult] = useState(null);
  const history = useHistory();

  useEffect(() => {
    dispatch(NameSession(result));
  }, [dispatch, result]);

  const onChangeResult = (e) => {
    setResult(
      e.target.value,
    );
  };

  return (
    <div className="SessionNameContent">
      <h1 className="SessionName">
        Donnez un nom a vôtre session de jeu !
      </h1>
      <div className="form-data DivInputSessionName">
        <Input
          type="text"
          id="SessionName"
          name="SessionName"
          onChange={onChangeResult}
          value={result}
          required
          placeholder="Nom de la session"
        />
      </div>
      <div className="form-data BtnLoginGroupe">
        <Button className="BtnSessionName" onClick={() => history.push('/debutjeu')}>
          Let&apos;s go !
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  type: state.reducer.type,
  category: state.reducer.category,
  answer: state.reducer.answer,
  answerId: state.reducer.answerId,
  NameSession: state.reducer.NameSession,
});

const SessionNamePage = connect(mapStateToProps)(SessionName);
export default SessionNamePage;
