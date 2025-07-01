import { useEffect, useRef } from "react";

export default function RainAnimation({ muted }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio("/rain.mp3");
    audio.loop = true;
    audio.volume = 0.4;
    audio.muted = muted; // <-- set mute state before playing
    audio.play().catch((err) => {
      console.warn("Audio playback failed:", err);
    });

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update mute on prop change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = muted;
    }
  }, [muted]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 100 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-gust"
          style={{ left: `${Math.random() * 100}%`, top: `-${Math.random() * 100}vh` }}
        >
          <div
            className="w-0.5 h-12 bg-blue-500 opacity-70 animate-raindrop"
            style={{
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${1 + Math.random()}s`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
