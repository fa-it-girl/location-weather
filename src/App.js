import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Location from './components/Location/Location';
import Navbar from './components/Navbar';
import CitySelector from './components/Weather/CitySelector';

function App() {
  const [activeComponent, setActiveComponent] = useState('location');

  const toggleComponent = () => {
    setActiveComponent(activeComponent === 'location' ? 'weather' : 'location');
  };

  return (
    <Router>
      <Routes>
        <Route path="/location" element={<Location />} />
        <Route path="/weather" element={<CitySelector />} />
      </Routes>
      <Navbar onClick={toggleComponent} />
    </Router>
  );
}

export default App;
