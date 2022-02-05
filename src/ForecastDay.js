import React from "react";
import Icon from "./Icon";

export default function ForecastDays(props) {
  let min = Math.round(props.property.temp.min);
  let max = Math.round(props.property.temp.max);
  let icon = props.property.weather[0].icon;
  let now = new Date(props.property.dt * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[now.getDay()];

  return (
    <span>
      <div className="h5-font">{day}</div>
      <div>
        <Icon property={icon} size={40} />
      </div>
      <div>
        <span>{max}°</span>{" "}
        <span className="forecast-minimum-temperature">{min}°</span>
      </div>
    </span>
  );
}
