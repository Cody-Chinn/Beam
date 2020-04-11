import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { ReactComponent as Logo } from "../logo.svg";

export default function NavMenu () {
    
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
            <Logo
            alt=""
            width="30"
            height="30"
            className="d-inline-block align-top"
            />
            Beam
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#add-post">Add Post</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

    )

}