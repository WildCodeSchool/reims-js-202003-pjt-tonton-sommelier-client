import React from 'react';
import './Home.css';
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
import BorderTopHome from '../BorderTop/BorderTopHome';

function HomePage() {
  return (
    <div>
      <BorderTopHome />
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
        <h3 className="TittleHome">Scannez le QRcode :</h3>
        <div className="QrCodeReaderImg">
          <img
            width="40%"
            src="https://static.thenounproject.com/png/1433173-200.png"
            alt="ArrowImgTP"
            className="ImgPhoto"
          />
        </div>
        <div className="InputHomeContent">
          <h3 className="TittleHome">Ou entrez le code :</h3>
          <InputGroup>
            <Input placeholder="Entrez vôtre code" />
            <InputGroupAddon addonType="append"><Button color="secondary"><FontAwesomeIcon icon={faCheck} /></Button></InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
