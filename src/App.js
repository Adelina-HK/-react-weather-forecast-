import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function App() {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState("Kyiv");

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      data: new Date(response.data.dt * 1000),
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function cityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "1dad91bc92f6c69698e1aad50d0a7304";
    let units = `metric`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(handleResponse);
  }

  let searchForm = (
    <div className="Weather mb-2">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a city"
          className="me-3"
          onChange={cityChange}
          autoFocus="on"
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );

  if (weatherData.ready) {
    return (
      <div>
        <div>
          {searchForm}
          <h3>
          <strong>{weatherData.city}</strong>
          </h3>
          <WeatherInfo data={weatherData} />
        </div>
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
