import React from "react";
import PropTypes from "prop-types";
import ResultCard from "./ResultCard";
import DiceButton from "./DiceButton";

class ResultContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: this.props.results,
      firstRun: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ results: nextProps.results });
  }

  handleClick = () => {
    this.setState({ firstRun: false });
    console.log("this been clicked");
  };

  render() {
    return (
      <div>
        <ResultCard results={this.props.results} />
        <div className="has-text-centered">
          <span onClick={this.handleClick}>
            <DiceButton firstRun={this.state.firstRun} />
          </span>
        </div>
      </div>
    );
  }
}

export default ResultContainer;
