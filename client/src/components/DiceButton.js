import React, { Component } from "react";

const randDiceIcon = () => {
  const baseName = "fas fa-dice";
  const diceArray = ["", "-one", "-two", "-three", "-four", "-five", "-six"];
  const randInd = Math.floor(Math.random() * diceArray.length);
  return `${baseName}${diceArray[randInd]}`;
};

class DiceButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const getRandIcon = () => {
      return randDiceIcon();
    };
    return (
      <button className="button randomBtn">
        <i className={this.props.default=="true" ? "fas fa-dice" : getRandIcon()} style={{ "font-size": "2rem" }} />
      </button>
    );
  }
}

export default DiceButton;
