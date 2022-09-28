import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-4 ForecastDay">Wed</div>
        <div className="col-4 ForecastIcon">
          <WeatherIcon code={props.info.icon} size={25}/>
        </div>
        <div className="col-4 ForecastTemp">
          <span className="forecastTempMax"> 19</span>
          <span className="forecastTempMin"> 10</span>
        </div>
      </div>
    </div>
  );
}

