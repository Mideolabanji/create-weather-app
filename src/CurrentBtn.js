import React, { useState } from "react";
import axios from "axios";
import Body from "./Body";

export default function CurrentBtn() {
  const [locationData, setLocationData] = useState({});

  function displayInfo(response) {
    setLocationData({
      temperature: response.data.main.temp,
      cityName: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      date: new Date(),
      coordinates: response.data.coord,
    });
    <Body property={locationData} />;
  }

  function currentLocation(position) {
    let locationApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=872e937052bfbc7cf66f2ac8c3fcaba7`;
    axios.get(locationApiUrl).then(displayInfo);
  }

  function displayCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(currentLocation);
  }

  return (
    <div>
      <input
        onClick={displayCurrentLocation}
        className="btn btn-secondary w-100"
        type="button"
        value="Current 📍"
      />
    </div>
  );
}
