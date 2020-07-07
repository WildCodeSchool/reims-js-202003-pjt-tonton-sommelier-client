import React from 'react';
import './Home.css';
import {
  Link,
} from 'react-router-dom';
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import BorderTopHome from './BorderTopHome';
import NavBottom from './NavBottom';

function HomePage() {
  return (
    <div className="AppContent">
      <Link to="/" className="LinkRegister">
        <BorderTopHome />
      </Link>
      <div className="HomeContent">
        <div className="ImgTontonHomeContent">
          <img
            width="50%"
            src="https://user-images.githubusercontent.com/57908921/84481934-2809ee00-ac97-11ea-9261-4eddecc21ba8.png"
            alt="TontonSommelier"
            className="ImgTontonHome"
          />
        </div>
        <h3 className="TittleHome">Quel est vôtre coffret ?</h3>
        <div>
          <h3 className="TittleHome">
            Scannez le QRcode
            Ou entrez le code :
          </h3>
          <Link className="code" to="/boxes/1">
            <div className="QrCodeReaderImg">
              <img
                src="https://static.thenounproject.com/png/1433173-200.png"
                alt="ArrowImgTP"
                className="ImgPhoto"
              />
            </div>
          </Link>
          <div className="InputHomeContent">
            <InputGroup>
              <Input placeholder="Entrez vôtre code" />
              <Link className="code" to="/boxes/1">
                <InputGroupAddon addonType="append"><Button color="secondary"><FontAwesomeIcon icon={faCheck} id="IconCheck" /></Button></InputGroupAddon>
              </Link>
            </InputGroup>
          </div>
        </div>
      </div>
      <NavBottom />
    </div>
  );
}

export default HomePage;
