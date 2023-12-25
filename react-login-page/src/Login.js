// src/components/Login.js
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement your authentication logic here
    // For simplicity, this example just sets loggedIn to true if email and password are not empty
    if (email.trim() !== '' && password.trim() !== '') {
      setLoggedIn(true);
    }
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
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
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