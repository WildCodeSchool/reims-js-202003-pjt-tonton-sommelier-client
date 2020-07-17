import React from 'react';
import './nose.css';
import {
  Link,
} from 'react-router-dom';
import arrowwhite from '../Images/arrowwhite.png';
import NezLogo from '../Images/NezLogo.png';
import NozPict from '../Images/NozPict.png';

function Nose() {
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
            src={NezLogo}
            alt="NezLogo"
            className="OeilLogo"
          />
        </div>
        <h4 className="OeilNezBoucheH4">L’INTENSITE AROMATIQUE</h4>
        <p className="OeilNezBoucheText">
          Le premier nez se perçoit dès la prise&nbsp;
          en main du verre – le vin est alors immobile.&nbsp;
          Le deuxième nez consiste quant à lui à sentir&nbsp;
          le vin après l’avoir fait tourner dans le verre.
        </p>
        <img
          src={NozPict}
          alt="NozPict"
          className="EyesPict"
        />
        <p className="OeilNezBoucheFooter1">Faible – Moyenne – Forte</p>
        <h4 className="OeilNezBoucheH4">LES CATEGORIES D’AROMES</h4>
        <p className="OeilNezBoucheText">
          Les arômes primaires proviennent directement du fruit&nbsp;
          et prédominent lorsque le vin est jeune. Ils se&nbsp;
          traduisent par des notes florales, fruitées, épicées, de végétaux ou encore de minéraux.
          <br />
          Les arômes secondaires apparaissent lors de la fermentation&nbsp;
          et sont fermentaires (brioche, levure), lactés et amyliques (bonbon, vernis, banane).
          <br />
          Les arômes tertiaires ou d’évolution apparaissent&nbsp;
          lors de l’élevage et du vieillissement. Le vin présentera&nbsp;
          alors des notes boisées, épicés et empyreumatiques (cacao, café).
        </p>
        <p className="OeilNezBoucheFooter2">Retournez les trois première cartes</p>
      </div>
    </>
  );
}
export default Nose;
