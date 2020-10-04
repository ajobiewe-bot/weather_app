import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function NextDays(props) {
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

  return (
    <div className="col boxes">
      {nextDays(props.index)}
      <p>
        {Math.round(props.data[props.index].temp.max)} /{" "}
        {Math.round(props.data[props.index].temp.min)} ºC
      </p>
      <WeatherIcon code={props.data[props.index].weather[0].id} />
    </div>
  );
}
