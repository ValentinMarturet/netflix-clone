import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import netflix_logo from "../../images/Netflix_Logo.png";
import "./Login.css";

const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    auth.dispatch({ type: "LOGIN" });
    navigate("/");
  };

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
          onClick={handleLogin}
        />
        <button
          type="button"
          className="login_input login_button login_register"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Login;
