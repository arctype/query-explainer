import logo from '../favicon.png'
import React from 'react'
import { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap'

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" sticky="top" expand="md" collapseOnSelect>
        <Navbar.Brand href="/">
         <img src={logo} width="50px" />
         <span>Mike was here</span>
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="query-explainer"> Query Explainer </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        </Navbar>
      </div>
    )
  }
}

export default Navigation
