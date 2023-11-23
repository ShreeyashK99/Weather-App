import React, { useState } from 'react';
import axios from 'axios';
import WeatherIcons from './WeatherIcons';
import { WiHumidity, WiStrongWind, WiThermometer } from 'react-icons/wi';

const Weather = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = '6f13bbc63c9ffe9effbbd8b5f13e1f0d';

  const getWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
    }
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={getWeather}>Get Weather</button>
      </div>

      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <WeatherIcons weather={weatherData.weather[0].main} />
          <div className="temperature">{weatherData.main.temp}&deg;C</div>
          <div className="details">
            <div className="detail">
              <WiThermometer size={30} />
              <span>Feels like: {weatherData.main.feels_like}&deg;C</span>
            </div>
            <div className="detail">
              <WiHumidity size={30} />
              <span>Humidity: {weatherData.main.humidity}%</span>
            </div>
            <div className="detail">
              <WiStrongWind size={30} />
              <span>Wind Speed: {weatherData.wind.speed} m/s</span>
            </div>
            <div className="detail">
              <WiThermometer size={30} />
              <span>Min/Max Temp: {weatherData.main.temp_min}&deg;C / {weatherData.main.temp_max}&deg;C</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
