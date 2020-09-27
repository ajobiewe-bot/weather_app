import React, { useState } from "react";
import axios from "axios";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="CurrentWeather">
        <div className="row">
          <div className="col-5">
            <span className="currentweatherEmogi">
              <i className="fas fa-cloud-sun-rain"></i>
            </span>
          </div>
          <div className="col-6">
            <h1>{weatherData.city}</h1>
            <span className="currentTemp">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="celciusFah">
              <a href="/" className="active">
                ºC
              </a>
              /<a href="/">ºF</a>
            </span>
          </div>
        </div>
        <span className="currentDay">
          <div className="row ">
            <div className="col-3"></div>
            <div className="col-9">
              <ul className="currentDayData">
                <li className="weatherDescription text-capitalize">
                  {weatherData.description}
                </li>
                <li>
                  Humidity:
                  <span>{weatherData.humidity}</span>%
                </li>
                <li>
                  Wind:
                  <span>{weatherData.wind}</span>
                  Km/h
                </li>
                <li>
                  Last update:
                  <span>5:39pm</span>
                </li>
              </ul>
            </div>
          </div>
        </span>
      </div>
    );
  } else {
    let apiKey = "7682c2be43d876a63c355131eaac1953";
    let defaultCityApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=${apiKey}&units=metric`;
    axios.get(defaultCityApiUrl).then(handleResponse);
    return "Loading...";
  }
}
