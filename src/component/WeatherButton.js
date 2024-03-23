import React from "react";

const WeatherButton = ({ cities }) => {
  return (
    <div className="weather-btn">
      <button>Current Location</button>
      {cities.map((item) => (
        <button>{item}</button>
      ))}
    </div>
  );
};

export default WeatherButton;
