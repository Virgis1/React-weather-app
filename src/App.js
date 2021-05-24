import React from "react";
import './App.css';
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "8e27a7be39dca6fe498266046a534b38";


class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    feels_like: undefined,
    weather_main: undefined,
    wind: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if(city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();
      console.log(data);

      this.setState({
        temp: Math.round(data.main.temp),
        city: data.name,
        country: data.sys.country,
        feels_like: data.main.feels_like,
        weather_main: data.weather[0].main,
        wind: data.wind.speed
      });
    }
  }

  render() {
    return (
      <div className={(this.state.temp > 15) ? 'app warm' : 'app'}>
        <main>
          <Form weatherMethod={this.gettingWeather} />
          <Weather 
            temp={this.state.temp}
            city={this.state.city}
            country={this.state.country}
            feels_like={this.state.feels_like}
            weather_main={this.state.weather_main}
            wind={this.state.wind}
          /> 
        </main>
      </div>
      
    );
  }
}

export default App;