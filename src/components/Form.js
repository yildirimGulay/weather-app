import React, { useState } from 'react';

function Form({ weatherData }) {
  const [city, setCity] = useState(' ');

  const formSubmit = (e) => {
    e.preventDefault();
    weatherData(city);
  };

  console.log(`city`, city);

  return (
    <>
      <form onSubmit={formSubmit} className="search-form">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter your cityname"
        />
        <button type="button" onClick={() => weatherData()}>
          {' '}
          Search{' '}
        </button>
      </form>
    </>
  );
}

export default Form;
