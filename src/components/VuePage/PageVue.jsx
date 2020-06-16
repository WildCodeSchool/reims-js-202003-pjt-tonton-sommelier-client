import React from 'react';
import {
  Link,
} from 'react-router-dom';
import BorderTopCard from '../BorderTop/BorderTopCard';

function PageVue() {
  return (
    <div>
      <Link to="/wine">
        <BorderTopCard />
      </Link>
      <h1>LA COULEUR </h1>
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

export default PageVue;
