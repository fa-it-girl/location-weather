import React, { useState, useEffect } from 'react';
import Area from './Area';
import './Location.css'


const Location = ({}) => {
  const [lat, setLat] = useState(' ');
  const [lon, setLon] = useState(' ');
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
      setErrorLat('Latitude is not valid');
    } else {
      setErrorLat('');
    }
  };

  const validateLongitude = (value) => {
    if (value < -180 || value > 180) {
      setErrorLon('Longitude is not valid');
    } else {
      setErrorLon('');
    }
  };

  return (
    <>
  <h2 className='area-selector'>Area Selector</h2>
  <h3 className='location'>Location</h3>
  <div className='user-input'>
    <div>
      <p className='lat'>LATITUDE</p>
      <form>
        <input

          className='lat-input'
          type='text'
          value={lat}
          onChange={handleLatitudeChange}
        />
        {errorLat && <p style={{ color: 'red', fontSize:'10px',marginTop: '2%' }}>{errorLat}</p>}
      </form>
    </div>
    <div >
      <p>LONGITUDE</p>
      <form>
        <input

          className='lon-input'
          type='text'
          value={lon}
          onChange={handleLongitudeChange}
        />
        {errorLon && <p style={{ color: 'red',  fontSize:'10px', marginTop: '2%' }}>{errorLon}</p>}
      </form>
    </div>
  </div>

  <Area lat={lat} lon={lon}/>
</>


  );
};

export default Location;
