import logo from '../Arctype-white-1.png'
import '../css/Navigation.css';
import React from 'react'
import { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, Button } from 'react-bootstrap'

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar sticky="top" expand="md" collapseOnSelect>
        <Navbar.Brand href="/">
         <img src={logo} className="logo"/>
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="https://arctype.com">    <Button variant="primary">Try Arctype</Button> </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        </Navbar>
      </div>
    )
  }
}

export default Navigation
