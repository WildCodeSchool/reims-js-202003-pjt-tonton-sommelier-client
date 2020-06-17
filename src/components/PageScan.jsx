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
        <h1>L&apos;Accueil</h1> 
        <Link className="code" to="/boxes/1">
          QR CODE
        </Link>
        <Link className="code" to="/boxes/1">
          CODE NUM
        </Link>        
    </div>
    
  );
}

export default PageScan;
