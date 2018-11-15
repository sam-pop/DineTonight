import React from "react";
import "./ResultCard.css";

class ResultCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentResult: this.props.currentResult
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ currentResult: nextProps.currentResult });
  }

  renderDollarSigns = num => {
    let res = "";
    for (let i = 0; i < num; i++) {
      res += "$";
    }
    return res;
  };

  render() {
    const thisResult = this.props.currentResult.restaurant;
    const gmAddressLink =
      "https://maps.google.com/?q=" + thisResult.location.address;
    const getStyles = () => {
      //style for small screens
      if (window.innerWidth < 667)
        return {
          card: {
            width: "90%",
            minHeight: "50vh",
            maxHeight: "55vh",
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
            width: "50%",
            marginBottom: "10%"
          }
        };
      //style sfor large screens
      else
        return {
          card: {
            width: "70%",
            height: "45vh",
            margin: "0 auto",
            marginTop: "7%",
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
            width: "50%",
            marginBottom: "10%"
          }
        };
    };

    return (
      <div className="card" style={getStyles().card}>
        <div className="card-content">
          <p className="title" style={getStyles().title}>
            <span style={getStyles().name}>
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
              {this.renderDollarSigns(thisResult.price_range)}
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
              {thisResult.user_rating.aggregate_rating > 4.0 ? (
                <i style={{ color: "green" }}>
                  {thisResult.user_rating.aggregate_rating}
                </i>
              ) : (
                <i style={{ color: "red" }}>
                  {thisResult.user_rating.aggregate_rating}
                </i>
              )}{" "}
              / 5 &nbsp;
              <span style={{ fontSize: "1.5vh", color: "lightgray" }}>
                <br />({thisResult.user_rating.votes} votes)
              </span>
            </span>
            <span>
              <i>{thisResult.cuisines}</i>
            </span>
            <br />
          </p>
          <p className="subtitle" style={getStyles().subtitle}>
            {/* <div className="img-container" style={getStyles().imgContainer}> */}
            {/* <img src={thisResult.featured_image} /> */}
            {/* </div> */}
            <br />
            <br />
            <a href={gmAddressLink} target="_blank" rel="noopener noreferrer">
              <b>{thisResult.location.address}</b>
            </a>
            <br />
            <span style={{ fontSize: "1.5vh" }}>
              (click on the address to open in Google Maps)
            </span>
            <br />
            <br />
            <br />
          </p>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <span>
              <a
                href={thisResult.menu_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Menu
              </a>
            </span>
          </p>
          <p className="card-footer-item">
            <span role="img">⭐</span>
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
