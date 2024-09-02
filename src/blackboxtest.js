import React, { useState } from "react";
import "./blackbox.css";

function WeatherApp() {
  const [currentWeather, setCurrentWeather] = useState({
    city: "San Francisco",
    temperature: 4,
    condition: "Sunny",
    icon: "☀️",
    time: "9:41",
    forecast: [
      {
        time: "21",
        icon: "🌙",
      },
      {
        time: "22",
        icon: "☁️",
      },
      {
        time: "23",
        icon: "☁️",
      },
      {
        time: "00",
        icon: "🌙",
      },
    ],
    extendedForecast: [
      {
        day: "Friday",
        icon: "☁️",
        temp: "4 - 2",
      },
      {
        day: "Saturday",
        icon: "☁️",
        temp: "6 - 4",
      },
      {
        day: "Sunday",
        icon: "❄️",
        temp: "2 - 7",
      },
      {
        day: "Monday",
        icon: "❄️",
        temp: "1 - 5",
      },
      {
        day: "Tuesday",
        icon: "❄️",
        temp: "2 - 9",
      },
    ],
  });

  const handleWeatherChange = (weather) => {
    setCurrentWeather(weather);
  };

  return (
    <div className="app-container">
      <div className="weather-card">
        <div className="card-header">
          <div className="time">{currentWeather.time}</div>
          <div className="location">{currentWeather.city}</div>
        </div>
        <div className="card-body">
          <div className="temperature">
            {currentWeather.temperature}°
          </div>
          <div className="condition">{currentWeather.condition}</div>
          <div className="icon">{currentWeather.icon}</div>
        </div>
        <div className="card-footer">
          <div className="forecast">
            {currentWeather.forecast.map((item) => (
              <div key={item.time} className="forecast-item">
                <div className="forecast-time">{item.time}</div>
                <div className="forecast-icon">{item.icon}</div>
              </div>
            ))}
          </div>
          <div className="extended-forecast">
            {currentWeather.extendedForecast.map((item) => (
              <div key={item.day} className="extended-forecast-item">
                <div className="extended-forecast-day">{item.day}</div>
                <div className="extended-forecast-icon">{item.icon}</div>
                <div className="extended-forecast-temp">{item.temp}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button onClick={() => handleWeatherChange({
          city: "San Francisco",
          temperature: 12,
          condition: "Clear",
          icon: "☀️",
          time: "9:41",
          forecast: [
            {
              time: "21",
              icon: "🌙",
            },
            {
              time: "22",
              icon: "☁️",
            },
            {
              time: "23",
              icon: "☁️",
            },
            {
              time: "00",
              icon: "🌙",
            },
          ],
          extendedForecast: [
            {
              day: "Friday",
              icon: "☁️",
              temp: "4 - 2",
            },
            {
              day: "Saturday",
              icon: "☁️",
              temp: "6 - 4",
            },
            {
              day: "Sunday",
              icon: "❄️",
              temp: "2 - 7",
            },
            {
              day: "Monday",
              icon: "❄️",
              temp: "1 - 5",
            },
            {
              day: "Tuesday",
              icon: "❄️",
              temp: "2 - 9",
            },
          ],
        })}>Clear</button>
      <button onClick={() => handleWeatherChange({
          city: "San Francisco",
          temperature: 7,
          condition: "Clear Night",
          icon: "🌙",
          time: "9:41",
          forecast: [
            {
              time: "21",
              icon: "🌙",
            },
            {
              time: "22",
              icon: "☁️",
            },
            {
              time: "23",
              icon: "☁️",
            },
            {
              time: "00",
              icon: "🌙",
            },
          ],
          extendedForecast: [
            {
              day: "Friday",
              icon: "☁️",
              temp: "4 - 2",
            },
            {
              day: "Saturday",
              icon: "☁️",
              temp: "6 - 4",
            },
            {
              day: "Sunday",
              icon: "❄️",
              temp: "2 - 7",
            },
            {
              day: "Monday",
              icon: "❄️",
              temp: "1 - 5",
            },
            {
              day: "Tuesday",
              icon: "❄️",
              temp: "2 - 9",
            },
          ],
        })}>Clear Night</button>
    </div>
  );
}

export default WeatherApp;