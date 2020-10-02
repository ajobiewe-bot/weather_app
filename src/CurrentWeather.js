import React from "react";

import LastUpdate from "./LastUpdate";
import WeatherIcon from "./WeatherIcon";
import CurrentWeatherTemperature from "./CurrentWeatherTemperature";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  //JSX for current day weather
  return (
    <div className="CurrentWeather">
      <div className="row">
        <div className="col-5">
          <span className="currentweatherEmogi">
            <WeatherIcon code={props.data.icon} />
          </span>
        </div>
        <div className="col-6">
          <h1>{props.data.city}</h1>
          
          <CurrentWeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
      <span className="currentDay">
        <div className="row ">
          <div className="col-3"></div>
          <div className="col-9">
            <ul className="currentDayData">
              <li className="weatherDescription text-capitalize">
                {props.data.description}
              </li>
              <li>
                Humidity:
                <span>{props.data.humidity}</span>%
              </li>
              <li>
                Wind:
                <span>{props.data.wind}</span>
                Km/h
              </li>
              <li>
                Last update:
                <LastUpdate date={props.data.date} />
              </li>
            </ul>
          </div>
        </div>
      </span>
    </div>
  );
}
