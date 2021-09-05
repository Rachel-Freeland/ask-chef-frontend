import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';

class Header extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className="m-2" href="#"><span style={{ fontSize: '25px', fontWeight: 'bold'}}>Ask Chef</span></Navbar.Brand>
        <Navbar.Toggle className="m-3" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavItem>
              <Link to="/" className="nav-link">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/askchef" className="nav-link">Ask Chef</Link>
            </NavItem>
            <NavItem>
              <Link to="/profile" className="nav-link">Profile</Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="nav-link">About</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
