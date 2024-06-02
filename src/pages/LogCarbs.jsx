import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const LogCarbs = () => {
  const [carbs, setCarbs] = useState('');
  const navigate = useNavigate();

  const handleCarbsChange = (e) => {
    const value = e.target.value;
    setCarbs(value ? parseInt(value, 10) : '');
  };

  const handleAdministerInsulin = async () => {
    const currentGlucoseLevel = 180;
    const targetGlucoseLevel = 100;
    const isf = 50;
    const icr = 10;
    const iob = 1;

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

    if (!response.ok) {
      const errorDetails = await response.json();
      console.error('Error:', errorDetails);
      return;
    }

    const data = await response.json();
    const { carb_coverage_dose, correction_dose, total_insulin_dose } = data;

    navigate('/administer-insulin', { state: { carbCoverageDose: carb_coverage_dose, correctionDose: correction_dose, totalInsulinDose: total_insulin_dose, carbs } });
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
