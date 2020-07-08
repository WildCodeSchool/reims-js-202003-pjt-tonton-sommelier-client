import React from 'react';
import './BorderTop.css';
import arrowwhite from '../Images/arrowwhite.png';

function BorderTopProfil() {
  return (
    <div className="">
      <div className="BorderTopColor">
        <img
          width=""
          src={arrowwhite}
          alt="ArrowImgTP"
          className="ArrowImgTP"
        />
      </div>
      <div className="ImgCenterBorderTop">
        <img
          width=""
          src="https://user-images.githubusercontent.com/57908921/84266976-a777b000-ab25-11ea-8327-29d873625bd1.png"
          alt="CardImgTP"
          className="CardImgTP"
          id="ProfilImg"
        />
      </div>
    </div>
  );
}

export default BorderTopProfil;
