import React, { useState } from "react";
import ForecastDay from "./ForecastDay";
import Icon from "./Icon";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState({});
  function displayForecastData(response) {
    setLoaded(true);
    setForecastData({
      min: Math.round(response.data.daily[1].temp.min),
      max: Math.round(response.data.daily[1].temp.max),
      icon: response.data.daily[1].weather[0].icon,
      days: response.data.daily[1].dt * 1000,
    });
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <div>{<ForecastDay property={forecastData.days} />}</div>
            <div>
              <Icon property={forecastData.icon} size={40} />
            </div>
            <div>
              <span>{forecastData.max}°</span> <span>{forecastData.min}°</span>
            </div>
          </div>
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
