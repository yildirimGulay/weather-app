/** @format */

import React, { useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import Titles from './components/Titles';
import axios from 'axios';
/* import WeatherApp from "./components/WeatherApp";  */

function App() {
  const weatherData = async (city) => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=cb370b1fdbe3b6b0965324cccfeb99e3`
      );

      console.log(response);
      console.log('api city:', city);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    weatherData();
  }, []);
  console.log(weatherData);
  return (
    <>
      <div className="App">
        <div className="card">
          <Titles />

          <Form weatherData={weatherData} />

          {/* <WeatherApp getWeather={weatherData} /> */}
        </div>
      </div>
    </>
  );
}

export default App;
