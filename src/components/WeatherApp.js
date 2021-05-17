
import React from 'react';

const WeatherApp = ({city, temp, icon,country,description}) => {

  console.log('city:',city)
  console.log('temp:',temp)
  return (
    <div>
      <div className="main-contanier">
        <h4>Live Weather Condition</h4>
        <div className="weather-icon">
          <img
            style={{ width: 150, height: 150 }}
            src={`http://openweathermap.org/img/w/${icon}.png`}
            alt="icon"
          />
        </div>

        <h2>{description}</h2>

        <div className="temprature">
          <h1>{Math.floor(temp)}&deg;C</h1>
        </div>

        <div className="location">
          <h3>
            <i className="fa fa-street-view"></i> {city}, {country}
          </h3>
        </div>
      </div>
    </div>
  );
};
export default WeatherApp;
