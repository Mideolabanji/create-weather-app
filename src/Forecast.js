import React from "react";
import Icon from "./Icon";
import axios from "axios";

export default function Forecast(props) {
  function displayForecastData(response) {
    console.log(response);
  }

  let latitude = props.property.lat;
  let longitude = props.property.lon;
  let apiKey = "872e937052bfbc7cf66f2ac8c3fcaba7";
  let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(forecastUrl).then(displayForecastData);

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div>Fri</div>
          <div>
            <Icon property={"01d"} size={40} />
          </div>
          <div>
            <span>34°</span> <span>23°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
