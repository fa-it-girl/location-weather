import React from 'react';
import './RangeInput.css';

function RangeInput({ circleRadius, handleSliderChange }) {
  return (
    <div className='range-input'>
       <div className='areainkm'>
          <h4>Area</h4>
          <p>max 20km</p>
        </div>

       <input
        type="range"
        min={1}
        max={20}
        step={1}
        className="custom-range"
        value={circleRadius / 1000}
        onChange={handleSliderChange}
      />

    </div>
  );
}

export default RangeInput;
