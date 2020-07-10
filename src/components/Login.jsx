import React, { useState } from 'react';
import {
  Input,
  Button,
} from 'reactstrap';
import {
  Link,
  useHistory,
} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { changeToken } from '../redux/tokenReducer';
import './Login.css'; 
import TontonSommelier from '../Images/TontonSommelier.png';

const LoginContainer = ({ dispatch }) => {
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
      <h1 className="TitleLoginRegister">Connectez vous à vôtre compte Tonton Sommelier !</h1>
      <form onSubmit={submitForm}>
        <div className="form-data DivInput">
          <label htmlFor="username" className="LabelForm">Nom d'utilisateur</label>
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
          <Button type="submit" className="BtnLogin">
            Connexion
          </Button>
          <Button className="BtnRegister">
            <Link to="/register" className="LinkRegister">
              Créez un compte
            </Link>
          </Button>
        </div>
      </form>
    </div>
  );
};

const Login = connect()(LoginContainer);
export default Login;
