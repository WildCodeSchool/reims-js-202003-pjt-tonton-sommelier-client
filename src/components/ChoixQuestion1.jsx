import React from 'react';
import {
  Link,
  // useParams,
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

function ChoixQuestionContainer({ dispatch }) {
  return (
    <div>
      <Link to="/debutjeu">
        <BorderTopCard />
      </Link>
      <div className="displayNomEquipe">
        <div className="nomEquipe">Nom de l'équipe</div>
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
          <div className="plusOneText">+1</div>
        </div>
        <div className="oeuilEtNez">
          <div className="CercleBtnStartGame">
            <Link className="BtnLink" to="/questions" onClick={() => dispatch(changeType('couvert'))}>
              <img src={couvert} alt="couvert" className="BtnImg" />
            </Link>
          </div>
          <div className="CercleBtnStartGame">
            <Link className="BtnLink" to="/questions" onClick={() => dispatch(changeType('france'))}>
              <img src={france} alt="france" className="BtnImg" />
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
      </div>
    </div>
  );
}

const ChoixQuestion1 = connect()(ChoixQuestionContainer);
export default ChoixQuestion1;
