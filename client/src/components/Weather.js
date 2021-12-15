import { useQuery } from "@apollo/client";
import { weatherQuery } from "../queries";
import * as utils from "../utils";
import Icon from "./Icon";

const Weather = () => {
  const { loading, error, data } = useQuery(weatherQuery);

  if (loading) return <></>;
  if (error) return <div>There was an error while calling API :(</div>;

  const weather = data.weather;

  return (
    <div>
      <div className="card">
        <h3>
          Right now it is {utils.kelvinToFahrenheit(weather.temperature)}{" "}
          degrees in LA
        </h3>
      </div>
      <div className="current-weather card">
        <div className="summary">
          <div className="icon">
            <Icon icon={weather.icon} />
          </div>
          <div className="temperature">
            {utils.kelvinToFahrenheit(weather.temperature)} °F
          </div>
          <div className="description">
            {utils.capitalizeWords(weather.description)}
          </div>
        </div>

        <div className="range">
          <div className="open">
            {utils.kelvinToFahrenheit(weather.maxTemperature)} °F
          </div>
          <div className="bar"></div>
          <div className="low">
            {utils.kelvinToFahrenheit(weather.minTemperature)} °F
          </div>
        </div>

        <div className="detail">
          <div className="wind">
            <span className="label">Wind: </span>
            {weather.wind}
            <span className="unit">m/s</span>
          </div>
          <div className="pressure">
            <span className="label">Pressure: </span>
            {weather.pressure}
            <span className="unit">hPa</span>
          </div>
          <div className="humidity">
            <span className="label">Humidity: </span>
            {weather.humidity}
            <span className="unit">%</span>
          </div>
          <div className="sunrise">
            <span className="label">Sunrise: </span>
            {utils.getTime(weather.sunrise, weather.timezone)}
          </div>
          <div className="sunset">
            <span className="label">Sunset: </span>
            {utils.getTime(weather.sunset, weather.timezone)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
