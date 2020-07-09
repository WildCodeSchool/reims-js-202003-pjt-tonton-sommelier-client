import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import {
  Link,
} from 'react-router-dom';
import BorderTopCard from './BorderTopCard';
import './QuestioRéponse.css';
import { changeAnswer } from '../redux/Reducer';


function QuestionsContainer({dispatch, ...props}) {
  const [descriptions, setDescriptions] = useState(null);

  useEffect(() => {
    Axios.get(`http://localhost:8000/categories/${props.category}/contents?type=${props.type}`)
      .then((response) => {
        setDescriptions(response.data);
      });
  }, [props.type, props.category]);

  const isCorect = (e) => {
    if (e.target.value === '1') {
      dispatch(changeAnswer(true));
    } else {
      dispatch(changeAnswer(false));
    }
  };

  return (
    <>
      <div>
        <Link to="/debutjeu">
          <BorderTopCard />
        </Link>
      </div>
      <div className="questionStyle">
        <div>
          {
        props.type != null
          ? <img className="imageStyle" src={require(`../Images/${props.type}.png`)} alt="" />
          : ''
      }
        </div>
        {
        descriptions != null ? descriptions
          .filter((description) => description.choix === 4)
          .map((description) => <div>{description.content}</div>)
          : ''
      }
        <div>
          {
          descriptions != null ? descriptions
            .filter((description) => description.choix >= 1 && description.choix <= 3)
            .map((description) => <button className="button1" type="button" value={description.réponse} onClick={(e)=> isCorect(e)}>{description.content}</button>)
            : ''
        }
        </div>
      </div>

    </>
  );
}

const mapStateToProps = (state) => ({
  type: state.reducer.type,
  category: state.reducer.category,
  answer: state.reducer.answer,
});

const Questions = connect(mapStateToProps)(QuestionsContainer);
export default Questions;
