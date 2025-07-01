export default function SnowAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-gust"
          style={{ left: `${Math.random() * 100}%`, top: `-${Math.random() * 100}vh` }}
        >
          <div
            className="w-2 h-2 bg-white rounded-full animate-snowflake"
            style={{
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
              opacity: Math.random(),
            }}
          />
        </div>
      ))}
    </div>
  );
}