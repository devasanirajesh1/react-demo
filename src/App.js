import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
   const { user } = useSelector((state) => state.auth);

  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <LoginForm />} />

          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/forgot-password" element={<ForgotPasswordForm />} />
          <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;