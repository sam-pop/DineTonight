import React from "react";
import { zomatoLogo, yelpLogo, googleMapsLogo } from "../images";

const styles = {
  gh_icon: {
    fontSize: "1.8rem",
    color: "#242038",
    padding: "5px"
  }
};

const logoSize = "35px";

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
          <br />
          <img
            title="Zomato"
            src={zomatoLogo}
            width={logoSize}
            style={{ padding: "5px" }}
            alt="zomato logo"
          />
          <img
            title="Yelp!"
            src={yelpLogo}
            width={logoSize}
            style={{ padding: "5px" }}
            alt="yelp logo"
          />
          <img
            title="Google Maps"
            src={googleMapsLogo}
            width={logoSize}
            style={{ padding: "5px" }}
            alt="google maps logo"
          />
        </span>
      )}
    </div>
  </footer>
);

export default Footer;
