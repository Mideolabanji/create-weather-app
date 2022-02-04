import React from "react";
import Date from "./Date";
import Icon from "./Icon";
import Degree from "./Degree";
import Forecast from "./Forecast";

export default function Body(props) {
  return (
    <div className="Body">
      <h2>{props.property.cityName}</h2>
      <h6>
        Last updated: <Date property={props.property.date} />
      </h6>
      <h5 className="weather-description">{props.property.description}</h5>
      <div className="row">
        <div className="col-6">
          <h1>
            <Degree property={props.property.temperature} />
          </h1>
        </div>
        <div className="col-6">
          <Icon property={props.property.icon} size={150} />
        </div>
      </div>
      <ul>
        <li>Humidity: {props.property.humidity}%</li>
        <li>Wind: {props.property.wind}Km/h</li>
      </ul>
      <Forecast property={props.property.coordinates} />
    </div>
  );
}
