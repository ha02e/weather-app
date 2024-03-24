import { useEffect, useState } from "react";
import "./App.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";

//1. 실행되자마자 현재위치 기반 날씨 보여주기
//2. 날씨 정보에는 도시, 섭씨/화씨 날씨 상태
//3. 5개의 버튼 (1개 현재 위치, 4개는 다른 도시)
//4. 도시 버튼을 누르면 해당하는 도시의 날씨를 보여준다
//5. 현재위치 기반 날씨 버튼을 누르면 다시 현재위치 기반으로 돌아온다
//6. 데이터를 들고오는 동안 로딩 스피너
function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const cities = ["Seoul", "Tokyo", "Shanghai", "New York", "Paris", "Italy"];

  const controlCity = (city) => {
    if (city === "current") {
      setCity("");
    } else {
      setCity(city);
    }
  };

  const getCurrentLocation = () => {
    // console.log("getCurrentLocation");
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      // console.log("현재위치", lat, lon);
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=cfa14e4abedc70a4e4fc69237b24c8bc`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
    setWeather(data);
    setLoading(false);
  };

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=cfa14e4abedc70a4e4fc69237b24c8bc`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
    setWeather(data);
    setLoading(false);
  };

  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  return (
    <div>
      <div className="container">
        <WeatherButton
          cities={cities}
          controlCity={controlCity}
          setCity={setCity}
        />
        {loading ? (
          <ClipLoader
            color="#ffffff"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <WeatherBox weather={weather} />
        )}
      </div>
    </div>
  );
}

export default App;
