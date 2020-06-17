import React from 'react';
import {
  BroswerRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import BorderTopCard from './BorderTopCard';

function PageScan() {
  return (
    <div>
        <BorderTopCard />
        <h1>L&apos;Acceuil</h1> 
        <Link to="/boxes/1">
          <button className="button" type="button">QRCODE</button>
        </Link> 
        
    </div>
    
  );
}

export default PageScan;
