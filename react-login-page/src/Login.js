// src/components/Login.js
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleLogin = () => {
    // Implement your authentication logic here
    // For simplicity, this example just sets loggedIn to true if email and password are not empty
    if (email.trim() !== '' && password.trim() !== '') {
      setLoggedIn(true);
    }
  };

  const validateEmail = (email) => {
    // Basic email validation using a regular expression
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChangeEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Clear the email error when the user types in the email field
    if (emailError && validateEmail(newEmail)) {
      setEmailError('');
    }
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login-container">
      {!loggedIn ? (
        <div className="login-box">
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleChangeEmail}
          />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChangePassword}
          />
          <button onClick={handleLogin} disabled={!validateEmail(email)}>
            Login
          </button>
        </div>
      ) : (
        <div className="welcome-message">
          <h2>Welcome, {email}!</h2>
        </div>
      )}
    </div>
  );
};

export default Login;
