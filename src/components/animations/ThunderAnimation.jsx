/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";

export default function ThunderAnimation({ muted }) {
  const flashRef = useRef(null);
  const rainRef = useRef(null);
  const thunderRef = useRef(null); // 🔧 new

  useEffect(() => {
    // Rain audio
    const rainAudio = new Audio("/rain.mp3");
    rainAudio.loop = true;
    rainAudio.volume = 0.1;
    rainAudio.muted = muted;
    rainAudio.play().catch(err => console.warn("Rain autoplay blocked:", err));
    rainRef.current = rainAudio;

    // Thunder audio
    thunderRef.current = new Audio("/thunder.mp3");
    thunderRef.current.volume = 0.9;
    thunderRef.current.muted = muted;

    const triggerFlash = () => {
      const el = flashRef.current;
      if (!el) return;

      el.classList.remove("animate-flash");
      void el.offsetWidth;
      el.classList.add("animate-flash");

      // restart thunder audio
      if (thunderRef.current) {
        thunderRef.current.currentTime = 0;
        thunderRef.current.play().catch(err => console.warn("Thunder play blocked:", err));
      }
    };

    const initial = setTimeout(triggerFlash, 300);
    const interval = setInterval(triggerFlash, 5000);

    return () => {
      clearTimeout(initial);
      clearInterval(interval);
      if (rainRef.current) {
        rainRef.current.pause();
        rainRef.current.currentTime = 0;
      }
    };
  }, []); 

  // 🔁 Update mute status on change
  useEffect(() => {
    if (rainRef.current) rainRef.current.muted = muted;
    if (thunderRef.current) thunderRef.current.muted = muted;
  }, [muted]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div ref={flashRef} className="absolute inset-0 bg-white opacity-0 animate-flash" />
      {Array.from({ length: 100 }).map((_, i) => (
        <div
          key={i}
          className="absolute top-0 w-0.5 h-12 bg-blue-600 opacity-80 animate-raindrop"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${1 + Math.random()}s`,
          }}
        />
      ))}
    </div>
  );
}
