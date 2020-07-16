import React from 'react';
import './mouth.css';
import {
  Link,
} from 'react-router-dom';
import BorderTopCard from './BorderTopCard';

function Mouth() {
  return(
    <>
      <div>
        <Link to="/debutjeu">
          <BorderTopCard />
        </Link>
      </div>
      <section className="eyes"> 
          <h1>3ème étape: LA BOUCHE</h1>
            <p>Chaque personne a un sens gustatif plus ou moins développé. Si vous n’êtes pas sûr de vos sensations, n’hésitez pas à goûter plusieurs fois pour en avoir le cœur net !</p>
            <img src="" alt=""/>
            <p>Quand vous prenez le vin en bouche, décomposez votre dégustation en 3 sensations : l’acidité, le tanin et en dernier lieu l’alcool. </p>
          <h2>L’ACIDITE</h2>
            <p>Afin d’évaluer l’acidité d’un vin, on se concentre sur différentes sensations. </p>
              <ul>
                <li>Dès la mise en bouche : crispez-vous un peu la mâchoire ? </li>
                <li>Après quelques secondes en bouche : commencez-vous à saliver ? </li>
                <li>Après avoir avalé : continuez-vous à saliver ? </li>
              </ul>
            <p>Plus vous avez de « oui » aux questions précédentes, plus l’acidité du vin est élevée.</p>
          <h2>LES TANINS ET L’ALCOOL</h2>
            <p>fin de percevoir le plus d’arômes possible et évaluer le niveau de tanins et d’alcool dans votre vin, vous pouvez aspirer un léger filet d’air dans votre bouche ou simplement « mâcher » votre vin - un peu comme un bain de bouche. Une technique pas très sexy mais qui a fait ses preuves !</p>
            <h3>LES TANINS</h3>
              <p>Lorsqu’on dit d’un vin qu’il est tannique, on entend qu’il apporte une sensation d’assèchement. Celle-ci apparait une fois le vin chauffé en bouche et avalé ou recraché.</p>
              <p>Les tannins viennent-ils tirer les joues ? Est-ce qu’ils restent longtemps ? Plus la sensation est forte et persistante, plus les tanins sont présents.</p>
            <h3>L’ALCOOL</h3>
              <p>Pour juger du degré alcoolique d’un vin, concentrez-vous sur la sensation de brûlure ou de réchauffement que vous ressentez dans la gorge. Plus celle-ci est intense, plus le degré d’alcool est élevé.</p>
              <p>Comme pour l’étape olfactive précédente, n’hésitez pas à faire des pauses lorsque votre palais commence à être saturé. Pour une remise à zéro, n’hésitez pas à boire de l’eau et/ou manger un bout de pain ou de gressin.</p>
          <h1>CONCLUSION</h1>
            <p>Avez-vous aimé ce vin ? Si oui, pourquoi ? Si non, pourquoi ?</p>
            <p>Chaque personne est différente et aura donc une expérience personnelle des vins dégustés. Certains aiment les vins tanniques, d’autres les vins floraux…</p>
            <p>Mais comme on dit chez Tonton Sommelier : <span className="bolder">une dégustation réussie, c’est avant tout les gens avec qui on la partage.</span></p>
        </section>
    </>
  )
}
export default Mouth;
