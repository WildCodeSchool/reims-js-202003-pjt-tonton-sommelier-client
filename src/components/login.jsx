import React from 'react';
import {
  Input,
} from 'reactstrap';
import axios from 'axios';

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
      <div className="FormEmployee">
        <form onSubmit={this.submitForm}>
          <fieldset>
            <div className="form-data">
              <label htmlFor="username">Username</label>
              <Input
                type="text"
                id="username"
                name="username"
                onChange={this.onChange}
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
                onChange={this.onChange}
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
  }
}

export default Login;
