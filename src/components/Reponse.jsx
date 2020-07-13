import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import {
  Link,
  useHistory,
} from 'react-router-dom';
import { Button } from 'reactstrap';
import BorderTopCard from './BorderTopCard';
import './QuestionReponse.css';

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
        <div className="explication">
          {descriptions !== null ? descriptions.filter((description) => description.choix === 5)
            .map((description) => description.content)
            : ''}
        </div>
        <div className="question">
          {
          descriptions !== null ? descriptions
            .filter((description) => description.choix === 4)
            .map((description) => <div>{description.content}</div>)
            : ''
          }
        </div>
        <div className="lisetResponse">
          {
          descriptions !== null ? descriptions
            .filter((description) => description.choix >= 1 && description.choix <= 3)
            .map((description) => <div className={`réponse ${description.réponse === 1 ? 'bonneReponse' : 'mauvaiseReponse'} ${description.choix === props.answerId ? 'answerChoosen' : ''}`} type="button" value={description.réponse}>{description.content}</div>)
            : ''
        }
        </div>
        <button type="button" className="buttonNext" onClick={() => history.push('/debutjeu')}>Question Suivante</button>
      </div>

    </>
  );
}

const mapStateToProps = (state) => ({
  type: state.reducer.type,
  category: state.reducer.category,
  answer: state.reducer.answer,
  answerId: state.reducer.answerId,
  NameSession: state.reducer.NameSession,
});

export default connect(mapStateToProps)(Réponse);
