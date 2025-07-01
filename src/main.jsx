// main.jsx (full routing with layout and 404)
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import NotFound from "./components/NotFound.jsx";
import "./index.css";

// Lazy load pages
const App = lazy(() => import("./App.jsx"));
const WeatherShowcase = lazy(() => import("./WeatherShowcase.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div className="text-center p-6">Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<App />} />
            <Route path="/showcase" element={<WeatherShowcase />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
