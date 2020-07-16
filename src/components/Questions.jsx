import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import {
  Link,
  useHistory,
} from 'react-router-dom';
import BorderTopCard from './BorderTopCard';
import './QuestionReponse.css';
import { changeAnswer, anserIdChoosen, counterScore } from '../redux/Reducer';
import Timer from './Timer';

function QuestionsContainer({ dispatch, ...props }) {
  const [descriptions, setDescriptions] = useState([]);
  const history = useHistory();

  useEffect(() => {
    Axios.get(`http://localhost:8000/categories/${props.category}/contents/difficulties/${props.dificultie}?type=${props.type}`, { headers: { Authorization: `Bearer ${props.token}` } })
      .then((response) => { setDescriptions(response.data); })
      .catch(() => { history.push('/login'); });
  }, [props.type, props.category, props.token, history, props.dificultie]);

  const isCorect = (e, id) => {
    if (e.target.value === '1') {
      dispatch(changeAnswer(true));
      dispatch(counterScore(props.score * props.dificultie));
    } else {
      dispatch(changeAnswer(false));
    }
    dispatch(anserIdChoosen(id));
    history.push('/reponse');
  };

  return (
    <>
      <div>
        <Link to="/debutjeu">
          <BorderTopCard />
        </Link>
      </div>
      <div className="questionStyle">
        <div className="questionImg">
          {
        props.type != null
          ? <img className="imageStyle" src={require(`../Images/${props.type}picture.png`)} alt="" />
          : ''
          }
        </div>
        <div className="question">
          {
          descriptions != null ? descriptions
            .filter((description) => description.choix === 4)
            .map((description) => <div>{description.content}</div>)
            : ''
          }
        </div>
        <div className="questionResponse">
          {
          descriptions != null ? descriptions
            .filter((description) => description.choix >= 1 && description.choix <= 3)
            .map((description) => <button className="button1 réponse" type="button" value={description.réponse} onClick={(e) => isCorect(e, description.choix)}>{description.content}</button>)
            : ''
          }
        </div>
        <Timer />
      </div>

    </>
  );
}

const mapStateToProps = (state) => ({
  type: state.reducer.type,
  category: state.reducer.category,
  answer: state.reducer.answer,
  answerId: state.reducer.answerId,
  token: state.reducer.token,
  score: state.reducer.score,
  dificultie: state.reducer.dificultie,
});

const Questions = connect(mapStateToProps)(QuestionsContainer);
export default Questions;
