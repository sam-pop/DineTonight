import React from "react";
import PropTypes from "prop-types";

class ResultContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.test}</div>;
  }
}

export default ResultContainer;
