import './Weather.css'

const Weather = (props) => {
  const { data } = props;

  const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

  return (
    <>

      <div className="description">
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
        </div> <br />

        <div className='temperature'>
          <div>
             <p className="temperature-title">TEMPERATURE</p>
             <p className="temperature-main">{(data.main.temp - 273.15).toFixed(2)}</p>
          </div>
          <div>
             <p className="feelslike-title">FEELS LIKE</p>
             <p className="temperature-main">{data.main.feels_like}</p>
          </div>
        </div> <br />

        <div className="progress-bar-container">
          <p> {data.main.humidity}% humididy</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${data.main.humidity}%` }}></div>
          </div>
      </div>
      </div>








    </>
  );
};

export default Weather;
