# 🌦️ Weather Visualizer App

An interactive weather app built with **React**, **Vite**, **TailwindCSS**, and **OpenWeatherMap API**, featuring animated backgrounds, audio effects (rain & thunder), search functionality, and responsive design for mobile and desktop.

You can visit the result of this project [here](https://weather-app-by-furqon.vercel.app/) (hosted using [vercel](https://vercel.com/))

---

## ✨ Features

- 📍 Get weather automatically via **GPS location**
- 🔍 Search any city for current weather and 5-day forecast
- 🎨 Background changes based on weather (clear, rain, snow, etc.)
- 🌧️ Realistic rain/snow/thunder animations
- 🔊 Optional sound effects (rain & thunder) with mute/unmute toggle
- 📱 Fully responsive for mobile and desktop
- 🧭 Weather showcase page to preview all weather types

---

## 🧱 Built With

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [OpenWeatherMap API](https://openweathermap.org/api)
- Custom animations with CSS & `<audio>` playbackk

---

## 📦 Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create your `.env` file
Create a `.env` file in the root with your OpenWeatherMap API Key:

```ini
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```

### 4. Run the development server
```bash
npm run dev
```

### 5. Host your own web (optional)
You can host your own weather app using vercel if you want a free and great hosting service. You can see the guide [here](https://vercel.com/docs/deployments)

---

## 📁 Project Structure

```css
src/
├── components/
│   └── animations/
│       ├── RainAnimation.jsx
│       ├── SnowAnimation.jsx
│       └── ThunderAnimation.jsx
├── App.jsx
├── WeatherShowcase.jsx
├── main.jsx
├── index.css
public/
├── rain.mp3
└── thunder.mp3
```

## 🎨 Weather Mapping & Effects

| Weather Type  | Background          | Animation        | Sound          |
| ------------- | ------------------- | ---------------- | -------------- |
| Clear         | Yellow gradient     | –                | –              |
| Clouds        | Gray gradient       | –                | –              |
| Rain          | Blue gradient       | Rain drops       | Rain loop      |
| Snow          | White/Blue gradient | Snowflakes       | –              |
| Thunderstorm  | Indigo gradient     | Lightning + Rain | Thunder + Rain |
| Mist/Haze/Fog | Subtle gray tones   | –                | –              |


---

## 📱 Mobile Experience

- Sticky search bar

- Scrollable forecast horizontally

- Responsive weather card and layout

- Touch-friendly animations

---

## 📄 License

- This project is open source and free to use under the [MIT License](https://github.com/muh-furqon/weather-web-app/blob/master/LICENSE)

---

## 👨‍💻 Author

Created by [muh-furqon](https://github.com/muh-furqon) (myself), Weather API powered by [OpenWeatherMap](http://openweathermap.org/) 