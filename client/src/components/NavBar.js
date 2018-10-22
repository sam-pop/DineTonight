import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="navbar-brand">
            <a className="navbar-item navbar-start">Dine🥂Tonight!</a>
            <a className="navbar-burger" data-target="navMenu">
              <span />
              <span />
              <span />
            </a>
          </div>

          <div className="navbar-menu navbar-end" id="navMenu">
            <a className="navbar-item">About</a>
              {/* <i className="fab fa-github" style={{ "font-size": "2rem" }} /> */}
            <a className="navbar-item"><i class="fas fa-sign-in-alt"></i>&nbsp;Login</a>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
