import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-sm-3">
          <WeatherIcon code={props.info.icon} size={52} />
          </div>
        <div className="col-sm-3">
          <WeatherTemperature celsius={props.info.temperature} />
        </div>
        <div className="col-sm-6 mt-1">
          <ul>
            <li>
              <strong>Description: </strong>
              {props.info.description}
            </li>
            <li>
              <strong>Humidity: </strong>
              {props.info.humidity} %
            </li>
            <li>
              <strong>Wind: </strong>
              {props.info.wind}km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
