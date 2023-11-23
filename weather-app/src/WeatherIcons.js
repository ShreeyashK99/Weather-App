import React from 'react';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiDayCloudy, WiDayThunderstorm } from 'react-icons/wi';

const WeatherIcons = ({ weather }) => {
  let IconComponent;

  switch (weather) {
    case 'Clear':
      IconComponent = WiDaySunny;
      break;
    case 'Clouds':
      IconComponent = WiCloudy;
      break;
    case 'Rain':
      IconComponent = WiRain;
      break;
    case 'Snow':
      IconComponent = WiSnow;
      break;
    case 'Drizzle':
      IconComponent = WiDayCloudy; 
      break;
    case 'Thunderstorm':
      IconComponent = WiDayThunderstorm;
      break;
    default:
      IconComponent = WiDaySunny;
  }

  return <div className="weather-icon"><IconComponent size={100} color="#FFD700" /></div>;
};

export default WeatherIcons;
