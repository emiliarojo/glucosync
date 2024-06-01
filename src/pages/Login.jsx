import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('Logged in');
  };

  return (
    <div className="login">
      <div className="arrow-back">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </div>
      <div className="login-container">
        <h1 className="login-title">Welcome back! <span role="img" aria-label="wave">👋</span></h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="login-label" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="login-input"
            placeholder=" Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="login-label" htmlFor="password"> Password</label>
          <input
            type="password"
            id="password"
            className="login-input"
            placeholder=" Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="btn-container">
            <Link to="/dashboard" className="btn btn-black"> Log in</Link>
            <Link to="/forgot-password" className="login-forgot-password">Forgot password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
