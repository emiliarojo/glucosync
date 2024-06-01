import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Step1 from '../components/SignUpSteps/Step1';
import Step2 from '../components/SignUpSteps/Step2';
import Step3 from '../components/SignUpSteps/Step3';
import Step4 from '../components/SignUpSteps/Step4';

const SignUp = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    icr: '',
    isf: '',
    termsAccepted: false,
  });

  const navigate = useNavigate();

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => {
    if (currentStep === 1) {
      navigate('/');
    } else {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 formData={formData} handleChange={handleChange} nextStep={nextStep} />;
      case 2:
        return <Step2 formData={formData} handleChange={handleChange} nextStep={nextStep} />;
      case 3:
        return <Step3 formData={formData} handleChange={handleChange} nextStep={nextStep} />;
      case 4:
        return <Step4 formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />;
      default:
        return <Step1 formData={formData} handleChange={handleChange} nextStep={nextStep} />;
    }
  };

  return (
    <div className="signup">
      <div className="arrow-back" onClick={prevStep}>
          <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div className="signup-progress-container">
        <div className="signup-progress-steps">
          <div className={`signup-progress-step ${currentStep >= 1 ? 'active' : ''}`}></div>
          <div className={`signup-progress-step ${currentStep >= 2 ? 'active' : ''}`}></div>
          <div className={`signup-progress-step ${currentStep >= 3 ? 'active' : ''}`}></div>
          <div className={`signup-progress-step ${currentStep >= 4 ? 'active' : ''}`}></div>
        </div>
      </div>
      <div className="signup-container">
        {renderStep()}
      </div>
    </div>
  );
};

export default SignUp;
