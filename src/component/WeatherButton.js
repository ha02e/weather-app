import React from "react";

const WeatherButton = ({ cities }) => {
  return (
    <div className="weather-btn">
      <button>Current Location</button>
      <button>Seoul</button>
      <button>Tokyo</button>
      <button>Shanghai</button>
      <button>NewYork</button>
      <button>Paris</button>
      <button>Italy</button>
    </div>
  );
};

export default WeatherButton;
