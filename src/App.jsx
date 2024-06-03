import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Dashboard from './pages/Dashboard';
import InsulinHistory from './pages/InsulinHistory'
import Settings from './pages/Settings';
import LogCarbs from './pages/LogCarbs';
import AdministerInsulin from './pages/AdministerInsulin';
import ScrollToTop from './components/ScrollToTop';
import './index.scss';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/insulin-history" element={<InsulinHistory />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/log-carbs" element={<LogCarbs />} />
          <Route path="/administer-insulin" element={<AdministerInsulin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
