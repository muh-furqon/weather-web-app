/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import RainAnimation from "./components/animations/RainAnimation";
import SnowAnimation from "./components/animations/SnowAnimation";
import ThunderAnimation from "./components/animations/ThunderAnimation";

const weatherGradients = {
  Clear: "bg-gradient-to-b from-yellow-200 to-yellow-500",
  Clouds: "bg-gradient-to-b from-gray-300 to-gray-500",
  Snow: "bg-gradient-to-b from-blue-50 to-blue-300",
  Haze: "bg-gradient-to-b from-gray-200 to-yellow-100",
  Mist: "bg-gradient-to-b from-gray-300 to-gray-400",
  Default: "bg-gradient-to-b from-gray-100 to-gray-300",
};

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [query, setQuery] = useState("");

  const fetchWeather = async (params) => {
    const res = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
      params: {
        ...params,
        units: "metric",
        appid: import.meta.env.VITE_WEATHER_API_KEY,
      },
    });
    setWeather(res.data);
    fetchForecast(params);
  };

  const fetchForecast = async (params) => {
    const res = await axios.get("https://api.openweathermap.org/data/2.5/forecast", {
      params: {
        ...params,
        units: "metric",
        appid: import.meta.env.VITE_WEATHER_API_KEY,
      },
    });

    const daily = res.data.list.filter(item => item.dt_txt.includes("12:00:00"));
    setForecast(daily);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        fetchWeather({ lat: coords.latitude, lon: coords.longitude });
      },
      (err) => console.error("Geolocation error:", err)
    );
  }, []);

  const handleSearch = async (e) => {
    if (e.key === "Enter" && query.trim()) {
      try {
        await fetchWeather({ q: query });
        setQuery("");
      } catch {
        alert("City not found.");
      }
    }
  };

  const weatherType = weather?.weather[0]?.main || "Default";
  const bgClass = weatherGradients[weatherType] || weatherGradients.Default;

  return (
    <div className={`min-h-screen flex flex-col md:flex-row ${bgClass} relative transition-all duration-500`}>
      {/* Animations */}
      {weatherType === "Rain" && <RainAnimation />}
      {weatherType === "Snow" && <SnowAnimation />}
      {weatherType === "Thunderstorm" && <ThunderAnimation />}

      {/* Main Weather Card */}
      <div className="w-full md:w-2/3 flex items-center md:items-end justify-center p-4 md:p-6 relative z-10">
        {weather && (
          <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-sm text-center transition-all duration-500">
            <h2 className="text-xl sm:text-2xl font-bold">{weather.name}</h2>
            <p className="text-lg capitalize">{weather.weather[0].description}</p>
            <p className="text-3xl sm:text-4xl">{Math.round(weather.main.temp)}°C</p>
          </div>
        )}
      </div>

      {/* Forecast + Search */}
      <div className="w-full md:w-1/3 p-4 md:p-6 flex flex-col gap-4 relative z-10 transition-all duration-500">
        {/* Sticky search bar */}
        <div className="sticky top-0 bg-white/80 backdrop-blur-md p-2 rounded shadow z-20">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search city..."
            className="w-full p-2 rounded text-sm sm:text-base"
          />
        </div>

        {/* Forecast scrollable on mobile */}
        <div className="overflow-x-auto">
          <div className="flex gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
            {forecast.map((item) => (
              <div
                key={item.dt}
                className="min-w-[140px] bg-white p-4 rounded-xl shadow flex flex-col items-center transition-transform hover:scale-105"
              >
                <p className="font-semibold text-sm mb-1">
                  {new Date(item.dt_txt).toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <img
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  alt={item.weather[0].main}
                  className="w-14 h-14"
                />
                <p className="text-lg font-medium">{Math.round(item.main.temp)}°C</p>
                <p className="text-xs text-gray-600 capitalize">{item.weather[0].description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
