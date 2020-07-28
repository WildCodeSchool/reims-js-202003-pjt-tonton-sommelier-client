import React from 'react';
import {
  Link,
} from 'react-router-dom';
import { connect } from 'react-redux';

import BorderTopCard from './BorderTopCard';
import './DebutDeJeu.css';
import './Box.css';
import './ChoixQuestion.css';

import { changeType } from '../redux/Reducer';

import barique from '../Images/barique.png';
import book from '../Images/book.png';
import couvert from '../Images/couvert.png';
import france from '../Images/france.png';
import raisin from '../Images/raisin.png';
import ProgressBar from './ProgressBar';

function ChoixQuestionContainer({ dispatch, ...props }) {
  return (
    <div>
      <Link to="/debutjeu">
        <BorderTopCard />
      </Link>
      <div>
        <p className="NameSessionInGame">
          <p className="TontonVS">
            Tonton Sommelier
            <br />
          </p>
          vs
          <br />
          {props.NameSession}
        </p>
      </div>
      <div className="contenuBoutons">
        <div className="rougeEtVert">
          <div className="CercleBtnStartGame">
            <Link className="BtnLink" to="/questions" onClick={() => dispatch(changeType('barique'))}>
              <img src={barique} alt="barique" className="BtnImg" />
            </Link>
          </div>
          <div className="CercleBtnStartGame">
            <Link className="BtnLink" to="/questions" onClick={() => dispatch(changeType('book'))}>
              <img src={book} alt="book" className="BtnImg" />
            </Link>
          </div>
        </div>
        <div className="plusOneContainer">
          <div className="plusOneText">{`+${props.dificultie}`}</div>
        </div>
        <div className="oeuilEtNez">
          <div className="CercleBtnStartGame">
            <Link className="BtnLink" to="/questions" onClick={() => dispatch(changeType('couvert'))}>
              <img src={couvert} alt="couvert" className="BtnImg" />
            </Link>
          </div>
          <div className="CercleBtnStartGame">
            <Link className="BtnLink" to="/questions" onClick={() => dispatch(changeType('france'))}>
              <img src={france} alt="france" className="BtnImg france" />
            </Link>
          </div>
        </div>
        <div className="bouche">
          <div className="CercleBtnStartGame">
            <Link className="BtnLink" to="/questions" onClick={() => dispatch(changeType('raisin'))}>
              <img src={raisin} alt="raisin" className="BtnImg" />
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
  NameSession: state.reducer.NameSession,
  dificultie: state.reducer.dificultie,
});

const ChoixQuestion1 = connect(mapStateToProps)(ChoixQuestionContainer);
export default ChoixQuestion1;
