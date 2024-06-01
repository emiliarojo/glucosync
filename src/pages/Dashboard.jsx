import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../assets/styles/pages/_dashboard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons';

const generateGlucoseData = () => {
  const data = [];
  const startTime = new Date().setHours(0, 0, 0, 0);
  const endTime = new Date().setHours(23, 59, 59, 999);
  let currentTime = startTime;

  while (currentTime <= endTime) {
    const hours = new Date(currentTime).getHours().toString().padStart(2, '0');
    const minutes = new Date(currentTime).getMinutes().toString().padStart(2, '0');
    data.push({
      time: `${hours}:${minutes}`,
      glucose: Math.floor(Math.random() * (150 - 70 + 1)) + 70, // random glucose level between 70 and 150 mg/dL
    });
    currentTime += 30 * 60 * 1000; // increment by 30 minutes
  }

  return data;
};

const data = generateGlucoseData();

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="hamburger-menu">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <h1>Hey Janette!</h1>
        <div className="dashboard-glucose-level-container">
          <div className="dashboard-glucose-level">
            <h2>{data[data.length-1].glucose}</h2>
            <p>mg/dL</p>
          </div>
        </div>
      </div>
      <h3>Advanced Analytics</h3>
      <p className="dashboard-scan-info">Scanned at {data[data.length-1].time}</p>
      <p className="dashboard-average">115 mg/dL avg.</p>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={[50, 175]} />
          <Tooltip />
          <Line type="monotone" dataKey="glucose" stroke="#ff6b6b" />
        </LineChart>
      </ResponsiveContainer>
      <div className="dashboard-metrics">
        <div className="dashboard-metric-card">
          <p>Last dose</p>
          <h4>4 units</h4>
          <p>5:45 PM</p>
          <Link to="/dose-details">
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        <div className="dashboard-metric-card">
          <p>Carb Intake</p>
          <h4>95 g</h4>
          <Link to="/carb-intake">
            <FontAwesomeIcon icon={faPlus} />
          </Link>
        </div>
        <div className="dashboard-metric-card">
          <p>IOB</p>
          <h4>2 units</h4>
        </div>
        <div className="dashboard-metric-card">
          <p>ICR</p>
          <h4>1 unit per 15g</h4>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
