import React from 'react';

function Eyes() {
    return(
      <>
      <h1>1er étape: LA VUE </h1>
      <p>Lorsque vous avez votre verre en main, penchez-le à 45° au-dessus de votre fiche de dégustation.</p>
      <br/>
      <img src="" alt=""/>
      <p>Le liquide s’étale le long de la paroi pour ne plus former qu’une fine couche vers le bord : c’est à cet endroit que nous allons observer le vin. Cet examen va nous aider à déterminer la couleur du vin mais également son intensité.</p>
      <h2>La couleur du vin</h2>
      <p>En observant le vin de cette manière, vous pouvez facilement percevoir différentes nuances entre les vins. Nous allons en distinguer 3 pour les vins rouges :</p>
      <ul>
        <li>Violette</li>
        <li>Rubis</li>
        <li>Tuilée</li>
      </ul>
      <p>À votre tour maintenant ! Quelles couleurs arrivez-vous à identifier ?</p>
      <h2>L’intensite du vin</h2>
      <p>Afin de faciliter votre apprentissage, nous nous baserons sur 3 intensités :</p>
      <ul>
        <li>Légère</li>
        <li>Moyenne</li>
        <li>Prononcée</li>  
      </ul>
      <p>Comment caractériser celle d’un vin rouge ? Penchez votre verre au-dessus de votre fiche de dégustation. Si vous arrivez à lire le texte au travers du vin, le vin est d’une intensité <span className="bolder">légère</span>. Au contraire, si vous n’arrivez pas à distinguer les lettres, elle sera <span className="bolder">prononcée</span>. </p>
      </>
    )
}

export default Eyes;
