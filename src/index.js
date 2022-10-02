import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import IconDate from "./icons-date.png";
import FormattedDate from "./FormattedDate.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="WeatherAppBody mt-3">
      <br />
      <div className="WeatherApp">
        <h1 className="mb-4">React Weather App</h1>
        <div className="row m-2">
          <div className="col-2 calendar">
            {" "}
            <img
              src={IconDate}
              alt="DateInfo pic"
              className="calendar"
              width={50}
            />
            <FormattedDate date={new Date()} />
          </div>
          <div className="col-10">
            <App />
          </div>
        </div>
      </div>
      <footer className="m-4">
        See my code on my{" "}
        <a
          href="https://github.com/Adelina-HK/react-git-netlify-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        and also on{" "}
        <a
          href="https://funny-platypus-b5bf89.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Netlify
        </a>{" "}
      </footer>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
