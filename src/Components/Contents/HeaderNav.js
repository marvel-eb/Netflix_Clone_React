
import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
import logo from "../../Assets/images/netflix-logo.svg";
import SearchBar from "../Contents/SearchBar";
import avator from "../../Assets/images/Netflix-avatar.png";
import { Nav, Navbar, NavDropdown, Collapse } from "react-bootstrap";

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
                    backgroundColor: navBackground ? "black" : "transparent",
                }}
            >
                <Navbar.Brand href="#home">
                    <img className="logo" src={logo} alt="Netflix Logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav.Link href="#" className="text-white-50">Home</Nav.Link>
                    <Nav.Link href="#" className="text-white-50">Films</Nav.Link>

                    <Nav className=" mr-auto- navbar-nav ml-auto">
                        <SearchBar />
                    </Nav>
                    <img className="avator" src={avator} alt="avator" />

                    <NavDropdown title="UserInfo" id="collasible-nav-dropdown">

                        <NavDropdown.Item href="#">Something 1</NavDropdown.Item>
                        <NavDropdown.Item href="#">Something 2</NavDropdown.Item>
                        <NavDropdown.Item href="#">Something 3</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">
                            Another Action
                        </NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default HeaderNav;
