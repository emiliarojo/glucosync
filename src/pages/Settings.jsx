import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../assets/styles/pages/_settings.scss';

const Settings = () => {
  return (
    <div className="settings">
      <Link to="/dashboard" className="arrow-back">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <div className="settings-header">
        <h1>Settings</h1>
      </div>
      <div className="settings-section">
        <h2>Paired Devices</h2>
        <ul className="settings-list">
          <li>
            Insulin Pump
            <FontAwesomeIcon icon={faTrash} className="delete-icon" />
          </li>
          <li>
            Glucose Sensor
            <FontAwesomeIcon icon={faTrash} className="delete-icon" />
          </li>
        </ul>
        <p className="add-new">+ Add new device</p>
      </div>
      <div className="settings-section">
        <h2>Notifications</h2>
        <ul className="settings-list">
          <li>
            Changes in Blood Sugar Tendency
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </li>
          <li>
            Insulin Administration Reminder
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </li>
          <li>
            Hypoglycemia/Hyperglycemia
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </li>
        </ul>
      </div>
      <div className="settings-section">
        <h2>Insulin Administration</h2>
        <ul className="settings-list">
          <li>
            Automate Insulin Administration
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </li>
        </ul>
      </div>
      <div className="settings-section">
        <h2>Emergency Contacts</h2>
        <ul className="settings-list">
          <li>
            John Smith - 123-123-123
            <FontAwesomeIcon icon={faTrash} className="delete-icon" />
          </li>
          <li>
            Patty Wilson - 321-321-321
            <FontAwesomeIcon icon={faTrash} className="delete-icon" />
          </li>
        </ul>
        <p className="add-new">+ Add new contact</p>
      </div>
      <div className="settings-section">
        <h2>Medical Parameters</h2>
        <ul className="settings-list">
          <li>
            ISF
            <span className="value">50</span>
          </li>
          <li>
            ICR
            <span className="value">1:15</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Settings;
