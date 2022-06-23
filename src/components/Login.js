import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    e.preventDefault();
  };
  return (
    <section className="authentication-section">
      <h1 className="login-page-heading">Login</h1>
      <form id="login-form" onSubmit={handleSubmit}>
        <input onChange={handleInput} className="input-field" type="email" name="email" id="signup-email-field" placeholder="Email" required />
        <input onChange={handleInput} className="input-field" type="password" name="password" id="signup-password-field" placeholder="Password" required />
        <span className="login-to-register">
          Already a member?
          <NavLink className="login-to-register-link" to="/registeration">Register</NavLink>
        </span>
        <input onChange={handleInput} className="form-submit-btn" type="submit" value="Login" />
      </form>
    </section>
  );
};

export default Login;
