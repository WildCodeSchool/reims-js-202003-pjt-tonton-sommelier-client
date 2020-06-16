import React from 'react';
import {
  Link,
} from 'react-router-dom';
import BorderTopCard from '../BorderTop/BorderTopCard';

function PageTannin() {
  return (
    <div>
      <Link to="/wine">
        <BorderTopCard />
      </Link>
      <h1>Qu&apos;est-ce que le tannin dans un vin </h1>
      <img src="https://via.placeholder.com/200" alt="tanin" />
      <p>
        Le tanin à un goût sec et astringent*
        on sent cette sensation notamment sur le milieu
        de la langue mais également sur les joues.
        C’est cette sensation qui fait grimacer plus
        d’un autour de la table lors de la dégustation
        d’un jeune vin rouge. Pour ceux qui ont eu le malheur
        de l’expérimenter : c’est notamment cette fameuse tasse
        de thé oublié et qui a trop infusé. Lorsque vous buvez
        une gorgée vous buvez des tannins purs peu dilués.
      </p>
      <img src="https://via.placeholder.com/200" alt="tanin" />
    </div>
  );
}

export default PageTannin;
