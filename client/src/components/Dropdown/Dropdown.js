import React, { Component } from "react";
import "./Dropdown.css";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRadius: this.props.selectedRadius
    };
  }

  render() {
    return (
      <div>
        <div class="dropdown">
          <span class="">Change search radius</span>
          <div class="dropdown-content">
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
        </div>
      </div>
    );
  }
}

export default Dropdown;
