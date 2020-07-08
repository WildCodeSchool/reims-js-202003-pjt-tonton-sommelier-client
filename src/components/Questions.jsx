import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { connect } from 'react-redux';
import {
  Link,
} from 'react-router-dom';
import BorderTopCard from './BorderTopCard';

function Questions(props) {
  const [questions, setQuestion] = useState();

  useEffect(() => {
    Axios.get(`http://localhost:8000/categories/${props.category}/contents?type=${props.type}`)
      .then((res) => {
        setQuestion(res.data);
      });
  }, [props.type]);

  return (
    <>
      <div>
        <Link to="/boxes/1">
          <BorderTopCard />
        </Link>
      </div>
      <img className="imageQuestion" src="" alt="" />
      <p>{}</p>
      <div>
        {questions.map((question) => <p>{question.content}</p>)}
      </div>
      <button className="button1" type="button"> réponse1 </button>
      <button className="button2" type="button"> réponse2 </button>
      <button className="button3" type="button"> réponse3 </button>
    </>
  );
}

const mapStateToProps = (state) => ({
  type: state.reducer.type,
  category: state.reducer.category,

});

export default connect(mapStateToProps)(Questions);
