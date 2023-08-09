import React from 'react'

const Temperature = ({props}) => {
  const { data } = props;
  return (
    <div className='temperature'>
          <div>
             <p className="temperature-title">TEMPERATURE</p>
             <p className="temperature-main">{(data.main.temp - 273.15).toFixed(2)}</p>
          </div>
          <div>
             <p className="feelslike-title">FEELS LIKE</p>
             <p className="temperature-main">{data.main.feels_like}</p>
          </div>
        </div>
  )
}

export default Temperature
