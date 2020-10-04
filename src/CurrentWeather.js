import React from "react";

import LastUpdate from "./LastUpdate";
import WeatherIcon from "./WeatherIcon";
import CurrentWeatherTemperature from "./CurrentWeatherTemperature";
import "./CurrentWeather.css";
import "./WeatherIcon.css";

export default function CurrentWeather(props) {
  //JSX for current day weather
  return (
    <div className="CurrentWeather">
      <div className="row">
        <div className="col-3 topLeftInfo">
          <span>
            <WeatherIcon code={props.data.icon} />
          </span>
        </div>
        <div className="col-4 topLeftInfo">
          <h1>{props.data.city}</h1>
          <CurrentWeatherTemperature celsius={props.data.temperature} />
        </div>
        <span className="currentDay">
          <div className="col">
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
        </span>
      </div>
    </div>
  );
}
