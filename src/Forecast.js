import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.property]);

  function displayForecastData(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecastData.map(function (dailyForecastData, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <ForecastDay property={dailyForecastData} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let latitude = props.property.lat;
    let longitude = props.property.lon;
    let apiKey = "872e937052bfbc7cf66f2ac8c3fcaba7";
    let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(forecastUrl).then(displayForecastData);
    return null;
  }
}
