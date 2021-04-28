/** @format */

import React/* ,{useState} */ from "react";



const WeatherApp = (/* props */) => {
 



  return (
    <div>
      <div className="main-contanier">
        <h4>Live Weather Condition</h4>
        <div className="weather-icon">
         {/*  <img
            src={`http://openweathermap.org/img/w/${props.weatherData.data.weather[0].icon}.png`}
            alt="imigicon"
          /> */}
        </div>

        <h3>{/* {props.weatherData.data.weather[0].main} */}</h3>

        <div className="temprature">
          <h1>
           {/*  {parseFloat(props.weatherData.data.main.temp - 273.15).toFixed(1)} */}
            &deg;C
          </h1>
        </div>

        <div className="location">
          <h3>
            <i className="fa fa-street-view"></i>{' '}
           {/*  {props.weatherData.sys.country} | {props.weatherData.sys.country} */}
          </h3>
        </div>
      </div>
    </div>
  );
};
export default WeatherApp;
