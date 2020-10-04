import React, { useState } from "react";
import axios from "axios";

import WeatherIcon from "./WeatherIcon";

export default function Next(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  //code to transform next days into text
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let now = new Date();
  function nextDays(i) {
    let nextDay = [];
    let nextDayIndex = now.getDay() + i;
    if (nextDayIndex > 6) {
      nextDayIndex = now.getDay() + i - 7;
    }
    nextDay[i - 1] = days[nextDayIndex];
    return nextDay;
  }

  //Code to get forecast
  function getForecast(result) {
    setForecast(result.data);
    setLoaded(true);
  }

  if (
    loaded &&
    props.longitude === forecast.lon &&
    props.latitude === forecast.lat
  ) {
    return (
      <div className="Next">
        <div className="row nextDays">
          <div className="col boxes">
            {nextDays(1)}
            {Math.round(forecast.daily[1].temp.max)} /{" "}
            {Math.round(forecast.daily[1].temp.min)} ºC
            <WeatherIcon code={forecast.daily[1].weather[0].id} />
          </div>
          <div className="col boxes">
            {nextDays(1)}
            {Math.round(forecast.daily[1].temp.max)} /{" "}
            {Math.round(forecast.daily[1].temp.min)} ºC
            <WeatherIcon code={forecast.daily[1].weather[0].id} />
          </div>
          <div className="col boxes">
            {nextDays(2)}
            {Math.round(forecast.daily[2].temp.max)} /{" "}
            {Math.round(forecast.daily[2].temp.min)} ºC
            <WeatherIcon code={forecast.daily[2].weather[0].id} />
          </div>
          <div className="col boxes">
            {nextDays(3)}
            {Math.round(forecast.daily[3].temp.max)} /{" "}
            {Math.round(forecast.daily[3].temp.min)} ºC
            <WeatherIcon code={forecast.daily[3].weather[0].id} />
          </div>
          <div className="col boxes">
            {nextDays(4)}
            {Math.round(forecast.daily[4].temp.max)} /{" "}
            {Math.round(forecast.daily[4].temp.min)} ºC
            <WeatherIcon code={forecast.daily[4].weather[0].id} />
          </div>
          <div className="col boxes">
            {nextDays(5)}
            {Math.round(forecast.daily[5].temp.max)} /{" "}
            {Math.round(forecast.daily[5].temp.min)} ºC
            <WeatherIcon code={forecast.daily[5].weather[0].id} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "7682c2be43d876a63c355131eaac1953";
    let forecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=minutely,hourly,current&appid=${apiKey}&units=metric`;
    axios.get(forecastApiUrl).then(getForecast);
    return "Loading...";
  }
}
