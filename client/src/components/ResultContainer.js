import React from "react";
import PropTypes from "prop-types";
import ResultCard from "./ResultCard";

class ResultContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: this.props.result
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ result: nextProps.result });
  }

  render() {
    return (
      <div>
        <ResultCard result={this.props.result} />
      </div>
    );
  }
}

export default ResultContainer;
