import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import ImportLinks from "./ImportLinks";
import Header from "./Header";

import CitySearchForm from "./CitySearchForm";

import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ImportLinks />
      <span className="boxShadow">
        <div className="container">
          <Header />
          <CitySearchForm />
          <Footer />
        </div>
      </span>
    </div>
  );
}

export default App;
