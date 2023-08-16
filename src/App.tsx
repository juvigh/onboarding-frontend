import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home/home-page';
import { LoginPage } from './pages/login/login-page';
import { RegisterPage } from './pages/register/register-page';
import { UserDetailsPage } from './pages/user-details/user-details-page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register-user" element={<RegisterPage />} />
        <Route path="/user/:id" element={<UserDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
