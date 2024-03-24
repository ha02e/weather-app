import React from "react";

const WeatherButton = ({ cities, controlCity, selectedCity }) => {
  return (
    <div className="weather-btn">
      <button
        onClick={() => controlCity("current")}
        className={selectedCity === "" ? "selected" : ""}
      >
        Current Location
      </button>
      {cities.map((city) => (
        <button
          key={city}
          onClick={() => controlCity(city)}
          className={selectedCity === city ? "selected" : ""}
        >
          {city}
        </button>
      ))}
    </div>
  );
};

export default WeatherButton;
