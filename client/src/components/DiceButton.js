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
    this.state = {};
  }

  render() {
    const getRandIcon = () => {
      return randDiceIcon();
    };
    return (
      <button className="button randomBtn" onClick={this.props.changeFirstRun}>
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
