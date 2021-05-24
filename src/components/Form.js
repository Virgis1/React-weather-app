import React from "react";
import '../App.css';

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.weatherMethod}>
        <input className="search-bar" type="text" name="city" placeholder="Miestas" />
        <button>gauti oru prognoze</button>
      </form>
    );
  }
}

export default Form;