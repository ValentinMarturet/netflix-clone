import React from "react";
import netflix_logo from "./images/Netflix_Logo.png";
import "./Login.css";

const Login = () => {
  return (
    <div className="login_container">
      <img src={netflix_logo} className="login_netflix" />
      <form className="login_form">
        <h1 className="login_title">Log In</h1>
        <input
          className="login_input"
          type="text"
          name="email"
          placeholder="Email"
        />
        <input
          className="login_input"
          type="password"
          name="password"
          placeholder="Password"
        />
        <input
          className="login_input login_button"
          type="submit"
          value="Log In"
        />
        <button className="login_input login_button login_register">
          Register
        </button>
      </form>
    </div>
  );
};

export default Login;
