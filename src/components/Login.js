import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    const inputField = e.target;
    const inputValue = inputField.value;
    if (inputField.name === 'email') {
      setEmail(inputValue);
    } else if (inputField.name === 'password') {
      setPassword(inputValue);
    }
    return inputValue;
  };
  return (
    <section className="authentication-section">
      <h1 className="login-page-heading">Login</h1>
      <form id="login-form" onSubmit={handleSubmit}>
        <input onChange={handleInput} className="input-field" type="email" name="email" id="signup-email-field" placeholder="Email" required />
        <input onChange={handleInput} className="input-field" type="password" name="password" id="login-password-field" placeholder="Password" required />
        <span className="login-to-register">
          Not a member?
          <NavLink className="login-to-register-link" to="/registeration">Register</NavLink>
        </span>
        <input onChange={handleInput} className="form-submit-btn" type="submit" value="Login" />
      </form>
    </section>
  );
};

export default Login;
