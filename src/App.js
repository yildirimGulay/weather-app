/** @format */

import React from "react";
import "./App.css";
import WeatherApp from "./contanier/WeatherApp";

function App() {
  return (
    <div className="App">
      <div className="card">
        <h2 className="title">
          {" "}
          <i className="fa fa-cloud"></i>Weather App
        </h2>
          
        <WeatherApp />
      </div>
    </div>
  );
}

export default App;
