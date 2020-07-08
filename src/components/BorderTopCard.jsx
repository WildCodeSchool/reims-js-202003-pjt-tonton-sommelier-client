import React from 'react';
import './BorderTop.css';
import arrowwhite from '../Images/arrowwhite.png';

function BorderTopCard() {
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
          src="https://user-images.githubusercontent.com/57908921/84251814-25c85800-ab0e-11ea-8d89-6e77d572b4f3.png"
          alt="CardImgTP"
          className="CardImgTP"
          id="CardImg"
        />
      </div>
    </div>
  );
}

export default BorderTopCard;
