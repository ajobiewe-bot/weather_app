import React from "react";
import NextDay from "./NextDay";
import NextDayMaxTemperature from "./NextDayMaxTemperature";
import NextDayMinTemperature from "./NextDayMinTemperature";

export default function Next() {
  return (
    <div className="Next">
      <div className="row nextDays">
        <div className="col boxes">
          <NextDay className="weekDay" value="Sunday" />
          <NextDayMaxTemperature className="tempDay" value="17" />
          /
          <NextDayMinTemperature className="tempDay" value="12" />
          ºC
          <div className="weatherEmogi">
            <i className="fas fa-cloud-sun-rain"></i>
          </div>
        </div>
        <div className="col boxes">
          <NextDay className="weekDay" value="Monday" />
          <NextDayMaxTemperature className="tempDay" value="16" />
          /
          <NextDayMinTemperature className="tempDay" value="12" />
          ºC
          <div className="weatherEmogi">
            <i className="fas fa-cloud-sun-rain"></i>
          </div>
        </div>

        <div className="col boxes">
          <NextDay className="weekDay" value="Tuesday" />
          <NextDayMaxTemperature className="tempDay" value="16" />
          /
          <NextDayMinTemperature className="tempDay" value="12" />
          ºC
          <div className="weatherEmogi">
            <i className="fas fa-cloud-sun-rain"></i>
          </div>
        </div>
        <div className="col boxes">
          <NextDay className="weekDay" value="Wednesday" />
          <NextDayMaxTemperature className="tempDay" value="16" />
          /
          <NextDayMinTemperature className="tempDay" value="12" />
          ºC
          <div className="weatherEmogi">
            <i className="fas fa-cloud-sun-rain"></i>
          </div>
        </div>
        <div className="col boxes">
          <NextDay className="weekDay" value="Thursday" />
          <NextDayMaxTemperature className="tempDay" value="16" />
          /
          <NextDayMinTemperature className="tempDay" value="12" />
          ºC
          <div className="weatherEmogi">
            <i className="fas fa-cloud-sun-rain"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
