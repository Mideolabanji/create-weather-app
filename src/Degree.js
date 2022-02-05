import React, { useState } from "react";

export default function Degree(props) {
  const [temperature, setTemperature] = useState("celsiusTemperature");

  function showFahrenheitDegree(event) {
    event.preventDefault();
    setTemperature("fahrenheitTemperature");
  }

  function showCelciusDegree(event) {
    event.preventDefault();
    setTemperature("celsiusTemperature");
  }

  if (temperature === "celsiusTemperature") {
    return (
      <div>
        <span className="city-temperature">{Math.round(props.property)}</span>
        <span className="degree">
          <span>°C</span>|
          <a
            className="degree-link bold"
            href="/"
            onClick={showFahrenheitDegree}
          >
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.property * 9) / 5 + 32;
    return (
      <div>
        <span className="city-temperature">{Math.round(fahrenheit)}</span>
        <span className="degree">
          <span>
            <a
              className="degree-link bold"
              href="/"
              onClick={showCelciusDegree}
            >
              °C
            </a>
          </span>
          <span>|°F</span>
        </span>
      </div>
    );
  }
}
