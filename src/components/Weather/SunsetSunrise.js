import React from 'react'

const SunsetSunrise = ({props}) => {
  const { data } = props;

  const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className='sunset-sunrise'>
          <div>
              <p className="sunset-title title">SUNSET</p>
              <p className="sunset-main">{sunsetTime}</p>
          </div>
          <div>
              <p className="sunrise-title title">SUNRISE</p>
              <p className="sunrise-main">{sunriseTime}</p>
          </div>
          <div>
              <p className="location-title title">LOCATION</p>
              <p className="location-main">
                <img className='location-image' src='https://cdn1.iconfinder.com/data/icons/sns-emoji-ui-ux-line/512/iconset050_line_512-10-128.png' alt='data.name' />
                <span className="location-text">{data.name}</span>
              </p>

          </div>
        </div>
  )
}

export default SunsetSunrise
