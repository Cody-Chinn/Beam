import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function NavMenu () {

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src="/logo192.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            Beam
            </Navbar.Brand>
        </Navbar>
    )

}