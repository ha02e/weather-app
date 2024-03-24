import React from "react";

const WeatherButton = ({ cities, setCity }) => {
  return (
    <div className="weather-btn">
      <button>Current Location</button>
      {cities.map((item, index) => (
        <button key={index} onClick={() => setCity(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default WeatherButton;
