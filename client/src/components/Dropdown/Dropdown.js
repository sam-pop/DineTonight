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

  // Hides the dropdown menu
  hide = () => {
    document.getElementById("dc").style.display = "none";
  };

  // Shows the dropdown menu
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
        Preferred search radius
        <div id="dd" class="dropdown" onClick={this.handleClick}>
          <span class="pointer" style={{ fontSize: "1.3em" }}>
            &nbsp;<u>{this.props.selectedRadius}</u>
          </span>
          <div id="dc" class="dropdown-content">
            <span
              class="pointer"
              data-radius="500"
              onClick={this.props.updateRadius.bind(this)}
            >
              500
            </span>
            <span
              class="pointer"
              data-radius="1000"
              onClick={this.props.updateRadius.bind(this)}
            >
              1000
            </span>
            <span
              class="pointer"
              data-radius="2000"
              onClick={this.props.updateRadius.bind(this)}
            >
              2000
            </span>
            <span
              class="pointer"
              data-radius="5000"
              onClick={this.props.updateRadius.bind(this)}
            >
              5000
            </span>
          </div>
          <span style={{ fontSize: "0.8em" }}>&nbsp;m</span>
        </div>
      </div>
    );
  }
}

export default Dropdown;
