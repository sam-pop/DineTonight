import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import DiceButton from "./components/DiceButton";
import "./App.css";

const styles = {
  container: {
    marginTop: "2%"
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstRun: true,
      loggedIn: {},
      currentLocation: { lat: 0, lon: 0 }
    };
  }

  componentDidMount() {
    this.getGeolocation();
  }

  getGeolocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        // console.log(position.coords.latitude, position.coords.longitude);
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
        <h1>Looking for a place to eat?</h1>
        <h2>Don't "roll the dice" on a restuarant... let us do it for you!</h2>
        <section className="container" style={styles.container}>
          <div className="has-text-left">
            <br />
            We can show you a <u>top-rating</u> restuarnt near your current
            location with a simple click of a button!
          </div>{" "}
          <div className="has-text-right">
            <br />
            So why won't you let us make the tough decisions, leaving you with
            more time to relax.
          </div>
        </section>
        <div className="has-text-centered">
          {this.state.firstRun ? (
            <DiceButton
              default="true"
              changeFirstRun={this.changeFirstRun.bind(this)}
            />
          ) : (
            <DiceButton />
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
