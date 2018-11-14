import React from "react";
import PropTypes from "prop-types";

class ResultCard extends React.Component {
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
      <div
        className="card"
        style={{ width: "70%", margin: "0 auto", marginTop: "7%" }}
      >
        <div className="card-content">
          <p className="title">
            {this.props.result}
            <br />
            “There are two hard things in computer science: cache invalidation,
            naming things, and off-by-one errors.”
            <br />
          </p>
          <p className="subtitle">
            “There are two hard things in computer science: cache invalidation,
            naming things, and off-by-one errors.” <br />
            <br />
          </p>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <span>View Menu</span>
          </p>
          <p className="card-footer-item">
            <span>⭐</span>
          </p>
          <p className="card-footer-item">
            <span>Add Note </span>
          </p>
        </footer>
      </div>
    );
  }
}

export default ResultCard;
