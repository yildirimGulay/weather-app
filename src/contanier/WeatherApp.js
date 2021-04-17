
import React, { useState , useEffect } from 'react';
import axios from 'axios';

 const WeatherApp = () => {

    const [temprature,setTemprature]=useState("");
    const [city,setCity]=useState("London");
    const[country,setCountry]=useState("uk");

    const weatherData= async () => {
        try {
          const response = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=cb370b1fdbe3b6b0965324cccfeb99e3');
          setTemprature(response)
          console.log( response);
        } catch (error) {
          console.error(error.message);
        }
       
      };

      useEffect(()=>{
          weatherData()
      },[])

    return (
        
        <div>

            <div className="search-form">
                <input type="text" placeholder="Enter your cityname"/>
                <button type="button"> Search </button>  
            </div>  

            <div className="main-contanier">

              <h4>Live Weather Condition</h4> 
              <div className="weather-icon">
                <i className="fa fa-sun"></i>  
              </div> 

              <h3>Sunny</h3>
              <div className="temprature">
                  <h1>25&deg;C</h1>
              </div>
              <div className="location">
                  <h3><i className="fa fa-street-view"></i> Usak | Turkey </h3>

              </div>
                
            </div>      
        </div>
    )
}
export default WeatherApp;