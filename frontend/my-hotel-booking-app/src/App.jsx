// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Navbar from './components/Navbar'
import Login from './pages/Login';
import AddHotel from './pages/AddHotel';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add-hotel" element={<AddHotel />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
