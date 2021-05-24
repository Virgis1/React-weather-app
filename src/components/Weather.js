import React from "react";
import '../App.css';

class Weather extends React.Component {
  render() {
    return (
      <div className="weather">
        { this.props.city &&
        <div>
          <p className="weather-location">{this.props.city}, {this.props.country}</p>
          <p className="weather-temp">{this.props.temp}°C</p>
          <p className="weather-wind">Weather: {this.props.weather_main}</p>
          <p className="weather-wind">Wind speed: {this.props.wind} km/h</p>
        </div>
        }
      </div>
    );
  }
}

export default Weather;