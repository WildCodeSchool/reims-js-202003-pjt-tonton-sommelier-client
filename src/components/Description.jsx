import React, { useState, useEffect } from 'react';
import {
  Link,
  useParams,
} from 'react-router-dom';
import Axios from 'axios';
import BorderTopCard from './BorderTopCard';

const Description = () => {
  const { descriptionId } = useParams();
  const [description, setDescription] = useState({});

  useEffect(() => {
    Axios.get(`http://localhost:8000/boxes/${descriptionId}`)
      .then((response) => {
        setDescription(response.data);
      });
  }, [descriptionId]);

  return (
    <div>
      <Link to="/boxes/1">
        <BorderTopCard />
      </Link>
      <h1>
        hello from
      </h1>
      <p>{description !== {} ? description.name : 'no content'}</p>
    </div>
  );
};

export default Description;
