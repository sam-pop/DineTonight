import React, { Component } from "react";

class DiceButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstRun: this.props.firstRun
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ firstRun: nextProps.firstRun });
  }

  randDiceIcon = () => {
    const baseName = "fas fa-dice";
    const diceArray = ["-one", "-two", "-three", "-four", "-five", "-six"];
    const randInd = Math.floor(Math.random() * diceArray.length);
    return `${baseName}${diceArray[randInd]}`;
  };

  render() {
    const styles = {
      button: {
        fontSize: "2.5rem"
      }
    };
    return (
      <button className="randomBtn">
        <i
          className={
            this.state.firstRun === true ? "fas fa-dice" : this.randDiceIcon()
          }
          style={styles.button}
        />
      </button>
    );
  }
}

export default DiceButton;
