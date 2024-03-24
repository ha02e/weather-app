import React from "react";

const WeatherBox = ({ weather }) => {
  console.log("weather??", weather);

  const getTodayDate = () => {
    let today = new Date();

    let options = {
      year: "numeric", // 연도 (숫자 형식)
      month: "2-digit", // 월 (2자리 숫자 형식)
      day: "2-digit", // 일 (2자리 숫자 형식)
      hour: "2-digit", // 시간 (2자리 숫자 형식)
      minute: "2-digit", // 분 (2자리 숫자 형식)
      second: "2-digit", // 초 (2자리 숫자 형식)
    };

    return today.toLocaleString("en-US", options).replace(/,/g, "/");
  };
  const todayDate = getTodayDate();

  return (
    <div className="weather-box">
      <h2 className="city-name">
        <span class="material-symbols-outlined">location_on</span>
        <span>{weather?.name}</span>
      </h2>
      <div className="today-date">{todayDate}</div>
      <div>
        <div className="city-weather">
          <img
            src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
          />
          <h3 className="city-description">
            {weather?.weather[0].description}
          </h3>
        </div>
        <h1 className="city-temp">
          {Math.floor(weather?.main.temp)}&#8451;
          {/*  / {Math.floor(weather?.main.temp * 1.8 + 32)}&#8457; */}
        </h1>
        <div className="city-temp-detail">
          최저기온{Math.floor(weather?.main.temp_min)} / 최고기온
          {Math.floor(weather?.main.temp_max)} /{" "}
          <span class="material-symbols-outlined">humidity_percentage</span>
          <span>{Math.floor(weather?.main.pressure)}&#37;</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherBox;
