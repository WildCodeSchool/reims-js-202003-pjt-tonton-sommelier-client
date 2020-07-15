import React from 'react';
import logout from '../Images/logout.png';
import './BorderTop.css';

function BorderTopHome() {
  return (
    <div className="BorderTopHome">
      <div className="BorderTopColor BorderTopColorLogout">
        <img
          width=""
          src={logout}
          alt="logoutimg"
          className="LogoutImg"
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

export default BorderTopHome;
