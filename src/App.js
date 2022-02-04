import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-container">
          <Weather defaultCity="Lagos" />
        </div>
        <small>
          Coded (
          <a
            href="https://github.com/Mideolabanji/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            open-source code
          </a>
          ) and designed by{" "}
          <a
            href="https://olamide-olabanji.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Olamide Olabanji
          </a>
        </small>
      </div>
    </div>
  );
}
