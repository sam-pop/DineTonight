import React from "react";

const styles = {
  gh_icon: {
    fontSize: "1.5rem",
    color: "#242038"
  }
};

const Footer = () => (
  <footer>
    <div className="has-text-centered">
      <a
        href="https://github.com/sam-pop/DnTn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github" style={styles.gh_icon} />
      </a>
    </div>
  </footer>
);

export default Footer;
