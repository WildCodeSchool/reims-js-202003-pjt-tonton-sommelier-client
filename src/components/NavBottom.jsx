import React from 'react';
import {
  Link,
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import './NavBottom.css';
import wine from '../Images/wine.png';
import profil from '../Images/profil.png';
import card from '../Images/card.png';

function NavBottom() {
  return (
    <div>
      <div className="NavBottom">
        <div className="CercleBtnNav">
          <Link className="BtnLink" to="/descriptions/1">
            <FontAwesomeIcon icon={faHome} className="IconHome" />
          </Link>
        </div>
        <div className="CercleBtnNav">
          <Link className="BtnLink" to="/descriptions/1">
            <img src={card} alt="Card" className="BtnImg" />
          </Link>
        </div>
        <div className="CercleBtnNav">
          <Link className="BtnLink" to="/descriptions/1">
            <img src={wine} alt="Wine" className="BtnImg" />
          </Link>
        </div>
        <div className="CercleBtnNav">
          <Link className="BtnLink" to="/register">
            <img src={profil} alt="Wine" className="BtnImg" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBottom;
