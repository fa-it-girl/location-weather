import React, { useState, useEffect } from 'react';
import Weather from './Weather'; // Make sure the path is correct
import './CitySelector.css';

const KEY = '249efd60e5021ba25f979f2caac2b853';

const CitySelector = () => {
  const [weather, setWeather] = useState({ data: null, error: null });
  const [userInput, setUserInput] = useState({ city: '', country: '' });



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${userInput.city},${userInput.country}&appid=${KEY}`
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setWeather({ data, error: null });
        } else {
          setWeather({ data: null, error: 'City not found' });
        }
      } catch (error) {
        setWeather({ data: null, error: 'Error fetching weather data' });
      }

    };

    if (userInput.city !== '') {
      fetchData();
    }
  }, [userInput]);

  const useInputHandler = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h1>City</h1>
      <form>
        <input type="text" name="city" onChange={useInputHandler} />


      </form>
      {weather.error ? (
        <div className="error-message">{weather.error}</div>
      ) : (
        weather.data && <Weather data={weather.data} />
      )}
    </div>
  );
};

export default CitySelector;
