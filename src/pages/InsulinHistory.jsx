import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

const data = [
  { date: dayjs().hour(8).minute(30), units: 5, glucose: 180, carbs: 60 },
  { date: dayjs().hour(12).minute(30), units: 4, glucose: 130, carbs: 45 },
  { date: dayjs().hour(17).minute(45), units: 6, glucose: 200, carbs: 70 },
  { date: dayjs().hour(20).minute(30), units: 4, glucose: 140, carbs: 50 },
  { date: dayjs().subtract(1, 'day').hour(8).minute(30), units: 6, glucose: 210, carbs: 75 },
  { date: dayjs().subtract(1, 'day').hour(12).minute(30), units: 5, glucose: 180, carbs: 60 },
  { date: dayjs().subtract(1, 'day').hour(17).minute(45), units: 4, glucose: 150, carbs: 55 },
  { date: dayjs().subtract(1, 'day').hour(20).minute(30), units: 4, glucose: 160, carbs: 50 },
  { date: dayjs().subtract(2, 'day').hour(8).minute(30), units: 5, glucose: 190, carbs: 65 },
  { date: dayjs().subtract(2, 'day').hour(12).minute(30), units: 4, glucose: 140, carbs: 50 },
  { date: dayjs().subtract(2, 'day').hour(17).minute(45), units: 6, glucose: 210, carbs: 80 },
  { date: dayjs().subtract(2, 'day').hour(20).minute(30), units: 5, glucose: 170, carbs: 65 },
  { date: dayjs().subtract(3, 'day').hour(8).minute(30), units: 5, glucose: 160, carbs: 60 },
  { date: dayjs().subtract(3, 'day').hour(12).minute(30), units: 4, glucose: 130, carbs: 45 },
  { date: dayjs().subtract(3, 'day').hour(17).minute(45), units: 6, glucose: 220, carbs: 85 },
  { date: dayjs().subtract(3, 'day').hour(20).minute(30), units: 4, glucose: 140, carbs: 50 },
  { date: dayjs().subtract(4, 'day').hour(8).minute(30), units: 6, glucose: 200, carbs: 75 },
  { date: dayjs().subtract(4, 'day').hour(12).minute(30), units: 5, glucose: 170, carbs: 60 },
  { date: dayjs().subtract(4, 'day').hour(17).minute(45), units: 4, glucose: 150, carbs: 55 },
  { date: dayjs().subtract(4, 'day').hour(20).minute(30), units: 5, glucose: 180, carbs: 65 },
];


const InsulinHistory = () => {
  const [date, setDate] = useState(dayjs());

  const selectedDateData = data.filter(
    (entry) =>
      entry.date.isSame(date, 'day')
  );

  return (
    <div className="insulin-history">
      <div className="insulin-history-header">
        <Link to="/dashboard" className="arrow-back">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <h1>Insulin Injection History</h1>
      </div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar value={date} onChange={(newDate) => setDate(newDate)} />
      </LocalizationProvider>
      <div className="insulin-history-list">
        {selectedDateData.length > 0 ? (
          selectedDateData.map((entry, index) => (
            <div key={index} className="insulin-history-card">
              <span>{`${entry.date.format('HH:mm')} ${entry.date.format('DD/MM/YY')}`}</span>
              <h2>{entry.units} units</h2>
              <p>{`${entry.glucose} mg/dL - ${entry.carbs}g Carbs`}</p>
            </div>
          ))
        ) : (
          <p className="no-data">No data for this date.</p>
        )}
      </div>
    </div>
  );
};

export default InsulinHistory;
