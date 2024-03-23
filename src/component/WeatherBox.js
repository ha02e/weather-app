import React from "react";

const WeatherBox = ({ weather }) => {
  console.log("weather??", weather);
  return (
    <div className="weather-box">
      <div>날짜</div>
      <h2>{weather?.name}</h2>
      <h1>
        {weather?.main.temp}
        &#8451; / {weather?.main.temp * 1.8 + 32}&#8457;
      </h1>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;
