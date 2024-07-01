// src/utils/api.js
import axios from 'axios';

// Read the API key from environment variables
const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        units: 'metric',
        appid: API_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data: ", error);
    return null;
  }
};

export const fetchForecast = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        units: 'metric',
        appid: API_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching forecast data: ", error);
    return null;
  }
};
