import React, { useState } from 'react';

function CreateCoffret() {
  const [value, setValue] = useState('red');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <form action="" method="get" className="">
        <div className="">
          <label htmlFor="nameOfCoffret">Nom du coffret : </label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="">
          <label htmlFor="nameOfBottle">Nom de la bouteille : </label>
          <input type="text" name="name" id="name" required />
        </div>
        <div>
          <label htmlFor="TypeOfBottle">
            Type de la bouteille :
            <select value={value} onChange={(event) => handleChange(event)}>
              <option value="red"> rouge </option>
              <option value="white"> blanc </option>
              <option value="sparkling"> pétillant </option>
            </select>
          </label>
          <br />
          <input type="submit" value="Envoyer" />
        </div>
      </form>
    </div>
  );
}

export default CreateCoffret;
