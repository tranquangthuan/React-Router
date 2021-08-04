import React from "react";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  onChange = (event) => {
    var target = event.target;
    var value = target.value;
    var name = target.name;
    this.setState({ [name]: value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    var { username, password } = this.state;
    if (username === "admin" && password === "123") {
      localStorage.setItem("user", JSON.stringify({ username, password }));
    }
  };

  render() {
    var loggedUser = localStorage.getItem("user");
    var { location } = this.props;
    if (loggedUser !== null) {
      return (
        <Redirect
          to={{
            pathname: "/product",
            state: {
              from: location,
            },
          }}
        />
      );
    }

    return (
      <div className="container">
        <form>
          <legend>Login</legend>

          <div className="form-group">
            <label>User name</label>
            <input
              name="username"
              type="text"
              className="form-control"
              placeholder="Input field"
              onChange={this.onChange}
              value={this.state.username}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Input field"
              onChange={this.onChange}
              value={this.state.password}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.onSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
