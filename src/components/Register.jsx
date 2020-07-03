import React, { useState, useEffect } from 'react';
import { changeToken } from '../redux/tokenReducer';
import {
  Input,
} from 'reactstrap';
import axios from 'axios';
import { connect } from 'react-redux';

const RegisterContainer = ({ dispatch }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUsername = (e) => {
    setUsername(
      e.target.value,
    );
  };

  const onChangePassword = (e) => {
    setPassword(
      e.target.value,
    );
  };

  function submitForm(e) {
    e.preventDefault();
    const url = 'http://localhost:8000/users/register';

    axios.post(url, {
      username,
      password,
    })
      .then((res) => res.data)
      .then((res) => {
        alert(`Vôtre compte ${res.username} a bien été enregistré !`);
        axios.post('http://localhost:8000/users/login', {
          username,
          password,
        })
          .then((res) => res.data)
          .then((res) => {
            dispatch(changeToken (res.token));
            console.log(res);
            axios.get('http://localhost:8000/', { headers: { Authorization: `Bearer ${res.token}` } })
              .then((res) => res.data)
              .then((res) => {
                console.log(res);
              });
          })

          .catch(() => {
            alert(`Erreur lors de l'ajout d'un compte : ${e.message}`);
          });
      })

      .catch(() => {
        alert(`Erreur lors de l'ajout d'un compte : ${e.message}`);
      });
  }

  return (
    <div className="FormEmployee">
      <form onSubmit={submitForm}>
        <fieldset>
          <legend>Informations</legend>
          <div className="form-data">
            <label htmlFor="username">Username</label>
            <Input
              type="text"
              id="username"
              name="username"
              onChange={onChangeUsername}
              value={username}
              required
            />
          </div>
          <div className="form-data">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              id="password"
              name="password"
              onChange={onChangePassword}
              value={password}
              required
            />
          </div>
          <div className="form-data">
            <input type="submit" value="Envoyer" />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

const Register = connect()(RegisterContainer);
export default Register;
