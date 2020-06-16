import React from 'react';
import {
  Link,
} from 'react-router-dom';
import BorderTopCard from '../BorderTop/BorderTopCard';

function PageScan() {
  return (
    <div>
      <BorderTopCard />
      <h1> L&apos;ACCUEIL </h1>
      <Link to="wine">
        <button className="button" type="button">QRCODE</button>
      </Link>
      <hr />
      <Link to="wine">
        <button className="button" type="button">CODE num</button>
      </Link>
    </div>
  );
}

export default PageScan;
