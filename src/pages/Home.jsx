import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/pages/_home.scss';
import '../assets/styles/components/_button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubesStacked } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="home">
      <div className="home-logo">
        <FontAwesomeIcon icon={faCubesStacked} />
      </div>
      <h1 className="home-title">GlucoSync</h1>
      <div className="home-buttons">
        <Link to="/login" className="btn btn-white">Log in</Link>
        <Link to="/signup" className="btn btn-pink">Sign up</Link>
      </div>
    </div>
  );
};

export default Home;
