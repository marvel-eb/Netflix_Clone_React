import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/images/netflix-logo.svg";
import SearchBar from "../HeaderContents/SearchBar";
import avator from "../../../Assets/images/Netflix-avatar.png";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import LogOutScreen from "../../Pages/UserPages/LogOutScreen";

import { FaBell } from "react-icons/fa";
const HeaderNav = (props) => {
    const [navBackground, setNavBackground] = useState(false);
    const navRef = useRef();
    navRef.current = navBackground;
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50;
            if (navRef.current !== show) {
                setNavBackground(show);
            }
        };
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                variant="dark"
                className="navbar navbar-expand-lg navbar-dark  fixed-top text-white-50"
                style={{
                    transition: "1s ease",
                    backgroundColor: navBackground ? "#141414" : "transparent",
                }}
            >
                <Navbar.Brand href="#home">
                    {" "}
                    <img
                        className="d-inline-block align-top logo"
                        src={logo}
                        alt="Netflix Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="px-md-5 px-sm-5 px-xs-5 py-md-5 py-sm-5"
                >
                    <Nav className="mr-auto">
                        <Link className="nav-link active" to="/">
                            Home <span className="sr-only">(current)</span>
                        </Link>
                        <Link className="nav-link" to="/FilmsScreen">
                            Films
                        </Link>
                    </Nav>
                    <SearchBar />
                    <FaBell
                        size={32}
                        style={{ fill: "#fff", margin: "0px 2rem 0px 2rem" }}
                    />
                    <img className="avator" src={avator} alt="avator" />
                    <NavDropdown title="" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Something 1</NavDropdown.Item>
                        <NavDropdown.Item href="#">Something 2</NavDropdown.Item>
                        <NavDropdown.Item href="#">Something 3</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">

                            <LogOutScreen />
                        </NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default HeaderNav;
