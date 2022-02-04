import React from "react";

export default function ForecastDays(props) {
  let now = new Date(props.property);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[now.getDay()];

  return day;
}
