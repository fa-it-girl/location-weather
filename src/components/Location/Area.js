import React, { useState, useEffect } from 'react';
import { MapContainer, Circle, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import RangeInput from './RangeInput';
import './Area.css'


function RecenterAutomatically({ lat, lon }) {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, lon]);
  }, [lat, lon, map]);

  return null;
}
const Area=({ lat, lon }) =>{
  const [circleRadius, setCircleRadius] = useState(1000);
  const [mapZoom, setMapZoom] = useState(14);
  const maxZoom = 18;
  const [center, setCenter] = useState([lat, lon]);

  useEffect(() => {
    setCenter([lat, lon]);
  }, [lat, lon]);

  const handleSliderChange = (event) => {
    const selectedKm = parseFloat(event.target.value);
    const newRadius = selectedKm * 1000;
    setCircleRadius(newRadius);

    const newZoom = Math.min(mapZoom, maxZoom - Math.log2(selectedKm));
    setMapZoom(newZoom);
  };

  const icon = new L.Icon({
    iconUrl: 'https://developers.google.com/static/maps/documentation/javascript/images/default-marker.png?hl=es-419',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <div >
      <RangeInput handleSliderChange={handleSliderChange} circleRadius={circleRadius}/>
      <MapContainer center={center} zoom={mapZoom} className='map'>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center} icon={icon} />
        <RecenterAutomatically  lat={lat} lon={lon} />

        <Circle center={center} radius={circleRadius} />

      </MapContainer>
    </div>
  );
}

export default Area;
