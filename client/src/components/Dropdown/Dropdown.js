import React, { Component } from "react";
import "./Dropdown.css";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRadius: this.props.selectedRadius,
      isVisible: false
    };
  }

  // Hide the dropdown menu
  hide = () => {
    document.getElementById("dc").style.display = "none";
  };

  // Show the dropdown menu
  show = () => {
    document.getElementById("dc").style.display = "block";
  };

  // Open / Close dropdown menu
  handleClick = () => {
    if (!this.state.isVisible) {
      this.setState({ isVisible: true });
      this.show();
    } else {
      this.setState({ isVisible: false });
      this.hide();
    }
  };

  render() {
    return (
      <div className="dd-container">
        Search radius
        <div id="dd" class="dropdown" onClick={this.handleClick}>
          <span class="pointer">
            &nbsp;<u>{this.props.selectedRadius}</u>
          </span>
          <div id="dc" class="dropdown-content">
            <a
              class="pointer"
              data-radius="500"
              onClick={this.props.changeRadius.bind(this)}
            >
              500
            </a>
            <a
              class="pointer"
              data-radius="1000"
              onClick={this.props.changeRadius.bind(this)}
            >
              1000
            </a>
            <a
              class="pointer"
              data-radius="2000"
              onClick={this.props.changeRadius.bind(this)}
            >
              2000
            </a>
            <a
              class="pointer"
              data-radius="5000"
              onClick={this.props.changeRadius.bind(this)}
            >
              5000
            </a>
          </div>
          <span style={{ fontSize: "0.8em" }}>&nbsp;m</span>
        </div>
      </div>
    );
  }
}

export default Dropdown;
