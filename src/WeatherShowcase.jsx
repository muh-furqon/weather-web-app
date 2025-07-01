import { useState } from "react";
import RainAnimation from "./components/animations/RainAnimation";
import SnowAnimation from "./components/animations/SnowAnimation";
import ThunderAnimation from "./components/animations/ThunderAnimation";

const weatherList = [
  "Clear",
  "Clouds",
  "Rain",
  "Snow",
  "Thunderstorm",
  "Haze",
  "Mist",
  "Fog",
];

const bgMap = {
  Clear: "bg-gradient-to-b from-yellow-200 to-yellow-500",
  Clouds: "bg-gradient-to-b from-gray-300 to-gray-500",
  Rain: "bg-gradient-to-b from-blue-200 to-blue-600",
  Snow: "bg-gradient-to-b from-white to-blue-100",
  Thunderstorm: "bg-gradient-to-b from-purple-800 to-indigo-900",
  Haze: "bg-gradient-to-b from-yellow-100 to-gray-300",
  Mist: "bg-gradient-to-b from-gray-300 to-gray-400",
  Fog: "bg-gradient-to-b from-gray-400 to-gray-600",
};

export default function WeatherShowcase() {
  const [index, setIndex] = useState(0);
  const [muted, setMuted] = useState(false);

  const weatherType = weatherList[index];
  const bgClass = bgMap[weatherType] || bgMap.Clear;

  const next = () => setIndex((i) => (i + 1) % weatherList.length);
  const prev = () => setIndex((i) => (i - 1 + weatherList.length) % weatherList.length);

  return (
    <div className={`min-h-screen flex items-center justify-center ${bgClass} relative transition-all duration-500`}>
      {/* 🔇 Mute Button */}
      <button
        onClick={() => setMuted((prev) => !prev)}
        className="absolute top-4 left-4 bg-black/30 text-white text-sm px-3 py-1 rounded z-50"
      >
        {muted ? "🔇 Muted" : "🔊 Sound On"}
      </button>

      {/* Animations */}
      {weatherType === "Rain" && <RainAnimation muted={muted} />}
      {weatherType === "Snow" && <SnowAnimation />}
      {weatherType === "Thunderstorm" && <ThunderAnimation muted={muted} />}

      {/* Weather name */}
      <div className="z-10 text-white text-4xl font-bold text-center">{weatherType}</div>

      {/* Navigation buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black/30 p-2 rounded-full"
      >
        ⬅
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black/30 p-2 rounded-full"
      >
        ➡
      </button>
    </div>
  );
}
