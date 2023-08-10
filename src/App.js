import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Location from './components/Location/Location';
import Navbar from './components/Navbar';
import CitySelector from './components/Weather/CitySelector';

function App() {


  return (
    <Router>

      <Routes>
        <Route path="/" element={<Location />} />
        <Route path="/location" element={<Location />} />
        <Route path="/weather" element={<CitySelector />} />
      </Routes>
    <Navbar  />
    </Router>
  );
}

export default App;
