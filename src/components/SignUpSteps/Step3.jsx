import React from 'react';

const Step3 = ({ formData, handleChange, nextStep }) => {
  return (
    <div className="signup-step">
      <h1 className="signup-title">Create a password <span role="img" aria-label="key">🔑</span></h1>
      <p className="signup-subtitle-sm">Create a password with at least 6 letters or numbers.</p>
      <form>
        <label>Enter password</label>
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        <label>Re-enter password</label>
        <input type="password" name="confirmPassword" placeholder="Password" value={formData.confirmPassword} onChange={handleChange} />
        <div className="btn-container">
          <button type="button" className="btn btn-black" onClick={nextStep}>Next</button>
        </div>
      </form>
    </div>
  );
};

export default Step3;
