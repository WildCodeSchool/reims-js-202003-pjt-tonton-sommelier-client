import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import {
  Input,
  Button,
} from 'reactstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import { changeToken } from '../redux/Reducer';
import './Login.css';
import TontonSommelier from '../Images/TontonSommelier.png';

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

      .catch((error) => {
        alert(error.response.data.message);
        console.log(error.response.data.message);
      });
  }

  return (
    <div className="FormEmployee FormContent">
      <img
        width=""
        src={TontonSommelier}
        alt="CardImgTP"
        className="ImgProfilLogin"
        id="ProfilImg"
      />
      <h1 className="TitleLoginRegister">Créez vôtre compte Tonton Sommelier !</h1>
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
          <Link to="/" className="LinkRegister">
            J&apos;ai déjà un compte
          </Link>
        </div>
      </form>
    </div>
  );
};

const Register = connect()(RegisterContainer);
export default Register;
