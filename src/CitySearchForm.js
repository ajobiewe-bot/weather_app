import React, { useState } from "react";
import axios from "axios";

import CurrentWeather from "./CurrentWeather";

export default function CitySearchForm(props) {
  //State and function to update Defaul City Weather info
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Lisbon");

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "7682c2be43d876a63c355131eaac1953";
    let cityApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(cityApiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
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
              <button type="button" className="searchCurrentLocation">
                Current Location
              </button>
            </div>
          </div>
        </div>
        ;;
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
