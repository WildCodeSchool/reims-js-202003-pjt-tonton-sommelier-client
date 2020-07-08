import React, { useState } from 'react';

import { Link, useHistory,} from 'react-router-dom';
import {
  Input,
  Button,
} from 'reactstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import { changeToken } from '../redux/Reducer';
import './Login.css';

const RegisterContainer = ({ dispatch }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

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
            dispatch(changeToken(res.token));
            console.log(res);
            axios.get('http://localhost:8000/', { headers: { Authorization: `Bearer ${res.token}` } })
              .then((res) => res.data)
              .then((res) => {
                history.push('/home');
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
    <div className="FormEmployee FormContent">
      <div className="ImgProfilContent">
        <img
          width=""
          src="https://user-images.githubusercontent.com/57908921/84266976-a777b000-ab25-11ea-8327-29d873625bd1.png"
          alt="CardImgTP"
          className="ImgProfilLogin"
          id="ProfilImg"
        />
      </div>
      <form onSubmit={submitForm}>
        <div className="form-data DivInput">
          <label htmlFor="username" className="LabelForm">Nom d&apos;utilisateur</label>
          <Input
            type="text"
            id="username"
            name="username"
            onChange={onChangeUsername}
            value={username}
            required
          />
        </div>
        <div className="form-data DivInput">
          <label htmlFor="password" className="LabelForm">Mot de passe</label>
          <Input
            type="password"
            id="password"
            name="password"
            onChange={onChangePassword}
            value={password}
            required
          />
        </div>
        <div className="form-data BtnLoginGroupe">
          <Button type="submit" className="BtnRegister">
            Continuer
          </Button>
          <Button className="BtnRegister">
          <Link to="/" className="LinkRegister">
              J&apos;ai déjà un compte.
            </Link>
          </Button>
        </div>
      </form>
    </div>
  );
};

const Register = connect()(RegisterContainer);
export default Register;
