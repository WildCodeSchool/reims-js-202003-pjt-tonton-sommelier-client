import React from 'react';
import './eyes.css';
import {
  Link,
} from 'react-router-dom';
import OeilLogo from '../Images/OeilLogo.png';
import arrowwhite from '../Images/arrowwhite.png';
import EyesPict from '../Images/EyesPict.png';

function Eyes() {
  return (
    <>
      <Link to="/debutjeu" className="SessionNameArrow">
        <img
          src={arrowwhite}
          alt="ArrowImgTP"
          className="ArrowImgTP"
        />
      </Link>
      <div className="OeilNezBoucheContent">
        <div className="WhiteCircle">
          <img
            src={OeilLogo}
            alt="OeilLogo"
            className="OeilLogo"
          />
        </div>
        <h4 className="OeilNezBoucheH4">LA COULEUR</h4>
        <p className="OeilNezBoucheText">
          Lorsque vous avez votre verre en main, penchez-le à&nbsp;
          45° au-dessus de votre fiche de dégustation
        </p>
        <img
          src={EyesPict}
          alt="EyesPict"
          className="EyesPict"
        />
        <h4 className="OeilNezBoucheH4">L’INTENSITE</h4>
        <p className="OeilNezBoucheText">
          Comment Penchez votre verre au-dessus de votre fiche de dégustation.&nbsp;
          Si vous arrivez à lire le texte au travers du vin,
          &nbsp;le vin est d’une intensité légère.&nbsp;
          Au contraire, si vous n’arrivez pas à distinguer les lettres, elle sera prononcée.
        </p>
        <p className="OeilNezBoucheFooter1">Légère – Moyenne – Prononcée</p>
        <p className="OeilNezBoucheFooter2">RETOURNEZ LES TROIS PREMIERE CARTES</p>
      </div>
    </>
  );
}

export default Eyes;
