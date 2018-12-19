import React from "react";
import "./NavBar.css";
import LoginModal from "../LoginModal";

const handleBrandClick = () => {
  window.location.reload();
};

const NavBar = () => (
  <div>
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-item" onClick={handleBrandClick}>
          Dine
          <span role="img" aria-label="cheers">
            🥂
          </span>
          Tonight!{" "}
          <span style={{ fontSize: "1.5vh", verticalAlign: "middle" }}>
            &nbsp;{"{Beta}"}
          </span>
        </span>
        <span
          style={{
            float: "right",
            paddingRight: "2px",
            paddingLeft: "2px",
            fontSize: "2.3vh"
          }}
        >
          <LoginModal />
        </span>
      </div>
    </nav>
  </div>
);

export default NavBar;
