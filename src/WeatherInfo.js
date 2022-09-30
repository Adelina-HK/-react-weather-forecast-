import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";
import Forecast from "./Forecast";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-sm-6">
          <div className="col-sm-3 mt-2">
            <WeatherIcon code={props.data.icon} size={52} />
          </div>
          <div className="col-sm-3">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <div className="col-sm-6 mt-1">
            <ul>
              <li>
                <strong>Description: </strong>
                {props.data.description}
              </li>
              <li>
                <strong>Humidity: </strong>
                {props.data.humidity} %
              </li>
              <li>
                <strong>Wind: </strong>
                {props.data.wind}km/h
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6">
          <Forecast coordinates={props.data.coordinates} />
        </div>
      </div>
    </div>
  );
}
