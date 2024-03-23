import React from "react";

const WeatherBox = ({ weather }) => {
  console.log("weather??", weather);
  return (
    <div className="weather-box">
      {/* <div>날짜</div> */}
      <h2 className="city-name">{weather?.name}</h2>
      <h1 className="city-temp">
        {Math.floor(weather?.main.temp)}
        &#8451; / {Math.floor(weather?.main.temp * 1.8 + 32)}&#8457;
      </h1>
      <div className="city-weather">
        <img
          src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
        />
        <h3 className="city-description">{weather?.weather[0].description}</h3>
      </div>
    </div>
  );
};

export default WeatherBox;
