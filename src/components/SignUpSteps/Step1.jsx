import React from 'react';
// import '../../assets/styles/components/_button.scss';

const Step1 = ({ formData, handleChange, nextStep }) => {
  return (
    <div className="signup-step">
      <h1 className="signup-title">Hey, there! <span role="img" aria-label="wave">👋</span></h1>
      <p className="signup-subtitle">Let’s get your account set up.</p>
      <form>
        <label>First Name</label>
        <input type="text" name="firstName" placeholder=" First Name" value={formData.firstName} onChange={handleChange} />
        <label>Last Name</label>
        <input type="text" name="lastName" placeholder=" Last Name" value={formData.lastName} onChange={handleChange} />
        <label>Email</label>
        <input type="email" name="email" placeholder=" Email" value={formData.email} onChange={handleChange} />
        <div className="btn-container">
          <button type="button" className="btn btn-black" onClick={nextStep}>Next</button>
        </div>
      </form>
    </div>
  );
};

export default Step1;
