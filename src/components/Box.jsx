import React from 'react';
import {
  Link,
  // useParams,
} from 'react-router-dom';
// import HomePage from './Home';
import barique from '../Images/barique.png';
import raisin from '../Images/raisin.png';
import france from '../Images/france.png';
import book from '../Images/book.png';
import oeil from '../Images/oeil.png';
import nez from '../Images/nez.png';
import bouche from '../Images/bouche.png';
import tannin from '../Images/tannin.png';
import BorderTopCard from './BorderTopCard';
import './Box.css';

function Box() {
  // const { boxId } = useParams();
  

  return (
    <div>
      <Link className="code" to="/debutjeu">
        <BorderTopCard />
      </Link>
      <h3 className="H3Box">les vins rouges</h3>
      <div className="BtnTriangleTop">
        <div className="BtnRaisinBariqueCouvert">
          <div className="CercleBtn">
            <Link className="BtnLink" to="/descriptions/1">
              <img src={raisin} alt="Raisin" className="BtnImg" />
            </Link>
          </div>
          <div className="CercleBtn">
            <Link className="BtnLink" to="/descriptions/2">
              <img src={barique} alt="Barique" className="BtnImg" />
            </Link>
          </div>
        </div>
        <div className="BtnFranceBook">
          <div className="CercleBtn">
            <Link className="BtnLink" to="/descriptions/4">
              <img src={france} alt="France" className="BtnImg" />
            </Link>
          </div>
          <div className="CercleBtn">
            <Link className="BtnLink" to="/descriptions/5">
              <img src={book} alt="Book" className="BtnImg" />
            </Link>
          </div>
        </div>
        <div className="CercleBtn">
          <Link className="BtnLink" to="/descriptions/6">
            <img src={tannin} alt="Tannin" className="BtnImg" />
          </Link>
        </div>
      </div>
      <div className="BtnTriangleBottom">
        <div className="BtnOeilNez">
          <div className="CercleBtn ImgOeilNez">
            <Link className="BtnLink" to="/descriptions/7">
              <img src={oeil} alt="Oeil" className="BtnImg" />
            </Link>
          </div>
          <div className="CercleBtn ImgOeilNez">
            <Link className="BtnLink" to="/descriptions/8">
              <img src={nez} alt="Nez" className="BtnImg" />
            </Link>
          </div>
        </div>
        <div className="CercleBtn BtnBouche">
          <Link className="BtnLink" to="/descriptions/9">
            <img src={bouche} alt="Bouche" className="BtnImg" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Box;
