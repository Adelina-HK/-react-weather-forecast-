import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse (response) {
    let apiKey = "1dad91bc92f6c69698e1aad50d0a7304";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);

    return (
      <div className="Forecast">
        <div className="row">
          <div className="col-4 ForecastDay">Wed</div>
          <div className="col-4 ForecastIcon">
            <WeatherIcon code={props.info.icon} size={25} />
          </div>
          <div className="col-4 ForecastTemp">
            <span className="forecastTempMax"> 19</span>
            <span className="forecastTempMin"> 10</span>
          </div>
        </div>
      </div>
    );
  }
     

}
