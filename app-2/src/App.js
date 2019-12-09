import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: ["Burger", "Fried Rice", "Salad", "Pizza"]
    };
  }

  render() {
    let foodsList = this.state.foods.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });
    return <div className="App">{foodsList}</div>;
  }
}

export default App;
