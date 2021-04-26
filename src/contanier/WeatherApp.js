/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherApp = () => {
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState("London");

  const weatherData = async () => {
    try {
      const response = await axios.get(
        "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=cb370b1fdbe3b6b0965324cccfeb99e3"
      );

      setWeather(response);
      console.log(weather);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    weatherData();
  }, []);

  return (
    <div>
      <div className="search-form">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter your cityname"
        />
        <button type="button" onClick={() => weatherData()}>
          {" "}
          Search{" "}
        </button>
      </div>

      {weather !== null ? (
        <div className="main-contanier">
          <h4>Live Weather Condition</h4>
          <div className="weather-icon">
            <img
              src={`http://openweathermap.org/img/w/${weather.data.weather[0].icon}.png`}
              alt="imigicon"
            />
          </div>

          <h3>{weather.data.weather[0].main}</h3>

          <div className="temprature">
            <h1>
              {parseFloat(weather.data.main.temp - 273.15).toFixed(1)}&deg;C
            </h1>
          </div>

          <div className="location">
            <h3>
              <i className="fa fa-street-view"></i> {weather.data.name} |{" "}
              {weather.sys.country}
            </h3>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default WeatherApp;
