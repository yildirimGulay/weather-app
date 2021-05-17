import { useEffect,useState} from "react";
import axios from 'axios';
import { usePosition } from "use-position";

export const useLocation = () => {
    const [weathers, setWeathers] = useState();
    const { latitude, longitude } = usePosition();
console.log("useposition:",usePosition())
/* const getWeatherData = async (latitude, longitude) => {
    const apiKey= "cb370b1fdbe3b6b0965324cccfeb99e3";
    
    try {
        const { data } = await axios.get(
          `api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
        );
        setWeathers(data);
        console.log("lat",latitude)
      } catch {
        alert("eror");
      }
    }; */
  
   /*  useEffect(() => {
      latitude && longitude && getWeatherData(latitude, longitude);
    }, [latitude, longitude]); */


    useEffect(() => {
      try {
        const apiKey= "cb370b1fdbe3b6b0965324cccfeb99e3";
        (async (latitude,longitude) => {
          const response = await axios.get(
            `api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
            );
            setWeathers(response);
            console.log("lat",latitude)
         /*  setWeather(response.data);
          setDescription(response.data.weather[0].description);
          setTemp(response.data.main.temp);
          setIcon(response.data.weather[0].icon);
          setCountry(response.data.sys.country);
          setCity(response.data.name); */
        })();
      } catch (err) {
        console.log(err);
      }
    }, [latitude,longitude]);


  

    console.log("weathers:",weathers,"latitude:",latitude,)
return {weathers}
}