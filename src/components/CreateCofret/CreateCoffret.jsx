import React from 'react';
import Axios from 'axios';

function CreateCoffret() {
  return (
    <div>
      <form>
        <label>
          Nom du coffret:
          <imput type="text" name="name" />
        </label>
        <label>
          Nom de la bouteille:
          <imput type="text" name="name" />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
}

export default CreateCoffret;
