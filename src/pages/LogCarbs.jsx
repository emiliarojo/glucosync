import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const LogCarbs = () => {
  const [carbs, setCarbs] = useState(0);
  const navigate = useNavigate();

  const handleCarbsChange = (e) => {
    setCarbs(e.target.value);
  };

  const handleAdministerInsulin = async () => {
    const currentGlucoseLevel = 180; // Example value, replace with actual value
    const targetGlucoseLevel = 100; // Example value, replace with actual value
    const isf = 50; // Example value, replace with actual value
    const icr = 10; // Example value, replace with actual value
    const iob = 1; // Example value, replace with actual value

    const response = await fetch('https://insulin-dose-calculator.vercel.app/calculate_insulin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        current_glucose_level: currentGlucoseLevel,
        target_glucose_level: targetGlucoseLevel,
        isf: isf,
        total_carbs: carbs,
        icr: icr,
        iob: iob,
      }),
    });

    const data = await response.json();
    const recommendedInsulin = data.recommended_insulin;

    navigate('/administer-insulin', { state: { recommendedInsulin, carbs } });
  };

  return (
    <div className="log-carbs">
      <Link to="/dashboard" className="arrow-back">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <div className="log-carbs-header">
        <h1>Log Carbohydrates</h1>
      </div>
      <div className="numerical-inputs">
        <label htmlFor="carbs">Carbohydrates (grams)</label>
        <input
          type="number"
          id="carbs"
          value={carbs}
          onChange={handleCarbsChange}
          placeholder='0'
        />
        <div className="btn-container">
          <button onClick={handleAdministerInsulin} className="btn btn-black">Administer Insulin</button>
        </div>
      </div>
    </div>
  );
};

export default LogCarbs;
