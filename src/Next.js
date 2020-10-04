import React, { useState } from "react";
import axios from "axios";

import NextDays from "./NextDays";

export default function Next(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

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
          <NextDays index={1} data={forecast.daily} />
          <NextDays index={2} data={forecast.daily} />
          <NextDays index={3} data={forecast.daily} />
          <NextDays index={4} data={forecast.daily} />
          <NextDays index={5} data={forecast.daily} />
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
