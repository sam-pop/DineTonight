import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import DiceButton from "./components/DiceButton";
import WelcomeContainer from "./components/WelcomeContainer";
import ResultContainer from "./components/ResultContainer";
import API from "./utils/API";
import "./App.css";

class App extends Component {
  state = {
    firstRun: true,
    loggedIn: null,
    currentLocation: null,
    currentContainer: <WelcomeContainer />,
    results: null,
    message: "Roll the dice to begin"
  };

  componentDidMount() {
    this.getGeolocation();
  }

  handleClick = () => {
    if (this.state.currentLocation !== null) {
      this.getResultsFromAPI();
      this.setState({ message: "Calculating best-matches..." });
      setTimeout(() => {
        if (this.state.firstRun) {
          this.setState({ firstRun: false });
          if (this.state.results) {
            this.setState({ message: "" });
            this.setState({
              currentContainer: <ResultContainer results={this.state.results} />
            });
          }
        }
      }, 3000);
    } else alert("Current location not found! Please enable location services");
  };

  getResultsFromAPI = () => {
    API.getResults(this.state.currentLocation).then(res =>
      this.setState({ results: res.data.nearby_restaurants })
    );
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
            {this.state.firstRun ? (
              <DiceButton firstRun={this.state.firstRun} />
            ) : (
              ""
            )}
          </span>
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: "1.1em",
            color: "darkred"
          }}
        >
          {this.state.message}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
