import React from "react";
import PropTypes from "prop-types";
import ResultCard from "./ResultCard";
import DiceButton from "./DiceButton";

class ResultContainer extends React.Component {
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
    console.log("this been clicked");
  };

  render() {
    return (
      <div>
        <ResultCard currentResult={this.state.tempRes} />
        <div className="has-text-centered">
          <span onClick={this.handleClick}>
            <DiceButton firstRun={false} />
          </span>
        </div>
      </div>
    );
  }
}

export default ResultContainer;
