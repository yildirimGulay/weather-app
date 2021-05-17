/** @format */

import React, { useState } from 'react';
import Form from './components/Form';
import { useWeather } from './hooks/useWeather';
import WeatherApp from './components/WeatherApp';
import Titles from './components/Titles';



function App() {
  const [query, setQuery] = useState('London');

  const { description, temp, icon, country, city} = useWeather(query);
 

  return (
    <div  className="App">
      <Titles 
      name={"Weather App"}/>

      <Form setQuery={setQuery} />

       <WeatherApp
        city={city}
        icon={icon}
        country={country}
        temp={temp}
        description={description}
      /> 
    </div>
  );
}

export default App;
