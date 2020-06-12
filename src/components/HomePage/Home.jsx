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
      <img
        width="50%"
        src="https://user-images.githubusercontent.com/57908921/84301601-5e8b2000-ab54-11ea-9aa0-9464ef6b1833.jpg"
        alt="TontonSommelier"
      />
      <h3 className="TittleHome">Quel est vôtre coffret ?</h3>
      <div>
        <h3 className="TittleHome">Scannez le QRcode si dessous :</h3>
        <div className="QrCodeReaderImg">
          <img
            width="20%"
            src="https://user-images.githubusercontent.com/57908921/84286103-8f605a80-ab3e-11ea-8812-e3d72f654be7.png"
            alt="ArrowImgTP"
            className="ImgPhoto"
          />
        </div>
        <div>
          <h3 className="TittleHome">Ou entrez le code :</h3>
          <InputGroup>
            <Input placeholder="Entrez le code içi. " />
            <InputGroupAddon addonType="append"><Button color="secondary"><FontAwesomeIcon icon={faCheck} /></Button></InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
