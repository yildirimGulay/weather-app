/** @format */

import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import { useSearch } from './hooks/useSearch';
import WeatherApp from './components/WeatherApp';
import Titles from './components/Titles';

function App() {
  const [query, setQuery] = useState('London');

  const search = useSearch(query);

  return (
    <div className="App">
      <Titles />

      <Form setQuery={setQuery} />

      <WeatherApp
        city={search.city}
        icon={search.icon}
        country={search.country}
        temp={search.temp}
        main={search.main}
      />
    </div>
  );
}

export default App;
