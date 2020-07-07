import React from 'react';
import {
  Input,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const url = 'http://localhost:8000/users/login';

    axios.post(url, {
      username,
      password,
    })
      .then((res) => res.data)
      .then(() => {
        alert('Ca marche !');
      })

      .catch(() => {
        alert('Ca marche pas !');
      });
  }

  render() {
    const { username, password } = this.state;
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
        <form onSubmit={this.submitForm}>
            <div className="form-data DivInput">
              <label htmlFor="username" className="LabelForm">Nom d'utilisateur</label>
              <Input
                type="text"
                id="username"
                name="username"
                onChange={this.onChange}
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
                onChange={this.onChange}
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
  }
}

export default Login;
