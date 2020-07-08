import React from 'react';
import './BorderTop.css';
import qrcodewhite from '../Images/qrcodewhite.png';
import arrowwhite from '../Images/arrowwhite.png';

function BorderTopScan() {
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
          src={qrcodewhite}
          alt="CardImgTP"
          className="CardImgTP"
          id="CardImg"
        />
      </div>
    </div>
  );
}

export default BorderTopScan;
