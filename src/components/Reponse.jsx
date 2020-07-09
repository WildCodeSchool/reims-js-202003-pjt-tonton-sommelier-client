import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import {
  Link,
  useHistory,
} from 'react-router-dom';
import { Button } from 'reactstrap';
import BorderTopCard from './BorderTopCard';
import './QuestioRéponse.css';

function Réponse(props) {
  const [descriptions, setDescriptions] = useState(null);
  const history = useHistory();

  useEffect(() => {
    Axios.get(`http://localhost:8000/categories/${props.category}/contents?type=${props.type}`)
      .then((response) => {
        setDescriptions(response.data);
      });
  }, [props.type, props.category]);

  return (
    <>
      <div>
        <Link to="/debutjeu">
          <BorderTopCard />
        </Link>
      </div>
      <div className="questionStyle">
        {props.answer ? <div>Bonne réponse !</div> : <div>Désolé, la réponse était :</div> }
        <div>
          <p>blablablablablablablablablablablablablablablblblbalbalbalb</p>
          <p>blablablablablablablablablablablablablablablblblbalbalbalb</p>
          <p>blablablablablablablablablablablablablablablblblbalbalbalb</p>
          <p>blablablablablablablablablablablablablablablblblbalbalbalb</p>
          <p>blablablablablablablablablablablablablablablblblbalbalbalb</p>
        </div>
        {
        descriptions !== null ? descriptions
          .filter((description) => description.choix === 4)
          .map((description) => <div>{description.content}</div>)
          : ''
      }
        <div>
          {
          descriptions !== null ? descriptions
            .filter((description) => description.choix >= 1 && description.choix <= 3)R
            .map((description) => <Button className={`button1 ${description.réponse === 1 ? 'bonneReponse' : 'mauvaiseReponse'} ${description.choix === props.answerId ? 'answerChoosen' : ''}`} type="button" value={description.réponse}>{description.content}</Button>)
            : ''
        }
        </div>
      </div>
      <button type="button" onClick={() => history.push('/debutjeu')}>next</button>

    </>
  );
}

const mapStateToProps = (state) => ({
  type: state.reducer.type,
  category: state.reducer.category,
  answer: state.reducer.answer,
  answerId: state.reducer.answerId,
});

export default connect(mapStateToProps)(Réponse);
