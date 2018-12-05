import React from "react";
import { zomatoLogo, yeloLogo, googleMapsLogo } from "../images";

const styles = {
  gh_icon: {
    fontSize: "1.5rem",
    color: "#242038"
  }
};

const Footer = props => (
  <footer>
    <div className="has-text-centered">
      {props.firstRun ? (
        <a
          href="https://github.com/sam-pop/DnTn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" style={styles.gh_icon} />
        </a>
      ) : (
        <span>
          Powered by:
          <img src={zomatoLogo} />
        </span>
      )}
    </div>
  </footer>
);

export default Footer;
