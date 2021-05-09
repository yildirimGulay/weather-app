import { useEffect, useState } from 'react';
import axios from 'axios';

export const useSearch = (query) => {
  const [weather, setWeather] = useState([]);
  const [main, setMain] = useState('');
  const [temp, setTemp] = useState('');
  const [icon, setIcon] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');


  const apiKey= "cb370b1fdbe3b6b0965324cccfeb99e3";

  useEffect(() => {
    try {
      (async () => {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${query}&mode=json&units=metric&APPID=${apiKey}`
        );
        setWeather(response.data);
        setMain(response.data.weather[0].main);
        setTemp(response.data.main.temp);
        setIcon(response.data.weather[0].icon);
        setCountry(response.data.sys.country);
        setCity(response.data.name);
      })();
    } catch (err) {
      console.log(err);
    }
  }, [query]);

  return { weather, main, temp, icon, country, city };
};
