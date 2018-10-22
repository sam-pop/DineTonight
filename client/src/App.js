import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Welcome to DinnerTonight!</h1>
      </div>
    );
  }
}

export default App;
