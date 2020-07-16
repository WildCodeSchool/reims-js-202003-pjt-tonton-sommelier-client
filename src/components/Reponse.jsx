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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

function Reponse(props) {
  const [descriptions, setDescriptions] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (props.token == null) {
      history.push('/login');
    } else {
      Axios.get(`http://localhost:8000/categories/${props.category}/contents/difficulties/${props.dificultie}?type=${props.type}`, { headers: { Authorization: `Bearer ${props.token}` } })
        .then((response) => {
          setDescriptions(response.data);
        });
    }
  }, [props.type, props.category, props.token, history]);

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
            .map((description) => (
              <div
                className={`réponse ${description.réponse === 1 ? 'bonneReponse' : ''} ${description.choix === props.answerId && description.réponse !== 1 ? 'answerChoosenFalse' : ''}`} type="button" value={description.réponse}>
                {description.content}
                <div className="iconeCheck">
                  {description.réponse === 1 ? <FontAwesomeIcon  icon={faCheck} /> : (description.choix === props.answerId && description.réponse !== 1 ? <FontAwesomeIcon icon={faTimes} /> : '')}
                </div>
              </div>
            ))
            : ''
        }
        </div>
        <Button type="button" className="buttonNext" onClick={() => history.push('/debutjeu')}>Question Suivante</Button>
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
  token: state.reducer.token,
  dificultie: state.reducer.dificultie,
});

export default connect(mapStateToProps)(Reponse);
