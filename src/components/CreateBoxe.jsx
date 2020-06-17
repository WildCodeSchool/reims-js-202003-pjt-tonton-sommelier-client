import React, { useState } from 'react';

function CreateBoxe() {
  const [value, setValue] = useState('red');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <form action="" method="get" className="">
      <fieldset>
        <legend>Crée votre coffret :</legend>
        <div className="">
          <label htmlFor="nameOfBoxes">Nom du coffret : </label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="">
          <label htmlFor="nameOfBottle">Nom de la bouteille : </label>
          <input type="text" name="name" id="name" required />
        </div>
        <div>
          <label htmlFor="TypeOfBottle">
            Catégorie de la bouteille :
            <select value={value} onChange={(event) => handleChange(event)}>
              <option value="red"> rouge </option>
              <option value="white"> blanc </option>
              <option value="sparkling"> pétillant </option>
            </select>
          </label>
          <input type="submit" value="Envoyer" />
        </div>
      </fieldset>
    </form>
  );
}

export default CreateBoxe;
