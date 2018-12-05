import React, { Fragment } from "react";
import Footer from "./Footer";

const responsiveSubtitleText = {
  smallScreen: (
    <Fragment>
      Don't "roll the dice" on a restuarant... <br /> let us do it for you!
    </Fragment>
  ),
  largeScreen: `Don't "roll the dice" on a restuarant... let us do it for you!`
};

const responsiveSubtitle = () => {
  if (window.innerWidth < 667) return responsiveSubtitleText.smallScreen;
  else return responsiveSubtitleText.largeScreen;
};

const styles = {
  marginTop: "2%"
};

const WelcomeContainer = props => (
  <div className="welcomeContainer">
    <h1>Looking for a place to eat?</h1>
    <h2>{responsiveSubtitle()}</h2>
    <section className="container" style={styles}>
      <div className="has-text-left" style={{ marginLeft: "5px" }}>
        <br />
        We can show you a <u>top-rating</u> restuarnt near your current location
        with a simple click of a button!
      </div>{" "}
      <div className="has-text-right" style={{ marginRight: "5px" }}>
        <br />
        So why won't you let us make the tough decisions, leaving you with more
        time to relax.
      </div>
    </section>
    {/* <Footer /> */}
  </div>
);

export default WelcomeContainer;
