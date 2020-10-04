import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faCloudSun,
  faCloudRain,
  faCloudShowersHeavy,
  faBolt,
  faSnowflake,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";


export default function WeatherIcon(props) {
  const iconsLib = [
    {
      iconName: "800",
      class: faSun,
    },
    {
      iconName: "8",
      class: faCloudSun,
    },
    {
      iconName: "3",
      class: faCloudRain,
    },
    {
      iconName: "5",
      class: faCloudShowersHeavy,
    },
    {
      iconName: "2",
      class: faBolt,
    },
    {
      iconName: "6",
      class: faSnowflake,
    },
    {
      iconName: "7",
      class: faSmog,
    },
  ];

  let newVar = props.code.toString();
  let index;
  if (props.code === "800") {
    return (
      <div className="Emoji">
        <FontAwesomeIcon icon={faSun} />
      </div>
    );
  } else {
    newVar = newVar.charAt(0);
  }
  for (index = 1; index < 7; index++) {
    if (iconsLib[index].iconName === newVar) {
      return (
        <div className="Emoji">
          <FontAwesomeIcon icon={iconsLib[index].class} />
        </div>
      );
      }
    }
}
    
  

