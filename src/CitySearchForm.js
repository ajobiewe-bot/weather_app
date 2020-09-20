import React from "react";

export default function CitySearchForm() {
  return (
    <div className="CitySearchForm">
      <div className="row">
        <div className="col-8">
          <form>
            <input type="text" placeholder="Enter city" className="inputCity" />
            <input type="submit" value="GO!" className="searchCity" />
          </form>
        </div>
        <div className="col-4">
          <button type="button" className="searchCurrentLocation">
            Current Location
          </button>
        </div>
      </div>
    </div>
  );
}
