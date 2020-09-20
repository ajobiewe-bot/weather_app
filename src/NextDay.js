import React from "react";
import "./NextDay.css";

export default function NextDay(props) {
  return (
    <span className="NextDay">
      <div>{props.value}</div>
    </span>
  );
}
