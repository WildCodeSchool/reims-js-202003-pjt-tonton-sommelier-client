import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import BorderTopCard from './BorderTop/BorderTopCard';

function PageTonneau() {
  return (
    <div>
      <Link to="/PageScan">
        <BorderTopCard />
      </Link>

      <img src="https://via.placeholder.com/200" alt="tanin" />

      <p>L&apos;AFFINAGE </p>
      <img src="https://via.placeholder.com/200" alt="tanin" />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Odit iusto iste officia veritatis delectus maxime at 
        quisquam placeat doloribus libero eum exercitationem ratione, 
        porro earum aliquid adipisci modi illo excepturi! 

      </p>
      <img src="https://via.placeholder.com/200" alt="tanin" />
    </div>
  );
}

export default PageTonneau;
