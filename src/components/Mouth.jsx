import React from 'react';
import './mouth.css';
import {
  Link,
} from 'react-router-dom';
import arrowwhite from '../Images/arrowwhite.png';
import BoucheLogo from '../Images/BoucheLogo.png';

function Mouth() {
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
            src={BoucheLogo}
            alt="BoucheLogo"
            className="OeilLogo"
          />
        </div>
        <h4 className="OeilNezBoucheH4">L&apos;ACIDITE</h4>
        <p className="OeilNezBoucheText">
          On va se concentrer sur la salivation
          <br />
          Dès la mise en bouche : crispez-vous un peu la mâchoire ?&nbsp;
          Après quelques secondes en bouche : commencez-vous à saliver ?
          <br />
          Après avoir avalé : continuez-vous à saliver ?&nbsp;
          Plus vous avez de « oui » aux questions précédentes, plus l’acidité du vin est élevée.
        </p>
        <p className="OeilNezBoucheFooter1">Faible – Moyenne – Forte</p>
        <h4 className="OeilNezBoucheH4">LES TANNINS</h4>
        <p className="OeilNezBoucheText">
          Lorsqu’on dit d’un vin qu’il est tannique, on entend qu’il apporte&nbsp;
          une sensation d’assèchement. Celle-ci apparait une fois le vin&nbsp;
          chauffé en bouche et avalé ou recraché.
          <br />
          Les tannins viennent-ils tirer les joues ? Est-ce qu’ils restent longtemps ?
          <br />
          Plus la sensation est forte et persistante, plus les tanins sont présents.
        </p>
        <p className="OeilNezBoucheFooter1">Faibles – Moyens – Puissants</p>
      </div>
    </>
  );
}
export default Mouth;
