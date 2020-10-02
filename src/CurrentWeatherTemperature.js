import React, { useState } from "react";

export default function CurrentWeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="CurrentWeatherTemperature">
        <span className="currentTemp">{Math.round(props.celsius)}</span>
        <span className="celciusFah">
          ºC /
          <a href="/" onClick={convertToFahrenheit}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="CurrentWeatherTemperature">
        <span className="currentTemp">
          {Math.round((props.celsius * 9) / 5 + 32)}
        </span>
        <span className="celciusFah">
          <a href="/" onClick={convertToCelsius}>
            ºC{" "}
          </a>
          /ºF
        </span>
      </div>
    );
  }
}
