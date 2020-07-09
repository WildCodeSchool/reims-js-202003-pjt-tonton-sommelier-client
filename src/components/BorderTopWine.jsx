import React from 'react';
import './BorderTop.css';
import arrowwhite from '../Images/arrowwhite.png';

function BorderTopWine() {
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
          src="https://user-images.githubusercontent.com/57908921/84266962-a21a6580-ab25-11ea-9fe6-8798412e2bae.png"
          alt="CardImgTP"
          className="CardImgTP"
          id="WineImg"
        />
      </div>
    </div>
  );
}

export default BorderTopWine;
