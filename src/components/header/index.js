import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'gatsby-link';

import './_header.scss';

const HEADER_ITEMS = [
  {
    text: 'ARCHIVES',
    path: '/archive',
  },
  {
    text: 'ÉVÈNEMENTS',
    path: '/events',
  },
  {
    text: 'À PROPOS',
    path: '/about',
  },
];

const Header = () => (
  <header className="header font-secondary">
    <Navbar bg="light" expand="md">
      <Navbar.Brand id="sitename" href="/">FIGURE FIGURE</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarToggler" />

      <Navbar.Collapse id="navbarToggler">
        <ul className="navbar-nav nav-fill w-100">
          {HEADER_ITEMS.map((item, i) => (
            <li className="nav-item" key={`nav-item-${i}`}>
              <Link className="nav-link" to={item.path}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </Navbar.Collapse>
    </Navbar>
  </header>
);

export default Header;
