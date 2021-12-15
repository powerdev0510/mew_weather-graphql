const axios = require('axios');
const config = require('../config');

/**
 * Fetch weather data from openweathermap API
 * @returns weather data
 */
const fetchWeather = async () => {
  try {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=Los Angeles&appid=${config.API_KEY}`;
    const response = await axios.get(url);
    const data = response.data;

    const weather = {
      temperature: data.main.temp,
      minTemperature: data.main.temp_min,
      maxTemperature: data.main.temp_max,
      wind: data.wind.speed,
      description: data.weather[0].description || '',
      icon: data.weather[0].icon || '',
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset
    }

    return weather;

  } catch (e) {
    throw e;
  }
}

module.exports = { fetchWeather }