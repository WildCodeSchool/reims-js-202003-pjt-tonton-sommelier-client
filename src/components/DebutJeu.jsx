import React, { useState, useEffect } from 'react';
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

function DebutJeuContainer({ dispatch }) {

  return (
    <div>
      <Link to="/home">
        <BorderTopCard />
      </Link>
      <div className="contenuBoutons">
        <div className="rougeEtVert">
          <div className="CercleBtn">
            <Link className="BtnLink" to="/choixquestion">
              <div className="boutonVert" />
            </Link>
          </div>
          <div className="CercleBtn">
            <Link className="BtnLink" to="/choixquestion">
              <div className="boutonRouge" />
            </Link>
          </div>
        </div>
        <div className="oeuilEtNez">
          <div className="CercleBtn">
            <Link className="BtnLink" to="/descriptions" onClick={() => dispatch(changeType('oeil'))}>
              <img src={oeil} alt="oeil" className="BtnImg" />
            </Link>
          </div>
          <div className="CercleBtn">
            <Link className="BtnLink" to="/descriptions" onClick={() => dispatch(changeType('nez'))}>
              <img src={nez} alt="nez" className="BtnImg" />
            </Link>
          </div>
        </div>
        <div className="bouche">
          <div className="CercleBtn">
            <Link className="BtnLink" to="/descriptions" onClick={() => dispatch(changeType('bouche'))}>
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

