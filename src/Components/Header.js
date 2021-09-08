import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';


class Header extends Component {
  render() {
    return (
      <Navbar style={{ fontSize: '1.5rem' }} expand="lg">
        <Navbar.Brand className="m-2" href="#">
          <span style={{ fontSize: '25px', fontWeight: 'bold' }}>IMAGE HERE</span>
        </Navbar.Brand>
        <Navbar.Toggle className="m-3" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav className="ml-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <NavItem>
              {this.props.auth0.isAuthenticated
                ? <LogoutButton />
                : <LoginButton />
              }
            </NavItem>
            <NavItem>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </NavItem>
            <NavItem>
              {this.props.auth0.isAuthenticated ? <Link to="/askchef" className="nav-link">Ask Chef</Link> : ''}
            </NavItem>
            <NavItem>
              {this.props.auth0.isAuthenticated ? <Link to="/profile">Profile</Link> : ''}
            </NavItem>
            <NavItem>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withAuth0(Header);
