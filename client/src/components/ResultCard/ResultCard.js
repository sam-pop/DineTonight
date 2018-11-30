import React, { Component } from "react";
import "./ResultCard.css";

class ResultCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentResult: this.props.currentResult
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ currentResult: nextProps.currentResult });
  }

  render() {
    const thisResult = this.props.currentResult;
    const getStyles = () => {
      //style for small screens
      if (window.innerWidth < 667)
        return {
          card: {
            width: "90%",
            minHeight: "50vh",
            margin: "0 auto",
            marginTop: "5%",
            textAlign: "center",
            boxShadow: "0px 5px 16px 2px rgba(171,171,171,1)"
          },
          title: {
            fontSize: "2vh"
          },
          subtitle: {
            fontSize: "2.2vh",
            textAlign: "center",
            margin: "0 auto"
          },
          name: {
            fontSize: "3vh"
          },
          imgContainer: {
            margin: "0 auto",
            width: "70%"
          }
        };
      //style sfor large screens
      else
        return {
          card: {
            width: "70%",
            minHeight: "45vh",
            margin: "0 auto",
            marginTop: "5%",
            textAlign: "center",
            boxShadow: "0px 5px 16px 2px rgba(171,171,171,1)"
          },
          title: {
            fontSize: "2vh"
          },
          subtitle: {
            fontSize: "2.2vh",
            textAlign: "center",
            margin: "0 auto"
          },
          name: {
            fontSize: "3vh"
          },
          imgContainer: {
            margin: "0 auto",
            maxWidth: "50%"
          }
        };
    };

    return (
      <div className="card" style={getStyles().card}>
        <div className="card-content">
          <p className="title" style={getStyles().title}>
            <span style={getStyles().name}>
              <br />
              <u>{thisResult.name}</u>
            </span>
            <br />
            <span
              style={{
                margin: "1%",
                position: "absolute",
                top: "0",
                left: "0",
                color: "#242038"
              }}
            >
              {thisResult.price_range}
            </span>
            <br />
            <span
              style={{
                margin: "1%",
                position: "absolute",
                top: "0",
                right: "0"
              }}
            >
              {thisResult.rating >= 4.5 ? (
                <i style={{ color: "green" }}>{thisResult.rating}</i>
              ) : (
                <i style={{ color: "#474747" }}>{thisResult.rating}</i>
              )}{" "}
              / 5 &nbsp;
              <span style={{ fontSize: "1.5vh", color: "#a0a0a0" }}>
                <br />({thisResult.votes} votes)
              </span>
            </span>
            <span>
              <i>{thisResult.cuisines}</i>
            </span>
            <br />
          </p>
          <p className="subtitle" style={getStyles().subtitle}>
            {/* <figure style={getStyles().imgContainer}>
              <img src={thisResult.image} />
            </figure> */}
            <br />
            <a
              href={thisResult.address_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>{thisResult.address}</b>
            </a>
            <br />
            <span style={{ fontSize: "1.5vh" }}>
              (click on the address to open in Google Maps)
            </span>
            <br />
            <br />
            {thisResult.phone ? (
              <span>
                <i className="fa fa-phone" aria-hidden="true" />{" "}
                <a href={thisResult.phone_link}>{thisResult.phone}</a>
              </span>
            ) : (
              ""
            )}
            <br />
          </p>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <span>
              {thisResult.menu ? (
                <a
                  href={thisResult.menu}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Menu
                </a>
              ) : (
                <a
                  href={thisResult.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Link
                </a>
              )}
            </span>
          </p>
          <p className="card-footer-item">
            <span role="img" aria-label="star">
              ⭐
            </span>
          </p>
          <p className="card-footer-item">
            <span>Add Note </span>
          </p>
        </footer>
      </div>
    );
  }
}

export default ResultCard;
