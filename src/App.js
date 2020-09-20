import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import ImportLinks from "./ImportLinks";
import Header from "./Header";
import CurrentWeather from "./CurrentWeather";
import CitySearchForm from "./CitySearchForm";
import Next from "./Next";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ImportLinks />
      <span className="boxShadow">
        <div className="container">
          <Header />
          <CurrentWeather />
          <CitySearchForm />
          <Next />
          <Footer />
        </div>
      </span>
    </div>
  );
}

export default App;
