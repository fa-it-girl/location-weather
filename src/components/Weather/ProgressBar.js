import React from 'react'

const ProgressBar = ({props}) => {
  const {data}= props
  return(
    <div className="progress-bar-container">
      <p> {data.main.humidity}% humididy</p>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${data.main.humidity}%` }}></div>
      </div>
   </div>
  )
}

export default ProgressBar;
