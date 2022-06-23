import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const [statusMessage, setStatusMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPass) {
      e.target.submit();
    }
  };

  const verifyPassword = (confirmPassword, password) => {
    if (confirmPassword === '' || password === '') {
      setStatusMessage('');
    } else if (confirmPassword === password) {
      setPasswordConfirmation(true);
      setStatusMessage('Password Matched');
    } else {
      setPasswordConfirmation(false);
      setStatusMessage('Password not matched');
    }
  };

  const handleInput = (e) => {
    const input = e.target;
    const inputValue = input.value;
    if (input.name === 'name') {
      setName(inputValue);
      return name;
    } if (input.name === 'email') {
      setEmail(inputValue);
      return email;
    } if (input.name === 'password') {
      setPassword(inputValue);
      verifyPassword(inputValue, confirmPass);
    } else if (input.name === 'confirm-password') {
      setConfirmPass(inputValue);
      setPasswordConfirmation(verifyPassword(inputValue));
      verifyPassword(inputValue, password);
    }
    return inputValue;
  };

  return (
    <section className="authentication-section">
      <h1 className="register-page-heading">Sign Up</h1>
      <form id="registeration-form" onSubmit={handleSubmit}>
        <input onChange={handleInput} className="input-field" type="text" name="name" id="signup-name-field" placeholder="Full Name" required />
        <input onChange={handleInput} className="input-field" type="email" name="email" id="signup-email-field" placeholder="Email" required />
        <input onChange={handleInput} className="input-field" type="password" name="password" id="signup-password-field" placeholder="Password" required />
        <input onChange={handleInput} onFocus={(e) => verifyPassword(e.target.value, password)} className={passwordConfirmation ? 'input-field' : 'input-field input-field-red'} type="password" name="confirm-password" id="signup-password-field" placeholder="Confirm Password" required />
        <small className={passwordConfirmation ? 'register-form-success-msg' : 'register-form-error-msg'}>{statusMessage}</small>
        <p className="register-to-login">
          Already a member?
          <NavLink className="register-to-login-link" to="/login">Login</NavLink>
        </p>
        <input onChange={handleInput} className="form-submit-btn" type="submit" value="Signup" />
      </form>
    </section>
  );
};

export default Signup;
