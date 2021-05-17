import { useEffect, useState } from 'react';
import axios from 'axios';

export const useWeather = (query) => {

  
  const [description, setDescription] = useState('');
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
       
        setDescription(response.data.weather[0].description);
        setTemp(response.data.main.temp);
        setIcon(response.data.weather[0].icon);
        setCountry(response.data.sys.country);
        setCity(response.data.name);
        
      })();
    } catch (err) {
      console.log(err);
    }
  }, [query]);



    return {  description, temp, icon, country, city };

};
