import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import netflix_logo from "../../images/Netflix_Logo.png";
import "./Register.css";

const Register = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Falta crear nuevo usuario
    auth.dispatch({ type: "LOGIN" });
    navigate("/");
  };

  return (
    <div className="login_container">
      <img src={netflix_logo} className="login_netflix" />
      <form className="login_form">
        <h1 className="login_title">Register</h1>
        <input
          className="login_input"
          type="text"
          name="name"
          placeholder="Name"
        />
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
          value="Register"
          onClick={handleRegister}
        />
      </form>
    </div>
  );
};

export default Register;
