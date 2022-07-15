import React from "react";
// import { Link } from "react-router-dom";
import SignInForm from "../../Forms/SignIn";
import FooterGuest from "../../Contents/FooterContents/FooterGuest";
import logInBg from "../../../Assets/images/Netflix-login-bg.jpeg";
import logo from "../../../Assets/images/netflix-logo.svg";
import { Navbar } from "react-bootstrap";

const LogInScreen = () => {
  return (
    <div className="container-fluid user-auth-page__wrapper">
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
        <div class="row">
          <div class="col-12 col-md-8 mx-auto">
            <div class="jumbotron bg-transparent">
              <div class="row text-center">
                <div class="text-center col-12">
                  <SignInForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterGuest />
    </div>
  );
};

export default LogInScreen;
