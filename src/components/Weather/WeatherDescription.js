import React from 'react'

const WeatherDescription = ({props}) => {
  const { data } = props;

  const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

  return (
    <div className='weather-icon-description'>
           <div className="icon-part">
            <div className="icon">
              <img src={iconUrl} alt="icon" />
            </div>
            <div className="weather-description">
              <p className="weather-title title">WEATHER</p>
              <p className="weather-main">{data.weather[0].main}</p>
            </div>
        </div>
        <div className="description-part">
          <p className="description-title title">DESCRIPTION</p>
          <p className="weather-description-persentage">{data.weather[0].description} : {data.clouds.all} %</p>
        </div>
        </div>
  )
}

export default WeatherDescription
