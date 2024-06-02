import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const AdministerInsulin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { carbCoverageDose, correctionDose, totalInsulinDose, carbs } = location.state || { carbCoverageDose: 0, correctionDose: 0, totalInsulinDose: 0, carbs: 0 };
  const [units, setUnits] = useState(totalInsulinDose);
  const [numDoses, setNumDoses] = useState(1);
  const [interval, setInterval] = useState('');
  const [isComplex, setIsComplex] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isComplex && numDoses > 0) {
      setUnits(totalInsulinDose / numDoses);
    } else {
      setUnits(totalInsulinDose);
    }
  }, [numDoses, isComplex, totalInsulinDose]);

  const handleInjectionTypeChange = (type) => {
    setIsComplex(type === 'complex');
  };

  const handleAdminister = async () => {
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
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/dashboard');
  };

  const handleUnitsChange = (e) => {
    const value = parseFloat(e.target.value);
    setUnits(value > 0 ? value : '');
    if (isComplex && value > 0) {
      setNumDoses(1);
    }
  };

  const handleNumDosesChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setNumDoses(value > 0 ? value : '');
    if (value > 0) {
      setUnits(totalInsulinDose / value);
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
          onChange={handleUnitsChange}
          placeholder="0"
          disabled={isComplex}
        />
        {isComplex && (
          <>
            <label htmlFor="num-doses">Number of doses</label>
            <input
              type="number"
              id="num-doses"
              value={numDoses}
              onChange={handleNumDosesChange}
              placeholder="0"
              min="1"
            />
            <label htmlFor="interval">Interval for administering doses (hours)</label>
            <input
              type="number"
              id="interval"
              value={interval}
              onChange={(e) => setInterval(parseInt(e.target.value, 10))}
              placeholder="0"
            />
          </>
        )}
        <div className="btn-container">
          <button onClick={handleAdminister} className="btn btn-black">Administer</button>
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <h2>Insulin Administered</h2>
            <p>{`You have successfully administered ${isComplex ? units * numDoses : units} units of insulin.`}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdministerInsulin;
