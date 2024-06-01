import React from 'react';
import { Link } from 'react-router-dom';

const Step4 = ({ formData, handleChange, handleSubmit }) => {
  const openBluetoothSettings = () => {
    alert('Please open your phone\'s Bluetooth settings to connect your devices.');
  };

  return (
    <div className="signup-step">
      <h1 className="signup-title">We’re almost done!</h1>
      <p className="signup-subtitle">We just need to set some things up.</p>
      <form onSubmit={handleSubmit}>
        <label onClick={openBluetoothSettings}><span>+</span> Connect a glucose sensor</label>
        <label onClick={openBluetoothSettings}><span>+</span> Connect an insulin pump</label>
        <div className="numerical-inputs">
          <label>Insulin to Carb Ratio (ICR)</label>
          <input type="number" name="icr" placeholder="0" value={formData.icr} onChange={handleChange} />
          <label>Insulin Sensitivity Factor (ISF)</label>
          <input type="number" name="isf" placeholder="0" value={formData.isf} onChange={handleChange} />
        </div>
        <div className="tos-container">
          <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
          <p>I accept the <span>Terms & Conditions</span></p>
        </div>
        <div className="btn-container">
          <button type="submit" className="btn btn-black">Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default Step4;
