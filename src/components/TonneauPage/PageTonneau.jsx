import React from 'react';
import {
  Link,
} from 'react-router-dom';
import BorderTopCard from '../BorderTop/BorderTopCard';

function PageTonneau() {
  return (
    <div>
      <Link to="/wine">
        <BorderTopCard />
      </Link>
      <h1>L&apos;AFFINAGE </h1>
      <img src="https://via.placeholder.com/200" alt="tanin" />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Odit iusto iste officia veritatis delectus maxime at
        quisquam placeat doloribus libero eum exercitationem ratione,
      </p>
      <img src="https://via.placeholder.com/200" alt="tanin" />
    </div>
  );
}

export default PageTonneau;
