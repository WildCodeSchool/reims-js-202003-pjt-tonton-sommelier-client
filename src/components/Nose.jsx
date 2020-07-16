import React from 'react';
import './nose.css';
import {
  Link,
} from 'react-router-dom';
import BorderTopCard from './BorderTopCard';

function Nose(){
  return(
    <>
      <Link to="/debutjeu">
        <BorderTopCard />
      </Link>
      <section className="nose">
        <h1>2ème étape : LE NEZ</h1>
          <h2>L’INTENSITE AROMATIQUE</h2>
            <p>La phase olfactive se décompose en 2 temps : </p>
            <img src="" alt=""/>
            <ul>
              <li>
              Le <span className="bolder">premier nez </span>se perçoit dès la prise en main du verre – le vin est alors immobile.
              </li>
              <li>
              Le <span className="bolder">deuxième nez </span>consiste quant à lui à sentir le vin après l’avoir fait tourner dans le verre.
              </li>
              <br/>  
            </ul>
            <p><span className="bolder underline">Astuce: </span>
              posez votre verre sur votre table, maintenez-le comme si vous teniez un stylo et dessinez des ronds avec sur la surface. Cela vous permettra de libérer les arômes sans mettre du vin partout !</p>
          <h2>LES CATEGORIES D’AROMES</h2>
            <p>La dégustation moderne classe les arômes en 3 catégories : primaires, secondaires et tertiaires. On va se servir de ce découpage pour nous aider à créer notre schéma de dégustation. </p>
            <p>Les arômes <span className="bolder">primaires</span> proviennent directement du fruit et prédominent lorsque le vin est jeune. Ils se traduisent par des notes florales, fruitées, épicées, de végétaux ou encore de minéraux. Les arômes <span className="bolder">secondaires</span> apparaissent lors de la fermentation et sont fermentaires (brioche, levure), lactés et amyliques (bonbon, vernis, banane). Enfin, les arômes <span className="bolder">tertiaires</span> ou d'évolution apparaissent lors de l'élevage et du vieillissement. Le vin présentera alors des notes boisées, épicés et empyreumatiques (cacao, café).</p>
            <p><span className="bolder underline">Astuce: </span>lorsque vous sentez un vin pour la première fois, pensez du plus grand au plus petit - c’est-à-dire du plus facilement perceptible au plus discret.</p>
            <p>Essayez de percevoir les arômes par vous-même avant de les comparer aux indices du jeu. Si vous êtes le seul à sentir du bois, ne vous inquiétez pas : chacun perçoit des odeurs différentes, à des degrés différents. Tentez ensuite de trouver les autres arômes grâce aux cartes indices.</p>
            <p>Si vous éprouvez des difficultés à distinguer les arômes à force de va-et-vient entre vos vins, n’hésitez pas à faire des pauses : votre nez n’en sera que plus performant par la suite !</p>
      </section>
    </>
  )
}
export default Nose;
