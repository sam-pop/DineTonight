import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar"
import Footer from "./components/Footer"


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>Looking for a place to eat?</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
