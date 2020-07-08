import React, { useState, useEffect } from "react";
import Axios from 'axios';

function Questions({ props }) {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    Axios.get(`http://localhost:8000/categories/${props.category}/contents?type=${props.type}`)
      .then((res) => {
        setQuestion(res.data);
      });
  }, []);

  return (
    <>
      <img className="imageQuestion" src="" alt="" />
      <p>{}</p>
      <button className="button1" type="button"> réponse1 </button>
      <button className="button2" type="button"> réponse2 </button>
      <button className="button3" type="button"> réponse3 </button>
    </>
  );
}

export default Questions;
