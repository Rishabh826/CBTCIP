// src/components/WeatherCard.jsx
import React from 'react';
import { FaTemperatureLow, FaWind, FaTint } from 'react-icons/fa';

const WeatherCard = ({ weather }) => {
  return (
    <div className="weather-card bg-white p-4 rounded-lg shadow-md">
      <h2 className="city-name text-2xl font-bold mb-2">{weather.name}</h2>
      <div className="temp text-4xl font-bold mb-2">{Math.round(weather.main.temp)}°C</div>
      <div className="details flex justify-between">
        <div className="detail">
          <FaWind className="icon" />
          <span>{weather.wind.speed} m/s</span>
        </div>
        <div className="detail">
          <FaTint className="icon" />
          <span>{weather.main.humidity}%</span>
        </div>
        <div className="detail">
          <FaTemperatureLow className="icon" />
          <span>{weather.main.pressure} hPa</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
