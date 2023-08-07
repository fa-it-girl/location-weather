import React, { useState } from 'react';
import { MapContainer,TileLayer,Marker, Circle, Popup} from 'react-leaflet';

const Area = ({ latitude, longitude }) => {
  const [radius, setRadius] = useState(1000); // Default radius in meters (1km)


  var marker = L.marker([latitude, longitude],
    {alt: 'BArcelona'}).addTo(map)



    return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={20}
      style={{ width: '100%', height: '400px' }}
    >
      {/* <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      /> */}


      <Marker position={[latitude, longitude]}>
        <Popup>
          Latitude: {latitude}<br />
          Longitude: {longitude}
        </Popup>
      </Marker>
      <Circle center={[latitude, longitude]} radius={radius} />
      <input
        type="range"
        min="1000" // Minimum radius in meters (1km)
        max="20000" // Maximum radius in meters (20km)
        step="100"
        value={radius}
        onChange={(event) => setRadius(Number(event.target.value))}
      />
      <p>Circle Radius: {radius} meters</p>
    </MapContainer>
  );
};

export default Area;
