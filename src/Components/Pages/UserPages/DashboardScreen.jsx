// coming soon
// ...in progress

import React from "react";
// import React, { useState, useEffect } from "react";
// import { app, auth, firestore } from "../../../firebase/utils";

import FooterGuest from "../../Contents/FooterContents/FooterGuest";

import logInBg from "../../../Assets/images/Netflix-login-bg.jpeg";
import logo from "../../../Assets/images/netflix-logo.svg";
import { Navbar } from "react-bootstrap";

const Dashboard = (props) => {
  return (
    <>
      <div className="container-fluid user-auth-page__wrapper ">
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

        <div className="container">
          <h1>My Account</h1>
          <p>Profile details .....</p>
        </div>
        <FooterGuest />
      </div>
    </>
  );
};
export default Dashboard;
