import React, {Component} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { ReactComponent as Logo } from "../logo.svg";
import { NavLink } from "react-router-dom";
import '../Styling Sheets/NavMenu.css'

class NavMenu extends Component {
    render() {
      return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">
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
            <NavLink className="menu-item" to="/profile">Profile </NavLink>
            <NavLink className="menu-item" to="/add-post">Add Post </NavLink>
            <NavLink className="menu-item" to="/edit-profile">Edit Profile </NavLink>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
      );
    }
  }
   
  export default NavMenu;