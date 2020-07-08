import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import {
  Link,
  useParams,
} from 'react-router-dom';

import Axios from 'axios';
import BorderTopCard from './BorderTopCard';

const Description = (props) => {
  const [description, setDescription] = useState(null);

  useEffect(() => {
    Axios.get(`http://localhost:8000/categories/${props.category}/contents?type=${props.type}`)
      .then((response) => {
        setDescription(response.data);
      });
  }, [props.type]);

  return (
    <div>
      <Link to="/debutjeu">
        <BorderTopCard />
      </Link>
      <h1>
        hello from
      </h1>
      <div>
        {
        description !== null ? description.map((description) => <p>{description.content}</p>) : ''
      }
      </div>
      <div />
      <div />
    </div>
  );
};

const mapStateToProps = (state) => ({
  type: state.reducer.type,
  category: state.reducer.category,

});

export default connect(mapStateToProps)(Description);
