import React, { Component } from "react";
// import Header from "../../Layout/Header";
import FooterGuest from "../../Contents/FooterContents/FooterGuest";
import SignUp from "../../Forms/Signup";
import logInBg from "../../../Assets/images/Netflix-login-bg.jpeg";
import logo from "../../../Assets/images/netflix-logo.svg";
import { Navbar } from "react-bootstrap";
class Registration extends Component {
  render() {
    return (
      <div className="container-fluid user-auth-page__wrapper ">
        {/* <Header /> */}

        <div className="user-auth-page-bg__holder">
          <img className="user-auth-page-bg" src={logInBg} alt="" />
        </div>

        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          className="navbar navbar-expand-lg- navbar-dark  fixed-top- text-white-50 pt-5"
        >
          <Navbar.Brand href="#home">
            <img
              className="d-inline-block align-top logo"
              src={logo}
              alt="Netflix Logo"
            />
          </Navbar.Brand>
        </Navbar>
        <div className="container py-5">
          <SignUp />
        </div>

        <FooterGuest />
      </div>
    );
  }
}

export default Registration;
