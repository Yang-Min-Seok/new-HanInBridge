import axios from "axios";

const getUserLocationAndWeather = async (isEnabled, coords) => {
    if (isEnabled) {
      // my own API key
      const API_KEY = "a9476e390a2d512706762d42281be652";
  
      // lat, lon
      const lat = coords.latitude;
      const lon = coords.longitude;
  
      // make url
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      
      // 비동기 처리
      const response = await axios.get(url); // check point

      try {
        const name = response.data.name;
        const weather = response.data.weather[0].main;
        return `${name}     ${weather}`;
      } catch (error) {
        console.log(error);
      }
    }
    // before getting user's location
    else {
      return "loading…";
    }
};

export default getUserLocationAndWeather;