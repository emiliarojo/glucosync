import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../assets/styles/components/_menu.scss';

const Menu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      <FontAwesomeIcon icon={faTimes} className="menu__close" onClick={toggleMenu} />
      <ul>
        <li onClick={toggleMenu}><Link to="/administer-insulin">Administer Insulin</Link></li>
        <li onClick={toggleMenu}><Link to="/generate-health-report">Generate Health Report</Link></li>
        <li onClick={toggleMenu}><Link to="/settings">Settings</Link></li>
      </ul>
    </div>
  );
};

export default Menu;
