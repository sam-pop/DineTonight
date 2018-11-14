import React, { Component } from "react";
import WelcomeContainer from "./WelcomeContainer";
import axios from "axios";

const randDiceIcon = () => {
  const baseName = "fas fa-dice";
  const diceArray = ["", "-one", "-two", "-three", "-four", "-five", "-six"];
  const randInd = Math.floor(Math.random() * diceArray.length);
  return `${baseName}${diceArray[randInd]}`;
};
const styles = {
  button: {
    fontSize: "2.5rem"
  }
};
class DiceButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: this.props.currentLocation,
      firstRun: this.props.firstRun
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ currentLocation: nextProps.currentLocation });
    this.setState({ firstRun: nextProps.firstRun });
  }

  handleButtonClick = event => {
    if (this.state.currentLocation !== null) {
      if (this.props.firstRun) {
        this.props.changeFirstRun();
        console.log("yayy");
      } else {
        console.log("nayyy");
      }
    }
  };

  render() {
    const getRandIcon = () => {
      return randDiceIcon();
    };
    return (
      <button className="button randomBtn" onClick={this.handleButtonClick}>
        <i
          className={
            this.state.firstRun === true ? "fas fa-dice" : getRandIcon()
          }
          style={styles.button}
        />
      </button>
    );
  }
}

export default DiceButton;
