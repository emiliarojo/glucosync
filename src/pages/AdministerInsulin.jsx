import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const AdministerInsulin = () => {
  const location = useLocation();
  const { recommendedInsulin, carbs } = location.state || { recommendedInsulin: 0, carbs: 0 };
  const [units, setUnits] = useState(recommendedInsulin);
  const [numDoses, setNumDoses] = useState(0);
  const [interval, setInterval] = useState(0);
  const [isComplex, setIsComplex] = useState(false);

  const handleInjectionTypeChange = (type) => {
    setIsComplex(type === 'complex');
  };

  const handleAdminister = async () => {
    // Add functionality to administer insulin based on the form inputs
    const response = await fetch('https://glucose-monitoring-beige.vercel.app/inject-insulin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        units: isComplex ? units * numDoses : units,
      }),
    });

    if (response.ok) {
      console.log(`Insulin administered: ${isComplex ? units * numDoses : units} units`);
    }
  };

  return (
    <div className="administer-insulin">
      <Link to="/dashboard" className="arrow-back">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <div className="administer-insulin-header">
        <h1>Administer Insulin</h1>
      </div>
      <div className="injection-type">
        <button
          className={`injection-type-btn ${!isComplex ? 'active' : ''}`}
          onClick={() => handleInjectionTypeChange('simple')}
        >
          Simple Injection
        </button>
        <button
          className={`injection-type-btn ${isComplex ? 'active' : ''}`}
          onClick={() => handleInjectionTypeChange('complex')}
        >
          Complex Injection
        </button>
      </div>
      <div className="numerical-inputs">
        <label htmlFor="units">Units</label>
        <input
          type="number"
          id="units"
          value={units}
          onChange={(e) => setUnits(e.target.value)}
          placeholder="0"
        />
        {isComplex && (
          <>
            <label htmlFor="num-doses">Number of doses</label>
            <input
              type="number"
              id="num-doses"
              value={numDoses}
              onChange={(e) => setNumDoses(e.target.value)}
              placeholder="0"
            />
            <label htmlFor="interval">Interval for administering doses (hours)</label>
            <input
              type="number"
              id="interval"
              value={interval}
              onChange={(e) => setInterval(e.target.value)}
              placeholder="0"
            />
          </>
        )}
        <div className="btn-container">
          <button onClick={handleAdminister} className="btn btn-black">Administer</button>
        </div>
      </div>
    </div>
  );
};

export default AdministerInsulin;
