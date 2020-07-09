import React from 'react';
import {
  Link,
  // useParams,
} from 'react-router-dom';
import { connect } from 'react-redux';

import BorderTopCard from './BorderTopCard';
import './DebutDeJeu.css';
import './Box.css';

import { changeType } from '../redux/Reducer';

import oeil from '../Images/oeil.png';
import nez from '../Images/nez.png';
import bouche from '../Images/bouche.png';
import TontonSodo from '../Images/TontonSodo.png';

function DebutJeuContainer({ dispatch }) {
  return (
    <div>
      <Link to="/home">
        <BorderTopCard />
      </Link>
      <div className="ButtonContent">
        <div className="RedGreen">
          <div>
            <Link className="BtnLink CercleBtnStartGame" to="/choixquestion">
              <div className="GreenButton" />
            </Link>
          </div>
          <div>
            <Link className="BtnLink CercleBtnStartGame CercleBtnStartGameRed" to="/choixquestion">
              <div className="RedButton" />
            </Link>
          </div>
        </div>
        <div className="TontonSodoContent">
          <img src={TontonSodo} alt="TontonSodo" className="TontonSodoImg" />
        </div>
        <div className="EyeNose">
          <div className="CercleBtnStartGame">
            <Link className="BtnLink" to="/questions" onClick={() => dispatch(changeType('oeil'))}>
              <img src={oeil} alt="oeil" className="BtnImg" />
            </Link>
          </div>
          <div className="CercleBtnStartGame">
            <Link className="BtnLink" to="/questions" onClick={() => dispatch(changeType('nez'))}>
              <img src={nez} alt="nez" className="BtnImg" />
            </Link>
          </div>
        </div>
        <div className="Mouth">
          <div className="CercleBtnStartGame">
            <Link className="BtnLink" to="/questions" onClick={() => dispatch(changeType('bouche'))}>
              <img src={bouche} alt="bouche" className="BtnImg" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const DebutJeu = connect()(DebutJeuContainer);
export default DebutJeu;
