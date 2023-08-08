import './Weather.css'

const Weather = (props) => {
  const { data } = props;

  const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

  return (
    <>
      <div className="description">
        <div>
        <div>
          <img src={iconUrl} alt="Weather Icon" />
        </div>
        <h3>Weather: {data.weather[0].main}</h3>
          <h3>Description: {data.weather[0].description} : {data.clouds.all} %</h3>
          <h3>Location: <img className='location-image' src='https://cdn1.iconfinder.com/data/icons/sns-emoji-ui-ux-line/512/iconset050_line_512-10-128.png' alt='data.name'/>{data.name} </h3>
          <h3>Sunrise: {sunriseTime}</h3>
          <h3>Sunset: {sunsetTime}</h3>
          <h3>Temperature: {(data.main.temp - 273.15).toFixed(2)} °C</h3>
          <h3>Feels like: {data.main.feels_like} °C</h3>

        </div>
        <div className="progress-bar-container">
          <h3>humididy: {data.main.humidity} %</h3>
        <div className="progress-bar">

          <div className="progress" style={{ width: `${data.main.humidity}%` }}>

          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Weather;
