import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import DiceButton from "./components/DiceButton";
import WelcomeContainer from "./components/WelcomeContainer";
import ResultContainer from "./components/ResultContainer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstRun: true,
      loggedIn: {},
      currentLocation: null,
      currentContainer: <WelcomeContainer />
    };
  }

  componentDidMount() {
    this.getGeolocation();
  }

  handleClick = () => {
    if (this.state.currentLocation !== null) {
      this.setState({ currentContainer: <ResultContainer test="cool" /> });
    } else alert("Current location not found! Please enable location services");
  };

  getGeolocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          currentLocation: {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          }
        });
      });
    } else {
      console.log("Unable to access current location...");
    }
  };

  changeFirstRun = () => {
    this.setState({ firstRun: false });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        {this.state.currentContainer}
        <div className="has-text-centered">
          <span onClick={this.handleClick}>
            <DiceButton
              changeFirstRun={this.changeFirstRun.bind(this)}
              currentLocation={this.state.currentLocation}
              firstRun={this.state.firstRun}
            />
          </span>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
