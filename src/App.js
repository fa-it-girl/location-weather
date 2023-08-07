
import Area from './components/Location/Area';
import Location from './components/Location/Location';

function App() {
  const latitude = 37.7749; // Example latitude
  const longitude = -122.4194; // Example longitude
  return (
    <>
    <Location />
    <Area latitude={latitude} longitude={longitude}/>
    </>

  );
}

export default App;
