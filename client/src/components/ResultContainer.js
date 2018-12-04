import React, { Component } from "react";
import ResultCard from "./ResultCard";
import DiceButton from "./DiceButton";

class ResultContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: this.props.results
    };
  }

  componentWillMount() {
    const tempRes = this.randItem(this.state.results);
    this.setState({ tempRes });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ results: nextProps.results });
  }

  // Returns a random item from the passed array
  randItem = arr => {
    const randInd = Math.floor(arr.length * Math.random());
    return arr[randInd];
  };

  // Returns a random result from the results array
  handleClick = () => {
    const tempRes = this.randItem(this.state.results);
    this.setState({ tempRes });
  };

  render() {
    return (
      <div className="animated fadeInDown">
        <div style={{ marginBottom: "5vh" }}>
          <ResultCard currentResult={this.state.tempRes} />
        </div>
        <div className="has-text-centered animated fadeIn">
          <span onClick={this.handleClick}>
            <DiceButton firstRun={false} />
          </span>
        </div>
      </div>
    );
  }
}

export default ResultContainer;
