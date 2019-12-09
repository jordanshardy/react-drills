import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      filteredString: "",
      foods: ["Burger", "Fried Rice", "Salad", "Pizza"]
    };
  }

  handleChange(filter) {
    this.setState({
      filteredString: filter
    });
  }

  render() {
    let foodList = this.state.foods
      .filter((element, index) => {
        console.log(element, this.state.filteredString);
        return element
          .toLowerCase()
          .includes(this.state.filteredString.toLowerCase());
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} />
        <div>{foodList}</div>
      </div>
    );
  }
}

export default App;
