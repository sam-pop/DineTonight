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
    const tempRes = this.randResult(this.state.results);
    this.setState({ tempRes });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ results: nextProps.results });
  }

  randResult = arr => {
    const randInd = Math.floor(arr.length * Math.random());
    return arr[randInd];
  };

  handleClick = () => {
    const tempRes = this.randResult(this.state.results);
    this.setState({ tempRes });
  };

  render() {
    return (
      <div className="animated fadeInDown">
        <ResultCard currentResult={this.state.tempRes} />
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
