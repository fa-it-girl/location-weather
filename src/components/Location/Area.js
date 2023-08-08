import React, { useState, useEffect } from 'react';
import { MapContainer, Circle, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';

function Area({ lat, lon }) {
  const [circleRadius, setCircleRadius] = useState(1000);
  const [mapZoom, setMapZoom] = useState(14);
  const maxZoom = 18;
  const [center, setCenter] = useState([lat, lon]);

  useEffect(() => {
    const newCenter = [lat, lon];
    console.log(newCenter)
    setCenter(newCenter);
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
    <div>
      <MapContainer center={center} zoom={mapZoom} style={{ height: '60vh', width: '60%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center} icon={icon} />
        <Circle center={center} radius={circleRadius} />
      </MapContainer>
      <div style={{ marginTop: '1rem' }}>
        <input
          type="range"
          min={1}
          max={20}
          step={1}
          value={circleRadius / 1000}
          onChange={handleSliderChange}
        />
        <p>Area: {circleRadius / 1000} km</p>
      </div>
    </div>
  );
}

export default Area;
