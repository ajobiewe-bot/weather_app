import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div className="row">
        <div className="col-5">
          <span className="currentweatherEmogi">
            <i className="fas fa-cloud-sun-rain"></i>
          </span>
        </div>
        <div className="col-6">
          <h1>Lisbon</h1>
          <span className="currentTemp">15</span>
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
              <li className="weatherDescription">Cloudy</li>
              <li>
                Humidity:
                <span>77</span>%
              </li>
              <li>
                Wind:
                <span>8</span>
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
}
