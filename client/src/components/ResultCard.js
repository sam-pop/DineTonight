import React from "react";

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

    const styles = {
      card: {
        width: "70%",
        maxHeight: "50vh",
        margin: "0 auto",
        marginTop: "7%",
        textAlign: "center",
        boxShadow: "0px 5px 16px 2px rgba(171,171,171,1)"
      },
      subtitle: {
        textAlign: "center",
        margin: "0 auto"
      },
      imgContainer: {
        margin: "0 auto",
        width: "50%",
        marginBottom: "10%"
      }
    };

    return (
      <div className="card" style={styles.card}>
        <div className="card-content">
          <p className="title">
            <u>{thisResult.name}</u>
            <span style={{ fontSize: "0.6em" }}>
              &nbsp;&nbsp;
              <i>{thisResult.user_rating.aggregate_rating}</i> / 5 &nbsp;
              <span style={{ fontSize: "0.7em" }}>
                ({thisResult.user_rating.votes} votes)
              </span>
            </span>
            <br />
            <span style={{ fontSize: "0.6em" }}>
              {this.renderDollarSigns(thisResult.price_range)}
              &nbsp;-&nbsp;
              {thisResult.cuisines}
            </span>
            <br />
          </p>
          <p className="subtitle" style={styles.subtitle}>
            {/* <div className="img-container" style={styles.imgContainer}> */}
            {/* <img src={thisResult.featured_image} /> */}
            {/* </div> */}
            <br />
            <br />
            <a href={gmAddressLink} target="_blank">
              {thisResult.location.address}
            </a>
            <br />
            <span style={{ fontSize: "0.6em" }}>
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
              <a href={thisResult.menu_url} target="_blank">
                View Menu
              </a>
            </span>
          </p>
          <p className="card-footer-item">
            <span>⭐</span>
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
