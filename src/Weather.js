import React, { useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import "./App.css";
import Body from "./Body";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayWeatherData(response) {
    setWeatherData({
      loaded: true,
      temperature: response.data.main.temp,
      cityName: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      date: new Date(),
      coordinates: response.data.coord,
    });
  }

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=872e937052bfbc7cf66f2ac8c3fcaba7&units=metric`;
    axios.get(apiUrl).then(displayWeatherData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                type="search"
                placeholder="Enter a city"
                autoFocus="on"
                onChange={updateCity}
              />
            </div>
            <div className="col-3 ">
              <input
                className="btn btn-secondary"
                type="submit"
                value="Search"
              />
            </div>
          </div>
        </form>
        <Body property={weatherData} />
      </div>
    );
  } else {
    search();
    return (
      <div className="center">
        <Oval />
        <h3 className="loading">Loading...</h3>
      </div>
    );
  }
}
