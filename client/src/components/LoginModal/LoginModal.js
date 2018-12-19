import React, { Component } from "react";
import Modal from "react-modal";
import "./LoginModal.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#e7dedc"
  },
  overlay: {
    background: "rgba(36, 32, 56, 0.85)"
  }
};

Modal.setAppElement("#root");

class LoginModal extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    this.subtitle.style.color = "#242038";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <a className="navbar-item" onClick={this.openModal}>
          <i class="fas fa-sign-in-alt" />
          &nbsp;Login
        </a>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Login Modal"
          closeTimeoutMS={300}
        >
          <div className="Modal" style={{ textAlign: "center" }}>
            <i
              class="fa fa-times"
              onClick={this.closeModal}
              style={{
                position: "absolute",
                right: "5px",
                top: "5px",
                cursor: "pointer"
              }}
            />

            <h2 ref={subtitle => (this.subtitle = subtitle)}>Login</h2>
            <div>Please enter your email and password</div>
            <br />
            <form>
              Email:
              <br />
              <input type="email" name="email" />
              <br />
              Password:
              <br />
              <input type="password" name="psw" />
              <br />
              <br />
              <button
                className="randomBtn"
                style={{ height: "40px", width: "100px" }}
              >
                Login
              </button>
            </form>
            <br />

            <div>
              Don't have an account? <a href="#">Sign-up</a>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
export default LoginModal;
