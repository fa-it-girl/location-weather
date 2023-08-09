import ProgressBar from './ProgressBar';
import SunsetSunrise from './SunsetSunrise';
import Temperature from './Temperature';
import './Weather.css'
import WeatherDescription from './WeatherDescription';

const Weather = (props) => {
  const { data } = props;

  return (
    <>
      <div className="description">
        <WeatherDescription props={props}/>
        <SunsetSunrise props={props}/><br />
        <Temperature props={props}/> <br />
        <ProgressBar props={props} />
      </div>
    </>
  );
};

export default Weather;
