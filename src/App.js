// src/App.jsx
import React, { useState, useEffect } from 'react';
import { fetchWeather, fetchForecast } from './utils/api';
import WeatherCard from './components/WeatherCard';
import './App.css';

const App = () => {
  const [city, setCity] = useState('New York'); // Default city
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      const weatherData = await fetchWeather(city);
      if (weatherData) {
        setWeather(weatherData);
        const forecastData = await fetchForecast(city);
        setForecast(forecastData);
      } else {
        setError('Unable to fetch weather data. Please try again.');
      }
    };
    getWeather();
  }, [city]);

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">WeatherVue</h1>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="city-input"
        />
      </header>
      <main className="main">
        {error && <p className="error">{error}</p>}
        {weather && <WeatherCard weather={weather} />}
        {/* Add Forecast Component here */}
      </main>
    </div>
  );
};

export default App;
