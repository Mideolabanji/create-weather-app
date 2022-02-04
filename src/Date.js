import React from "react";

export default function Date(props) {
  let hours = props.property.getHours();
  let minute = props.property.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.property.getDay()];
  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return (
    <span>
      {day} {hours}:{minute}
    </span>
  );
}
