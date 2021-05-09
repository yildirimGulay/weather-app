
import React from 'react';

const WeatherApp = (props) => {
  return (
    <div>
      <div className="main-contanier">
        <h4>Live Weather Condition</h4>
        <div className="weather-icon">
          <img
            style={{ width: 150, height: 150 }}
            src={`http://openweathermap.org/img/w/${props.icon}.png`}
            alt="icon"
          />
        </div>

        <h2>{props.main}</h2>

        <div className="temprature">
          <h1>{Math.floor(props.temp)}&deg;C</h1>
        </div>

        <div className="location">
          <h3>
            <i className="fa fa-street-view"></i> {props.city}, {props.country}
          </h3>
        </div>
      </div>
    </div>
  );
};
export default WeatherApp;
