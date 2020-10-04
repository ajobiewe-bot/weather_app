import React, { useState } from "react";
import axios from "axios";

import CurrentWeather from "./CurrentWeather";
import Next from "./Next";

export default function CitySearchForm(props) {
  //State and function to update Defaul City Weather info
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Lisbon");

  function errorAlert() {
    alert("🐱‍👤 Is that city located on Planet Earth? 🌍");
  }
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].id,
      date: new Date(response.data.dt * 1000),
      lat: response.data.coord.lat,
      long: response.data.coord.lon,
    });
  }

  function search() {
    const apiKey = "ad04b7a362cea2ed31488d67c6adbf93";
    let cityApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(cityApiUrl).then(handleResponse, errorAlert);
  }

  function searchCurrentCoordinates(position) {
    const apiKey = "ad04b7a362cea2ed31488d67c6adbf93";
    let updatedApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(updatedApiUrl).then(handleResponse, errorAlert);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function searchCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchCurrentCoordinates);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <CurrentWeather data={weatherData} />
        <div className="CitySearchForm">
          <div className="row">
            <div className="col-8">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter city"
                  className="inputCity"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
                <input type="submit" value="GO!" className="searchCity" />
              </form>
            </div>
            <div className="col-4">
              <button
                type="button"
                onClick={searchCurrentLocation}
                className="searchCurrentLocation"
              >
                Current Location
              </button>
            </div>
          </div>
        </div>
        <Next longitude={weatherData.long} latitude={weatherData.lat} />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
