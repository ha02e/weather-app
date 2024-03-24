import React from "react";

const WeatherButton = ({ cities, setCity, controlCity }) => {
  return (
    <div className="weather-btn">
      <button onClick={() => controlCity("current")}>Current Location</button>
      {cities.map((item, index) => (
        <button key={index} onClick={() => setCity(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default WeatherButton;
