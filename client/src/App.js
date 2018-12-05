import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import DiceButton from "./components/DiceButton";
import WelcomeContainer from "./components/WelcomeContainer";
import ResultContainer from "./components/ResultContainer";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
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

  // Use navigator's geolocation to get the current position of the user
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

  // Change the first-run state
  changeFirstRun = () => {
    this.setState({ firstRun: false });
  };

  // Updates the current search radius
  updateRadius = event => {
    this.setState({
      selectedRadius: parseInt(event.currentTarget.dataset.radius)
    });
  };

  // Return the results from the API and display them
  handleClick = () => {
    if (this.state.currentLocation) {
      this.setState({ message: "Calculating best-matches" });
      // PostRequest
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
        {/* --- Navigation --- */}
        <NavBar />
        {/* --- Current container --- */}
        {this.state.currentContainer}
        {/* --- Dropdown menu --- */}
        <div
          className="has-text-centered"
          style={{ marginTop: "1%", marginBottom: "1%" }}
        >
          {this.state.firstRun ? (
            <Dropdown
              updateRadius={this.updateRadius}
              selectedRadius={this.state.selectedRadius}
            />
          ) : (
            ""
          )}
        </div>
        {/* --- DiceButton --- */}
        <div className="has-text-centered animated pulse">
          <span onClick={this.handleClick}>
            {this.state.firstRun ? (
              <DiceButton firstRun={this.state.firstRun} />
            ) : (
              ""
            )}
          </span>
        </div>
        {/* --- Message text --- */}
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
        {/* --- Footer --- */}
        <Footer firstRun={this.state.firstRun} />
      </div>
    );
  }
}

export default App;
