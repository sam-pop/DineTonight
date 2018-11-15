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

  renderDollarSigns = () => {
    let res = "";
    for (let i = 0; i < this.props.currentResult.restaurant.price_range; i++) {
      res += "$";
    }
    return res;
  };

  render() {
    const rName = this.props.currentResult.restaurant.name;
    const rCuisines = this.props.currentResult.restaurant.cuisines;
    const rFeaturedImage = this.props.currentResult.restaurant.featured_image;
    const rAddress = this.props.currentResult.restaurant.location.address;
    const rAddressLink = "https://maps.google.com/?q=" + rAddress;
    const rMenuUrl = this.props.currentResult.restaurant.menu_url;
    const rUserRating = this.props.currentResult.restaurant.user_rating
      .aggregate_rating;
    const rNumVotes = this.props.currentResult.restaurant.user_rating.votes;
    const rPriceRange = this.props.currentResult.restaurant.price_range;

    return (
      <div
        className="card"
        style={{
          width: "70%",
          margin: "0 auto",
          marginTop: "7%",
          textAlign: "center"
        }}
      >
        <div className="card-content">
          <p className="title">
            <u>{rName}</u>
            <span style={{ fontSize: "0.6em" }}>
              &nbsp;&nbsp;
              <i>{rUserRating}</i> / 5
              {/* <span class="icon">
                <i class="fas fa-star" />
              </span> */}
              &nbsp;
              <span style={{ fontSize: "0.7em" }}>({rNumVotes} votes)</span>
            </span>
            <br />
            <span style={{ fontSize: "0.6em" }}>
              {this.renderDollarSigns()}
              &nbsp;-&nbsp;
              {rCuisines}
            </span>
            <br />
          </p>
          <p
            className="subtitle"
            style={{ textAlign: "center", margin: "0 auto" }}
          >
            <img src={rFeaturedImage} width="90%" />
            <br />
            <br />
            <a href={rAddressLink} target="_blank">
              {rAddress}
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
              <a href={rMenuUrl} target="_blank">
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
