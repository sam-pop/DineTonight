import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div >
        <nav className="navbar">
          <div className="navbar-brand">
            <a className="navbar-item navbar-start">DinnerTonight!</a>
            <a className="navbar-burger" data-target="navMenu">
              <span />
              <span />
              <span />
            </a>
          </div>

          <div className="navbar-menu" id="navMenu">
            <a className="navbar-item">About</a>
            <a className="navbar-item">Sign-in</a>
            <a className="navbar-item">Contact</a>
            <a className="navbar-item navbar-end">
              <i className="fab fa-github" style={{ "font-size": "2rem" }} />
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
