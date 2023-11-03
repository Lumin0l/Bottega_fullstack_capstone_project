import React from 'react';
import { Nav, Navbar as BootstrapNavbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';
import SearchBar from './SearchBar';
import logo from '../../assets/images/monaVina-logo.png';

const Navbar = () => {
  return (
    <BootstrapNavbar className="navbar" variant="dark">
      <Nav className="left-links">
        <Link to="/about">About</Link>
        <Link to="/quizzes">Quizzes</Link>
        <Link to="/contact">Contact</Link>
      </Nav>
      <Nav className="logo">
        <Link to="/"><img src={logo} alt="MonaVina Logo" /></Link>
      </Nav>
      <Nav className="right-links">
        <NavDropdown title="Blog" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/category1">
            Category 1
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/category2">
            Category 2
          </NavDropdown.Item>
          {/* Add more categories as needed */}
        </NavDropdown>
        <SearchBar />
      </Nav>
    </BootstrapNavbar>
  );
};

export default Navbar;


