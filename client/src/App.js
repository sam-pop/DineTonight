import React, { Component } from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import "./App.css";

const randDiceIcon = () => {
  const baseName = "fas fa-dice";
  const diceArray = ["", "-one", "-two", "-three", "-four", "-five", "-six"];
  const randInd = Math.floor(Math.random() * diceArray.length);
  return `${baseName}${diceArray[randInd]}`;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const getRandIcon = () => {
      return randDiceIcon();
    };

    return (
      <div className="App">
        <NavBar />
        <h1>Looking for a place to eat?</h1>
        <h2>Don't "roll the dice" on a restuarant... let us do it for you!</h2>
        <section className="container" style={{ "margin-top": "2%" }}>
          <div className="has-text-left">
            We can show you a <u>top-rating</u> restuarnt near your current
            location with a simple click of a button.
          </div>{" "}
          <div className="has-text-right">text</div>
        </section>
        <div className="has-text-centered">
          <button className="button randomBtn">
            <i className={getRandIcon()} style={{ "font-size": "2rem" }} />
          </button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
