import React, { Component } from "react";

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
      currentLocation: this.props.currentLocation
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ currentLocation: nextProps.currentLocation });
  }

  handleButtonClick = () => {
    if (this.state.currentLocation === null) console.log("this is null!");
    else console.log("this is NOT null!");
  };

  render() {
    const getRandIcon = () => {
      return randDiceIcon();
    };
    return (
      <button
        className="button randomBtn"
        onClick={this.props.changeFirstRun && this.handleButtonClick}
      >
        <i
          className={
            this.props.default === "true" ? "fas fa-dice" : getRandIcon()
          }
          style={styles.button}
        />
      </button>
    );
  }
}

export default DiceButton;
