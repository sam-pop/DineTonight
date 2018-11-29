import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import DiceButton from "./components/DiceButton";
import WelcomeContainer from "./components/WelcomeContainer";
import ResultContainer from "./components/ResultContainer";
import Dropdown from "./components/Dropdown";
import API from "./utils/API";
import "./App.css";

class App extends Component {
  state = {
    firstRun: true,
    loggedIn: null,
    currentLocation: null,
    selectedRadius: 1000,
    currentContainer: <WelcomeContainer />,
    results: null,
    message: "Roll the dice to begin"
  };

  componentDidMount() {
    this.getGeolocation();
  }

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

  changeRadius = event => {
    this.setState({
      selectedRadius: parseInt(event.currentTarget.dataset.radius)
    });
  };

  handleClick = () => {
    if (this.state.currentLocation) {
      this.setState({ message: "Calculating best-matches" });
      API.getResults({
        location: this.state.currentLocation,
        radius: this.state.selectedRadius
      })
        .then(res =>
          res.data.error
            ? this.setState({ message: res.data.error })
            : this.setState({ results: res.data })
        )
        .then(() => {
          if (this.state.firstRun && this.state.results) {
            this.setState({ message: "" });
            if (this.state.results.length > 0) {
              this.setState({ firstRun: false });
              this.setState({
                currentContainer: (
                  <ResultContainer results={this.state.results} />
                )
              });
            } else {
              this.setState({
                message: "SORRY, NO RESULTS FOR YOUR CURRENT LOCATION!"
              });
            }
          }
        })
        .catch(err => console.log(err));
    } else alert("Current location not found! Please enable location services");
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        {this.state.currentContainer}
        <div
          className="has-text-centered"
          style={{ marginTop: "10%", marginBottom: "1%" }}
        >
          {this.state.firstRun ? (
            <Dropdown
              changeRadius={this.changeRadius}
              selectedRadius={this.state.selectedRadius}
            />
          ) : (
            ""
          )}
        </div>
        <div className="has-text-centered animated pulse">
          <span onClick={this.handleClick}>
            {this.state.firstRun ? (
              <DiceButton firstRun={this.state.firstRun} />
            ) : (
              ""
            )}
          </span>
        </div>
        <div
          className="animated pulse"
          style={{
            textAlign: "center",
            fontSize: "1.1em",
            color: "darkred"
          }}
        >
          {this.state.message}
        </div>
      </div>
    );
  }
}

export default App;
