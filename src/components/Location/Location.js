import React, { useState, useEffect } from 'react';

const Location = () => {
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [errorLat, setErrorLat] = useState('');
  const [errorLon, setErrorLon] = useState('');

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        },
        (error) => {
          console.error('Error getting current location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported :(');
    }
  }, []);

  const handleLatitudeChange = (event) => {
    const value = event.target.value;
    setLat(value);
    validateLatitude(value);
  };

  const handleLongitudeChange = (event) => {
    const value = event.target.value;
    setLon(value);
    validateLongitude(value);
  };

  const validateLatitude = (value) => {
    if (value < -90 || value > 90) {
      setErrorLat('Latitude must be a valid number between -90 and 90');
    } else {
      setErrorLat('');
    }
  };

  const validateLongitude = (value) => {
    if (value < -180 || value > 180) {
      setErrorLon('Longitude must be a valid number between -180 and 180');
    } else {
      setErrorLon('');
    }
  };

  return (
    <>
      <h3>Location</h3>
      <form>
        <label>LATITUDE</label><br />
        <input
          type='text'
          value={lat}
          onChange={handleLatitudeChange}
        />
        {errorLat && <p style={{ color: 'red' }}>{errorLat}</p>}
        <br />
        <label>LONGITUDE</label><br />
        <input
          type='text'
          value={lon}
          onChange={handleLongitudeChange}
        />
        {errorLon && <p style={{ color: 'red' }}>{errorLon}</p>}
      </form>
    </>
  );
};

export default Location;
