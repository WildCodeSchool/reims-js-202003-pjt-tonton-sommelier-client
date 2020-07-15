import React, { useEffect } from 'react';
import {
  Link,
  useHistory,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Axios from 'axios';

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

function ChoixQuestionContainer({ dispatch, ...props }) {
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

const mapStateToProps = (state) => ({
  token: state.reducer.token,
});
const ChoixQuestion1 = connect(mapStateToProps)(ChoixQuestionContainer);
export default ChoixQuestion1;
