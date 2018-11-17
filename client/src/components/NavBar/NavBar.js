import React from "react";
import "./NavBar.css";

const handleBrandClick = () => {
  window.location.reload();
};

const NavBar = () => (
  <div>
    <nav className="navbar">
      <div className="navbar-brand">
        <a className="navbar-item" onClick={handleBrandClick}>
          Dine🥂Tonight!{" "}
          <span style={{ fontSize: "1.5vh", verticalAlign: "middle" }}>
            &nbsp;{"{Beta}"}
          </span>
        </a>
        {/* <span
              style={{
                float: "right",
                paddingRight: "2px",
                paddingLeft: "2px",
                fontSize: "2.3vh"
              }}
            >
              <a className="navbar-item">About</a>
              <a className="navbar-item">
                <i class="fas fa-sign-in-alt" />
                &nbsp;Login
              </a>
            </span> */}
      </div>
    </nav>
  </div>
);

export default NavBar;
