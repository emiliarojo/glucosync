import React from 'react';

const Step2 = ({ formData, handleChange, nextStep }) => {
  return (
    <div className="signup-step">
      <h1 className="signup-title">Choose a username</h1>
      <p className="signup-subtitle">What should we call you?</p>
      <form>
        <label>Username</label>
        <input type="text" name="username" placeholder=" Username" value={formData.username} onChange={handleChange} />
        <div className="btn-container">
          <button type="button" className="btn btn-black" onClick={nextStep}>Next</button>
        </div>
      </form>
    </div>
  );
};

export default Step2;
