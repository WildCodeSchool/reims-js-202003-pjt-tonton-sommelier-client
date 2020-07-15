import React, { useEffect } from 'react';
import {
  Link,
  useHistory,
  // useParams,
} from 'react-router-dom';
import { connect } from 'react-redux';

import BorderTopCard from './BorderTopCard';
import './DebutDeJeu.css';
import './Box.css';

import Axios from 'axios';
import { changeType } from '../redux/Reducer';

import oeil from '../Images/oeil.png';
import nez from '../Images/nez.png';
import bouche from '../Images/bouche.png';
import TontonSodo from '../Images/TontonSodo.png';
import ProgressBar from './ProgressBar';

function DebutJeuContainer({ dispatch, ...props }) {

  const history = useHistory();

  useEffect(() => {
    if (props.token == null) {
      history.push('/login');
    } else {
      Axios.get('http://localhost:8000', { headers: { Authorization: `Bearer ${props.token}` } })
        .then((response) => response.data)
        .catch(() => {
          history.push('/login');
        });
    }
  }, [props.token, history]);

  return (
    <div>
      <Link to="/sessionname">
        <BorderTopCard />
      </Link>
      <div>
        <h3>{props.NameSession}</h3>
      </div>
      <div className="ButtonContent">
        <div className="RedGreen">
          <div>
            <Link className="BtnLink CercleBtnStartGame" to="/choixquestion1">
              <div className="GreenButton" />
            </Link>
          </div>
          <div>
            <Link className="BtnLink CercleBtnStartGame CercleBtnStartGameRed" to="/choixquestion1">
              <div className="RedButton" />
            </Link>
          </div>
        </div>
        <div className="TontonSodoContent">
          <img src={TontonSodo} alt="TontonSodo" className="TontonSodoImg" />
        </div>
        <div className="EyeNose">
          <div className="CercleBtnStartGame">
            <Link className="BtnLink" to="/vue" onClick={() => dispatch(changeType('oeil'))}>
              <img src={oeil} alt="oeil" className="BtnImg" />
            </Link>
          </div>
          <div className="CercleBtnStartGame">
            <Link className="BtnLink" to="/nez" onClick={() => dispatch(changeType('nez'))}>
              <img src={nez} alt="nez" className="BtnImg" />
            </Link>
          </div>
        </div>
        <div className="Mouth">
          <div className="CercleBtnStartGame">
            <Link className="BtnLink" to="/bouche" onClick={() => dispatch(changeType('bouche'))}>
              <img src={bouche} alt="bouche" className="BtnImg" />
            </Link>
          </div>
        </div>
        <div>
          <ProgressBar />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  type: state.reducer.type,
  category: state.reducer.category,
  answer: state.reducer.answer,
  answerId: state.reducer.answerId,
  NameSession: state.reducer.NameSession,
  token: state.reducer.token,
});

const DebutJeu = connect(mapStateToProps)(DebutJeuContainer);
export default DebutJeu;
